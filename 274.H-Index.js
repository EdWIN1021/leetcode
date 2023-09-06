var hIndex = function (citations) {
  citations = citations.sort((a, b) => a - b);
  let pointer = 1;

  let i = citations.length - 1;

  while (i >= 0) {
    if (pointer <= citations[i]) {
      pointer++;
    }

    i--;
  }

  return pointer - 1;
};

console.log(hIndex([3, 0, 6, 1, 5]));
