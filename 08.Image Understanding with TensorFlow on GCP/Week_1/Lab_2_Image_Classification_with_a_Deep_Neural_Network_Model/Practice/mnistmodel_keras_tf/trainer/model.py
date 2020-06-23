from __future__ import absolute_import
from __future__ import division
from __future__ import print_function

import tensorflow as tf
tf.compat.v1.logging.set_verbosity(tf.compat.v1.logging.INFO)

HEIGHT=28
WIDTH=28
NCLASSES=10

# Build Keras model using Keras Sequential API
def dnn_model(hparams):
    model = tf.keras.models.Sequential()
    model.add(tf.keras.layers.InputLayer(input_shape=[HEIGHT, WIDTH, 1], name="image"))
    model.add(tf.keras.layers.Flatten())
    model.add(tf.keras.layers.Dense(units=300, activation=tf.nn.relu))
    model.add(tf.keras.layers.Dense(units=100, activation=tf.nn.relu))
    model.add(tf.keras.layers.Dense(units=30, activation=tf.nn.relu))
    model.add(tf.keras.layers.Dense(units=NCLASSES, activation=tf.nn.softmax, name='Probabilities'))
    return model

# Create serving input function for inference
def serving_input_fn():
    # Input will be rank 3
    feature_placeholders = {
        "image": tf.compat.v1.placeholder(dtype = tf.float32, shape=[None, HEIGHT, WIDTH])
    }
    # But model function require rank 4
    features = {
        "image": tf.expand_dims(input=feature_placeholders["image"], axis=-1)
    }
    return tf.estimator.export.ServingInputReceiver(
        features=features,
        receiver_tensors=feature_placeholders
    )

# Create train and evaluate function
def train_and_evaluate(ouput_dir, hparams):
    # Ensure filewriter cache is clear for TensorBoard event file.
    tf.compat.v1.summary.FileWriterCache.clear()
    
    EVAL_INTERVAL = 60
    
    # Get mnist Data
    mnist = tf.keras.datasets.mnist
    
    (x_train, y_train), (x_test, y_test) = mnist.load_data()
    
    # Scale our training and testing features between 0 and 1
    x_train, x_test = x_train / 255.0, x_test / 255.0
    
    # Reshape image to add a dimension for channels (1 in this case)
    x_train = x_train.reshape([-1, HEIGHT, WIDTH, 1])
    x_test = x_test.reshape([-1, HEIGHT, WIDTH, 1])
    
    # Convert labels to categorical one hot encoding
    y_train = tf.keras.utils.to_categorical(y=y_train, num_classes=NCLASSES)
    y_test = tf.keras.utils.to_categorical(y=y_test, num_classes=NCLASSES)
    
    # Create training input function
    train_input_fn = tf.compat.v1.estimator.inputs.numpy_input_fn(
        x={"image": x_train},
        y=y_train,
        batch_size=100,
        num_epochs=None,
        shuffle=True,
        queue_capacity=5000
    )
    
    # Create evaluation input function
    eval_input_fn = tf.compat.v1.estimator.inputs.numpy_input_fn(
        x={"image": x_test},
        y=y_test,
        batch_size=100,
        num_epochs=1,
        shuffle=False,
        queue_capacity=5000
    )
    
    # Build Keras model
    model = dnn_model(hparams=hparams)
    
    # Compile Keras model with optimizer, loss function and eval metric
    model.compile(
        optimizer='adam',
        loss='categorical_crossentropy',
        metrics=['accuracy']
    )
    
    # Convert Keras model to estimator
    estimator = tf.keras.estimator.model_to_estimator(
        keras_model=model,
        model_dir=ouput_dir,
        config=tf.estimator.RunConfig(save_checkpoints_secs=EVAL_INTERVAL)
    )
    
    # Set estimator's train_spec to use train_input_fn() and train for so many steps
    train_spec = tf.estimator.TrainSpec(
        input_fn=train_input_fn,
        max_steps=hparams['train_steps']
    )
    
    # Create exporter that use serving_input_fn() to create saved_model for serving
    exporter = tf.estimator.LatestExporter(
        name='exporter',
        serving_input_receiver_fn=serving_input_fn
    )
    
    # Set estimators eval_spec to use eval_input_fn() and export saved_model
    eval_spec = tf.estimator.EvalSpec(
        input_fn=eval_input_fn,
        steps=None,
        exporters=exporter,
        throttle_secs=EVAL_INTERVAL
    )
    
    # Run train_and_evaluate loop
    tf.estimator.train_and_evaluate(
        estimator=estimator,
        train_spec=train_spec,
        eval_spec=eval_spec
    )
