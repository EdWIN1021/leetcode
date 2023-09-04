var maxProfit = function (prices) {
  let result = 0;

  let left = 0;
  let right = left + 1;

  while (right < prices.length) {
    if (prices[left] > prices[right]) {
      left++;
    } else {
      result += prices[right] - prices[left];
      left = right;
    }

    right++;
  }
  return result;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
