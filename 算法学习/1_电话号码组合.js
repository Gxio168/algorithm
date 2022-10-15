const letterCombinations = function (digits) {
  const getCode = (code) => {
    const temp = []
    for (let i = 0, len = code[0].length; i < len; i++) {
      for (let j = 0, len = code[1].length; j < len; j++) {
        temp.push(`${code[0][i]}${code[1][j]}`);
      }
    }
    return temp
  }
  const map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  const code = [...digits].map(item => parseInt(item)).reduce((prev, next) => {
    prev.push(map[next])
    return prev
  }, [])
  while (code.length > 1) {
    code.push(getCode(code))
    code.splice(0, 2)
  }
  return code[0]
}

let str = '27'
let result = letterCombinations(str);
console.log(result);