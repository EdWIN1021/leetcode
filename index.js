var wordPattern = function (pattern, s) {
  const str = s.split(" ");
  if (str.length !== pattern.length) return false;
  const map = new Map();

  for (let i = 0; i < str.length; i++) {
    if (
      !map.get(str[i]) &&
      !map.has(str[i]) &&
      !Array(...map.values()).includes(pattern[i])
    ) {
      map.set(str[i], pattern[i]);
    } else if (map.get(str[i]) !== pattern[i]) {
      return false;
    }
  }
  return true;
};

console.log(wordPattern("abba", "dog dog dog dog"));
