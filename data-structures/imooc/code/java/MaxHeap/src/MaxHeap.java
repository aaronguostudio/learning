public class MaxHeap<E extends Comparable<E>> {
    private Array<E> data;

    public MaxHeap(int capacity) {
        data = new Array<>(capacity);
    }

    public MaxHeap() {
        data = new Array<>();
    }

    public int size () {
        return data.getSize();
    }

    public boolean isEmpty () {
        return data.isEmpay();
    }

    // 返回完全二叉树的数组表示中，一个索引所标识的元素的父亲节点的索引
    private int parent(int index) {
        if (index == 0)
            throw new IllegalArgumentException("Index 0 doesn't have parent");
        return (index - 1)/2;
    }

    private int leftChild(int index) {
        return 2 * index + 1;
    }

    private int rightChild(int index) {
        return 2 * index + 2;
    }

    public void add(E e) {
        data.addLast(e);
        siftUp(data.getSize() - 1);
    }

    private void siftUp(int k) {
        while(k > 0 && data.get(parent(k)).compareTo(data.get(k)) < 0) {
            data.swap(k, parent(k));
            k = parent(k);
        }
    }

    public E findMax() {
        if (data.getSize() == 0)
            throw new IllegalArgumentException("data is empty");
        return data.get(0);
    }

    public E extractMax() {
        E ret = findMax();
        data.swap(0, data.getSize() - 1); // 取出最大之后，最小值移到最近。再做 SiftDown
        data.removeLast();
        siftDown(0);
        return ret;
    }

    private void siftDown(int k) {
        while(leftChild(k) < data.getSize()) {  // 循环如果左孩子比 size 小

            int j = leftChild(k);  // j 指向左孩子
            // 如果存在右节点，并且右边比左边大
            if (j + 1 < data.getSize() && data.get(j + 1).compareTo(data.get(j)) > 0)
                j = rightChild(k);  // 让 j 指向右孩子

            // k 和 j (可能是左或者右)
            // 如果 k 更大，结束下沉
            if (data.get(k).compareTo(data.get(j)) >= 0)
                break;

            data.swap(k, j);
            k = j;
        }
    }
}
