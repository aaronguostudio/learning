// Leetcode 303
// 由于问题的数据是静态的，immutable，我们不需要使用
// 线段树就可以很高效的解决。这个技巧只需要一次遍历就可以
// 获得正确的结果

public class NumArray2 {
    private int[] sum;

    public NumArray2(int[] nums) {
        sum = new int[nums.length + 1];
        sum[0] = 0;
        for (int i = 1; i < sum.length; i++)
            sum[i] = sum[i - 1] + nums[i - 1];
    }

    public int sumRange(int i, int j) {
        return sum[j + 1] - sum[i];
    }

    public static void main(String[] args) {

    }
}
