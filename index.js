function reverseBits(n) {
  let result = 0;
  for (let i = 0; i < 32; i++) {
    result = (result << 1) | (n & 1);
    n >>>= 1; // Use unsigned right shift to fill with zeros
  }
  return result >>> 0; // Ensure the result is treated as an unsigned integer
}

let n = 43261596;
let result = reverseBits(n);
console.log(result);
