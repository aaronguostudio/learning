import numpy as np

"""
参数学习算法，不需要存储用户传入的数据集，
只要记录学习之后获得的参数即可
"""
class SimpleLinearRegression1:
    def __init__(self):
        self.a_ = None
        self.b_ = None

    def fit(self, x_train, y_train):
        # train by x_train, y_train
        assert x_train.ndim == 1, \
          "Simple Linear Regressor can only solve sinlge feature training data."
        assert len(x_train) == len(y_train), \
          "the szie of x_train must be equal to the size of y_train"

        x_mean = np.mean(x_train)
        y_mean = np.mean(y_train)

        num = 0.0
        d = 0.0

        for x, y in zip(x_train, y_train):
            num += (x - x_mean) * (y - y_mean)
            d += (x - x_mean) ** 2

        self.a_ = num / d
        self.b_ = y_mean - self.a_ * x_mean

        return self

    # 给定待预测数据集 x_predict，返回表示 x_predict 的结果向量
    def predict(self, x_predict):

        assert x_predict.ndim == 1, \
          "Simple Linear Regressor can only solve sinlge feature training data."
        assert self.a_ is not None and self.b_ is not None, \
          "must fit before predict"

        return np.array([self._predict(x) for x in x_predict])

    def _predict(self, x_single):
        return self.a_ * x_single + self.b_

    def __repr__(self):
        return "SimpleLinearRegression1()"
