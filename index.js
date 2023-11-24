//  [9, 9, 9] + 1 = [1, 0, 0, 0]

var plusOne = function (digits) {
  const nums = digits.reverse();

  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i] + 1;

    if (curr > 9) {
      nums[i] = 0;
    } else {
      nums[i] = curr;
      break;
    }
  }

  if (nums[nums.length - 1] === 0) {
    nums.push(1);
  }

  return nums.reverse();
};

console.log(plusOne([2, 3, 9]));
