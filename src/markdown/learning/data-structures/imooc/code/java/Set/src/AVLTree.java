import java.util.ArrayList;

public class AVLTree<K extends Comparable<K>, V> {
    private class Node {
        public K key;
        public V value;
        public Node left, right;
        public int height;

        public Node (K key, V value) {
            this.key = key;
            this.value = value;
            left = null;
            right = null;
            height = 1;   // 1 代表叶子节点的位置，每添加一个元素，一定是从根节点开始添加
        }
    }

    private Node root;
    private int size;

    public AVLTree () {
        root = null;
        size = 0;
    }

    public int getSize () {
        return size;
    }

    public boolean isEmpty () {
        return size == 0;
    }

    // 获得节点高度
    private int getHeight (Node node) {
        if (node == null)
            return 0;
        return node.height;
    }

    // 向二分搜索树中添加新的元素(key, value)
    public void add(K key, V value){
        root = add(root, key, value);
    }

    // 计算节点的平衡因子
    private int getBalanceFactor(Node node) {
        if (node == null)
            return 0;
        return getHeight(node.left) - getHeight(node.right);
    }

    // 检查当前的树是否是一个二分搜索树
    // 每个节点的左小右大
    public boolean isBST () {
        return isBST(root);
    }

    private boolean isBST (Node node) {
        ArrayList<K> keys = new ArrayList<>();

        // 中序遍历
        inOrder(root, keys);
        for (int i = 1; i < keys.size(); i++)
            if (keys.get(i - 1).compareTo(keys.get(i)) > 0)
                return false;
        return true;
    }

    // 判断该二叉树是否是一个平衡的二叉树
    public boolean isBalanced () {
        return isBalanced(root);
    }

    private boolean isBalanced (Node node) {
        if (node == null)
            return true;
        int balanceFactor = getBalanceFactor(node);
        if (Math.abs(balanceFactor) > 1)
            return false;
        return isBalanced(node.left) && isBalanced(node.right);
    }

    // 中序遍历返回从小到大的数组
    private void inOrder (Node node, ArrayList<K> keys) {
        if (node == null)
            return;
        inOrder(node.left, keys);
        keys.add(node.key);
        inOrder(node.right, keys);
    }

    // 对节点y进行向右旋转操作，返回旋转后新的根节点x
    //        y                              x
    //       / \                           /   \
    //      x   T4     向右旋转 (y)        z     y
    //     / \       - - - - - - - ->    / \   / \
    //    z   T3                       T1  T2 T3 T4
    //   / \
    // T1   T2
    private Node rightRotate (Node y) {
        Node x = y.left;
        Node T3 = x.right;

        // 向右旋转过程
        x.right = y;
        y.left = T3;

        // 更新 height
        // 只有 x 和 y 的高度值发生了变化
        y.height = Math.max(getHeight(y.left), getHeight(y.right)) + 1;
        x.height = Math.max(getHeight(x.left), getHeight(x.right)) + 1;

        return x;
    }

    // 对节点y进行向左旋转操作，返回旋转后新的根节点x
    //    y                             x
    //  /  \                          /   \
    // T1   x      向左旋转 (y)       y     z
    //     / \   - - - - - - - ->   / \   / \
    //   T2  z                     T1 T2 T3 T4
    //      / \
    //     T3 T4
    private Node leftRotate (Node y) {
        Node x = y.right;
        Node T3 = x.left;
        x.left = y;
        y.right = T3;

        // 更新 height
        // 只有 x 和 y 的高度值发生了变化
        y.height = Math.max(getHeight(y.left), getHeight(y.right)) + 1;
        x.height = Math.max(getHeight(x.left), getHeight(x.right)) + 1;

        return x;
    }


    // 向以node为根的二分搜索树中插入元素(key, value)，递归算法
    // 返回插入新节点后二分搜索树的根
    private Node add(Node node, K key, V value){

        if(node == null){
            size ++;
            return new Node(key, value);
        }

        if(key.compareTo(node.key) < 0)
            node.left = add(node.left, key, value);
        else if(key.compareTo(node.key) > 0)
            node.right = add(node.right, key, value);
        else // key.compareTo(node.key) == 0
            node.value = value;

        // node 添加了新的节点，所以需要重新计算高度
        // 更新 height
        // 更新的原则是 1 + 左右子树中最大高度的那个
        node.height = 1 + Math.max(getHeight(node.left), getHeight(node.right));

        // 新的平衡因子
        int balanceFactor = getBalanceFactor(node);
//        if (Math.abs(balanceFactor) > 1)
//            System.out.println("Unbalanced: " + balanceFactor);

        // 平衡维护
        // LL 向左孩子的左侧添加
        if (balanceFactor > 1 && getBalanceFactor(node.left) >= 0)
            return rightRotate(node);

        // RR 向右孩子的右侧添加
        if (balanceFactor < -1 && getBalanceFactor(node.right) <= 0)
            return leftRotate(node);

        // LR 转换成 LL 再去处理
        if (balanceFactor > 1 && getBalanceFactor(node.left) < 0) {
            node.left = leftRotate(node.left);
            return rightRotate(node);
        }

        // LR 转换成 LL 再去处理
        if (balanceFactor < -1 && getBalanceFactor(node.right) > 0) {
            node.right = rightRotate(node.right);
            return leftRotate(node);
        }

        return node;
    }

    // 返回以node为根节点的二分搜索树中，key所在的节点
    private Node getNode(Node node, K key){

        if(node == null)
            return null;

        if(key.equals(node.key))
            return node;
        else if(key.compareTo(node.key) < 0)
            return getNode(node.left, key);
        else // if(key.compareTo(node.key) > 0)
            return getNode(node.right, key);
    }

    public boolean contains(K key){
        return getNode(root, key) != null;
    }

    public V get(K key){

        Node node = getNode(root, key);
        return node == null ? null : node.value;
    }

    public void set(K key, V newValue){
        Node node = getNode(root, key);
        if(node == null)
            throw new IllegalArgumentException(key + " doesn't exist!");

        node.value = newValue;
    }

    // 返回以node为根的二分搜索树的最小值所在的节点
    private Node minimum(Node node){
        if(node.left == null)
            return node;
        return minimum(node.left);
    }

    // 删除掉以node为根的二分搜索树中的最小节点
    // 返回删除节点后新的二分搜索树的根
    private Node removeMin(Node node){

        if(node.left == null){
            Node rightNode = node.right;
            node.right = null;
            size --;
            return rightNode;
        }

        node.left = removeMin(node.left);
        return node;
    }

    // 从二分搜索树中删除键为key的节点
    public V remove(K key){

        Node node = getNode(root, key);
        if(node != null){
            root = remove(root, key);
            return node.value;
        }
        return null;
    }

    private Node remove(Node node, K key){

        if( node == null )
            return null;

        Node retNode;
        if( key.compareTo(node.key) < 0 ){
            node.left = remove(node.left , key);
            retNode = node;
        }
        else if(key.compareTo(node.key) > 0 ){
            node.right = remove(node.right, key);
            retNode = node;
        }
        else{   // key.compareTo(node.key) == 0

            // 待删除节点左子树为空的情况
            if(node.left == null){
                Node rightNode = node.right;
                node.right = null;
                size --;
                retNode = rightNode;
            }

            // 待删除节点右子树为空的情况
            else if(node.right == null){
                Node leftNode = node.left;
                node.left = null;
                size --;
                retNode = leftNode;
            } else {
                // 待删除节点左右子树均不为空的情况

                // 找到比待删除节点大的最小节点, 即待删除节点右子树的最小节点
                // 用这个节点顶替待删除节点的位置
                Node successor = minimum(node.right);
                successor.right = remove(node.right, successor.key);
                successor.left = node.left;

                node.left = node.right = null;
                retNode = successor;
            }
        }

        if (retNode == null)
            return null;

        retNode.height = 1 + Math.max(getHeight(retNode.left), getHeight(retNode.right));

        int balanceFactor = getBalanceFactor(retNode);

        if (balanceFactor > 1 && getBalanceFactor(retNode.left) >= 0)
            return rightRotate(retNode);

        if (balanceFactor < -1 && getBalanceFactor(retNode.right) <= 0)
            return leftRotate(retNode);

        if (balanceFactor > 1 && getBalanceFactor(retNode.left) < 0) {
            retNode.left = leftRotate(retNode.left);
            return rightRotate(retNode);
        }

        if (balanceFactor < -1 && getBalanceFactor(retNode.right) > 0) {
            retNode.right = rightRotate(retNode.right);
            return leftRotate(retNode);
        }

        return retNode;
    }

    public static void main(String[] args){

        System.out.println("Pride and Prejudice");

        ArrayList<String> words = new ArrayList<>();
        if(FileOperation.readFile("pride-and-prejudice.txt", words)) {
            System.out.println("Total words: " + words.size());

            AVLTree<String, Integer> map = new AVLTree<>();

            for (String word : words) {
                if (map.contains(word))
                    map.set(word, map.get(word) + 1);
                else
                    map.add(word, 1);
            }

            System.out.println("Total different words: " + map.getSize());
            System.out.println("Frequency of PRIDE: " + map.get("pride"));
            System.out.println("Frequency of PREJUDICE: " + map.get("prejudice"));

            System.out.println("is BST: " + map.isBST());
            System.out.println("is Balanced: " + map.isBalanced());

            for(String word: words){
                map.remove(word);
                if(!map.isBST() || !map.isBalanced())
                    throw new RuntimeException();
            }
        }

        System.out.println();
    }
}
