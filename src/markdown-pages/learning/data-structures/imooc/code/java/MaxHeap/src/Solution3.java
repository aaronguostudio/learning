import java.util.*;
import java.util.PriorityQueue;

// 进一步优化 solution2

public class Solution3 {

    public List<Integer> tokKFrequent(int[] nums, int k) {
        TreeMap<Integer, Integer> map = new TreeMap<>();
        for(int num: nums){
            if(map.containsKey(num))
                map.put(num, map.get(num) + 1);
            else
                map.put(num, 1);
        }

//        PriorityQueue<Integer> pq = new PriorityQueue<>(new Comparator<Integer>() {
//            @Override
//            public int compare(Integer a, Integer b) {
//                return map.get(a) - map.get(b);
//            }
//        });

        PriorityQueue<Integer> pq = new PriorityQueue<>(
                (a, b) -> map.get(a) - map.get(b)
        );

        for(int key: map.keySet()){
            if(pq.size() < k)
                pq.add(key);
            else if(map.get(key) > map.get(pq.peek())){
                pq.remove();
                pq.add(key);
            }
        }

        LinkedList<Integer> res = new LinkedList<>();
        while(!pq.isEmpty())
            res.add(pq.remove());
        return res;
    }

    public static void main(String[] args) {
        int[] testData = {1,1,1,2,2,3};
        System.out.println((new Solution().tokKFrequent(testData,2)));
    }
}
