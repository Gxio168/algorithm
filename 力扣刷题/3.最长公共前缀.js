function longestCommonPrefix(strs) {
  if (strs.length === 0) return
  if (strs.length === 1) return strs[0]
  let arr = [...strs[0]]
  strs.shift()
  let input = strs.reduce((arr, strs1) => {
    let arr1 = [...strs1]
    let newArr = []
    for (let i = 0; i < arr1.length; i++) {
      if (arr[i] === arr1[i]) {
        newArr.push(arr[i])
      } else {
        break;
      }
    }
    return newArr;
  }, arr);
  return input.join('')
}
let result = longestCommonPrefix(["bsaad", "b"]);
console.log(result);





