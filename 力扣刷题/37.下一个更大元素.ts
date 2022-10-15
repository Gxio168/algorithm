function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  let map = new Map();
  let n2 = nums2.length;
  let ans: number[] = new Array(n2).fill(0);
  let stack = []
  for (let i = ans.length - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] < nums2[i]) {
      stack.pop()
    }
    ans[i] = stack.length === 0 ? -1 : stack[stack.length - 1];
    map.set(nums2[i], i);
    stack.push(nums2[i]);
  }
  for (let i = 0; i < nums1.length; i++) {
    if (map.has(nums1[i])) {
      nums1[i] = ans[map.get(nums1[i])]
    }
  }
  return nums1
}

let num1 = [2, 4]
let num2 = [1, 2, 3, 4]

let result = nextGreaterElement(num1, num2);
console.log(result);