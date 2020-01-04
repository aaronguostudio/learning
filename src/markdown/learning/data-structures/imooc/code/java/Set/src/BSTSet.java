import java.util.ArrayList;

public class BSTSet<E extends Comparable<E>> implements Set<E> {
    private BST<E> bst;

    public BSTSet() {
        bst = new BST<>();
    }

    @Override
    public void add(E e) {
        bst.add(e);
    }

    @Override
    public void remove(E e) {
        bst.remove(e);
    }

    @Override
    public boolean contains(E e) {
        return bst.contains(e);
    }

    @Override
    public boolean isEmpty() {
        return bst.isEmpty();
    }

    @Override
    public int getSize() {
        return bst.size();
    }

    public static void main (String[] args) {
        System.out.println("Pride and Prejudice");

        ArrayList<String> words1 = new ArrayList<>();

        FileOperation.readFile("pride-and-prejudice.txt", words1);

        BSTSet<String> set1 = new BSTSet<>();

        for (String word: words1)
            set1.add(word);

        System.out.println(set1.getSize());

        System.out.println();

        System.out.println("A Tale of Two Cities");

        ArrayList<String> words2 = new ArrayList<>();

        FileOperation.readFile("a-tale-of-two-cities.txt", words2);

        BSTSet<String> set2 = new BSTSet<>();

        for(String word: words2)
            set2.add(word);
        System.out.println(set2.getSize());
    }
}
