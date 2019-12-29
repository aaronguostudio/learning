public class Sum {
    public static int sum(int[] arr) {
        return sum(arr, 0);
    }

    // 计算 arr[l...n) 区间内所有数字的和
    private static int sum(int[] arr, int l) {
        if (l == arr.length)
            return 0;
        return arr[l] + sum(arr, l + 1);
    }

    // 计算 arr[l...n) 范围里的数字和
    public static void main (String[] args) {
        int[] nums = {1, 2, 3, 4, 5, 6, 7, 8};
        System.out.println(sum(nums));
    }
}
