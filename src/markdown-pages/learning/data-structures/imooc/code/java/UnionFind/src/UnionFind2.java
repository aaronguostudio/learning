// 第二版在 unionElements 上的效率更高 O(h)，h 是高度
// 这一版使用了有孩子节点发起的 tree 来实现 (森林结构)
// 这个版本在做合并的时候不考虑子树的 size。可能会导致树的高度过深

public class UnionFind2 implements UF {

    private int[] parent;

    public UnionFind2(int size) {
        parent = new int[size];

        for (int i = 0; i < size; i++)
            parent[i] = i;
    }

    // O(h)
    @Override
    public boolean isConnected(int p, int q) {
        return find(p) == find(q);
    }


    @Override
    public void unionElements(int p, int q) {
        int pRoot = find(p);
        int qRoot = find(q);

        if (pRoot == qRoot)
            return;

        parent[pRoot] = qRoot;
    }

    @Override
    public int getSize() {
        return parent.length;
    }

    // 不断的去查找父亲
    // 查找元素 p 所对应的集合编号
    // O(h) 复杂度，h 为树的高度
    private int find(int p) {

        if (p < 0 || p >= parent.length)
            throw new IllegalArgumentException("p is out of bound");

        while (p != parent[p])
            p = parent[p];

        return p;
    }
}
