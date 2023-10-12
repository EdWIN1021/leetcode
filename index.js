var minSubArrayLen = function (target, nums) {
  let result = Infinity;
  let left = 0;
  let right = 0;
  let total = 0;

  while (right < nums.length) {
    total += nums[right];
    if (total < target) {
      right++;
    } else {
      total = total - nums[left] - nums[right];
      result = Math.min(result, right - left + 1);
      left++;
    }
  }

  return result === Infinity ? 0 : result;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
