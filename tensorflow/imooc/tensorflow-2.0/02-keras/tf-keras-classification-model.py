import matplotlib as mpl
import matplotlib.pyplot as plt
import numpy as np
import sklearn
import pandas as pd
import os
import sys
import time
import tensorflow as tf

from tensorflow import keras

print(tf.version)
print(sys.version_info)

for module in mpl, np, pd, sklearn, tf, keras:
  print(module.__name__, module.__version__)

fashion_minst = keras.datasets.fashion_mnist

(x_train_all, y_train_all), (x_test, y_test) = fashion_minst.load_data()

x_valid, x_train = x_train_all = x_train_all[:5000], x_train_all[5000:]
y_valid, y_train = y_train_all = y_train_all[:5000], y_train_all[5000:]

print(x_valid.shape, y_valid.shape)
print(x_train.shape, y_train.shape)
print(x_test.shape, y_test.shape)

def show_single_image(img_arr):
  plt.imshow(img_arr, cmap="binary")
  plt.show()

def show_images(n_row):

show_single_image(x_train[0])

# 2.3
