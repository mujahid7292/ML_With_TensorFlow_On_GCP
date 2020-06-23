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
    
    parser.add_argument(
        "--job-dir",
        help = "this model ignores this field, but it is required by gcloud",
        default = "junk"
    )
    
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
    
    # Run the training job
    model.train_and_evaluate(output_dir, hparams)
