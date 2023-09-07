var isPalindrome = function (s) {
  if (s === "") {
    return true;
  }
  s = s.replaceAll(/[^A-Za-z0-9]+/g, "").toLowerCase();
  return s === s.split("").reverse().join("");
};

console.log(isPalindrome("pp"));
