function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var buildTree = function (preorder, inorder) {
  if (!inorder.length || !preorder.length) return null;

  let root = new TreeNode(preorder[0]);

  let mid = inorder.findIndex((num) => num === preorder[0]);
  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));

  return root;
};

buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]);
