 function Node(val, left, right, next) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
 };

 l




var connect = function (root) {
  let dummy = new Node();
  let pre = dummy;
  let curr = root;

  while (curr) {
    if (curr.left) {
      pre.next = curr.left;
      pre = pre.next;
    }

    if (curr.right) {
      pre.next = curr.right;
      pre = pre.next;
    }

    curr = curr.next;

    if (!curr) {
      pre = dummy;
      curr = dummy.next;
      dummy.next = null;
    }
  }

  return root;
};
