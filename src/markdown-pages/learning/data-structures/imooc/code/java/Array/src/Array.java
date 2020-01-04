// 关于泛型，仅支持类对象，不支持基本类型：boolean, byte, char, int, short, long, float, double
// Java 增加了包装类使基本类型拥有类对象

/*
*
* 时间复杂度
* addLast           O(1)           // 如果考虑 resize 的话就编程了 O(n)
*                                  // 均摊复杂度为 O(1)
* addFirst          O(n)
* add               O(n/2) = O(n)  // 随着数据量的变化而变化，这里取平均的概率
*
* removeLast        O(1)           // 如果考虑 resize 的话就编程了 O(n)
*                                  // 均摊复杂度为 O(1)
* removeFirst       O(n)
* remove            O(n/2) = O(n)
*
* set               O(1)  // 数组支持随机访问
* get               O(1)
* contains          O(n)
* find              O(n)
*
*
*
## 时间复杂度的定义

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
*
* */

public class Array<E> {
    private E[] data;
    private int size;

    public Array(int capacity) {
        data = (E[]) new Object[capacity] ; // java 不支持 new 一个泛型: new E[capacity]
        size = 0;
    }

    public Array() {
        this(10);
    }

    public int getSize () {
        return size;
    }

    public int getCapacity () {
        return data.length;
    }

    public boolean isEmpay () {
        return size == 0;
    }

    public void addLast (E e) {
        add(size, e);
    }

    public void addFirst (E e) {
        add(0, e);
    }

    public void add (int index, E e) {

        if (index < 0 || index > size)
            throw new IllegalArgumentException("Get failed. Index is illegal");

        if (size == data.length)
            resize(2 * data.length); // 为数组扩容

        for (int i = size - 1; i >= index; i--) {
            data[i + 1] = data[i];
        }
        data[index] = e;
        size++;
    }

    public E get (int index) {
        if (index < 0 || index >= size)
            throw new IllegalArgumentException("Get failed. Index is illegal");
        return data[index];
    }

    void set (int index, E e) {
        if (index < 0 || index >= size)
            throw new IllegalArgumentException("Set failed. Index is illegal");
        data[index] = e;
    }

    public boolean contains (E e) {
        for (int i = 0; i < size; i++) {
            if (data[i].equals(e)) // 需要比较两个对象的值
                return true;
        }
        return false;
    }

    // -1 if not found
    public int find(E e) {
        for (int i = 0; i < size; i++) {
            if (data[i].equals(e))
                return i;
        }
        return -1;
    }

    // return removed item
    public E remove (int index) {
        if (index < 0 || index >= size)
            throw new IllegalArgumentException("Remove failed. Index is illegal");

        E ret = data[index];
        for (int i = index + 1; i < size; i++ ) {
            data[i - 1] = data[i];
        }

        data[size - 1] = null; // loitering objects, 不是必须要删除，不等于 memory leak
        size--;

        if (size == data.length / 4 && data.length / 2 != 0)  // lazy, 避免复杂度震荡
            resize(data.length / 2);

        return ret;
    }

    public E removeFirst () {
        return remove(0);
    }

    public E removeLast () {
        return remove(size - 1);
    }

    // remove the first found element
    public void removeElement (E e) {
        int index = find(e);
        if (index != -1)
            remove(index);
    }

    @Override
    public String toString () {
        StringBuilder res = new StringBuilder();
        res.append(String.format("Array: size = %d, capacity = %d\n", size, data.length));
        res.append("[");
        for (int i = 0; i < size; i++) {
            res.append(data[i]);
            if (i != size - 1) {
                res.append(", ");
            }
        }
        res.append("]\n");
        return res.toString();
    }

    private void resize (int newCapacity) {
        E[] newData = (E[]) new Object[newCapacity];
        for (int i = 0; i < size; i++)
            newData[i] = data[i];
        data = newData;
    }
}
