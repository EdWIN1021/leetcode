var removeDuplicates = function (nums) {
  let l = 0;
  let r = 0;

  while (r < nums.length) {
    let count = 1;

    while (nums[r] === nums[r + 1] && r < nums.length) {
      r++;
      count++;
    }

    for (let i = 0; i < Math.min(2, count); i++) {
      nums[l] = nums[r];
      l++;
    }
    r++;
  }

  return l;
};

console.log(removeDuplicates([1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 5]));
