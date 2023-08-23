const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

var maxArea = function (height) {
  let result = 0;
  let area;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    area = Math.min(height[left], height[right]) * (right - left);
    result = Math.max(result, area);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return result;
};

console.log(maxArea(height));
