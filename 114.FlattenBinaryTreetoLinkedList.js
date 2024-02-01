var flatten = function (root) {
  if (!root) {
    return null;
  }

  let leftTail = flatten(root.left);
  let rightTail = flatten(root.right);

  if (root.left) {
    leftTail.right = root.right;
    root.right = root.left;
    root.left = null;
  }

  return rightTail || leftTail || root;
};
