/**
 * - Java 常用数据结构
 * - Reference
 *   https://blog.csdn.net/shagoo/article/details/1402047
 *
 * Collection
 *  - List
 *      LinkedList
 *      ArrayList
 *      Vector
 *        Stack
 *  - Set
 *
 * Map
 *  - Hashtable
 *  - HashMap
 *  - WeakHashMap
 */

// Collection Interface

// Collection 是最基本的集合接口，一些允许相同元素，一些不允许。一些可以排序或者相反。
// - Java JDK 一般不提供直接继承 Collection 的类，而是提供 List 和 Set
// - 实现 Collection Interface 必须有两个构造函数
//   - 无参数构造函数
//   - 以及传入一个 Collection 的构造函数，用于复制之前的 collection
// - Collection 都支持一个 iterator() 方法

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
