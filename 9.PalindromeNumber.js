const x = 12321;

var isPalindrome = function (x) {
  const str = x.toString();
  let left = Math.floor(str.length / 2) - 1;
  let right = str.length % 2 === 0 ? left + 1 : left + 2;

  while (left > 0 || right < str.length) {
    if (str[left] !== str[right]) return false;
    left--;
    right++;
  }

  return true;
};

console.log(isPalindrome(x));
