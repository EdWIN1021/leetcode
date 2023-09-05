var canJump = function (nums) {
  let goal = nums.length - 1;
  let left = goal - 1;

  while (left >= 0) {
    if (left + nums[left] >= goal) {
      goal = left;
    }
    left--;
  }
  return goal === 0;
};

console.log(canJump([2, 3, 1, 1, 4]));
