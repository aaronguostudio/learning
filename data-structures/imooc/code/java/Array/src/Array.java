// 关于泛型，仅支持类对象，不支持基本类型：boolean, byte, char, int, short, long, float, double
// Java 增加了包装类使基本类型拥有类对象

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
        if (size == data.length)
            throw new IllegalArgumentException("Add failed. Array is full.");
        if (index < 0 || index > size)
            throw new IllegalArgumentException("Add failed. Require index >= 0 and index <= size.");
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
        data[size] = null; // loitering objects, 不是必须要删除，不等于 memory leak
        size--;

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
}
