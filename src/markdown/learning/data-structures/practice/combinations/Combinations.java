import java.util.*;
public class Combinations {
  public class Point {
    private int x = 0;
    private int y = 0;
    public String toString() {
      return "(" + x + ", " + y + ")";
    }
  }

  public static void combination(Object[]  elements, int k){

    // get the length of the array
    // e.g. for {'A','B','C','D'} => N = 4
    int N = elements.length;

    if(k > N){
      System.out.println("Invalid input, K > N");
      return;
    }

    // init combination index array
    int pointers[] = new int[k];


    int r = 0; // index for combination array
    int i = 0; // index for elements array

    while(r >= 0){

      // forward step if i < (N + (r-K))
      if(i <= (N + (r - k))){
        pointers[r] = i;

        // if combination array is full print and increment i;
        if(r == k-1){
          System.out.println(pointers, elements);
          i++;
        }
        else{
          // if combination is not full yet, select next element
          i = pointers[r]+1;
          r++;
        }
      }

      // backward step
      else{
        r--;
        if(r >= 0)
          i = pointers[r]+1;

      }
    }
  }


  public static void main (String[] args) {
    Integer[] a = {1, 2, 3};
    combination(a, 3);
    for (int i = 0; i < a.length; i++) {
      System.out.println(a[i]);
    }
  }

}
