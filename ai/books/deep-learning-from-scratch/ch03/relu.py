import numpy as np

def relu(x):
  if x <= 0:
    print(0)
  else:
    print(x)

# def relu(x):
#   return np.maximum(0, x)

relu(-2)
relu(-1)
relu(0)
relu(1)
relu(2)
relu(3)