var summaryRanges = function (nums) {
  let left = 0;
  let right = 0;
  let result = [];

  while (right < nums.length) {
    if (nums[right] + 1 !== nums[right + 1]) {
      if (nums[left] === nums[right]) {
        result.push(`${nums[left]}`);
      } else {
        result.push(`${nums[left]}->${nums[right]}`);
      }
      left = right + 1;
    }
    right++;
  }
  return result;
};

summaryRanges([0, 2, 3, 4, 6, 8, 9]);
