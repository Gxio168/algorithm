(function () {
  let arr = [69, 26, 55, 32, 42, 29, 14, 42, 58, 43];
  function mergeSort(arr) {
    let len = arr.length
    if (len < 2) {
      return arr
    }
    let middle = Math.floor(len / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right))
  }
  function merge(left, right) {
    let res = []
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        res.push(left.shift())
      } else {
        res.push(right.shift())
      }
    }
    while (left.length) {
      res.push(left.shift())
    }
    while (right.length) {
      res.push(right.shift())
    }
    return res;
  }
  console.log(mergeSort(arr));
})()