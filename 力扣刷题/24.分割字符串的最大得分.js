// var maxScore = function (s) {
//   let arr = [...s]
//   let length = s.length
//   let maxNum = 0
//   for (let i = 1; i < length; i++) {
//     let leftNum = arr.slice(0, i).reduce((prev, next) => {
//       if (next == 0) return prev + 1;
//       return prev
//     }, 0)
//     let rightNum = arr.slice(i).reduce((prev, next) => {
//       if (next == 1) return prev + 1;
//       return prev
//     }, 0)
//     maxNum = rightNum + leftNum > maxNum ? rightNum + leftNum : maxNum
//   }
//   return maxNum
// };


var maxScore = function(s) {
  let score  =0;
  let length = s.length
  if(s[0] == '0') {
    score++
  }
  for(let i = 1;i<length;i++) {
    if(s[i] === '1') {
      score++
    }
  }
  let ans = score;
  for(let i = 1;i<length -1 ;i++) {
    if(s[i] == '1') {
      score--
    }else {
      score++
    }
    ans = Math.max(ans,score)
  }
  return ans
};

let result = maxScore("011101");
console.log(result);