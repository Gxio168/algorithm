let arr = [1, 2, [3, [4, 5], 6], 7, [8], 9];

let result = getInfo(arr);
console.log(result);

function getInfo(arr) {
  if (!Array.isArray(arr)) {
    return { value: arr }
  } else {
   return {
     children: arr.map(item => getInfo(item))
   }
  }
}