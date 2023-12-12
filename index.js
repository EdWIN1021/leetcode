var containsNearbyDuplicate = function (nums, k) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], i);
    } else if (map.has(nums[i]) && i - map.get(nums[i]) <= k) {
      return true;
    } else {
      map.set(nums[i], i);
    }
  }

  return false;
};

console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
