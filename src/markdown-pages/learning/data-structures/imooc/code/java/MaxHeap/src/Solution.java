import java.util.LinkedList;
import java.util.List;
import java.util.TreeMap;

public class Solution {

    // 频次小的放到堆顶（类似于用最大堆实现最小堆的作用）
    private class Freq implements Comparable<Freq> {
        int e, freq;

        public Freq (int e, int freq) {
            this.e = e;
            this.freq = freq;
        }

        @Override
        public int compareTo(Freq o) {
            if(this.freq < o.freq)
                return 1;
            else if (this.freq > o.freq)
                return -1;
            else
                return 0;
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

        PriorityQueue<Freq> pq = new PriorityQueue<>();
        for (int key: map.keySet()) {
            if (pq.getSize() < k)
                pq.enqueue(new Freq(key, map.get(key)));
            else if (map.get(key) > pq.getFront().freq) {
                pq.dequeue();
                pq.enqueue(new Freq(key, map.get(key)));
            }
        }

        LinkedList<Integer> res = new LinkedList<>();
        while (!pq.isEmpty())
            res.add(pq.dequeue().e);

        return res;
    }

    public static void main(String[] args) {
        int[] testData = {4, 1, -1, 2, -1, 2, 3};
        System.out.println((new Solution().tokKFrequent(testData,2)));
    }
}
