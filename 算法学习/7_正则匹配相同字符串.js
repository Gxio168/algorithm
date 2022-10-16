const matchStr = (str, mode) => {
  let modeArr = mode.match(/([a-z.]\*)|([a-z]+(?=([a-z.]\*)|$))/g)
  console.log(modeArr);
  let cur = 0
  let strLen = str.length
  for (let i = 0, len = modeArr.length, m; i < len; i++) {
    m = modeArr[i].split('')
    if (m[1] === '*') {
      if (m[0] === '.') {
        cur = strLen
        break
      } else {
        while(str[cur] === m[0]) {
          cur++
        }
      }
    } else {
      for(let i = 0, len = m.length; i < len; i++) {
        if (str[cur++] !== m[i]) {
          return false
        }
      }
    }
  }
  return strLen === cur
}

const str = 'aaabc'
const mode = 'a*.*'
let result = matchStr(str, mode)
console.log(result);