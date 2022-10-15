function moveZeroes(nums: number[]): void {
  let j: number = nums.length - 1;
  let i: number = 0;
  while(i < j) {
    if(nums[i] == 0) {
      nums.splice(i,1);
      nums.push(0);
      j--;
    }else {
      i++
    }
  }
};

// function moveZeroes(nums: number[]): void {
//   const {length} = nums
//   let j = 0, i=0
//   while (i<length) {
//     if (nums[i] !== 0) {
//       if (j<i) {
//         nums[j] = nums[i]
//         nums[i] = 0
//       }
//       j++
//     }
//     i++
//   }
// };


let nums: Array<number> = [1, 0, 3, 4, 5]
moveZeroes(nums);

