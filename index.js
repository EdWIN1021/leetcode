var sortedArrayToBST = function (nums) {
  return converter(0, nums.length - 1, nums);
};

const converter = (start, end, nums) => {
  if (start > end) return null;

  const mid = Math.ceil((start + end) / 2);
  const root = new TreeNode(nums[mid]);

  root.left = converter(start, mid - 1, nums);
  root.right = converter(mid + 1, end, nums);

  return root;
};
