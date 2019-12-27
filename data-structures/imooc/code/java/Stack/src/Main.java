// 这样实现的话，dequeue 的时间复杂度是 O(n)
// 如果队列非常大，会造成性能瓶颈
// 使用循环队列来实现 O(1)

import java.util.Random;

public class Main {

    // 测试使用 q 运行 opCount 个 enqueue and dequeue 操作需要的时间，单位：秒
    private static double testQueue(Queue<Integer> q, int opCount) {
        long startTime = System.nanoTime();

        Random random = new Random();
        for (int i = 0; i < opCount; i++)
            q.enqueue(random.nextInt(Integer.MAX_VALUE));
        for (int i = 0; i < opCount; i++)
            q.dequeue();

        long endTime = System.nanoTime();

        return (endTime - startTime) / 1000000000.0;
    }
    public static void main(String[] args) {
        ArrayStack<Integer> stack = new ArrayStack<>();

        for (int i = 0; i < 5; i++) {
            stack.push(i);
            System.out.println(stack);
        }

        stack.pop();
        System.out.println(stack);

        Solution s = new Solution();
        System.out.println(s.isValid("()[]{}"));

        ArrayQueue<Integer> queue = new ArrayQueue<>();
        for (int i = 0; i < 10; i++) {
            queue.enqueue(i);
            System.out.println(queue);
        }

        queue.dequeue();
        queue.dequeue();

        System.out.println(queue);

        System.out.println(">>>>>>>>>>>>>>> Loop Queue\n");

        LoopQueue<Integer> queue2 = new LoopQueue<>();
        for (int i = 0; i < 10; i++) {
            queue2.enqueue(i);
            System.out.println(queue2);

            if (i % 3 == 2) {
                queue2.dequeue();
                System.out.println(queue2);
            }
        }

        System.out.println(">>>>>>>>>>>>>>> Compare queue\n");

        int opCount = 10000;

        ArrayQueue<Integer> arrayQueue = new ArrayQueue<>();
        double time1 = testQueue(arrayQueue, opCount);
        System.out.println("ArrayQueue, time: " + time1 + " s");


        LoopQueue<Integer> LoopQueue = new LoopQueue<>();
        double time2 = testQueue(LoopQueue, opCount);
        System.out.println("LoopQueue, time: " + time2 + " s");
    }
}
