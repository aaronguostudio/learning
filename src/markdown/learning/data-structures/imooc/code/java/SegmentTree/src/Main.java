public class Main {

    public static void main(String[] args) {

        Integer[] nums = { -2, 0, 3, -5, 2, -1 };

//        SegmentTree<Integer> setTree = new SegmentTree<>(nums, new Merger<Integer>() {
//            @Override
//            public Integer merge(Integer a, Integer b) {
//                return a + b;
//            }
//        });

        // lambda 表达式
        SegmentTree<Integer> setTree = new SegmentTree<>(nums, (a, b) -> a + b);
        System.out.println(setTree);

        System.out.println(setTree.query(0, 2));

        System.out.println(setTree.query(2, 5));

        System.out.println(setTree.query(0, 5));
    }
}
