function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(7);

root.right.left = new TreeNode(4);
root.right.right = new TreeNode(8);

const isValidBST = (root) => {
  const dps = (root, lower, upper) => {
    if (!root) return true;
    if (lower > root.val || root.val > upper) {
      return false;
    }
    return dps(root.left, lower, root.val) && dps(root.right, root.val, upper);
  };

  return dps(root, -Infinity, Infinity);
};

console.log(isValidBST(root));
