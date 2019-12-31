public class SegmentTree<E> {

    private E[] data;
    private E[] tree;
    private Merger<E> merger;

    public SegmentTree (E[] arr, Merger<E> merger) {
        this.merger = merger;

        data = (E[]) new Object[arr.length];
        for (int i = 0; i < arr.length; i++)
            data[i] = arr[i];

        // 4 * n 的空间可以足够满足一个满的线段树
        // 详细推到看 README.md
        tree = (E[]) new Object[4 * arr.length];

        buildSegementTree(0, 0, data.length - 1);
    }

    // 在 treeIndex 的位置创建表示区间 [l...r) 的线段树
    private void buildSegementTree(int treeIndex, int l, int r) {
        if (l == r) {
            tree[treeIndex] = data[l];
            return;
        }

        int leftTreeIndex = leftChild(treeIndex);
        int rightTreeIndex = rightChild(treeIndex);

        // 如果数据量太大，会造成益处 (l + r) / 2
        int mid = l + (r - l) / 2;

        // 递归构造左孩子和右孩子
        buildSegementTree(leftTreeIndex, l, mid);
        buildSegementTree(rightTreeIndex, mid + 1, r);

        // 不使用 tree[treeIndex] = tree[leftTreeIndex] + tree[rightTreeIndex];
        // 如何定义父节点，取决于业务。如果我们计算求和问题，相加就可以
        // 但是为了让我们的 + 不仅仅局限于加法，我们可以定义一个接口去自定义这个 + 的含义
        tree[treeIndex] = merger.merge(tree[leftTreeIndex], tree[rightTreeIndex]);
    }

    public int getSize () {
        return data.length;
    }

    public E get(int index) {
        if (index < 0 || index > data.length)
            throw new IllegalArgumentException("Index is illegal");
        return data[index];
    }

    public int leftChild(int index) {
        return 2 * index + 1;
    }

    public int rightChild(int index) {
        return 2 * index + 2;
    }

    // 返回区间 [queryL, queryR] 的值
    public E query (int queryL, int queryR) {
        if (queryL < 0 || queryL >= data.length || queryR < 0 || queryR >= data.length || queryL > queryR)
            throw new IllegalArgumentException("Index is illegal");
        return query(0, 0, data.length - 1, queryL, queryR);
    }

    // 在以 treeIndex 为根的线段树中 [L...r] 的范围里，搜索区间[queryL, queryR] 的值
    private E query (int treeIndex, int l, int r, int queryL, int queryR) {
        if (l == queryL && r == queryR) {
            return tree[treeIndex];
        }
        int mid = l + (r - l) / 2;
        int leftChildIndex = leftChild(treeIndex);
        int rightChildIndex = rightChild(treeIndex);

        // 如果要查找的左边比 mid + 1 还大，那就直接去有孩子查找就可以
        if (queryL >= mid + 1)
            return query(rightChildIndex, mid + 1, r, queryL, queryR);
        else if (queryR <= mid)
            return query(leftChildIndex, l, mid, queryL, queryR);

        E leftResult = query(leftChildIndex, l, mid, queryL, mid);
        E rightResult = query(rightChildIndex, mid + 1, r, mid + 1, queryR);

        return merger.merge(leftResult, rightResult);
    }

    public void set(int index, E e) {
        if (index < 0 || index > data.length)
            throw new IllegalArgumentException("Index is illegal");

        data[index] = e;
        set(0, 0, data.length - 1, index, e);
    }

    private void set(int treeIndex, int l, int r, int index, E e) {
        if (l == r) {
            tree[treeIndex] = e;
            return;
        }

        int mid = l + (r - l) / 2;
        int leftTreeIndex = leftChild(treeIndex);
        int rightTreeIndex = rightChild(treeIndex);

        if (index >= mid + 1)
            set(rightTreeIndex, mid + 1, r, index, e);
        else
            set(leftTreeIndex, l, mid, index, e);

        tree[treeIndex] = merger.merge(tree[leftTreeIndex], tree[rightTreeIndex]);
    }

    @Override
    public String toString() {
        StringBuilder res = new StringBuilder();

        res.append("[");

        for (int i = 0; i < tree.length; i++) {
            if (tree[i] != null)
                res.append(tree[i]);
            else
                res.append("null");
            if (i != tree.length - 1)
                res.append(", ");
        }

        res.append("]");
        return res.toString();
    }
}
