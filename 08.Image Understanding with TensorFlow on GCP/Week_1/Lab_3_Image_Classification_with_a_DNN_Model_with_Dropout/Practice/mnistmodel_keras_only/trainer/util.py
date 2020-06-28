import tensorflow as tf

def scale(image, label):
    """
    Scale image from 0 to 255 int range to a 0.0 to 1.0 float range
    """
    image = tf.cast(x=image, dtype=tf.float32)
    image /= 255
    image = tf.expand_dims(input=image, axis=-1)
    return image, label

def load_dataset(data, training=True, buffer_size=5000, batch_size=100, nclasses=10):
    """
    Loads MNIST dataset into a tf.data.Dataset
    """
    (x_train, y_train), (x_test, y_test) = data
    
    x = x_train if training else x_test
    y = y_train if training else y_test
    
    # One-hot encode the class
    y = tf.keras.utils.to_categorical(y = y, num_classes=nclasses)
    
    # Convert our data into tf.data
    dataset = tf.data.Dataset.from_tensor_slices((x,y))
    dataset = dataset.map(scale).batch(batch_size)
    
    # During training shuffle our dataset
    if training:
        dataset = dataset.shuffle(buffer_size).repeat()
        
    return dataset
