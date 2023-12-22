var getMinimumDifference = function (root) {
  let pre = null;
  let result = Infinity;

  const dfs = (root) => {
    if (!root) return;
    dfs(root.left);
    if (pre) {
      result = Math.min(result, Math.abs(root.val - pre.val));
    }
    pre = root;
    dfs(root.right);
  };
  
  dfs(root);
  return result;
};
