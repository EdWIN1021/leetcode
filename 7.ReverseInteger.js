const x = 123;

var reverse = function (x) {
  const reversed = Number(Math.abs(x).toString().split("").reverse().join(""));
  const result = x > 0 ? reversed : reversed * -1;
  if (result > Math.pow(2, 31) - 1 || result < Math.pow(-2, 31)) {
    return 0;
  }

  return result;
};
