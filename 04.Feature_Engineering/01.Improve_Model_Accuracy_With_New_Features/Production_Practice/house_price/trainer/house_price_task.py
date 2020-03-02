import argparse
import json
import os

from .import house_price_model

if __name__ == '__main__':
    # Create a new Argument Parser Object
    parser = argparse.ArgumentParser()
    # Input Arguments
    # Training Data Path
    parser.add_argument(
        '--train_data_paths',
        help = "GCS or local path for training data",
        required = True
    )
    
    # Training Batch Size
    parser.add_argument(
        '--train_batch_size', 
        default=512, 
        type=int, 
        help="Batch Size For Training Step")

    # Number Of Training Steps
    parser.add_argument(
        '--train_steps',
        type=int,
        help="Number of steps, training job will run"
    )

    # Evaluation Data Path
    parser.add_argument(
        '--eval_data_paths',
        required=True,
        help="GCS or local path to evaluation data"
    )

    # Evaluation Steps
    parser.add_argument(
        '--eval_steps',
        default=10,
        type=int,
        help="Number Of Steps To Run Evaluation For At Each Check Point"
    )

    # Evaluation Delay Seconds For First Time
    parser.add_argument(
        '--eval_delay_secs',
        default=10,
        type=int,
        help="How Long To Wait, Before Running First Evaluation"
    )

    # Evaluation Delay Seconds After First Time
    parser.add_argument(
        '--throttle_secs',
        default=300,
        type=int,
        help="Seconds Between Evaluations"
    )

    # Model Directory
    parser.add_argument(
        '--output_dir',
        required=True,
        help="GCS Locations for writing check points and export models"
    )

    # Job Directory
    parser.add_argument(
        '--job_dir',
        default='junk',
        help="This model ignore this field, but it is required by Gcloud"
    )

    # Now we will parse all our above arguments
    args = parser.parse_args()

    # Now we will put those args into a dictionary
    arguments = args.__dict__

    # Now we will pop up unused arguments
    arguments.pop('job_dir', None) # This two are different
    arguments.pop('job-dir', None) # This two are different

    output_dir = arguments['output_dir']
    # Append trial_id to path if you are doing hyper parameter tunning
    # This code can be removed if you are not using hyper parameter tunning
    output_dir = os.path.join(
        output_dir,
        json.loads(
            os.environ.get('TF_CONFIG', '{}')
        ).get('task', {}).get('trail', '')
    )

    # Run the training job
    house_price_model.train_and_evaluate(arguments)