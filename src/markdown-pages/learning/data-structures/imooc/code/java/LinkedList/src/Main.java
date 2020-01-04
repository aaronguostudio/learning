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

    private static double testStack (Stack<Integer> stack, int opCount) {
        long startTime = System.nanoTime();

        Random random = new Random();
        for (int i = 0; i < opCount; i++)
            stack.push(random.nextInt(Integer.MAX_VALUE));
        for (int i = 0; i < opCount; i++)
            stack.pop();

        long endTime = System.nanoTime();

        return (endTime - startTime) / 1000000000.0;
    }

    public static void main(String[] args) {
        LinkedList<Integer> linkedList = new LinkedList<>();

        for (int i = 0; i < 5; i++) {
            linkedList.addFirst(i);
            System.out.println(linkedList);
        }

        linkedList.add(2, 666);
        System.out.println(linkedList);

        linkedList.remove(2);
        System.out.println(linkedList);


        linkedList.removeFirst();
        System.out.println(linkedList);


        linkedList.removeLast();
        System.out.println(linkedList);

        System.out.println(">>> LinkedListStack");

        LinkedListStack<Integer> stack = new LinkedListStack<>();

        for (int i = 0; i < 5; i++) {
            stack.push(i);
            System.out.println(stack);
        }

        stack.pop();
        System.out.println(stack);

        System.out.println(">>> LinkedListStack vs ArrayListStack");

        int opCount = 1000000;

        // 这个比较很复杂，如果数量少的话链表更快，但是多的话，链表会更慢，因为有大量的 new 操作

        ArrayStack<Integer> arrayStack = new ArrayStack<>();
        double time1 = testStack(arrayStack, opCount);
        System.out.println("ArrayStack, time: " + time1 + " s");

        LinkedListStack<Integer> linkedListStack = new LinkedListStack<>();
        double time2 = testStack(linkedListStack, opCount);
        System.out.println("LinkedListStack, time: " + time2 + " s");



        System.out.println(">>>>>>>>>>>>>>> Loop Queue\n");

        LinkedListQueue<Integer> linkedListQueue = new LinkedListQueue<>();
        for (int i = 0; i < 10; i++) {
            linkedListQueue.enqueue(i);
            System.out.println(linkedListQueue);

            if (i % 3 == 2) {
                linkedListQueue.dequeue();
                System.out.println(linkedListQueue);
            }
        }



        System.out.println(">>>>>>>>>>>>>>> Compare queue\n");

        int opCount2 = 100000;

        ArrayQueue<Integer> arrayQueue = new ArrayQueue<>();
        double timeA = testQueue(arrayQueue, opCount2);
        System.out.println("ArrayQueue, time: " + timeA + " s");


        LoopQueue<Integer> LoopQueue = new LoopQueue<>();
        double timeB = testQueue(LoopQueue, opCount2);
        System.out.println("LoopQueue, time: " + timeB + " s");


        LinkedListQueue<Integer> linkedListQueue1 = new LinkedListQueue<>();
        double timeC = testQueue(linkedListQueue1, opCount2);
        System.out.println("LinkedListQueue1, time: " + timeC + " s");

    }
}
