(function () {
  let arr: number[] = [69, 26, 55, 32, 42, 29, 14, 42, 58, 43];
  function shellSort(arr: number[]): number[] {
    var len = arr.length;
    let temp: number;
    let gap: number = 1;
    while (gap < len / 3) {
      gap = gap * 3 + 1;
    }
    for (gap; gap > 0; gap = Math.floor(gap / 3)) {
      for (var i = gap; i < len; i++) {
        temp = arr[i];
        for (var j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
          arr[j + gap] = arr[j];
        }
        arr[j + gap] = temp;
      }
    }
    return arr;
  }
  console.log(shellSort(arr));
})()