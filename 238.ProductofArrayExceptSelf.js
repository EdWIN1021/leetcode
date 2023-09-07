var productExceptSelf = function (nums) {
  const prefix = [];
  prefix[0] = 1;
  let postfix = 1;

  for (let i = 1; i < nums.length; i++) {
    prefix[i] = nums[i - 1] * prefix[i - 1];
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    prefix[i] *= postfix;
    postfix *= nums[i];
  }

  return prefix;
};

productExceptSelf([4, 5, 1, 8, 2]);
