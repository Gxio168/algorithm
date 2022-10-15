(function () {
  let arr: number[] = [69, 26, 55, 32, 42, 29, 14, 42, 58, 43];
  function insertionSort(arr: number[]): number[] {
    let len = arr.length;
    let pre: number, current: number;
    for (let i = 1; i < len; i++) {
      pre = i - 1;
      current = arr[i]
      while (pre >= 0 && arr[pre] > current) {
        arr[pre + 1] = arr[pre];
        pre--
      }
      [current, arr[pre + 1]] = [arr[pre + 1], current]
    }
    return arr;
  }
  console.log(insertionSort(arr));
})()