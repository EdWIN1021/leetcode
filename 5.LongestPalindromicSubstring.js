// *

const s = "bb";

var longestPalindrome = function (s) {
  let result = [0, 1];

  for (let i = 0; i < s.length; i++) {
    let even = getStr(i - 1, i, s);
    let odd = getStr(i - 1, i + 1, s);

    current = even[1] - even[0] > odd[1] - odd[0] ? even : odd;
    result = current[1] - current[0] > result[1] - result[0] ? current : result;
  }
  return s.slice(result[0], result[1]);
};

const getStr = (left, right, str) => {
  while (left >= 0 && right < str.length) {
    if (str[left] !== str[right]) break;
    left--;
    right++;
  }
  return [left + 1, right];
};

console.log(longestPalindrome(s));
