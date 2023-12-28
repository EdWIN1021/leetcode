function reverseBits(n) {
  let result = 0;
  for (let i = 0; i < 32; i++) {
    if (n & (1 === 1)) result++;
    n >>>= 1;
  }
  return result;
}

let n = 43261596;
let result = reverseBits(n);
console.log(result);
