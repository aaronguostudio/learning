import numpy as np

# 推导
# a = np.array([0.3, 2.9, 4.0])
# exp_a = np.exp(a)
# print(exp_a)

# sum_exp_a = np.sum(exp_a)
# print(sum_exp_a)

# y = exp_a / sum_exp_a
# print(y)

def softmax(a):
  c = np.max(a)
  exp_a = np.exp(a - c)
  sum_exp_a = np.sum(exp_a)
  y = exp_a / sum_exp_a
  return y

y = softmax([0.3, 2.9, 4.0])
print(y)
print(np.sum(y))

# softmax 函数的输出是 0.0 到 1.0 之间的实数。并且，softmax 函数的输出值的总和是 1。输出总和为 1 是 softmax 函数的一个重要性质。正因为有了这个性质，我们才可以把 softmax 函数的输出解释为“概率”。