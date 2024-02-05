function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const root = new TreeNode(1);

root.left = new TreeNode(2);
root.right = new TreeNode(3);

root.left.right = new TreeNode(5);
root.right.right = new TreeNode(4);

var rightSideView = function (root) {
  const res = [];
  const q = [root];

  while (q.length) {
    res.push(q[q.length - 1].val);
    let levelSize = q.length;

    for (let i = 0; i < levelSize; i++) {
      let node = q.shift();

      if (node.left) {
        q.push(node.left);
      }

      if (node.right) {
        q.push(node.right);
      }
    }
  }
  return res;
};

console.log(rightSideView(root));
