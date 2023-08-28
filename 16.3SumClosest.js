var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);

  let i = 0;
  let minValue = Number.MAX_SAFE_INTEGER;
  let result = 0;

  while (i <= nums.length - 3) {
    let j = i + 1;
    let k = nums.length - 1;

    if (nums[i] === nums[i - 1]) {
      i++;
      continue;
    }

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];

      if (Math.abs(sum - target) < minValue) {
        minValue = Math.abs(sum - target);
        result = sum;
      }

      if (sum <= target) {
        j++;
      } else {
        k--;
      }
    }
    i++;
  }
  return result;
};

console.log(threeSumClosest([1, 1, 1, 0], -100));
