/*
运行时间过长
var maxProfit = function (prices) {
  let arr = []
  for (let i = 1; i < prices.length; i++) {
    arr.push(prices[i] - prices[i - 1]);
  }
  let startIndex = arr.findIndex(item => item > 0);
  let endIndex = arr.length;
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i] > 0) {
      endIndex = i;
      break;
    }
  }
  if (startIndex === -1) return 0
  arr = arr.slice(startIndex, endIndex + 1);
  let maxNum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    let status = 0
    for (let j = i; j < arr.length; j++) {
      status += arr[j];
      maxNum = maxNum > status ? maxNum : status
    }
  }
  return maxNum
};
*/

// 还行的算法
// var maxProfit = function (arr) {
//   let maxNum = 0;
//   let midNum = 0;
//   for (let i = 0; i < arr.length - 1; i++) {
//     maxNum = arr[i + 1] - arr[i] + midNum > maxNum ? arr[i + 1] - arr[i] + midNum : maxNum
//     midNum = midNum + arr[i + 1] - arr[i] > 0 ? midNum + arr[i + 1] - arr[i] : 0
//   }
//   return maxNum
// };

// 最快算法
var maxProfit = function (arr) {
  if (!arr.length) return 0
  let min = arr[0];
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    min = Math.min(min, arr[i])
    max = Math.max(max, arr[i] - min)
    console.log(max, min);
  }
  return max
}

let result = maxProfit([7, 1, 5, 3, 6, 4])
console.log(result);