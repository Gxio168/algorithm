function jump(nums) {
  let curIndex = 0
  let nextIndex = 0
  let steps = 0
  for (let i = 0; i < nums.length - 1; i++) {
    nextIndex = Math.max(nums[i] + i, nextIndex)
    if (nextIndex >= nums.length - 1) return steps + 1;
    if (i === curIndex) {
      curIndex = nextIndex
      steps++
    }
  }
  return steps
};
let result = jump([2, 3, 1, 1]);
console.log(result);
