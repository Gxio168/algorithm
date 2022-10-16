const maxSpacing = (arr) => {
  let spacing = 0
  const len = arr.length
  if (len < 2) return 0
  for (let i = 0; i < len - 1; i++) {
    let minIdx = i
    for (let j = i + 1; j < len; j++) {
      if (arr[minIdx] > arr[j]) {
        minIdx = j
      }
    }
    [arr[minIdx], arr[i]] = [arr[i], arr[minIdx]]
    if (i >= 1) {
      spacing = spacing > arr[i] - arr[i - 1] ? spacing : arr[i] - arr[i - 1]
    }
  }
  return spacing > arr[len - 1] - arr[len - 2] ? spacing : arr[len - 1] - arr[len - 2]
}

const arr = [3, 1, 9, 6]
const result = maxSpacing(arr)
console.log(result);