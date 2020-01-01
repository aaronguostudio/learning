public class NumArray3 {

    private SegmentTree<Integer> segmentTree;

    public NumArray3(int[] nums) {
        if (nums.length > 0) {
            Integer[] data = new Integer[nums.length];
            for (int i = 0; i < nums.length; i++)
                data[i] = nums[i];
            segmentTree = new SegmentTree<>(data, (a, b) -> a + b);
        }
    }

    // 线段树的更新和查询都是 O(logn) 的复杂度
    public void update(int i, int val) {
        if (segmentTree == null)
            throw new IllegalArgumentException("Segment Tree is null");
        segmentTree.set(i, val);
    }

    public int sumRange(int i, int j) {
        if (segmentTree == null)
            throw new IllegalArgumentException("Segment Tree is null");

        return segmentTree.query(i, j);
    }
}
