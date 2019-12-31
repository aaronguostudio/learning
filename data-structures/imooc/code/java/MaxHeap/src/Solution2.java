import java.util.*;
import java.util.PriorityQueue;

// 这里使用 java 内置的优先队列
// java 默认实现的是最小堆

public class Solution2 {
    // 频次小的放到堆顶（类似于用最大堆实现最小堆的作用）
    private class Freq {
        int e, freq;

        public Freq (int e, int freq) {
            this.e = e;
            this.freq = freq;
        }
    }

    private class FreqComparator implements Comparator<Freq> {
        @Override
        public int compare(Freq o1, Freq o2) {
            return o1.freq - o2.freq;
        }
    }

    public List<Integer> tokKFrequent(int[] nums, int k) {
        TreeMap<Integer, Integer> map = new TreeMap<>();

        for (Integer num: nums) {
            if (map.containsKey(num))
                map.put(num, map.get(num) + 1);
            else
                map.put(num, 1);
        }

        PriorityQueue<Freq> pq = new PriorityQueue<>(new FreqComparator());
        for (int key: map.keySet()) {
            if (pq.size() < k)
                pq.add(new Freq(key, map.get(key)));
            else if (map.get(key) > pq.peek().freq) {
                pq.remove();
                pq.add(new Freq(key, map.get(key)));
            }
        }

        LinkedList<Integer> res = new LinkedList<>();
        while (!pq.isEmpty())
            res.add(pq.remove().e);

        return res;
    }

    public static void main(String[] args) {
        int[] testData = {4, 1, -1, 2, -1, 2, 3};
        System.out.println((new Solution().tokKFrequent(testData,2)));
    }
}
