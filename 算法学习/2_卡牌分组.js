const hasGroupsSizeX = function (arr) {
  arr = arr.sort((a, b) => a - b);
  let min = Number.MAX_SAFE_INTEGER
  let res = {}
  for (let i = 0, len = arr.length; i < len; i++) {
    if (res[arr[i]]) {
      res[arr[i]] =  res[arr[i]] + 1
      min = getMin(min, res[arr[i - 1]])
    } else {
      res[arr[i]] = 1
    }
  }
  if (min < 2) return false
  for (const item in res) {
    if (res[item] % min !== 0) return false
  }
  return true
}

const getMin = (a, b) => {
  return  a > b ? b : a
}


const testArr = [1, 1, 1, 2, 2]
let result = hasGroupsSizeX(testArr)
console.log(result);