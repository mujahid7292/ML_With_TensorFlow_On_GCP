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

import tensorflow as tf
import numpy as np
import shutil

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
    tf.feature_column.categorical_column_with_vocabulary_list('dayofweek', vocabulary_list=['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat']),
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
    latbuckets = np.linspace(38.0 ,42.0 , nbuckets).tolist()
    lonbuckets = np.linspace(-76.0, -72.0, nbuckets).tolist()
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

    estimator = tf.estimator.DNNLinearCombinedRegressor(
        model_dir=model_dir,
        linear_feature_columns=wide_columns,
        dnn_feature_columns=deep_columns,
        dnn_hidden_units=hidden_units,
        config=run_config
    )

    # Add extra evaluation metric for hyper parameter tunning
    #estimator = tf.contrib.estimator.add_metrics(estimator, add_eval_metrics)
    return estimator

# Create a feature engineering function that will be used in the input and the serving input
# functions
def add_engineered(features):
    """
    With this function we will do feature
    engineering in tensorflow.
    """
    lat1 = features['pickuplat']
    lat2 = features['dropofflat']
    lon1 = features['pickuplon']
    lon2 = features['dropofflon']
    latdiff = lat1 - lat2
    londiff = lon1 - lon2

    # Set features for distance with sign that indicates direction
    features['latdiff'] = latdiff
    features['londiff'] = londiff
    dist = tf.sqrt(latdiff * latdiff + londiff * londiff)
    features['euclidean'] = dist

    return features

# Create your serving input function so that your trained model will be able to serve predictions
def serving_input_fn():
    feature_placeholders = {
        # All the real-valued column (pickuplon,pickuplat,dropofflon,dropofflat,passengers)
        column.name: tf.placeholder(tf.float32, [None]) for column in INPUT_COLUMNS[2:7]
    }
    feature_placeholders['dayofweek'] = tf.placeholder(tf.string, [None])
    feature_placeholders['hourofday'] = tf.placeholder(tf.int32, [None])

    features = add_engineered(feature_placeholders.copy())

    return tf.estimator.export.ServingInputReceiver(features, feature_placeholders)

# Create an input function that stores your data into a dataset
def read_dataset(filename, mode, batch_size = 512):
    def _input_fn():
        def decode_csv(value_column):
            columns = tf.decode_csv(value_column, record_defaults = DEFAULTS)
            features = dict(zip(CSV_COLUMNS, columns))
            label = features.pop(LABEL_COLUMN)
            return add_engineered(features), label
    
        # Create list of files that match pattern
        file_list = tf.gfile.Glob(filename)

        # Create dataset from file list
        dataset = tf.data.TextLineDataset(file_list).map(decode_csv)
        
        if mode == tf.estimator.ModeKeys.TRAIN:
            num_epochs = None # indefinitely
            dataset = dataset.shuffle(buffer_size = 10 * batch_size)
        else:
            num_epochs = 1 # end-of-input after this

        dataset = dataset.repeat(num_epochs).batch(batch_size)
        batch_features, batch_labels = dataset.make_one_shot_iterator().get_next()
        return batch_features, batch_labels
    return _input_fn

# Create an estimator that we are going to train and evaluate
def train_and_evaluate(args):
    tf.summary.FileWriterCache.clear() 
    estimator = build_estimator(
        model_dir=args['output_dir'],
        nbuckets=args['nbuckets'], 
        hidden_units=args['hidden_units']
        )
    train_spec = tf.estimator.TrainSpec(
        input_fn = read_dataset(args['train_data_paths'],
                                batch_size = args['train_batch_size'],
                                mode = tf.estimator.ModeKeys.TRAIN),
        max_steps = args['train_steps']
        )
    exporter = tf.estimator.LatestExporter('exporter', serving_input_fn)
    eval_spec = tf.estimator.EvalSpec(
        input_fn = read_dataset(args['eval_data_paths'],
                                batch_size = 10000,
                                mode = tf.estimator.ModeKeys.EVAL
                                ),
        steps = 100,
        exporters = exporter
        )
    tf.estimator.train_and_evaluate(estimator, train_spec, eval_spec)

def add_eval_metrics(labels, predictions):
    """
    """ 
    pred_values = predictions['predictions']
    return {
        'rmse': tf.metrics.RootMeanSquaredError(labels, pred_values)
    }




