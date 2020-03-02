import tensorflow as tf

def devide_tensor(a,b):
    a = tf.cast(a, tf.float32)
    b = tf.cast(b, tf.float32)
    s = tf.divide(a,b) # OPPS NAN
    print_ab = tf.print(s,[a,b])
    s = tf.where(tf.is_nan(s), print_ab, s)
    return s

with tf.compat.v1.Session() as sess:
    fake_a = tf.constant([
        [5.0, 3.0, 7.1],
        [2.3, 4.1, 4.8],
    ])
    fake_b = tf.constant([
        [2, 0, 5],
        [2, 8, 7],
    ])
    result = devide_tensor(fake_a, fake_b)
    print('Result = {}'.format(result))
