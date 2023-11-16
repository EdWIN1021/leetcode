var isHappy = function (n) {
  const nums = [];

  while (true) {
    let sum = n
      .toString()
      .split("")
      .reduce((acc, curr) => acc + Math.pow(curr, 2), 0);

    if (sum === 1) {
      return true;
    }

    if (!nums.includes(sum)) {
      nums.push(sum);
    } else {
      return false;
    }

    n = sum;
  }
};

console.log(isHappy(2));
