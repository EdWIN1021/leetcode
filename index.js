var removeDuplicates = function (nums) {
  let i = 0;

  let counter = 1;

  while (i < nums.length) {
    if (nums[i] === nums[i + 1] && counter < 2) {
      counter++;
      i++;
    } else if (nums[i] === nums[i + 1] && counter === 2) {
      nums.splice(i, 1);
    } else if (nums[i] !== nums[i + 1]) {
      counter = 1;
      i++;
    }
  }

  console.log(nums);
};

removeDuplicates([1, 2, 2, 2]);
