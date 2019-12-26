public class Main {

    public static void main(String[] args) {

        // 索引可以有语义或者无语义
        // 数组最大的优点：快速查询
        // 数组最好应用于 "索引有语义" 的情况

        Array arr = new Array(20);
        for (int i = 0; i < 10; i++) {
            arr.addLast(i);
        }
        System.out.println(arr);

        arr.add(1, 100);
        System.out.println(arr);

        arr.addFirst(-1);
        System.out.println(arr);

        arr.remove(2);
        System.out.println(arr);

        arr.removeElement(4);
        System.out.println(arr);
    }
}
