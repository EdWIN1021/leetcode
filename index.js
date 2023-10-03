var reverseWords = function (s) {
  let result = "";
  let right = s.length;
  let left = right - 1;

  while (left >= -1) {
    if ((s[left] === " " || !s[left]) && s[left - 1] !== " ") {
      result += s.slice(left + 1, right).trim() + " ";
      right = left;
    }
    left--;
  }
  return result.trim();
};

console.log(reverseWords("the sky is  blue"));
