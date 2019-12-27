// 这样实现的话，dequeue 的时间复杂度是 O(n)
// 如果队列非常大，会造成性能瓶颈
// 使用循环队列来实现 O(1)

public class Main {

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
    }
}
