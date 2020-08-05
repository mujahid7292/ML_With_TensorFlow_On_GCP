import argparse
import json
import os

from .import model
import tensorflow as tf

if __name__ == '__main__':
    # Create a parser object
    parser = argparse.ArgumentParser()
    
    # Input argument in the parser object
    parser.add_argument(
        "--train_batch_size",
        help="Batch size for training",
        type = int,
        default=100
    )
    
    parser.add_argument(
        "--learning_rate",
        help="Initial Learning Rate For Training",
        type=float,
        default=0.01
    )
    
    parser.add_argument(
        "--train_steps",
        help="Steps to run the training jobs for",
        type=int,
        default=0
    )
    
    parser.add_argument(
        "--output_dir",
        help="Local Or GCS location to write checkpoint and export model",
        required=True
    )
    
    # Generate List of models to print in help message
    model_names = [name.replace("_model","") for name in dir(model) if name.endswith("_model")]
    
    parser.add_argument(
        '--model',
        help="Type of model. Supported types are {}".format(model_names),
        default='cnn'
    )
    
    parser.add_argument(
        "--job-dir",
        help = "this model ignores this field, but it is required by gcloud",
        default = "junk"
    )
    
    # Optional Hyperparameters used by cnn
    parser.add_argument(
        '--ksize1',
        help = "Kernel size of the first layer of the cnn",
        type=int,
        default=5
    )
    
    parser.add_argument(
        '--ksize2',
        help = "Kernel size of the second layer of the cnn",
        type=int,
        default=5
    )
    
    parser.add_argument(
        '--nfil1',
        help = "Number of filters in the first layer of the cnn",
        type=int,
        default=10
    )
    
    parser.add_argument(
        '--nfil2',
        help = "Number of filters in the second layer of the cnn",
        type=int,
        default=20
    )
    
    parser.add_argument(
        '--dprob',
        help ='Drop out probability for cnn',
        type = float,
        default=0.25
    )
    
    parser.add_argument(
        '--batch_norm',
        help = "If specified, do batch_norm for cnn",
        dest = "batch_norm",
        action = "store_true"
    )
    parser.set_defaults(batch_norm = False)
    
    args = parser.parse_args()
    hparams = args.__dict__

    # unused args provided by service
    hparams.pop("job_dir", None)
    hparams.pop("job-dir", None)

    output_dir = hparams.pop("output_dir")
    # Append trial_id to path so hptuning jobs don"t overwrite eachother
    output_dir = os.path.join(
        output_dir,
        json.loads(
            os.environ.get("TF_CONFIG", "{}")
        ).get("task", {}).get("trial", "")
    )
    
    # Calculate train_steps if not provided
    if hparams["train_steps"] < 1:
        # 10,000 steps with batch_size of 512
        hparams["train_steps"] = (10000 * 512) // hparams["train_batch_size"]
        print("Training for {} steps.".format(hparams["train_steps"]))
    
    # Run the training job
    model.train_and_evaluate(output_dir, hparams)
