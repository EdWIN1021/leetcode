var addBinary = function (a, b) {
  let result = [];
  a = a.split("").reverse();
  b = b.split("").reverse();

  let carry = 0;

  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    let sum = Number(a[i] || 0) + Number(b[i] || 0);

    if (sum > 1) {
      result.unshift(carry);
      carry = 1;
    } else {
      result.unshift(sum + carry > 1 ? 0 : sum + carry);
      carry = sum + carry > 1 ? 1 : 0;
    }
  }

  if (carry === 1) result.unshift(1);
  return result.join("");
};

console.log(addBinary("1111", "1111"));
