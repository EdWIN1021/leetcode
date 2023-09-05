/*
  [2, 3, 1, 1, 4]

  step 1: left = 0, right = 0
          max = 2
          
          left = right + 1
          right = 2
          
  step 2: left = 1, right =2
          max = 3 

          right = 
          left = right + 1

*/

var jump = function (nums) {
  let result = 0;
  let left = 0;
  let right = 0;

  while (right < nums.length - 1) {
    let max = 0;

    for (let i = left; i <= right; i++) {
      max = Math.max(max, nums[i] + i);
    }

    left = right + 1;
    right = max;

    result++;
  }

  return result;
};

console.log(jump([2, 1]));
