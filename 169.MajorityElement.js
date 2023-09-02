var majorityElement = function (nums) {
  nums.sort((a, b) => a - b);
  let count = 1;
  let result = 0;
  let preCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      count++;
    } else {
      if (count > preCount) {
        preCount = count;
        result = nums[i];
      }
      count = 1;
    }
  }

  return result;
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2, 3, 3]));
