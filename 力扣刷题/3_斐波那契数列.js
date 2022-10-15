let list = [0, 1]
console.log(fibo1(1000));

// 递归算法速度慢
function fibo(num) {
  return num < 2 ? num : fibo(num - 1) + fibo(num - 2)
}

// 迭代算法速度快
function fibo1(num) {
  let f = 0;
  let g = 1;
  while (0 < num--) {
    g = g + f;
    f = g - f;
  }
  return f
}