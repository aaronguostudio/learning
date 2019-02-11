import numpy as np

A = np.array([1,2,3,4])
print(A)

# dimention of array
print(np.ndim(A))

print(A.shape)
print(A.shape[0])

print('========')
B = np.array([[1,2,3], [3,4,5], [5,6,7]])
print(B.shape)


print('========')
C = np.array([[1,2],[3,4]])
D = np.array([[1,1],[3,3]])

print(np.dot(C, C))
print('========')
print(np.dot(D, D))

print('========')
A = np.array([[1,3],[2,4]])
B = np.array([[1,2],[3,4]])
print(np.dot(A, B))