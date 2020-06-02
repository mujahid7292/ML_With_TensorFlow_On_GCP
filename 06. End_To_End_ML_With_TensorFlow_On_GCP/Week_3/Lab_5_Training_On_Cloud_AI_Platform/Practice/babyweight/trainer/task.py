import argparse
import json
import os

from . import model
import tensorflow as tf

if __name__ == '__main__':
    # Create an argument parser object
    parser = argparse.ArgumentParser()
    
    # Now add our arguments one by one
    parser.add_argument(
        '--data_path',
        help = "GCS or Local path to training & evaluation data.",
        required = True
    )
    
    parser.add_argument(
        '--output_dir',
        help = "GCS or Local location to write checkpoints and export models",
        required = True
    )
    
    parser.add_argument(
        '--batch_size',
        help = "Number of examples to compute gradient over",
        type = int,
        default = 512
    )
    
    parser.add_argument(
        '--job-dir',
        help = "This model ignore this field, but it is required by gcloud",
        default = "junk"
    )
    
    parser.add_argument(
        '--nn_size',
        help = "Hidden layer size for DNN",
        nargs='+',
        type = int,
        default=[128,32,4]
    )
    
    parser.add_argument(
        '--nembeds',
        help = "Embedding size of a cross of n key. Real valued parameters",
        type = int,
        default = 3
    )
    
    parser.add_argument(
        '--train_examples',
        help = "Number of examples (In thousands) to run the training job over. If this is more than actual # of examples available, it cycles through them. So specifying 1000 here when you have only 100k examples makes this 10 epochs.",
        type = int,
        default = 5000
    )
    
    parser.add_argument(
        '--pattern',
        help = "Specify a pattern that has to be in a input files. For example 00001-of will process only one shard.",
        default = "of"
    )
    
    parser.add_argument(
        '--eval_steps',
        help = "Positive number of steps for which to evaluate model. Default to None, which means to evaluate untill input_fn raises an end-of-input exception",
        type = int,
        default = None
    )
    
    ## Parse all arguments
    args = parser.parse_args()
    arguments = args.__dict__
    
    ## Unused args provided by service
    arguments.pop('job-dir', None)
    arguments.pop('job_dir', None)
    
    ## Assign the arguments to the model variable
    output_dir = arguments.pop('output_dir')
    model.DATA_PATH = arguments.pop('data_path')
    model.BATCH_SIZE = arguments.pop('batch_size')
    model.TRAIN_STEPS = (arguments.pop('train_examples') * 1000) / model.BATCH_SIZE
    model.EVAL_STEPS = arguments.pop('eval_steps')
    print("We will train for {} steps using batch size {}".format(model.TRAIN_STEPS, model.BATCH_SIZE))
    model.PATTERN = arguments.pop('pattern')
    model.NEMBEDS = arguments.pop('nembeds')
    model.NN_SIZE = arguments.pop('nn_size')
    print("We will use DNN size of {}".format(model.NN_SIZE))
    
    
    ## Append trail id to path if we are doing Hyperparameter Tunning
    ## This code can be removed if you are not doing Hyperparameter Tunning
    output_dir = os.path.join(
        output_dir,
        json.loads(
            os.environ.get('TF_CONFIG', '{}')
        ).get('task', {}).get('trail', '')
    )
    
    ## Run the training job
    model.train_and_evaluate(output_dir)
