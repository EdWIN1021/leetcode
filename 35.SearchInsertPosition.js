var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid = 0;

  while (left <= right) {
    mid = Math.floor((right + left) / 2);

    if (nums[mid] === target) return mid;

    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

console.log(searchInsert([1, 3, 4, 6, 8, 9, 10, 11, 13, 14, 16], 12));
