var singleNumber = function (nums) {
  let num = nums[0];
  for (let i = 1; i < nums.length; i++) {
    num ^= nums[i]
  }
  return num
};

let result = singleNumber([4, 1, 2, 1, 2]);
console.log(result);