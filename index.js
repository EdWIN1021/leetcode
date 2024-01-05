var productExceptSelf = function (nums) {
  let prefix = 1;
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  prefix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= prefix;
    prefix *= nums[i];
  }
  return result;
};
productExceptSelf([1, 2, 3, 4]);
