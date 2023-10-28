var rotate = function (matrix) {
  let left = 0;
  let top = 0;
  let right = matrix.length - 1;
  let bottom = matrix.length - 1;

  while (left < right) {
    for (let i = 0; i < right - left; i++) { // right -left !!!!1
      let temp = matrix[top][left + i];

      let temp1 = matrix[top + i][right];
      matrix[top + i][right] = temp;

      let temp2 = matrix[bottom][right - i];
      matrix[bottom][right - i] = temp1;

      let temp3 = matrix[bottom - i][left];
      matrix[bottom - i][left] = temp2;

      matrix[top][left + i] = temp3;
    }

    top++;
    left++;

    bottom--;
    right--;
  }
};

rotate([
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
]);
