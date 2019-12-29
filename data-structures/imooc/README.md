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

## 04 链表 Linked List

- 链表，真正的动态数组
  - 之前实现的动态数组，包括扩展的 stack 和 queue，都是底层依托了静态数组实现的
  - 链表是最简单的动态数据结构
  - 需要更深入的理解引用（指针）
  - 需要更深入的理解递归
  - 辅助其他的数据结构
- 链表的缺点
  - 丧失了随机访问的能力
  - 链表不适合用于索引有语义的情况
- 链表的 dummyHead 虚拟头节点
  - 避免 addFirst 时候需要特殊处理
  - 因为链表的特性，只操作数据头会更高效
    - 也可以用链表实现 stack
  - 用链表实现 queue, 可以添加 tail 的标记来优化性能

## 05 链表与递归

- 代码存放在 04 章节里面
- 递归
  - 递归的思想可以概况为：把原本的大问题拆分的更小，循环到最基本的问题
- 链表的其他形式
  - 双链表
  - 循环链表 ( Java 的链表就是使用了循环双向链表 )
  - 数组链表 ( 自带索引 )

## 06 二分搜索树 ( Binary Search Tree )

- 树的存储非常高效
  - Binary Search Tree
  - 平衡二叉树: AVL, 红黑树
  - 堆; 并查集
  - 线段树; Trie ( 字典树，前缀树 )

### 二分搜索树

- 二叉树
  - 和链表一样，动态数据结构
  - 每个节点最多有两个孩子
  - 可能只有一个节点
  - 天然递归
- 二分搜索树
  - 每个节点的值，都要大于其左子树的值
  - 每个节点的值，都要小于其右子树的值
  - 我们实现的二分搜索树，不包含重负元素( 这个不是硬性要求 )
  - 二分搜索树是有序的，可以轻易拿到后继和前驱 successor， predecessor
  - 可以维护 size 和 depth 在二分搜索树，也可以支持重复元素的二分搜索树
  - 重复元素的二分搜索树也可以通过加入 count 来实现计数

```java
class Node {
  E e;
  Node left;
  Node right;
}
```
