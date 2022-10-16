const grayCode = (n) => {
  let len = n
  const arr = [0, 1];
  let times = 1
  const getCode = (orginalArr,times) => {
    let arr = [...orginalArr].reverse();
    arr = arr.map(item => item + 2 ** times)
    return arr
  }
  while (len > 1) {
    arr.push(...getCode(arr, times))
    times++
    len--
  }
  return arr
}
const num = 2
const result = grayCode(num)
console.log(result);