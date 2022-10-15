let list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
function sum(list, lo = 0, hi = list.length - 1) {
  if (lo === hi) { return list[hi] }
  let mid = (lo + hi) >> 1
  return sum(list, lo, mid) + sum(list, mid + 1, hi)
}
console.log(sum(list));   //45
