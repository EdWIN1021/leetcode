var BSTIterator = function (root) {
  this.stack = [];
  while (root) {
    this.stack.push(root);
    root = root.left;
  }
};

BSTIterator.prototype.next = function () {
  let node = this.stack.pop();
  if (node.right) {
    let curr = node.right;
    while (curr) {
      this.stack.push(curr);
      curr = curr.left;
    }
  }
  return node.val;
};

BSTIterator.prototype.hasNext = function () {
  return !!this.stack.length;
};
