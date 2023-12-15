var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let result = 0;

  while (left !== right) {
    let area = Math.min(height[left], height[right]) * (right - left);
    result = Math.max(area, result);
    if (height[left] <= height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return result;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
