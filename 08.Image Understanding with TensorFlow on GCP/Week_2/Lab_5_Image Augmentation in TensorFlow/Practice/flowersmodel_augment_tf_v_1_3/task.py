import argparse
import json
import os

from . import model
import tensorflow as tf

if __name__=='__main__':
    parser = argparse.ArgumentParser()

    # Input Arguments
    parser.add_argument(
        '--batch_size',
        help="Batch size for training steps.",
        type=int,
        default=100
    )

    parser.add_argument(
        '--learning_rate',
        help="Initial learning rate for training.",
        type=float,
        default=0.01
    )

    parser.add_argument(
        '--train_steps',
        help="Steps to run the train jobs for. A step is one batch size.",
        type=int,
        default=100
    )

    parser.add_argument(
        '--output_dir',
        help="GCS location to write checkpoints and export model",
        required=True
    )

    parser.add_argument(
        '--train_data_path',
        help="Location of train file, which contain training image URL with appropriate label.",
        default="gs://cloud-ml-data/img/flower_photos/train_set.csv"
    )

    parser.add_argument(
        '--eval_data_path',
        help="Location of eval file, which contain evaluation image URL with appropriate label.",
        default="gs://cloud-ml-data/img/flower_photos/eval_set.csv"
    )

    # Build list model_fn's for help message.
    model_names = [name.replace("_model", "") for name in dir(model) if name.endswith('_model')]

    parser.add_argument(
        '--model',
        help="Type of model. Supported types are {}".format(model_names),
        required=True
    )

    parser.add_argument(
        '--job-dir',
        help="This model ignore this field, but it is required by gcloud.",
        default='junk'
    )

    parser.add_argument(
        '--augment',
        help="If specified augment image data.",
        dest='augment',
        action='store_true'
    )

    parser.set_defaults(augment=False)

    # Optional hyper parameter used by cnn.
    parser.add_argument(
        '--ksize1',
        help="Kernel size of the first layer of the cnn.",
        type=int,
        default=5
    )

    parser.add_argument(
        '--ksize2',
        help="Kernel size of the second layer of the cnn.",
        type=int,
        default=5
    )

    parser.add_argument(
        '--nfil1',
        help="Number of filters in the first layer of the cnn.",
        type=int,
        default=10
    )

    parser.add_argument(
        '--nfil2',
        help="Number of filters in the second layer of the cnn.",
        type=int,
        default=20
    )

    parser.add_argument(
        '--dprob',
        help="Dropout probability for cnn",
        type=float,
        default=0.25
    )

    parser.add_argument(
        '--batch_norm',
        help="If specified do batch norm for CNN",
        dest="batch_norm",
        action="store_true"
    )

    parser.set_defaults(batch_norm = False)

    args= parser.parse_args()
    hparams = args.__dict__

    output_dir = hparams.pop('output_dir')

    # Appends trail id to path for hyper parameter tunning.
    output_dir = os.path.join(
        output_dir,
        json.loads(
            os.environ.get("TF_CONFIG", "{}")
        ).get("task", {}).get("trail", "")
    )

    # Run the training job.
    model.train_and_evaluate(output_dir, hparams)