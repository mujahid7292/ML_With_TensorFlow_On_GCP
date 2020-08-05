import argparse
import json
import os
import sys

from . import model

def _parse_arguments(argv):
    """
    Parse command line arguments
    """
    parser = argparse.ArgumentParser()
    
    parser.add_argument(
        '--model_type',
        help="Which model type to use.",
        type=str,
        default='cnn'
    )
    
    parser.add_argument(
        '--epochs',
        help='The number of epochs to train.',
        type=int,
        default=10
    )
    
    parser.add_argument(
        '--steps_per_epoch',
        help='The number of steps per epoch to train.',
        type=int,
        default=100
    )
    
    parser.add_argument(
        '--job-dir',
        help="Directory where to save the model.",
        type=str,
        default='mnistmodel_keras_only/'
    )
    
    return parser.parse_known_args(argv)

def main():
    """
    Parse command line arguments and kicks off model training.
    """
    args = _parse_arguments(sys.argv[1:])[0]
    
    model_layers = model.get_layers(args.model_type)
    
    image_model = model.build_model(model_layers, args.job_dir)
    
    model_history = model.train_and_evaluate(
        image_model, args.epochs, args.steps_per_epoch, args.job_dir
    )
    
if __name__ == '__main__':
    main()
