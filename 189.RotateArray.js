var rotate = function (nums, k) {
  k = k % nums.length;

  if (nums.length > 1) {
    nums.reverse();
    reverseProtion(0, k - 1, nums);
    reverseProtion(k, nums.length - 1, nums);
  }
};

const reverseProtion = (left, right, nums) => {
  while (left < right) {
    let temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;

    left++;
    right--;
  }
};

rotate([1, 2, 4, 5, 6], 3);
