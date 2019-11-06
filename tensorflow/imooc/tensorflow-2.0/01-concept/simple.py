import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'

import tensorflow as tf

x = tf.constant(0.)
y = tf.constant(1.)

for i in range(50):
  x = x + y
  y = y / 2

print(x.numpy())
