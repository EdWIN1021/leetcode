var groupAnagrams = function (strs) {
  const map = new Map();
  for (let i = 0; i < strs.length; i++) {
    let sortedStr = strs[i].split("").sort().join("");
    if (!map.has(sortedStr)) {
      map.set(sortedStr, [strs[i]]);
    } else if (map.get(sortedStr)) {
      map.set(sortedStr, [...map.get(sortedStr), strs[i]]);
    }
  }
  return [...map.values()];
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
