var jump = function (nums) {
  let max = 0;
  let currMax = 0;
  let result = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    max = Math.max(max, nums[i] + i);
    if (currMax === i) {
      result++;
      currMax = max;
    }
  }
  return result;
};

console.log(jump([2, 3, 0, 1, 4]));
