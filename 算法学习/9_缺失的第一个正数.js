const firstMissingPositive = (arr) => {
  const len = arr.length
  let curNum = 1
  for (let i = 0; i < len; i++) {
    let minIdx = i
    for (let j = i + 1; j < len; j++) {
      if (arr[minIdx] > arr[j]) {
        minIdx = j
      }
    }
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]]
    if (arr[i] > 0) {
      if (arr[i] === curNum) {
        curNum++
      } else if (arr[i] > curNum) {
        return curNum
      }
    }
  }
  return curNum
}

const arr = [-2, 0, 2, 4]
const result = firstMissingPositive(arr)
console.log(result);