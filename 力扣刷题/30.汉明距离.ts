function hammingDistance(x: number, y: number): number {
  let a = (x ^ y).toString(2);
  let count = 0
  a.replace(/1/g,() => {
    count++
    return '0'
  })
  return count
};

let result = hammingDistance(1,4);
console.log(result);