const s = "  +  413";

var myAtoi = function (s) {
  s = s.trim();
  let end = 0;

  const signed = s[0] == "-" || s[0] == "+";

  if (!signed && isNaN(Number(s[0]))) {
    return 0;
  }

  if ((s[0] === "-" || s[0] === "+") && (s[1] === "-" || s[1] === "+")) {
    return 0;
  }

  const sign = s[0] === "-" ? -1 : 1;

  if (signed) s = s.substring(1, s.length);

  if (s[0] === " ") return 0;

  for (let i = 0; i < s.length; i++) {
    if (isNaN(Number(s[i])) || s[i] === " ") {
      end = i;
      break;
    }
  }

  const result = end === 0 ? sign * Number(s) : sign * Number(s.slice(0, end));

  if (isNaN(Number(result))) return 0;

  if (result < Math.pow(-2, 31)) {
    return Math.pow(-2, 31);
  }

  if (result > Math.pow(2, 31) - 1) {
    return Math.pow(2, 31) - 1;
  }

  return result;
};

console.log(myAtoi(s));
