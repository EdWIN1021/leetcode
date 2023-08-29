const mapping = new Map([
  ["2", "abc"],
  ["3", "def"],
  ["4", "ghi"],
  ["5", "jkl"],
  ["6", "mno"],
  ["7", "pqrs"],
  ["8", "tuv"],
  ["9", "wxyz"],
]);

var letterCombinations = function (digits) {
  let i = digits.length - 1;
  return findCombinations(i, digits);
};

const findCombinations = (index, digits) => {
  if (digits === "") {
    return [];
  }

  if (index === 0) {
    return mapping.get(digits[index]).split("");
  }

  const temp = [];
  const curr = findCombinations(index - 1, digits);

  for (let i = 0; i < curr.length; i++) {
    for (let j = 0; j < mapping.get(digits[index]).length; j++) {
      temp.push(curr[i] + mapping.get(digits[index])[j]);
    }
  }

  return temp;
};

console.log(letterCombinations("235"));
