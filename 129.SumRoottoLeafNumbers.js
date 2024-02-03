var sumNumbers = function (root) {
  return dfs(root, "");
};

const dfs = function (root, value) {
  if (!root) return 0;

  if (!root.left && !root.right) {
    return value + root.val;
  }

  return (
    Number(dfs(root.left, value + root.val)) +
    Number(dfs(root.right, value + root.val))
  );
};
