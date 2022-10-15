var twoSum = function (nums, target) {
  const len = nums.length;
  const map = new Map();

  for (let i = 0; i < len; i++) {
    const needNum = target - nums[i];

    if (map.has(needNum) && i !== map.get(needNum)) {
      return [map.get(needNum), i];
    }
    map.set(nums[i], i);
  }
}

let nums = [2, 7, 11, 15];
let target = 9;
let result = twoSum(nums, target);
console.log(result);