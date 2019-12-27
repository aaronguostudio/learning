public class LinkedList<E> {
    private class Node {
        public E e;
        public Node next;

        public Node (E e, Node next) {
            this.e = e;
            this.next = next;
        }

        public Node (E e) {
            this(e, null);
        }

        public Node () {
            this(null, null);
        }

        @Override
        public String toString() {
            return e.toString();
        }
    }

    private Node dummyHead;
    private int size;

    public LinkedList() {
        dummyHead = new Node(null, null);  // 设置虚拟头节点，方面后续的操作
        size = 0;
    }

    public int getSize () {
        return size;
    }

    public boolean isEmpty () {
        return size == 0;
    }

    public void add (int index, E e) {
        if (index < 0 || index > size)
            throw new IllegalArgumentException("Add failed. Illegal index.");

        // 因为引入了 dummyHead 所以不需要这个逻辑了
        // if (index == 0)
        //      addFirst(e);
        // else {

        Node prev = dummyHead;
        for (int i = 0; i < index; i++)
            prev = prev.next;

        prev.next = new Node(e, prev.next);
        size++;
    }

    public void addFirst (E e) {
        add(0, e);
    }

    public void addLast (E e) {
        add(size, e);
    }

    public E get (int index) {
        if (index < 0 || index >= size)
            throw new IllegalArgumentException("Get failed. Illegal index.");

        Node cur = dummyHead.next;
        for (int i = 0; i < index; i++) {
            cur = cur.next;
        }

        return cur.e;
    }

    public E getFirst() {
        return get(0);
    }

    public E getLast() {
        return get(size - 1);
    }

    public void set(int index, E e) {
        if (index < 0 || index >= size)
            throw new IllegalArgumentException("Set failed. Illegal index.");

        Node cur = dummyHead.next;
        for (int i = 0; i < index; i++) {
            cur = cur.next;
        }

        cur.e = e;
    }

    public boolean contains(E e) {
        Node cur = dummyHead.next;

        /*
        * // 也可以使用 while loop
        * while (cur != null) {
        *   if (cur.e.equals(e))
        *       return true;
        *   cur = cur.next;
        * }
        * */

        for (int i = 0; i < size; i++) {
            if (cur.e.equals(e)) {
                return true;
            }
            cur = cur.next;
        }
        return false;
    }

    public E remove(int index) {
        if (index < 0 || index >= size)
            throw new IllegalArgumentException("Set failed. Illegal index.");

        Node prev = dummyHead;
        for (int i = 0; i < index; i++)
            prev = prev.next;

        Node delNode = prev.next;
        prev.next = delNode.next;
        delNode.next = null;

        size--;

        return delNode.e;
    }

    public E removeFirst () {
        return remove(0);
    }

    public E removeLast () {
        return remove(size - 1);
    }

    @Override
    public String toString() {
        StringBuilder res = new StringBuilder();

        Node cur = dummyHead.next;

        /*
        * // 巧妙的运用 for
        * for(Node cur = dummyHead.next; cur != null; cur = cur.next)
        *   res.append(cur + "->");
        * */

        while (cur != null) {
            res.append(cur + "->");
            cur = cur.next;
        }

        res.append("NULL");
        return res.toString();
    }
}
