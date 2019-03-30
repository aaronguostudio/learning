import numpy as np
from sklearn.linear_model import LinearRegression

from .product import Product

def predict_year_budget(year, product):
  """
    Product yearly budege for specific product
  """

  # Step 1 - Call the API get history sales data
  res2018 = Product.search_by_year_and_product(2018, product)
  x_train = []
  y_train = []
  for key in res2018:
    x_train.append(float(key))
    y_train.append(float(res2018[key]))

  # Step 2 - Train data
  x_train = np.array(x_train)
  y_train = np.array(y_train)

  X_train = x_train.reshape(-1, 1)
  X2_train = np.hstack([X_train, X_train**2])
  print('>>>X2_train', X2_train.shape)
  lin_reg = LinearRegression()

  lin_reg.fit(X2_train, y_train)
  print('coef', lin_reg.coef_)
  print('intercept', lin_reg.intercept_)

  predict_result = lin_reg.predict(X2_train)
  print('>>>>predict_result', predict_result)

  # Step 3 - Struct Data
  result = {
    'predict': {
      'year': year,
      'product': product,
      'data': predict_result.tolist()
    }
  }
  return result