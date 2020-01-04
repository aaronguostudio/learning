// Leetcode 303

public class NumArray {

    private SegmentTree<Integer> segmentTree;

    //  int[] can't outboxing automatic to Integer[]
    public NumArray(int[] nums) {
        if (nums.length > 0) {
            Integer[] data = new Integer[nums.length];

            for (int i = 0; i < nums.length; i++)
                data[i] = nums[i];

            segmentTree = new SegmentTree<>(data, (a, b) -> a + b);
        }
    }

    public int sumRange(int i, int j) {
        if (segmentTree == null)
            throw new IllegalArgumentException("Segment tree is empty");
        return segmentTree.query(i, j);
    }
}
