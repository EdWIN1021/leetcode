/*
  example: 1, 2, 4, 5, 6

  1. reverse entire array => 6, 5, 4, 2, 1

  2. reverse 1st part => 4, 5, 6

  3. reverse 2nd part => 1, 2

  4. [4, 5, 6, 1, 2]

*/

var rotate = function (nums, k) {
  k = k % nums.length;

  if (nums.length > 1) {
    nums.reverse();
    reverseProtion(0, k - 1, nums);
    reverseProtion(k, nums.length - 1, nums);
  }

  console.log(nums);
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
