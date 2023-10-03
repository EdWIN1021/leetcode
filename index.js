var strStr = function (haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      for (let j = 0; j <= needle.length; j++) {
        if (needle === haystack.slice(i, j + i)) {
          return i;
        }
      }
    }
  }
  return -1;
};

console.log(strStr("hello", "ll"));
