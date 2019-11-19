def cross_entropy_error(y, t):
  delta = 1e-7
  return -np.sum(t * mp.log(y + delta))