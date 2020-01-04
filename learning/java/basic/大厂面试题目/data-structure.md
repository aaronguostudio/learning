# Java 常用数据结构
- Java 常用数据结构
- Reference
  https://blog.csdn.net/shagoo/article/details/1402047
Collection
- List
    LinkedList
    ArrayList
    Vector
      Stack
- Set

## Collection Interface
  Collection 是最基本的集合接口，一些允许相同元素，一些不允许。一些可以排序或者相反。
  - Java JDK 一般不提供直接继承 Collection 的类，而是提供 List 和 Set
  - 实现 Collection Interface 必须有两个构造函数
    - 无参数构造函数
    - 以及传入一个 Collection 的构造函数，用于复制之前的 collection
  - Collection 都支持一个 iterator() 方法
  -
## List
  - 特点
    - 有序，可以索引
    - listIterator()
      - 提供了 add() 类似添加删除前后遍历的方法
  - 实现
    - LinkedList
      - 允许 null 元素
      - get(), remove(), insert()
      - 这些操作使 LinkedList 可被用作为 stack, queue and deque(双向列)
      - 没有同步方法，如果多个线程同时访问一个 List, 需要自己实现同步。一般是在创建 List 时构造一个同步方法
    - ArrayList
      - 实现可变大小的数组，允许 null，没有同步
      - size, isEmpty, get, set
    - Vector
      - 类似 ArrayList 但是是同步的
      - 因为同步的原因，当一个 Iterator 被使用，另一个线程改变了 Vector 的状态（例如，添加或删除一些元素），这是调用 Iterator 会抛出 ConcurrentModificationExeception
    - Stack
      - inherits from Vector，后进先出。push, pop, peek, empty, search

## Set
 - 不能有相同元素，最多一个元素为 null


## Map
  - Map 没有继承 Collection 接口，提供 key value 映射
  - Hashtable
    - 同步
    - 任何非空对象都可以作为 key 或 value
    - put(key, value), get(key)
  - HashMap
    - 陪同步
    - 允许 null
    - values() 方法可以返回 Collection
  - WeakHashMap
    - 改进的 HashMap, 对 Key 实现弱引用
    - 如果一个 key 不在被外部引用，那么该 key 被 GC 回收

# 总结
  - 堆栈，队列考虑 List
  - 快速插入删除使用 LinkedList
  - 随机访问用 ArrayList



```java
import java.util.Collection;
import java.util.Iterator;
import java.util.ArrayList;

public class WhileIteration {
  public static void main (String[] args) {

    Collection<String> collection = new ArrayList<String>();
    collection.add("A");
    collection.add("B");
    collection.add("C");

    Iterator<String> it = collection.iterator();

    while(it.hasNext()) {
      // The next element
      String s = it.next();
      System.out.println(s);
    }

  }
}
```
