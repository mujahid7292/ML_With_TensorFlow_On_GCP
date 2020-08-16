from __future__ import absolute_import
from __future__ import division
from __future__ import print_function

import tensorflow as tf

tf.compat.v1.logging.set_verbosity(
    tf.compat.v1.logging.INFO
)

LIST_OF_LABELS = 'daisy,dandelion,roses,sunflowers,tulips'.split(',')
IMG_HEIGHT = 224
IMG_WIDTH = 224
NUM_CHANNELS = 3
NCLASSES = 5

# Build Keras model using Keras Sequential API
def linear_model(hparams):
    model = tf.keras.models.Sequential()
    model.add(tf.keras.layers.InputLayer(
        input_shape=[IMG_HEIGHT, IMG_WIDTH, NUM_CHANNELS],
        name="image"
    ))
    model.add(tf.keras.layers.Flatten())
    model.add(tf.keras.layers.Dense(
        units=NCLASSES,
        activation=tf.nn.softmax,
        name="probabilities"
    ))
    return model

def dnn_model(hparams):
    model = tf.keras.models.Sequential()
    model.add(tf.keras.layers.InputLayer(
        input_shape=[IMG_HEIGHT, IMG_WIDTH, NUM_CHANNELS],
        name="image"
    ))
    model.add(tf.keras.layers.Flatten())
    model.add(tf.keras.layers.Dense(
        units=300,
        activation=tf.nn.relu
    ))
    model.add(tf.keras.layers.Dense(
        units=100,
        activation=tf.nn.relu
    ))
    model.add(tf.keras.layers.Dense(
        units=30,
        activation=tf.nn.relu
    ))
    model.add(tf.keras.layers.Dense(
        units=NCLASSES,
        activation=tf.nn.softmax,
        name="probabilities"
    ))
    return model

def dnn_dropout_model(hparams):
    dprob = hparams.get("dprob", 0.10)
    
    model = tf.keras.models.Sequential()
    model.add(tf.keras.layers.InputLayer(
        input_shape=[IMG_HEIGHT, IMG_WIDTH, NUM_CHANNELS],
        name="image"
    ))
    model.add(tf.keras.layers.Flatten())
    model.add(tf.keras.layers.Dense(
        units=300,
        activation=tf.nn.relu
    ))
    model.add(tf.keras.layers.Dense(
        units=100,
        activation=tf.nn.relu
    ))
    model.add(tf.keras.layers.Dense(
        units=30,
        activation=tf.nn.relu
    ))
    model.add(tf.keras.layers.Dropout(
        rate=dprob
    ))
    model.add(tf.keras.layers.Dense(
        units=NCLASSES,
        activation=tf.nn.softmax,
        name="probabilities"
    ))
    return model

def cnn_model(hparams):
    ksize1 = hparams.get("ksize1", 5)
    ksize2 = hparams.get("ksize2", 5)
    nfil1 = hparams.get("nfil1", 10)
    nfil2 = hparams.get("nfil2", 20)
    dprob = hparams.get("dprob", 0.25)
    
    model = tf.keras.models.Sequential()
    model.add(tf.keras.layers.InputLayer(
        input_shape=[IMG_HEIGHT, IMG_WIDTH, NUM_CHANNELS],
        name="image"
    )) # Shape = (?, 224, 224, 3)
    model.add(tf.keras.layers.Conv2D(
        filters=nfil1,
        kernel_size=ksize1,
        padding='same',
        activation=tf.nn.relu
    )) # Shape = (?, 224, 224, nfil1)
    model.add(tf.keras.layers.MaxPooling2D(
        pool_size=2,
        strides=2
    )) # Shape = (?, 112, 112, nfil1)
    model.add(tf.keras.layers.Conv2D(
        filters=nfil2,
        kernel_size=ksize2,
        padding='same',
        activation=tf.nn.relu
    )) # Shape = (?, 112, 112, nfil2)
    model.add(tf.keras.layers.MaxPooling2D(
        pool_size=2,
        strides=2
    )) # Shape = (?, 56, 56, nfil2)
    model.add(tf.keras.layers.Flatten())
    
    # Apply batch normalization.
    if hparams["batch_norm"]:
        model.add(tf.keras.layers.Dense(
            units=300,
            activation=tf.nn.relu
        ))
        model.add(tf.keras.layers.BatchNormalization())
        model.add(tf.keras.layers.Activation(
            activation=tf.nn.relu
        ))
    else:
        model.add(tf.keras.layers.Dense(
            units=300,
            activation=tf.nn.relu
        ))
    
    # Apply Dropout
    model.add(tf.keras.layers.Dropout(
        rate=dprob
    ))
    
    model.add(tf.keras.layers.Dense(
        units=NCLASSES,
        activation=None
    ))
    
    # Apply Batch Normalization once more.
    if hparams["batch_norm"]:
        model.add(tf.keras.layers.BatchNormalization())
    
    # SoftMax Layer.
    model.add(tf.keras.layers.Dense(
        units=NCLASSES,
        activation=tf.nn.softmax,
        name="probabilities"
    ))
    
    return model

MAX_DELTA = 63.0 / 255.0 # Change brightness by at most 17.7%
CONTRAST_LOWER = 0.2
CONTRAST_UPPER = 1.8

def read_and_preprocess(image_bytes, label=None, augment=False):
    # Convert the compressed string to a 3D uint8 tensor.
    img = tf.image.decode_jpeg(
        contents=image_bytes,
        channels=NUM_CHANNELS
    )
    # Use 'convert_image_dtype' to converts to floats in the 
    # [0,1] range.
    img = tf.image.convert_image_dtype(
        image=img,
        dtype=tf.float32
    )
    # Resize the image to a desired size.
    img = tf.image.resize(
        images=img,
        size=[IMG_HEIGHT + 10, IMG_WIDTH + 10],
    )
    
    if augment:
        img = tf.image.random_crop(
            value=img,
            size=[IMG_HEIGHT, IMG_WIDTH, NUM_CHANNELS]
        )
        img = tf.image.random_flip_left_right(
            image=img
        )
        img = tf.image.random_brightness(
            image=img,
            max_delta=MAX_DELTA
        )
        img = tf.image.random_contrast(
            image=img,
            lower=CONTRAST_LOWER,
            upper=CONTRAST_UPPER
        )
    
    return img, label

def read_and_preprocess_with_augment(image_bytes, label=None):
    return read_and_preprocess(
        image_bytes=image_bytes,
        label=label,
        augment=True
    )

# Create Serving input function for inference.
def serving_input_fn():
    feature_placeholders = {
        "image_bytes":tf.compat.v1.placeholder(
            dtype=tf.string,
            shape=[]
        )
    }
    img = read_and_preprocess(
        image_bytes=feature_placeholders["image_bytes"]
    )
    return tf.estimator.export.ServingInputReceiver(
        features=img,
        receiver_tensors=feature_placeholders,
    )

def make_input_fn(csv_of_filenames, batch_size, training=True, augment=False):
    def _input_fn():
        def decode_csv(csv_row):
            record_defaults = ["path", "flowers"]
            filename, label_string = tf.io.decode_csv(
                records=csv_row,
                record_defaults=record_defaults
            )
            image_bytes = tf.io.read_file(
                filename=filename
            )
            label = tf.math.equal(LIST_OF_LABELS, label_string)
            return image_bytes, label
        
        # Create tf.data.dataset from filename
        dataset = tf.data.TextLineDataset(
            filenames=csv_of_filenames
        ).map(decode_csv)
        
        if augment:
            dataset = dataset.map(read_and_preprocess_with_augment)
        else:
            dataset = dataset.map(read_and_preprocess)
            
        if training:
            num_epochs = None # Indefinately
            dataset = dataset.shuffle(
                buffer_size = 10 * batch_size
            ) 
        else:
            num_epochs=1 # Each photo used once
            
        dataset = dataset.repeat(
            count=num_epochs
        ).batch(batch_size=batch_size)
        
        #return dataset.make_one_shot_iterator().get_next()
        return tf.compat.v1.data.make_one_shot_iterator(dataset) \
                .get_next()
    return _input_fn

# Wrapper function to build selected Keras model type.
def image_classifier(hparams):
    model_functions = {
        "linear": linear_model,
        "dnn": dnn_model,
        "dnn_dropout":dnn_dropout_model,
        "cnn":cnn_model
    }
    
    # Get function pointer for selected model type
    model_function = model_functions[hparams["model"]]
    
    # Build selected Keras model.
    model = model_function(hparams)
    
    return model

# Create train_and_evaluate function.
def train_and_evaluate(output_dir, hparams):
    # Ensure filewriter cache is clear for TensorBoard event file.
    tf.compat.v1.summary.FileWriterCache.clear()
    
    EVAL_INTERVAL = 60
    
    # Build Keras model.
    model = image_classifier(hparams)
    
    # Compile Keras model with Optimizer, Loss Function
    # and eval metric.
    model.compile(
        optimizer="adam",
        loss="categorical_crossentropy",
        metrics=["accuracy"]
    )
    
    # Convert keras model to estimator.
    estimator = tf.keras.estimator.model_to_estimator(
        keras_model=model,
        model_dir=output_dir,
        config=tf.estimator.RunConfig(
            save_checkpoints_secs=EVAL_INTERVAL
        )
    )
    
    # Set estimator train_spec
    train_spec = tf.estimator.TrainSpec(
        input_fn=make_input_fn(
            csv_of_filenames=hparams['train_data_path'],
            batch_size=hparams['batch_size'],
            training=True,
            augment=hparams['augment']
        ),
        max_steps=hparams['train_steps']
    )
    
    # Create exporter that use serving_input_fn() to
    # create saved_model for serving.
    exporter = tf.estimator.LatestExporter(
        name="exporter",
        serving_input_receiver_fn=serving_input_fn,
    )
    
    # Set estimators eval_spec.
    eval_spec = tf.estimator.EvalSpec(
        input_fn=make_input_fn(
            csv_of_filenames=hparams['eval_data_path'],
            batch_size=hparams['batch_size'],
            training=False
        ),
        steps=None,
        exporters=exporter,
        throttle_secs=EVAL_INTERVAL
    )
    
    # Run train_and_evaluate
    tf.estimator.train_and_evaluate(
        estimator=estimator, 
        train_spec=train_spec, 
        eval_spec=eval_spec
    )
