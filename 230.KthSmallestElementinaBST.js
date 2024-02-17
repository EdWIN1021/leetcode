var kthSmallest = function (root, k) {
  if (!root) return null;
  const q = [root];
  let res = [];

  while (q.length) {
    let level = q.length;
    for (let i = 0; i < level; i++) {
      let node = q.shift();
      res.push(node.val);
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
  }
  res = res.sort((a, b) => a - b);
  return res[k - 1];
};
