FROM gcr.io/deeplearning-platform-release/tf2-cpu
COPY mnistmodel_keras_only/trainer mnistmodel/trainer
ENTRYPOINT ["python3", "-m", "mnistmodel.trainer.task"]
