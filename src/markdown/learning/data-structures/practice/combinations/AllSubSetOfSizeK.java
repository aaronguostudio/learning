import java.util.*;

public class AllSubSetOfSizeK {

	public static class Point {
    private int x = 0;
		private int y = 0;
		public Point (int x, int y) {
			this.x = x;
			this.y = y;
		}
    public String toString() {
      return "(" + x + ", " + y + ")";
    }
  }

	public void subset(Point[] A, int k, int start, int currLen, boolean[] used, ArrayList<Point[]> res) {
		if (currLen == k) {
			ArrayList<Point> temp = new ArrayList<>();
			for (int i = 0; i < A.length; i++) {
				if (used[i] == true) {
					temp.add(A[i]);
				}
			}
			res.add(temp.toArray(new Point[temp.size()]));
			return;
		}
		if (start == A.length) {
			return;
		}
		// For every index we have two options,
		// 1.. Either we select it, means put true in used[] and make currLen+1
		used[start] = true;
		subset(A, k, start + 1, currLen + 1, used, res);
		// 2.. OR we dont select it, means put false in used[] and dont increase
		// currLen
		used[start] = false;
		subset(A, k, start + 1, currLen, used, res);
	}

	public static void main(String[] args) {
		Point A[] = {
			new Point(1,1), new Point(1,2), new Point(1,3), new Point(1,4), new Point(1,5)
		};
		boolean[] B = new boolean[A.length];
		AllSubSetOfSizeK i = new AllSubSetOfSizeK();
		ArrayList<Point[]> res = new ArrayList<>();
		i.subset(A, 3, 0, 0, B, res);
		for (int j = 0; j < res.size(); j++) {
			for (int k = 0; k < res.get(j).length; k++) {
				System.out.print(res.get(j)[k]);
			}
		}
	}

}
