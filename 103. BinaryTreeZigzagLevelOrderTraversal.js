var zigzagLevelOrder = function (root) {
  if (!root) return [];

  const res = [];
  const q = [root];
  let level = 1;

  while (q.length) {
    let length = q.length;
    let temp = [];

    for (let i = 0; i < length; i++) {
      const node = q.shift();
      temp.push(node.val);
      if (node.left) {
        q.push(node.left);
      }
      if (node.right) {
        q.push(node.right);
      }
    }

    level% 2 === 0 ? res.push(temp.reverse()) : res.push(temp);
    level ++;
  }

  return res;
};
