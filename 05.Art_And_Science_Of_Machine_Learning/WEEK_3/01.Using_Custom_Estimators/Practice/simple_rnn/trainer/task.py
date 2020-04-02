
"""
Example implementation of code to run on the Cloud ML service
"""

import traceback
import argparse
import json
import os

from .import model

import shutil
import tensorflow as tf

if __name__ == '__main__':
    
    # Create object of ArgumentParser class
    parser = argparse.ArgumentParser()
    
    # Input arguments
    parser.add_argument(
        '--train_data_paths',
        help = 'GCS or local path to training data',
        required=True
    )
    
    parser.add_argument(
        '--eval_data_paths',
        help = 'GCS or local path to evaluation data',
        required=True
    )
    
    parser.add_argument(
        '--output_dir',
        help = 'GCS location to write checkpoints and export models',
        required=True
    )
    
    parser.add_argument(
        '--job-dir',
        help = 'This model ignore this field, but it is required by gcloud',
        default='junk'
    )
    
    parser.add_argument(
        '--keras',
        help = 'Use the keras variant',
        action = 'store_true'
    )
    
    # Eval arguments
    parser.add_argument(
        '--eval_delay_secs',
        help = 'How long to wait before running first evaluation',
        default = 10,
        type = int
    )
    
    parser.add_argument(
        '--min_eval_frequency',
        help = 'Minimum number of training steps between evaluations',
        default = 1,
        type = int
    )
    
    # Now parse those above arguments
    args = parser.parse_args()
    arguments = args.__dict__
    
    # Unused args provided by service
    arguments.pop('job_dir', None)
    arguments.pop('job-dir', None)
    
    output_dir = arguments.pop('output_dir')

    # Append trial_id to path if we are doing hptuning
    # This code can be removed if you are not using hyperparameter tuning
    output_dir = os.path.join(
        output_dir,
        json.loads(
            os.environ.get('TF_CONFIG', '{}')
        ).get('task', {}).get('trial', '')
    )

    # Run the training job
    try:
        shutil.rmtree(output_dir, ignore_errors = True) # start fresh each time
        model.train_and_evaluate(output_dir, arguments['keras'])
    except:
        traceback.print_exc()
