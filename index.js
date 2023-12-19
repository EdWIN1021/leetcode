var removeElement = function (nums, val) {
  let i = 0;
  while (i < nums.length) {
    if (nums[i] === val) {
      nums.splice(i, 1);
    } else {
      i++;
    }
  }
};

removeElement([3, 2, 2, 3], 3);
