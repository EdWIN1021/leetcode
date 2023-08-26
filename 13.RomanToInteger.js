const symbols = ["M", "D", "C", "L", "X", "V", "I"];
const values = [1000, 500, 100, 50, 10, 5, 1];

var romanToInt = function (s) {
  let result = [];
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < symbols.length; j++) {
      if (s[i] === symbols[j]) {
        result.push(values[j]);
      }
    }
  }

  let k = 0;
  while (k < result.length) {
    if (result[k] < result[k + 1]) {
      answer += result[k + 1] - result[k];
      k += 2;
    } else {
      answer += result[k];
      k++;
    }
  }

  return answer;
};

romanToInt("MCMXCIV");
