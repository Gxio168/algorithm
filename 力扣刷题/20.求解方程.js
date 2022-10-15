function getX(item) {
  if (item.replace('x', '') == '+') return 1
  if (item.replace('x', '') == '-') return -1
  if (item.replace('x', '') == '-0' || item.replace('x', '') == '+0') return 0
  return parseInt(item)
}
var solveEquation = function (equation) {
  let [left, right] = equation.split('=').map(item => {
    if (item[0] == '-') return item
    return '+' + item
  });
  right = right.replace(/[+-]/g, (item) => {
    if (item == '+') return item = '-'
    if (item == '-') return item = '+'
  })
  left = left.concat(right)
  console.log(left);
  left = left.replace(/[+-]/g, (item) => {
    if (item == '+') return item = '.+'
    if (item == '-') return item = '.-'
  })
  left = left.split('.').slice(1);
  let { x, num } = left.reduce((pre, item) => {
    if (item.indexOf('x') == -1) {
      pre.num += parseInt(item)
    } else {
      pre.x += getX(item)
    }
    return pre
  }, { x: 0, num: 0 })
  if (x !== 0 && num == 0) return 'x=0'
  if (x == 0 && num == 0) return 'Infinite solutions'
  if (x == 0 && num !== 0) return 'No solution'
  return `x=${-num / x}`
};

let res = solveEquation("2x+3x-6x=x+2")
console.log(res);