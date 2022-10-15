// function finalPrices(prices: number[]): number[] {
//   const { length } = prices
//   for (let i = 0; i < length - 1; i++) {
//     for (let j = i + 1; j < length; j++) {
//       if (prices[i] - prices[j] >= 0) {
//         prices[i] = prices[i] - prices[j];
//         break;
//       }
//     }
//   }
//   return prices
// };

var finalPrices = function (prices: number[]): number[] {
  let n = prices.length
  let arr:number[] = new Array(n).fill(0);
  let stack = [];
  for(let i = prices.length - 1; i >= 0; i--) {
    while(stack.length && stack[stack.length  -1] > prices[i]) {
      stack.pop()
    }
    arr[i] = stack.length === 0 ? prices[i] : prices[i] - stack[stack.length -1];
    stack.push(prices[i])
  }
  return arr
};





let price = [8, 7, 4, 2, 8, 1, 7, 7, 10, 1]
//[1, 3, 2, 1, 7, 0, 0, 6, 9 , 1]
let result = finalPrices(price);
console.log(result);