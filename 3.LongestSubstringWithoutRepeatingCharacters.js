let s = "abcabcbb";

var lengthOfLongestSubstring = function (s) {
  let result = "";
  let temp = s;
  let num = 0;

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < temp.length; j++) {
      if (!result.includes(temp[j])) {
        result += temp[j];
      } else {
        break;
      }
    }

    if (num < result.length) {
      num = result.length;
    }

    result = "";
    temp = s.substring(i + 1, s.length);
  }

  return num;
};

console.log(lengthOfLongestSubstring(s));
