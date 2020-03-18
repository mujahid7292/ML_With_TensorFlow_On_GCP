#!/usr/bin/env python

# Copyright 2017 Google Inc. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

from __future__ import absolute_import
from __future__ import division
from __future__ import print_function

import numpy as np
import os
import tensorflow as tf
from tensorflow_transform.saved import input_fn_maker, saved_transform_io
from tensorflow_transform.tf_metadata import metadata_io

tf.logging.set_verbosity(tf.logging.INFO)


# List the CSV columns
CSV_COLUMNS = 'fare_amount,dayofweek,hourofday,pickuplon,pickuplat,dropofflon,dropofflat,passengers,key'.split(',')

#Choose which column is your label
LABEL_COLUMN = 'fare_amount'

# Specify which column contain unique key
KEY_FEATURE_COLUMN = 'key'

# Set the default values for each CSV column in case there is a missing value
DEFAULTS = [[0.0], ['Sun'], [0], [-74.0], [40.0], [-74.0], [40.7], [1.0], ['nokey']]

# These are the raw input columns, and will be provided for prediction also
INPUT_COLUMNS = [
    # Define Features
    tf.feature_column.categorical_column_with_vocabulary_list('dayofweek', num_buckets=100), # Some larger number
    tf.feature_column.categorical_column_with_identity('hourofday', num_buckets=24),

    # Define Numeric Column
    tf.feature_column.numeric_column('pickuplon'),
    tf.feature_column.numeric_column('pickuplat'),
    tf.feature_column.numeric_column('dropofflat'),
    tf.feature_column.numeric_column('dropofflon'),
    tf.feature_column.numeric_column('passengers'),

    # Engineered feature that are creatd in input_fn
    tf.feature_column.numeric_column('latdiff'),
    tf.feature_column.numeric_column('londiff'),
    tf.feature_column.numeric_column('euclidean')
]

# Build the estimator
def build_estimator(model_dir, nbuckets, hidden_units):
    """
    Build an estimator starting from INPUT_COLUMNS.
    These include feature transformations and synthetic
    features. The model is a wide-and-deep model.
    """

    # Input Columns
    (dayofweek, hourofday, plat, plon ,dlat, dlon, pcount, latdiff, londiff, euclidean) = INPUT_COLUMNS
    
    # Bucketize the lat and lon
    latbuckets = np.linspace(0 ,1.0 , nbuckets).tolist()
    lonbuckets = np.linspace(0, 1.0, nbuckets).tolist()
    b_plat = tf.feature_column.bucketized_column(plat, latbuckets)
    b_dlat = tf.feature_column.bucketized_column(dlat, latbuckets)
    b_plon = tf.feature_column.bucketized_column(plon, lonbuckets)
    b_dlon = tf.feature_column.bucketized_column(dlon, lonbuckets)

    # Feature Cross
    ploc = tf.feature_column.crossed_column([b_plat, b_plon], nbuckets * nbuckets)
    dloc = tf.feature_column.crossed_column([b_dlat, b_dlon], nbuckets * nbuckets)
    pd_pair = tf.feature_column.crossed_column([ploc, dloc], nbuckets ** 4)
    day_hr = tf.feature_column.crossed_column([dayofweek, hourofday], 24 * 7)

    # Wide and deep columns
    wide_columns = [

        # Feature crosses
        ploc, dloc, pd_pair,
        day_hr,

        # Sparse columns
        dayofweek, hourofday,

        # Anything with a linear relationship
        pcount
    ]

    deep_columns = [

        # Embedding column to group together
        tf.feature_column.embedding_column(pd_pair, 10),
        tf.feature_column.embedding_column(day_hr, 10),

        # Numeric columns
        plat, plon, dlat, dlon,
        latdiff, londiff, euclidean
    ]

    # Setting the check point enterval to be much lower for this task
    run_config = tf.estimator.RunConfig(
        save_checkpoints_secs=30,
        keep_checkpoint_max=3
    )

    return tf.estimator.DNNLinearCombinedRegressor(
        model_dir=model_dir,
        linear_feature_columns=wide_columns,
        dnn_feature_columns=deep_columns,
        dnn_hidden_units=hidden_units,
        config=run_config
    )

# Create your serving input function so that your trained model will be able to serve predictions
def make_serving_input_fn_for_base64_json(args):
    """
    """
    raw_metadata = metadata_io.read_metadata(
        os.path.join(args['metadata_path'], 'rawdata_metadata')
        )
    
    transform_savemodel_dir = (os.path.join(args['metadata_path'], 'transform_fn'))

    return input_fn_maker.build_parsing_transforming_serving_input_receiver_fn(
        raw_metadata, 
        transform_savemodel_dir,
        exclude_raw_keys=[LABEL_COLUMN])

def make_serving_input_fn(args):
    """
    """
    transform_savemodel_dir = (os.path.join(args['metadata_path'], 'transform_fn'))
    def _input_fn():
        """
        """
        # Place holder for all the raw input
        feature_placeholders = {
            column_name: tf.placeholder(tf.float32, [None]) for column_name in 'pickuplon,pickuplat,dropofflon,dropofflat'.split(',')
        }
        feature_placeholders['passengers'] = tf.placeholder(tf.int64, [None])
        feature_placeholders['dayofweek'] = tf.placeholder(tf.string, [None])
        feature_placeholders['hourofday'] = tf.placeholder(tf.int64, [None])
        feature_placeholders['key'] = tf.placeholder(tf.string, [None])

        # Transform using saved model `transform_fn`
        _, features = saved_transform_io.partially_apply_saved_transform(
            transform_savemodel_dir,
            feature_placeholders
            )
        return tf.estimator.export.ServingInputReceiver(features, feature_placeholders)
    return _input_fn

# Create an input function that stores your data into a dataset
def read_dataset(args, mode):
    """
    """
    batch_size = args['train_batch_size']

    if mode == tf.estimator.ModeKeys.TRAIN:
        input_paths = args['train_data_paths']
    else:
        input_paths = args['eval_data_paths']
    
    transformed_metadata = metadata_io.read_metadata(
        os.path.join(args['metadata_path']),
        'transformed_metadata'
        )
    
    return input_fn_maker.build_training_input_fn(
        metadata = transformed_metadata,
        file_pattern = (input_paths[0] if len(input_paths) == 1 else input_paths),
        training_batch_size = batch_size,
        label_keys=[LABEL_COLUMN],
        reader = gzip_reader_fn,
        key_feature_name = KEY_FEATURE_COLUMN,
        randomize_input = (mode != tf.estimator.ModeKeys.EVAL),
        num_epochs = (1 if mode == tf.estimator.ModeKeys.EVAL else None)
        )

# Create an estimator that we are going to train and evaluate
def train_and_evaluate(args):
    tf.summary.FileWriterCache.clear() # Ensure filewriter cache is clear for TensorBoard events file.
    estimator = build_estimator(
        model_dir=args['output_dir'],
        nbuckets=args['nbuckets'], 
        hidden_units=args['hidden_units'].split(' ')
        )
    train_spec = tf.estimator.TrainSpec(
        input_fn = read_dataset(args, tf.estimator.ModeKeys.TRAIN),
        max_steps = args['train_steps']
        )
    exporter = tf.estimator.LatestExporter('exporter', make_serving_input_fn)
    eval_spec = tf.estimator.EvalSpec(
        input_fn = read_dataset(args, tf.estimator.ModeKeys.TRAIN),
        steps = None,
        exporters = exporter
        )
    tf.estimator.train_and_evaluate(estimator, train_spec, eval_spec)
    
# If we want to use TFrecords instead of csv
def gzip_reader_fn():
    """
    """
    return tf.TFRecordReader(
        options=tf.python_io.TFRecordOptions(compression_type = tf.python_io.TFRecordCompressionType.GZIP)
        )



