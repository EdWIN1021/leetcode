var maxProfit = function (prices) {
  let left = 0;
  let right = left + 1;
  let result = 0;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      result = Math.max(result, prices[right] - prices[left]);
      right++;
    } else {
      left = right;
      right = left + 1;
    }
  }

  return result;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
