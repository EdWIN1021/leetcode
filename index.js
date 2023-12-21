var averageOfLevels = function (root) {
  const queue = [root];
  const result = [];

  while (queue.length) {
    let currentSum = 0;
    let queueLength = queue.length;

    for (let i = 0; i < queueLength; i++) {
      let curr = queue.shift();

      currentSum += curr.val;
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }

    result.push(currentSum / queueLength);
  }
  return result;
};
