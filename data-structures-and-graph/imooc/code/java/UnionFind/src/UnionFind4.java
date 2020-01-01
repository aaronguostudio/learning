// 基于 rank 的优化

public class UnionFind4 implements UF {
    private int[] parent;
    private int[] rank;           // rank[i] 表示以 i 为根的集合所表示的树的层数

    public UnionFind4 (int size) {
        parent = new int[size];
        rank = new int[size];

        for (int i = 0; i < size; i++) {
            parent[i] = i;
            rank[i] = 1;
        }
    }

    @Override
    public boolean isConnected(int p, int q) {
        return find(p) == find(q);
    }

    // 尽可能保证树的高度尽量小
    @Override
    public void unionElements(int p, int q) {
        int pRoot = find(p);
        int qRoot = find(q);

        if (pRoot == qRoot)
            return;

        // 根据两个元素所在树的 rank 不同判断合并方向
        // 将 rank 低的集合合并到 rank 高的集合上
        if (rank[pRoot] < rank[qRoot])
            parent[pRoot] = qRoot;
        else if (rank[qRoot] < rank[pRoot])
            parent[qRoot] = pRoot;
        else {
            parent[qRoot] = pRoot;
            rank[pRoot] += 1;
        }
    }

    @Override
    public int getSize() {
        return parent.length;
    }

    private int find(int p) {

        if (p < 0 || p >= parent.length)
            throw new IllegalArgumentException("p is out of bound");

        while(p != parent[p])
            p = parent[p];

        return p;
    }
}
