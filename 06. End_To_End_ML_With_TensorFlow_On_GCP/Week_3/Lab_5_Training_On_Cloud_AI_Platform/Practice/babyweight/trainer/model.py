import shutil
import numpy as np
import tensorflow as tf

tf.logging.set_verbosity(tf.logging.INFO)

DATA_PATH = None # Set from task.py file
PATTERN = 'of' # gets all files

# Determine CSV, Labels & key column
CSV_COLUMNS = 'weight_pounds,is_male,mother_age,plurality,gestation_weeks,key'.split(',')
LABEL_COLUMN = 'weight_pounds'
KEY_COLUMN = 'key'

# Set defaults value for each CSV columns
DEFAULTS = [[0.0], ['null'], [0.0], ['null'], [0.0], ['nokey']]

# Define some hyper parameter
TRAIN_STEPS = 10000
EVAL_STEPS = None
BATCH_SIZE = 512
NEMBEDS = 3
NN_SIZE = [64, 16, 4]

# Create an input function reading a file using the Dataset API
# Then provide the results to the Estimator API
def read_dataset(prefix, mode, batch_size):
    """
    """
    def _input_fn():
        """
        """
        def decode_csv(value_column):
            """
            """
            columns = tf.decode_csv(records=value_column, record_defaults=DEFAULTS)
            features = dict(zip(CSV_COLUMNS, columns))
            label = features.pop(LABEL_COLUMN)
            return features, label
        
        # Use prefix to create file path
        file_path = '{}/babyweight/preproc/{}/{}'.format(DATA_PATH, prefix, PATTERN)
        
        # Create list of files, that matches pattern.
        file_list = tf.gfile.Glob(file_path)
        
        # Create dataset from file list
        dataset = (tf.data.TextLineDataset(filenames=file_list) # Read text file
                   .map(decode_csv)) # Transform each element by applying decode_csv
        
        if mode == tf.estimator.ModeKeys.TRAIN:
            num_epochs = None # Run Indefinietly
            dataset = dataset.shuffle(buffer_size=10*batch_size)
        else:
            num_epochs = 1 # end-of-input after this
        
        dataset = dataset.repeat(num_epochs).batch(batch_size)
        return dataset.make_one_shot_iterator().get_next()
    return _input_fn

# Define features column
def get_wide_deep():
    """
    """
    # Define column type
    is_male,mother_age,plurality,gestation_weeks= \
    [\
     tf.feature_column.categorical_column_with_vocabulary_list(
        key='is_male',
        vocabulary_list=['True', 'False', 'Unknown']
    ),
     tf.feature_column.numeric_column('mother_age'),
     tf.feature_column.categorical_column_with_vocabulary_list(
         key='plurality',
         vocabulary_list=['Single(1)', 'Twins(2)', 'Triplets(3)',
                         'Quadruplets(4)', 'Quintuplets(5)','Multiple(2+)']
     ),
     tf.feature_column.numeric_column('gestation_weeks')
    ]
    
    # Discretize the age & gestation weeks column. This will convert those two
    # column from being deep to wide column.
    age_buckets = tf.feature_column.bucketized_column(
        source_column=mother_age,
        boundaries=np.arange(start=15, stop=45, step=1).tolist()
    )
    gestation_buckets = tf.feature_column.bucketized_column(
        source_column=gestation_weeks,
        boundaries=np.arange(start=17, stop=47, step=1).tolist()
    )
    
    # Sparse columns are wide, have a linear relationship with the output
    wide = [
        is_male,
        plurality,
        age_buckets,
        gestation_buckets
    ]
    
    # Feature cross all the wide column and embed into lower dimension.
    crossed = tf.feature_column.crossed_column(
        keys=wide,
        hash_bucket_size=20000
    )
    embed = tf.feature_column.embedding_column(
        categorical_column=crossed,
        dimension=NEMBEDS
    )
    
    # Continous columns are deep and have a complex relationship with the output.
    deep = [
        mother_age,
        gestation_weeks,
        embed
    ]
    
    return wide, deep

# Create serving input function to serve prediction later
def serving_input_fn():
    """
    """
    feature_placeholders = {
        'is_male': tf.placeholder(dtype=tf.string, shape=[None]),
        'mother_age': tf.placeholder(dtype=tf.float32, shape=[None]),
        'plurality': tf.placeholder(dtype=tf.string, shape=[None]),
        'gestation_weeks': tf.placeholder(dtype=tf.float32, shape=[None]),
        KEY_COLUMN: tf.placeholder_with_default(input=tf.constant(['nokey']), shape=[None])
    }
    
    features = {
        key: tf.expand_dims(input=tensor, axis=-1)
        for key, tensor in feature_placeholders.items()
    }
    
    return tf.estimator.export.ServingInputReceiver(
        features=features,
        receiver_tensors=feature_placeholders
    )

# Create metric for hyper parameter tunning
def my_rmse(labels, predictions):
    """
    """
    pred_values = predictions['predictions']
    return {
        'rmse': tf.metrics.root_mean_squared_error(
            labels=labels,
            predictions=pred_values
        )
    }

# Create estimator to train and evaluate
def train_and_evaluate(output_dir):
    """
    """
    # Ensure Filewriter Cache is clear for Tensorboard events file.
    tf.summary.FileWriterCache.clear()
    wide, deep = get_wide_deep()
    EVAL_INTERVAl = 300 # Seconds
    
    run_config = tf.estimator.RunConfig(
        save_checkpoints_secs=EVAL_INTERVAl,
        keep_checkpoint_max=3
    )
    
    estimator = tf.estimator.DNNLinearCombinedRegressor(
        model_dir=output_dir,
        linear_feature_columns=wide,
        dnn_feature_columns=deep,
        dnn_hidden_units=NN_SIZE,
        config=run_config
    )
    
    # Attach custom metric to the estimator.
    estimator = tf.contrib.estimator.add_metrics(
        estimator=estimator, 
        metric_fn=my_rmse
    )
    
    # For batch prediction, you need a key associated with each instances
    estimator = tf.contrib.estimator.forward_features(
        estimator=estimator,
        keys=KEY_COLUMN
    )
    
    train_spec = tf.estimator.TrainSpec(
        input_fn = read_dataset('train',tf.estimator.ModeKeys.TRAIN, BATCH_SIZE),
        max_steps = TRAIN_STEPS
    )
    
    exporter = tf.estimator.LatestExporter(
        name='exporter',
        serving_input_receiver_fn=serving_input_fn,
        exports_to_keep=None
    )
    
    eval_spec = tf.estimator.EvalSpec(
        input_fn=read_dataset('eval', tf.estimator.ModeKeys.EVAL, 2**15), # No need to batch in eval
        steps = EVAL_STEPS,
        start_delay_secs=60, # Start evaluating after N seconds
        throttle_secs=EVAL_INTERVAl, # Evaluate every N seconds
        exporters=exporter
    )
    
    tf.estimator.train_and_evaluate(estimator, train_spec, eval_spec)
