var merge = function (intervals) {
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  const output = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    let currEnd = output[output.length - 1][1];
    if (intervals[i][0] <= currEnd) {
      output[output.length - 1][1] = Math.max(intervals[i][1], currEnd);
    } else {
      output.push(intervals[i]);
    }
  }

  return output;
};

merge([
  [2, 3],
  [2, 2],
  [3, 3],
  [1, 3],
  [5, 7],
  [2, 2],
  [4, 6],
]);
