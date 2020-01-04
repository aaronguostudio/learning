public class Student {
    private String name;
    private int score;

    public Student (String nameIn, int sourceIn) {
        name = nameIn;
        score = sourceIn;
    }

    @Override
    public String toString () {
        return String.format("Student(name: %s, score: %d)", name, score);
    }
}
