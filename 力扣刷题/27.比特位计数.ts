function countBits(n: number): number[] {
  let bits: number[] = new Array(n + 1).fill(0);
  let hightBit = 0;
  for (let i = 1; i <= n; i++) {
    if ((i & (i - 1)) == 0) {
      hightBit = i;
    }
    bits[i] = bits[i - hightBit] + 1;
  }
  return bits
};
// 1,1,2,1,2,3,1,2,3,4;

let result = countBits(16);
console.log(result);