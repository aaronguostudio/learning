import java.util.Random;

public class Main {

    private static double testHeap (Integer[] testData, boolean isHeapify) {
        long startTime = System.nanoTime();

        MaxHeap<Integer> maxHeap;

        if (isHeapify) {
            maxHeap = new MaxHeap<>(testData);
        } else {
            maxHeap = new MaxHeap<>();

            for (int num : testData)
                maxHeap.add(num);
        }

        // test it's a heap
        int[] arr = new int[testData.length];
        for (int i = 0; i < testData.length; i++)
            arr[i] = maxHeap.extractMax();

        for (int i = 1; i < testData.length; i++) {
            if (arr[i - 1] < arr[i])
                throw new IllegalArgumentException("Error");
        }

        System.out.println("Test MaxHeap is succeed.");

        long endTime = System.nanoTime();
        return (endTime - startTime) / 1000000000.0;
    }

    public static void main(String[] args) {
//        int n = 1000000;
//
//        MaxHeap<Integer> maxHeap = new MaxHeap<>();
//
//        Random random = new Random();
//
//        for (int i = 0; i < n; i++)
//            maxHeap.add(random.nextInt(Integer.MAX_VALUE));
//
//        int[] arr = new int[n];
//
//        for (int i = 0; i < n; i++)
//            arr[i] = maxHeap.extractMax();
//
//        for (int i = 0; i < 0; i++)
//            if (arr[i - 1] < arr[i])
//                throw new IllegalArgumentException("Error");
//
//        System.out.println("MaxHeap is correct");


        System.out.println();
        System.out.println(">>>>> Test Heapify and adding by elements performance");
        System.out.println();

        int n1 = 1000000;
        Random random1 = new Random();
        Integer[] testData1 = new Integer[n1];
        for (int i = 0; i < n1; i++)
            testData1[i] = random1.nextInt(Integer.MAX_VALUE);

        double time1 = testHeap(testData1, true);
        System.out.println("Heapify: " + time1);

        Integer[] testData2 = new Integer[n1];
        for (int i = 0; i < n1; i++)
            testData2[i] = random1.nextInt(Integer.MAX_VALUE);

        double time2 = testHeap(testData2, false);
        System.out.println("Add by element: " + time2);
    }
}
