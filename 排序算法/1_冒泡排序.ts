(function () {
  let arr: number[] = [69, 26, 55, 32, 42, 29, 14, 42, 58, 43]

  function bubbleSort(arr: number[]): number[] {
    let length = arr.length;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        }
      }
    }
    return arr
  }
  let res = bubbleSort(arr);
  console.log(res);
})()