// 基于路径压缩的优化
// 在 find 的时候顺便做优化

public class UnionFind6 implements UF {
    private int[] parent;
    private int[] rank;         // rank[i] 路径压缩之后不需要维护这个值，因为这个例子中，rank 就不是真实的高度了。
    // 它表示排名。压缩之后的路径，还是保留着之前的 rank 关系，所以不需要维护

    public UnionFind6 (int size) {
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

        if(p != parent[p])
            parent[p] = find(parent[p]);  // 通过递归，把所有的孩子指向父亲，这样高度就是 2 了。

        return parent[p];
    }
}
