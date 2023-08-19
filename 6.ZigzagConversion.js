const s = "PAYPALISHIRING";
const numRows = 4;

var convert = function (s, numRows) {
  let result = [];
  let str = s.split("");
  while (str.length > 0) {
    let temp = [];

    for (let i = 0; i < numRows; i++) {
      str.length > 0 ? temp.push(str.shift()) : temp.push("");
    }

    result.push(temp);

    if (str.length > 0) {
      for (let j = numRows - 2; j > 0; j--) {
        temp = Array(numRows).fill("");
        temp[j] = str.shift();
        result.push(temp);
        if (str.length === 0) break;
      }
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
  å;
};

console.log(convert(s, numRows));
