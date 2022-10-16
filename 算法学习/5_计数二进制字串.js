const countBinarySubstrings = (str) => {
  let countNum = 0
  for (let i = 0, len = str.length; i < len; i++) {
    let count = 1
    let flag = true
    for (let j = i + 1, len = str.length; j < len; j++) {
      if (str[i] === str[j]) {
        if (flag) {
          count = count + 1
        } else {
          break
        }
      } else {
        flag = false
        count--
        if (count == 0) {
          countNum = countNum + 1
          break
        }
      }
    }
  }
  return countNum
}

const str = '1001001'
const result = countBinarySubstrings(str)
console.log(result);