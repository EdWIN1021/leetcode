var longestConsecutive = function (nums) {
  let max = 0;
  let length = 0;

  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i <= nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      continue;
    }

    if (nums[i] + 1 === nums[i + 1]) {
      length += 1;
    } else {
      max = Math.max(max, length);
      length = 0;
    }
  }

  return nums.length < 1 ? 0 : max + 1;
};

console.log(longestConsecutive([1, 2, 0, 1]));
