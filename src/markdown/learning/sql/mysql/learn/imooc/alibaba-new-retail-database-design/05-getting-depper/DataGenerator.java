import java.io.BufferedWriter;
import java.io.FileWriter;
import java.util.UUID;

public class DataGenerator {
  public static void main (String[] args) {
    try {
      FileWriter w = new FileWriter("./data.csv");
      BufferedWriter bw = new BufferedWriter(w);

      bw.write("id,val\n");

      for (int i = 1; i <= 10000000; i++) {
        String uuid = UUID.randomUUID().toString();
        bw.write(i + ","  + uuid + "\n");
      }

      bw.close();
      w.close();
      System.out.println("Finished");

    } catch (Exception e) {
      e.printStackTrace();
    }
  }
}
