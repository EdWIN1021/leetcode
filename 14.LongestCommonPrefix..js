var longestCommonPrefix = function (strs) {
  if (strs.length <= 1) {
    return strs[0];
  }

  let result = "";
  for (let i = 1; i <= strs[0].length; i++) {
    let temp = strs[0].slice(0, i);
    let flag = true;

    for (let j = 1; j < strs.length; j++) {
      if (temp !== strs[j].slice(0, i)) {
        flag = false;
      }
    }
    if (flag) result = temp;
  }
  return result;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
