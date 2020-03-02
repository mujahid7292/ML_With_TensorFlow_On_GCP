from __future__ import absolute_import
from __future__ import division
from __future__ import print_function

import tensorflow as tf
import numpy as np 
import shutil

tf.compat.v1.logging.set_verbosity(tf.compat.v1.logging.INFO)

# List The CSV Columns
CSV_COLUMNS = [
    'longitude',
    'latitude',
    'housing_median_age',
    'total_rooms',
    'total_bedrooms',
    'population',
    'households',
    'median_income',
    'median_house_value',
    'num_rooms',
    'num_bedrooms',
]

# Set The Target Column
LABEL_COLUMN = 'median_house_value'

# Set the defaults value for each CSV column in case there is a missing values
DEFAULTS = [
    [115.0],
    [33.0],
    [28.6],
    [2643.7],
    [539.4],
    [1429.6],
    [501.2],
    [3.9],
    [207300.9],
    [5.5],
    [1.1]
]

def read_dataset(fileName, mode, batch_size=512):
    def input_fn():
        def decode_csv(value_column):
            columns = tf.compat.v1.decode_csv(value_column, record_defaults=DEFAULTS)
            features = dict(zip(CSV_COLUMNS,columns))
            label = features.pop('median_house_value')
            # No need to pop below column from CSV file
            return features, label

        # Create list of file names that match "glob" pattern (i.e. data_file_*.csv)
        filenames_dataset = tf.data.Dataset.list_files(fileName)

        # Read lines from text files
        textlines_dataset = filenames_dataset.flat_map(tf.data.TextLineDataset)

        # Parse text lines as comma-separated values (CSV)
        dataset = textlines_dataset.map(decode_csv)

        if mode==tf.compat.v1.estimator.ModeKeys.TRAIN:
            num_epochs=None # Indefinietly
            dataset = dataset.shuffle(buffer_size=10*batch_size)
        else:
            num_epochs=1 # end-of-input after this
        
        dataset = dataset.repeat(num_epochs).batch(batch_size)

        return dataset

    return input_fn

# Define Our Features Columns
INPUT_COLUMNS=[
    # As california Latitude between 32 and 42, So
        tf.feature_column.bucketized_column(source_column=tf.feature_column.numeric_column("latitude"), boundaries=np.arange(32.0, 42, 1).tolist()),
        # As california Longitude between -124 and -114, So
        tf.feature_column.bucketized_column(source_column=tf.feature_column.numeric_column("longitude"), boundaries=np.arange(-124.0, -114, 1).tolist()),
        tf.feature_column.numeric_column("housing_median_age"),
        tf.feature_column.numeric_column("num_rooms"),
        tf.feature_column.numeric_column("num_bedrooms"),
        tf.feature_column.numeric_column("median_income")
]

# Create a function that will augment your feature set
def add_more_features(feats):
    # Nothing to add (yet!)
    return feats

feature_cols = add_more_features(INPUT_COLUMNS)

# Create your serving input function, so that your trained model will be able to serve prediction
def serving_input_fn():
    features_placeholders = {
        "latitude": tf.compat.v1.placeholder(tf.float32, [None]),
        "longitude":tf.compat.v1.placeholder(tf.float32, [None]),
        "housing_median_age":tf.compat.v1.placeholder(tf.float32, [None]),
        "num_rooms":tf.compat.v1.placeholder(tf.float32, [None]),
        "num_bedrooms":tf.compat.v1.placeholder(tf.float32, [None]),
        "median_income":tf.compat.v1.placeholder(tf.float32, [None])
    }

    features = features_placeholders

    return tf.compat.v1.estimator.export.ServingInputReceiver(features=features, receiver_tensors=features_placeholders)

# Create An Estimator That We are going to train and evaluate
def train_and_evaluate(args):
    # Ensure FileWrite Cache Is Clear For Tensorboard Events File
    tf.compat.v1.summary.FileWriterCache.clear()

    # Create A Linear Regressor Estimator
    estimator = tf.compat.v1.estimator.LinearRegressor(
        feature_columns=feature_cols,
        model_dir=args['output_dir'])

    # Create An Serving Exporter
    exporter = tf.compat.v1.estimator.LatestExporter(
            name='exporter',
            serving_input_receiver_fn=serving_input_fn
        )
    
    # Create A Train Spec
    train_spec = tf.compat.v1.estimator.TrainSpec(
        input_fn=read_dataset(
            fileName=args['train_data_paths'],
            mode=tf.compat.v1.estimator.ModeKeys.TRAIN,
            batch_size=args['train_batch_size']
        ),
        max_steps=args['train_steps'])

    # Create An Eval Spec
    eval_spec = tf.compat.v1.estimator.EvalSpec(
        input_fn=read_dataset(
            fileName=args['eval_data_paths'],
            mode=tf.compat.v1.estimator.ModeKeys.TRAIN,
            batch_size=100
        ),
        steps=None,
        start_delay_secs = args['eval_delay_secs'],
        throttle_secs = args['throttle_secs'],
        exporters = exporter
    )

    tf.compat.v1.estimator.train_and_evaluate(
            estimator=estimator,
            train_spec=train_spec,
            eval_spec=eval_spec
        )

    