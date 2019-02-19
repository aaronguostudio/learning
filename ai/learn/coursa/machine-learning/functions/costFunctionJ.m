function J = costFunctionJ(X, y, theta)

% X is the "design matrix" containing the training examples
% y is the class labels

m = size(X, 1);                     % number of training examples
predictions = X*theta;              % predictions of thypothesis on all m examples
sqrErrors = (predictions-y) .^ 2;   % squared errors， 点儿除

J = 1/(2*m) * sum(sqrErrors);

// vectorization example
// 向量化计算可以使用到计算机的硬件支持提高运算效率
// 以C++代码为例：

// Unvectorized implementation
double prediction = 0.0;
for (int j = 0; j <= n; j++)
  prediction += theta[j] * x[j];

// Vectorized implementation
double prediction = theta.transpose() + x  // theta and x are vectors