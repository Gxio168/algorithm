// var reformat = function (s) {
//   let letter = [], num = [];
//   let str = '';
//   [...s].forEach(item => isNaN(item) ? letter.push(item) : num.push(item))
//   if (Math.abs(letter.length - num.length) > 1) return str
//   if (letter.length == num.length) {
//     for (let i = 0; i < letter.length; i++) {
//       str += num[i] + letter[i]
//     }
//     return str
//   } else if (letter.length > num.length) {
//     for (let i = 0; i < num.length; i++) {
//       str += letter[i] + num[i]
//     }
//     return `${str}${letter[letter.length - 1]}`
//   }
//   else {
//     for (let i = 0; i < letter.length; i++) {
//       str += num[i] + letter[i]
//     }
//     return `${str}${num[num.length - 1]}`
//   }
// };

var reformat = function (s) {
  let letter = [], num = [];
  let str = '';
  [...s].forEach(item => isNaN(item) ? letter.push(item) : num.push(item))
  if (Math.abs(letter.length - num.length) > 1) return str
  num.length > letter.length ? (a = num, b = letter) : (a = letter, b = num);
  let result = a.map((ele, i) => [ele, (b[i] || '')])
  return result.flat().join('')
};
let result = reformat("covid2019")
console.log(result)




