import java.util.ArrayList;

public class LinkedListSet<E> implements Set<E> {

    private LinkedList list;

    public LinkedListSet() {
        this.list = new LinkedList();
    }

    @Override
    public void add(E e) {
        if (list.contains(e))
            return;
        list.addFirst(e);  // addFirst 性能更好 O(1)
    }

    @Override
    public void remove(E e) {
        list.removeElement(e);
    }

    @Override
    public boolean contains(E e) {
        return list.contains(e);
    }

    @Override
    public boolean isEmpty() {
        return list.isEmpty();
    }

    @Override
    public int getSize() {
        return list.getSize();
    }

    // 可以发现 LinkedListSet 会比 BSTSet 慢很多
    public static void main (String[] args) {
        System.out.println("Pride and Prejudice");

        ArrayList<String> words1 = new ArrayList<>();

        FileOperation.readFile("pride-and-prejudice.txt", words1);

        LinkedListSet<String> set1 = new LinkedListSet<>();

        for (String word: words1)
            set1.add(word);

        System.out.println(set1.getSize());

        System.out.println();

        System.out.println("A Tale of Two Cities");

        ArrayList<String> words2 = new ArrayList<>();

        FileOperation.readFile("a-tale-of-two-cities.txt", words2);

        LinkedListSet<String> set2 = new LinkedListSet<>();

        for(String word: words2)
            set2.add(word);
        System.out.println(set2.getSize());
    }
}