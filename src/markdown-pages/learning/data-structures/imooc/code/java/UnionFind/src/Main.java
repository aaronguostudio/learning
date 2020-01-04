import java.util.Random;

public class Main {

    private static double testUF(UF uf, int m) {
        int size = uf.getSize();
        Random random = new Random();

        long startTime = System.nanoTime();

        for (int i = 0; i < m; i++) {
            int a = random.nextInt(size);
            int b = random.nextInt(size);
            uf.unionElements(a, b);
        }

        for (int i = 0; i < m; i++) {
            int a = random.nextInt(size);
            int b = random.nextInt(size);
            uf.isConnected(a, b);
        }

        long endTime = System.nanoTime();

        return (endTime - startTime) / 1000000000.0;
    }

    public static void main(String[] args) {

        int size = 10000000;
        int m = 10000000;

//        UnionFind1 uf1 = new UnionFind1(size);
//        System.out.println("UnionFind1: " + testUF(uf1, m) + " s");
//
//        UnionFind2 uf2 = new UnionFind2(size);
//        System.out.println("UnionFind2: " + testUF(uf2, m) + " s");

        UnionFind3 uf3 = new UnionFind3(size);
        System.out.println("UnionFind3: " + testUF(uf3, m) + " s");

        UnionFind4 uf4 = new UnionFind4(size);
        System.out.println("UnionFind4: " + testUF(uf4, m) + " s");

        UnionFind5 uf5 = new UnionFind5(size);
        System.out.println("UnionFind5: " + testUF(uf5, m) + " s");

        // 因为第六版使用了递归，有一定的开销，所以速度反而比 uf5 慢一点
        // O(log*n) -> iterated logarithm. 比 log n 还要快。接近于 O(1)
        UnionFind6 uf6 = new UnionFind6(size);
        System.out.println("UnionFind6: " + testUF(uf6, m) + " s");
    }
}
