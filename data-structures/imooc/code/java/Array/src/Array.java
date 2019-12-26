public class Array {
    private int[] data;
    private int size;

    public Array(int capacity) {
        data = new int[capacity];
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

    public void addLast (int e) {
        add(size, e);
    }

    public void addFirst (int e) {
        add(0, e);
    }

    public void add (int index, int e) {
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

    int get (int index) {
        if (index < 0 || index >= size)
            throw new IllegalArgumentException("Get failed. Index is illegal");
        return data[index];
    }

    void set (int index, int e) {
        if (index < 0 || index >= size)
            throw new IllegalArgumentException("Set failed. Index is illegal");
        data[index] = e;
    }

    public boolean contains (int e) {
        for (int i = 0; i < size; i++) {
            if (data[i] == e)
                return true;
        }
        return false;
    }

    // -1 if not found
    public int find(int e) {
        for (int i = 0; i < size; i++) {
            if (data[i] == e)
                return i;
        }
        return -1;
    }

    // return removed item
    public int remove (int index) {
        if (index < 0 || index >= size)
            throw new IllegalArgumentException("Remove failed. Index is illegal");

        int ret = data[index];
        for (int i = index + 1; i < size; i++ ) {
            data[i - 1] = data[i];
        }
        size--;

        return ret;
    }

    public int removeFirst () {
        return remove(0);
    }

    public int removeLast () {
        return remove(size - 1);
    }

    // remove the first found element
    public void removeElement (int e) {
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
