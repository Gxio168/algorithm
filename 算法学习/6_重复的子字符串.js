const repeatedSubstringPattern = (str) => {
  const reg = /^(\w+)\1+$/
  return reg.test(str)
}

const str = 'abcabcabc'
const result = repeatedSubstringPattern(str)
console.log(result);