<!-- 在 Octave 中使用优化的梯度下降 -->

options = optimset('GradObj', 'on', 'MaxIter', 100);
initialTheta = zeros(2,1)

[optTheta, functionVal, exitFlag] = fminunc(@costFunction, initialTheta, options)

