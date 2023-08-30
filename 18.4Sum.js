var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i <= nums.length - 4; i++) {
    if (nums[i - 1] === nums[i]) {
      continue;
    }

    for (let j = i + 1; j <= nums.length - 3; j++) {
      let l = j + 1;
      let r = nums.length - 1;

      if (nums[j] === nums[j - 1] && j - 1 !== i) {
        continue;
      }

      while (l !== r) {
        if (nums[l] === nums[l - 1] && l - 1 !== j) {
          l++;
          continue;
        }

        let sum = nums[i] + nums[j] + nums[l] + nums[r];
        if (sum < target) {
          l++;
        } else if (sum > target) {
          r--;
        } else {
          result.push([nums[i], nums[j], nums[l], nums[r]]);
          l++;
        }
      }
    }
  }
  return result;
};

console.log(fourSum([2, 2, 2, 2, 2], 8));
