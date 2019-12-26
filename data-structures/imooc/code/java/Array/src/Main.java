public class Main {

    public static void main(String[] args) {

        // 索引可以有语义或者无语义
        // 数组最大的优点：快速查询
        // 数组最好应用于 "索引有语义" 的情况

        Array<Integer> arr = new Array<>(20); // 从 java 1.7 开始不需要重复 new Array<>
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

        Array<Student> students = new Array<>();
        students.addLast(new Student("Aaron", 100));
        students.addLast(new Student("Bob", 92));
        students.addLast(new Student("Chris", 90));

        System.out.println(students);
    }
}
