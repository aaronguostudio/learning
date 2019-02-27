# generate list
# list can contain any types
L = [i for i in range(10)]

# using array to host one type
# the first elem is the data type
import array
arr = array.array('i', [i for i in range (10)])

# numpy array
import numpy as np
arr = np.array([i for i in range(10)])

# check data type
arr.dtype

# matrix with zeros
np.zeros(10)
np.zeros(10, dtype=int)
np.zeros((3, 5))
np.zeros(shape=(3, 5), dtype=int)
np.ones((3,4))
np.full((3.6), 6)

# 0-20 step is 2
[i for i in range(0, 20, 2)]

# np arange can use float as step
np.arange(0, 20, .2)

# linear arrange, separated to 10
np.linspace(0, 20, 10)

# Random
np.random.randint(0, 10)
np.random.randint(0, 10, 10)
np.random.randint(4, 8, size=10)
np.random.randint(4, 8, size=(5,10))
np.random.seed(666)

# float numbers
np.random.random()

# 均值为 0 方差为 1
np.random.normal()

# 均值为 10 方差为 100
np.random.normal(10, 100)
np.random.normal(0, 1, (3, 5))

# Help document
help(np.random.normal)