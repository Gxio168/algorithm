let list = [1, 3, 5, 7, 9]
function reveres(list, lo, hi) {
  if (lo < hi) {
    [list[lo], list[hi]] = [list[hi], list[lo]]
    reveres(list, lo + 1, hi - 1)
  }
}

reveres(list, 0, 4)
console.log(list);    //[ 9, 7, 5, 3, 1 ]