var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let i = 0;
  let result = [];

  if (nums.every((a) => a === 0)) {
    return [[0, 0, 0]];
  }

  while (i <= nums.length - 3) {
    let j = i + 1;
    let k = nums.length - 1;

    if (nums[i - 1] === nums[i]) {
      i++;
      continue;
    }

    while (j < k) {
      if (nums[j - 1] === nums[j] && j - 1 !== i) {
        j++;
        continue;
      }

      if (nums[i] + nums[j] + nums[k] < 0) {
        j++;
      } else if (nums[i] + nums[j] + nums[k] > 0) {
        k--;
      } else {
        result.push([nums[i], nums[j], nums[k]]);
        j++;
      }
    }

    i++;
  }
  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
