let s = "abcabcbb";

var lengthOfLongestSubstring = function (s) {
  let result = 0;
  let i = 0;
  let j = 0;
  const set = new Set();

  while (j < s.length) {
    if (!set.has(s[j])) {
      set.add(s[j]);
      result = Math.max(set.size, result);
      j++;
    } else {
      set.delete(s[i]);
      i++;
    }
  }

  return result;
};

console.log(lengthOfLongestSubstring(s));
