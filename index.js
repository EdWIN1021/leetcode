var isValidSudoku = function (board) {
  let rows = new Map();
  let cols = new Map();
  let boxes = new Map();

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let currBoxIndex = `${Math.floor(i / 3)},${Math.floor(j / 3)}`;
      if (board[i][j] === ".") {
        continue;
      }

      if (rows.get(i) && rows.get(i).includes(board[i][j])) {
        return false;
      }

      if (cols.get(j) && cols.get(j).includes(board[i][j])) {
        return false;
      }

      if (
        boxes.get(currBoxIndex) &&
        boxes.get(currBoxIndex).includes(board[i][j])
      ) {
        return false;
      }

      if (!rows.has(i)) {
        rows.set(i, [board[i][j]]);
      } else {
        rows.set(i, [...rows.get(i), board[i][j]]);
      }

      if (!cols.has(j)) {
        cols.set(j, [board[i][j]]);
      } else {
        cols.set(j, [...cols.get(j), board[i][j]]);
      }

      if (!boxes.has(currBoxIndex)) {
        boxes.set(currBoxIndex, [board[i][j]]);
      } else {
        boxes.set(currBoxIndex, [...boxes.get(currBoxIndex), board[i][j]]);
      }
    }
  }

  return true;
};

console.log(
  isValidSudoku([
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "6", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],

    [".", ".", ".", ".", "8", ".", ".", ".", "."],
    ["9", ".", ".", ".", "7", "5", ".", ".", "."],
    [".", ".", ".", ".", "5", ".", ".", "8", "."],

    [".", ".", "9", ".", ".", ".", ".", ".", "."],
    ["2", ".", "6", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
  ])
);
