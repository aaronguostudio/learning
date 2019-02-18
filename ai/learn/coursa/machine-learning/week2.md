matlab oneline url: https://matlab.mathworks.com/

# Basic Octave commands

PS1('>> ');         // 修改命令行提示符
1 == 2   % false    // 注释
disp(sprintf('2 decimals: %2.0f', 3.14))

A = [1 2; 3 4; 5 6]
v = [1 2 3]
1:0.2:2             // 1 - 2 每次增加 0.2
ones(2,3)
zeros(2,3)
rand(2,3)
randn(2,3)
C = 2 * ones(2, 3)

w = -6 + sqrt(10)*(randn(1, 100))
hist(w)
hist(w, 20)
eye(4)   4 by 4 identity matrix

A = [1 2; 3 4; 5 6]
size(A)
size(A, 1)  // return 1st dimention of A
size(A, 2)  // return 2nd dimention of A
v = [1 2 3 4]
length(v)


load features.dat
load('features.dat)

who        // show memory usage
whos       // details
clear      // clear vars

price(1: 10)    // first 10 elements
save hello.mat v;   // save v to binary file
save hello.txt v;   // save v to txt file

A(3,2)        // 2nd elem of 3rd row
A(2,:)        // 2nd row
A(:,1)        // 1st col
A([1 3], :)   // 1st and 3rd row

A(:.2) = [10; 20; 30]
A = [A, [100; 200; 300]]

A(:)       // put all elements of A in a single vector

C = [A B]      // concatinate
C = [A; B]     // add as row


# Computational operations on data
A .* B         // 各个数相乘
A .^ 2         // squr each element

v = [1; 2; 3]
1 ./ v         // element wise division
max(A)

log(v)
exp(v)
abs(v)
-v
v + ones(length(v), 1)
v + 1
A'            // tranform
a = [1 12 2 0.5]
max(a)
[val, ind] = max(a)   // value and index
a < 3         // element wise comparision
find(a < 3)   // return indexes

A = magic(3)  // generate a matrix which row and col sum up equal to same number
[r, c] = find(A >= 7)

sum(a)
prod(a)
floor(a)
ceil(a)

max(rand(3), rand(3))
sum(A, 1)
sum(A, 2)

A = magix(9)
flipud(eye(9))











