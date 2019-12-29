import java.util.LinkedList;
import java.util.Queue;
import java.util.Stack;

public class BST<E extends Comparable<E>> {
    private class Node {
        public E e;
        public Node left, right;

        public Node (E e) {
            this.e = e;
            left = null;
            right = null;
        }
    }

    private Node root;
    private int size;

    public BST () {
        root = null;
        size = 0;
    }

    public int size() {
        return size;
    }

    public boolean isEmpty() {
        return size == 0;
    }

    public void add(E e) {
//        if (root == null) {
//            root.e = e;
//        } else {
//            add(root, e);
//        }

        root = add(root, e);
    }

//    private void add (Node node, E e) {
//
//        if (e.equals(node.e))
//            return;
//        else if (e.compareTo(node.e) < 0 && node.left == null) {
//            node.left = new Node(e);
//            size++;
//            return;
//        } else if (e.compareTo(node.e) > 0 && node.right == null) {
//            node.right = new Node(e);
//            size++;
//            return;
//        }
//
//        if (e.compareTo(node.e) < 0)
//            add(node.left, e);
//        else
//            add(node.right, e);
//
//    }


    // 向以 node 为根的二分搜索树中插入元素 e，递归算法
    // 返回插入新节点后二分搜索树的根
    private Node add (Node node, E e) {

        // 简化版本
        if (node == null) {
            size++;
            return new Node(e);
        }

        if (e.compareTo(node.e) < 0)
            node.left = add(node.left, e);
        else if (e.compareTo(node.e) > 0)
            node.right = add(node.right, e);

        return node;
    }

    public boolean contains(E e) {
        return contains(root, e);
    }

    // 看以 node 为根的二分搜索树中是否波包含 e，递归算法
    public boolean contains(Node node, E e) {
        if (node == null)
            return false;

        if (e.compareTo(node.e) == 0)
            return true;
        else if (e.compareTo(node.e) < 0)
            return contains(node.left, e);
        else
            return contains(node.right, e);
    }

    // 前序遍历 -> 深度优先，借助 stack 实现
    public void preOrder () {
        preOrder(root);
    }

    // 前序遍历非递归算法，使用栈
    public void preOrderNR () {
        Stack<Node> stack = new Stack<>();
        stack.push(root);
        while (!stack.isEmpty()) {
            Node cur = stack.pop();
            System.out.println(cur.e);

            if (cur.right != null)
                stack.push(cur.right);

            if (cur.left != null)
                stack.push(cur.left);
        }
    }

    // 中序遍历
    public void inOrder () {
        inOrder(root);
    }

    // 后续遍历
    public void postOrder () {
        postOrder(root);
    }

    // 前序遍历以 node 为根的二分搜索树，递归算法
    private void preOrder (Node node) {
        if (node == null)
            return;

        // 打印出每个点
        System.out.println(node.e);

        preOrder(node.left);
        preOrder(node.right);
    }

    // 中序遍历以 node 为根的二分搜索树，递归算法
    // 返回的顺序从小到大
    private void inOrder (Node node) {
        if (node == null)
            return;

        // 打印出每个点
        inOrder(node.left);
        System.out.println(node.e);
        inOrder(node.right);
    }

    // 后序遍历以 node 为根的二分搜索树，递归算法
    // 应用场景，比如为二分搜索树释放内存
    private void postOrder (Node node) {
        if (node == null)
            return;

        // 打印出每个点
        postOrder(node.left);
        postOrder(node.right);
        System.out.println(node.e);
    }

    @Override
    public String toString() {
        StringBuilder res = new StringBuilder();

        generateBSTString(root, 0, res);
        return res.toString();
    }

    private void generateBSTString(Node node, int depth, StringBuilder res) {
        if (node == null) {
            res.append(generateDepthString(depth) + "null\n");
            return;
        }

        res.append(generateDepthString(depth) + node.e + "\n");
        generateBSTString(node.left, depth + 1, res);
        generateBSTString(node.right, depth + 1, res);
    }

    private String generateDepthString (int depth) {
        StringBuilder res = new StringBuilder();
        for (int i = 0; i < depth; i++)
            res.append("--");
        return res.toString();
    }

    // 层序遍历 -> 广度优先, 借助 queue 实现
    // 优点是可以更快的找到解，常用语最短路径
    public void levelOrder () {
        // java 中的 Queue 是一个接口，需要使用另一种底层的数据结构
        Queue<Node> q = new LinkedList<>();
        q.add(root);
        while(!q.isEmpty()) {
            Node cur = q.remove();
            System.out.println(cur.e);

            if(cur.left != null)
                q.add(cur.left);
            if( cur.right != null)
                q.add(cur.right);
        }
    }

    public E minimum () {
         if (size == 0)
             throw new IllegalArgumentException("BST is empty");
         return minimum(root).e;
    }

    public E maximum () {
        if (size == 0)
            throw new IllegalArgumentException("BST is empty");
        return maximum(root).e;
    }

    private Node minimum(Node node) {
        if (node.left == null)
            return node;
        return minimum(node.left);
    }

    private Node maximum(Node node) {
        if (node.right == null)
            return node;
        return maximum(node.right);
    }

    public E removeMin () {
        E ret = minimum();
        root = removeMin(root);
        return ret;
    }

    public E removeMax () {
        E ret = maximum();
        root = removeMax(root);
        return ret;
    }

    private Node removeMin(Node node) {
        if (node.left == null) {
            Node rightNode = node.right;
            node.right = null;
            size--;
            return rightNode;
        }

        node.left = removeMin(node.left);
        return node;
    }

    private Node removeMax(Node node) {
        if (node.right == null) {
            Node leftNode = node.left;
            node.left = null;
            size--;
            return leftNode;
        }

        node.right = removeMax(node.right);
        return node;
    }


    private void remove(E e) {
        root = remove(root, e);
    }

    private Node remove (Node node, E e) {
        if (node == null)
            return null;
        if (e.compareTo(node.e) < 0) {
            node.left = remove(node.left, e);
            return node;
        } else if (e.compareTo(node.e) > 0) {
            node.right = remove(node.right, e);
            return node;
        } else {
            if (node.left == null) {
                Node rightNode = node.right;
                node.right = null;
                size--;
                return rightNode;
            }

            if (node.right == null) {
                Node leftNode = node.left;
                node.left = null;
                size--;
                return leftNode;
            }

            // 如果左右子树均不为空的话
            // 找到比待删除节点大的最小节点，也就是待删除节点右子树的最小（左）节点
            // 用这个节点替代删除的节点
            // 也可以用待删除节点的前驱来替代

            Node successor = minimum(node.right);  // 后继
            successor.right = removeMin(node.right);
            successor.left = node.left;

            node.left = node.right = null;
            return successor;
        }
    }
}

























