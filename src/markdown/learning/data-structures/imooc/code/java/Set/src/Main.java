import java.util.ArrayList;

public class Main {

    private static double testSet(Set<String> set, String filename) {
        long startTime = System.nanoTime();

        System.out.println(filename);
        ArrayList<String> words = new ArrayList<>();
        FileOperation.readFile(filename, words);

        for (String word: words)
            set.add(word);

        System.out.println(set.getSize());

        long endTime = System.nanoTime();
        return (endTime - startTime) / 1000000000.0;
    }

    private static double testMap(Map<String, Integer> map, String filename) {
        long startTime = System.nanoTime();

        System.out.println(filename);

        ArrayList<String> words = new ArrayList<>();

        if (FileOperation.readFile(filename, words)) {
            System.out.println("Total Words: " + words.size());

            for (String word: words)
                if (map.contains(word))
                    map.set(word, map.get(word) + 1);
                else
                    map.add(word, 1);

            System.out.println("Total different words: " + map.getSize());
            System.out.println("Frequency of pride: " + map.get("pride"));
            System.out.println("Frequency of prejudice: " + map.get("prejudice"));
        }

        long endTime = System.nanoTime();

        return (endTime - startTime) / 1000000000.0;
    }

    public static void main(String[] args) {

        BSTSet<String> bstSet = new BSTSet<>();
        System.out.println("BSTSet time: ");
        System.out.println(testSet(bstSet, "pride-and-prejudice.txt"));

        System.out.println("---");

        LinkedListSet<String> linkedListSet = new LinkedListSet<>();
        System.out.println("LinkedListSet time: ");
        System.out.println(testSet(linkedListSet, "pride-and-prejudice.txt"));

        System.out.println("Test performance for LinkedListMap and BSTMap");
        String filename = "pride-and-prejudice.txt";

        BSTMap<String, Integer> bstMap = new BSTMap<>();
        double time1 = testMap(bstMap, filename);
        System.out.println("BSTMap: " + time1);
        System.out.println();

        LinkedListMap<String, Integer> linkedListMap = new LinkedListMap<>();
        double time2 = testMap(linkedListMap, filename);
        System.out.println("Linked List: " + time2);
        System.out.println();

        AVLMap<String, Integer> avlMap = new AVLMap<>();
        double time3 = testMap(avlMap, filename);
        System.out.println("AVLMap: " + time3);
        System.out.println();

        System.out.println();

    }
}
