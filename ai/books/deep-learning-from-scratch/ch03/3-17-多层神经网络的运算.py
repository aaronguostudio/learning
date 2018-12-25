import numpy as np

# 第一层的输入 X, 权重和偏执
X = np.array([1.0, 0.5])
W1 = np.array([[0.1, 0.3, 0.5], [0.2, 0.4, 0.6]])
B1 = np.array([0.1, 0.2, 0.3])
A1 = np.dot(X, W1) + B1

# 第一层的激活函数
def sigmoid (x):
  return 1 / (1 + np.exp(-x))

def identity_function (x):
  return x

# 第一层的输出
Z1 = sigmoid(A1)

# 第二层的输入 X, 权重和偏执
W2 = np.array([[0.1, 0.4], [0.2, 0.5], [0.3, 0.6]])
B2 = np.array([0.1, 0.2])

A2 = np.dot(Z1, W2) + B2
Z2 = sigmoid(A2)

# 第二层的输入 X, 权重和偏执
W3 = np.array([[0.1, 0.3], [0.2, 0.4]])
B3 = np.array([0.1, 0.2])

A3 = np.dot(Z2, W3) + B3
Y = identity_function(A3)

print(Y)