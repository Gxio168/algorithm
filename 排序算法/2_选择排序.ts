(function () {
  let arr: number[] = [69, 26, 55, 32, 42, 29, 14, 42, 58, 43];
  function selectionSort(arr: number[]): number[] {
    let len = arr.length;
    let minIndex = 0;
    for (let i = 0; i < len - 1; i++) {
      minIndex = i;
      for (let j = i; j < len; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j
        }
      }
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
    return arr
  }
  console.log(selectionSort(arr));
})()