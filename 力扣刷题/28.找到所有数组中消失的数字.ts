function findDisappearedNumbers(nums: number[]): number[] {
  const { length } = nums;
  let arr: Array<number> = new Array(length).fill(0);
  nums.forEach(num => {
    arr[num - 1] = num
  })
  let arr1: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr1.push(i + 1)
    }
  }
  return arr1
};

let result = findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]);
console.log(result);

