(function () {
  let arr: number[] = [69, 26, 55, 32, 42, 29, 14, 42, 58, 43];
  function quickSort(arr: number[], left: number = 0, right: number = arr.length - 1): number[] {
    if (left < right) {
      let partitionIndex = partition(arr, left, right);
      quickSort(arr, left, partitionIndex - 1);
      quickSort(arr, partitionIndex + 1, right)
    }
    return arr
  }
  function partition(arr: number[], left: number, right: number): number {
    let pivot = left;
    let index = pivot + 1;
    for (let i = index; i <= right; i++) {
      if (arr[i] < arr[pivot]) {
        index++
      }
    }
    swap(arr, pivot, index - 1)
    return index - 1
  }
  function swap(arr: number[], i: number, j: number): void {
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  console.log(quickSort(arr));
})()