var isPalindrome = function (x) {

  // 方法一
  // let arr = [...x.toString()]
  // if (arr.length === 1) return true
  // let pre = arr.slice(0, arr.length / 2).join('')
  // let pro = arr.slice(-arr.length / 2).reverse().join('')
  // if (parseInt(pre) === parseInt(pro)) {
  //   return true
  // }
  // return false

  // 方法二
  // return x.toString() === x.toString().split('').reverse().join('')

  // 方法三
  if (x < 10 && x > 0) return true
  let arr = x.toString();
  for (let i = 0, j = arr.length - 1; i < arr.length / 2; i++, j--) {
    if (arr[i] != arr[j]) {
      return false
    }
  }
  return true
};

let result = isPalindrome(54145)
console.log(result);