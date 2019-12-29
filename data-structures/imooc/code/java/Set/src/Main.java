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

    public static void main(String[] args) {

        BSTSet<String> bstSet = new BSTSet<>();
        System.out.println("BSTSet time: ");
        System.out.println(testSet(bstSet, "pride-and-prejudice.txt"));

        System.out.println("---");

        LinkedListSet<String> linkedListSet = new LinkedListSet<>();
        System.out.println("LinkedListSet time: ");
        System.out.println(testSet(linkedListSet, "pride-and-prejudice.txt"));
    }
}
