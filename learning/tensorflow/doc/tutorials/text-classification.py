import tensorflow as tf
from tensorflow  import keras
import numpy as np

data = keras.datasets.imdb
(train_data, train_labels), (test_data, test_labels) = data.load_data(num_words=10000)

print(train_data[0])

word_index = data.get_word_index()
word_index = { k:(v+3) for k, v in word_index.items() }

word_index['<PAD>'] = 0
word_index['<START>'] = 1
word_index['<UNK>'] = 2
word_index['<UNUSED>'] = 3

# 1:18:00
