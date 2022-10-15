// function lengthOfLongestSubstring(s: string): number {
//   let maxLength = 0;
//   const { length } = s;
//   for (let i = 0; i < length - maxLength; i++) {
//     let max = 1
//     let set = new Set();
//     set.add(s[i])
//     for (let j = i + 1; j < length; j++) {
//       if (!set.has(s[j])) {
//         set.add(s[j])
//         max++
//       } else {
//         break;
//       }
//     }
//     maxLength = Math.max(maxLength, max)
//   }
//   return maxLength
// };

function lengthOfLongestSubstring(s: string): number {
  const { length } = s;
  if (length <= 1) return length
  let left = 0, right = 0
  const window = new Set();
  let maxLen = 0;
  while(right < length) {
    if(!window.has(s[right])) {
      maxLen = Math.max(maxLen,right - left + 1)
      window.add(s[right])
      right++
    }else {
      window.delete(s[left])
      left++;
    }
  }
  return maxLen
};

let s = "abcabd";
console.log(lengthOfLongestSubstring(s));

