class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const root = new Node(2);
root.left = new Node(1);
root.right = new Node(3);

isValidBST = function (root) {
  const q = [root];

  while (q.length) {
    let level = q.length;
    for (let i = 0; i < level; i++) {
      let node = q.shift();

      if (node.left) {
        if (node.val < node.left.val) return false;
        q.push(node.left);
      }

      if (node.right) {
        if (node.val > node.right.val) return false;
        q.push(node.right);
      }
    }
  }

  return true;
};

console.log(isValidBST(root));
