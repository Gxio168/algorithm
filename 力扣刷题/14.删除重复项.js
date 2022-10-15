var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0
  let length = nums.length
  let map = new Map();
  for (let i = 0; i < length; i++) {
    if (map.has(nums[i])) {
      continue
    } else {
      nums.push(nums[i]);
      map.set(nums[i], i)
    }
  }
  nums = nums.copyWithin(0, length).slice(0, length)
  return map.size
};
let result = removeDuplicates([1, 1, 2]);
console.log(result);