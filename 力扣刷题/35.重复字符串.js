let str = '2[3[a]4[1[b]2[c]]]';

let result = getInfo(str);
console.log(result);

function getInfo(str) {
  let endStr = '';
  let numStack = [];
  let strStack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ']') {
      let orginalStr = strStack.pop();
      let orginalNum = numStack.pop();
      for(let j = 0; j < orginalNum; j++) {
        endStr += orginalStr
      }
    } else if (typeof str[i] === 'number') {
      numStack.push(str[i]);
    } else if (str[i] === '[') {
      strStack.push('');
    } else if (/[a-zA-Z]/.test(str[i])) {
      if (strStack[strStack.length - 1] == '') {
        strStack[strStack.length - 1] = str[i]
      } else {
        strStack[strStack.length - 1] += str[i]
      }
    }
  }
  return endStr
}