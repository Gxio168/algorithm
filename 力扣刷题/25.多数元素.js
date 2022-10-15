// var majorityElement = function (nums) {
//   let length = nums.length
//   if(length == 1) return nums[0]
//   const map = new Map();
//   for (let i = 0; i < length; i++) {
//     if (map.has(nums[i])) {
//       map.set(nums[i], map.get(nums[i]) + 1)
//       if (map.get(nums[i]) > length / 2) return nums[i]
//     } else {
//       map.set(nums[i], 1)
//     }
//   }
// };

const majorityElement = function (nums) {
  let mid = Math.floor(nums.length >> 1)
  nums.sort();
  return nums[mid]
}
let result = majorityElement([1]);
console.log(result);