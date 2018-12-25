import sys, os
sys.path.append(os.pardir)
from dataset.mnist import load_mnist

# 第一次调用会花费几分钟……

# (训练图像，训练标签), (测试图像，测试标签)
(x_train, t_train), (x_test, t_test) = load_mnist(flatten=True,
normalize=False)

# 输出各个数据的形状
print(x_train.shape) # (60000, 784)
print(t_train.shape) # (60000,)
print(x_test.shape) # (10000, 784)
print(t_test.shape) # (10000,)