var maxProfit = function (prices) {
  let max = 0;
  let left = 0;
  let right = left + 1;

  while (right < prices.length) {
    if (prices[left] > prices[right]) {
      left = right;
    } else {
      max = Math.max(max, prices[right] - prices[left]);
    }

    right++;
  }
  return max;
};

console.log(maxProfit([7, 2, 5, 3, 1, 6]));
