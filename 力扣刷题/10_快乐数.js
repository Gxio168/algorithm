function isHappy(n) {
  let arr = new Set();
  while (1) {
    if (n === 1) return true;
    nums = [...n.toString()];
    n = nums.reduce((init, num) => init + parseInt(num) ** 2, 0);
    if (arr.has(n)) return false
    arr.add(n)
  }
};
let result = isHappy(4);
console.log(result);