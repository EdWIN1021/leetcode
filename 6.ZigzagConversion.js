const s = "PAYPALISHIRING";
const numRows = 4;

var convert = function (s, numRows) {
  if (numRows === 1 || s.length < numRows) {
    return s;
  }

  let result = [];
  let str = s.split("");
  while (str.length > 0) {
    let temp = [];

    for (let i = 0; i < numRows; i++) {
      str.length > 0 ? temp.push(str.shift()) : temp.push("");
    }

    result.push(temp);

    if (str.length > 0) {
      temp = Array(numRows).fill("");
      for (let j = numRows - 2; j > 0; j--) {
        temp[j] = str.shift();
        if (str.length === 0) break;
      }
      result.push(temp);
    }
  }

  let output = "";
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < result.length; j++) {
      if (result[j][i] !== "") {
        output += result[j][i];
      }
    }
  }
  return output;
};

console.log(convert(s, numRows));
