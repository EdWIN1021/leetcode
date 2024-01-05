var hIndex = function (citations) {
  arr = citations.sort((a, b) => a - b);
  let count = 0;

  for (let i = citations.length - 1; i >= 0; i--) {
    if (citations[i] > count) {
      count++;
    }
  }
  return count;
};

console.log(hIndex([3, 0, 6, 1, 5]));
