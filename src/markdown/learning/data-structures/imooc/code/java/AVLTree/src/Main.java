import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;

public class Main {

    public static void main(String[] args) {
	// write your code here
        System.out.println("Price and prejudice");

        ArrayList<String> words = new ArrayList<>();

        if (FileOperation.readFile("pride-and-prejudice.txt", words)) {

            // try the worst case of BST
            Collections.sort(words);

            // BST
            long startTime = System.nanoTime();

            BST<String, Integer> bst = new BST<>();
            for (String word : words) {
                if (bst.contains(word)) {
                    bst.set(word, bst.get(word) + 1);
                } else
                    bst.add(word, 1);
            }
            for (String word : words) {
                bst.contains(word);
            }

            // AVLTree
            long endTime = System.nanoTime();
            double time = (endTime - startTime) / 1000000000.0;
            System.out.println("BST: " + time + " s");

            startTime = System.nanoTime();

            AVLTree<String, Integer> avlTree = new AVLTree<>();
            for (String word : words) {
                if (avlTree.contains(word)) {
                    avlTree.set(word, avlTree.get(word) + 1);
                } else
                    avlTree.add(word, 1);
            }
            for (String word : words) {
                avlTree.contains(word);
            }

            endTime = System.nanoTime();
            time = (endTime - startTime) / 1000000000.0;
            System.out.println("AVL: " + time + " s");

            System.out.println();
        }
    }
}
