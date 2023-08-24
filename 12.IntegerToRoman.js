var intToRoman = function (num) {
  const symbols = ["I", "V", "X", "L", "C", "D", "M"];
  const values = [1, 5, 10, 50, 100, 500, 1000];
  let divisorIndex = values.length - 1;
  let result = "";

  while (values[divisorIndex] >= 1) {
    let digit = Math.floor(num / values[divisorIndex]);
    if (digit < 1) {
      divisorIndex -= 2;
      continue;
    }

    if (divisorIndex === values.length - 1) {
      for (let i = 0; i < digit; i++) {
        result += symbols[divisorIndex];
      }
      num %= values[divisorIndex];
      divisorIndex -= 2;
      continue;
    }

    if (digit === 5) {
      result += symbols[divisorIndex + 1];
    }

    if (digit === 4) {
      result += symbols[divisorIndex] + symbols[divisorIndex + 1];
    }

    if (digit === 9) {
      result += symbols[divisorIndex] + symbols[divisorIndex + 2];
    }

    if (digit < 4) {
      for (let i = 0; i < digit; i++) {
        result += symbols[divisorIndex];
      }
    }

    if (digit > 5 && digit < 9) {
      result += symbols[divisorIndex + 1];
      for (let i = 0; i < digit - 5; i++) {
        result += symbols[divisorIndex];
      }
    }

    num %= values[divisorIndex];
    divisorIndex -= 2;
  }

  return result;
};

console.log(intToRoman(3579));
