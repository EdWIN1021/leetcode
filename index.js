var canJump = function (nums) {
  let right = nums.length - 1;
  let left = right - 1;

  while (left >= 0) {
    if (nums[left] >= right - left) {
      right = left;
    }
    left--;
  }

  return right === 0;
};

console.log(canJump([2, 3, 1, 1, 4]));
