import java.util.Arrays;

class Solution {
    public static void main(String[] args){
        int[][] points = {{10,16},{2,8},{1,6},{7,12}};
        System.out.println(findMinArrowShots(points));
    }

    public static int findMinArrowShots(int[][] points) {
        Arrays.sort(points, (a, b) -> Integer.compare(a[0], b[0]));
      
        int count = 1;
        int[] start = points[0];

        for(int i = 1; i < points.length; i++){
            if(points[i][0] > start[1]){
                count++;
                start = points[i];
            } else {
                start[0] = Math.max(start[0], points[i][0]);
                start[1] = Math.min(start[1], points[i][1]);
            }
        }
        return count;
    }


} 