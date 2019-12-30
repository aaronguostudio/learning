import java.util.ArrayList;
import java.util.TreeMap;
import java.util.TreeSet;

public class Solution {

    // Leetcode #804
    // Java 的 TreeSet 基于红黑树实现
    // 定义了更多的方法
    // 使用 Hash 的速度会更快
    public int uniqueMorseRepresentations(String[] words) {
        String[] codes = {".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."};

        TreeSet<String> set = new TreeSet<>();

        for (String word: words) {
            StringBuilder res = new StringBuilder();
            for (int i = 0; i < word.length(); i++) {
                res.append(codes[word.charAt(i) - 'a']);
            }
            set.add(res.toString());
        }

        return set.size();
    }

    // # 349
    public int[] intersection(int [] nums1, int[] nums2) {
        TreeSet<Integer> treeSet = new TreeSet<>();

        for (int num : nums1)
            treeSet.add(num);

        ArrayList<Integer> list = new ArrayList<>();
        for (int num : nums2) {
            if (treeSet.contains(num)) {
                list.add(num);
                treeSet.remove(num);
            }
        }

        int[] res = new int[list.size()];
        for (int i = 0; i < res.length; i++) {
            res[i] = list.get(i);
        }

        return res;
    }

    // # 350
    public int[] intersect(int [] nums1, int[] nums2) {
        TreeMap<Integer, Integer> map = new TreeMap();

        for (int num : nums1)
            if (!map.containsKey(num))
                map.put(num, 1);
            else
                map.put(num, map.get(num) + 1);

        ArrayList<Integer> list = new ArrayList<>();
        for (int num : nums2) {
            if (map.containsKey(num)) {
                list.add(num);
                map.put(num, map.get(num) - 1);
                if (map.get(num) == 0)
                    map.remove(num);
            }
        }

        int[] res = new int[list.size()];
        for (int i = 0; i < res.length; i++) {
            res[i] = list.get(i);
        }

        return res;
    }

    public static void main(String[] args) {
        int[] g1 = {4, 9, 5};
        int[] g2 = {9, 4, 9, 8, 4};
    }

}
