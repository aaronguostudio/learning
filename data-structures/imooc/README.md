# Data Structures

This project follows liuyubobobo's datastructures course on imooc

- [github](https://github.com/liuyubobobo/Play-with-Algorithms)
- [如何学习](https://mp.weixin.qq.com/s?__biz=MzU4NTIxODYwMQ==&mid=2247483836&idx=1&sn=90854aa76507281403e4dd9cd434a12b&chksm=fd8caefacafb27ec78f999fde4f1217c04c6e2ff28cf51fe511d8fa29d484d9281ff91de8c9c&token=88683563&lang=zh_CN#rd)

## 01 概览

### Real life examples

- Database
  - tree: AVL, 红黑树，Treap, 伸展树，B 树
  - hashtable
- 操作系统
  - stack
    - 系统栈，函数的循环调用
  - heap
    - 优先队列
- 文件压缩
  - 哈弗曼树(比较简单的算法)
- 通讯录
  - trie - 前缀树
- 游戏
  - 寻路算法
    - DFS 深度优先
    - BFS 广度优先

### 学习的注意事项

- C++, Java 更适合查看性能，因为脚本语言有一些语法上的优化

```python

# 后者性能更加优化

arr1 = []
for i in range(10)
  arr1.append(i)

arr2 = [i for i in range(10)]

```

## 02 Array

### 时间复杂度的定义

- 大 O 描述的是算法的运行时间和输入数据之间的关系
  - 渐进时间复杂度，描述 n 趋近于无穷的情况
- O(1)
  - 与数据的规模无关
- 均摊复杂度和防止复杂度的震荡
  - 均摊复杂度 (amortized time complexity)
    - 比如 resize, 每十次才调用一次
  - 复杂度震荡
    - 比如在 capacity = size - 1 时，一直运行 addLast and removeLast, 每次才做都要扩容
    - 出现这个问题的原因
      - removeLast 后 resize 过于着急 (too eager)
    - 解决方案
      - lazy
        - 当 size == capacity / 4 时，才将 capacity 减半

## 03 Stack and Queue

- 栈的应用
  - 撤销的实现
  - 系统调用的系统栈
  - 递归
  - 括号匹配 - 编译器
- 队列
  - 使用循环队列来提高 dequeue 的性能
    - front == tail 队列为空
    - （tail + 1） % c == font 队列为满
