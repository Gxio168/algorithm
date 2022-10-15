function isValid(s) {
  const n = s.length;
  if (n % 2 === 1) {
    return false;
  }
  const pairs = new Map([
    [')', '('],
    [']', '['],
    ['}', '{']
  ]);
  const stk = [1];
  for (let i = 0; i < n; i++) {
    if (pairs.has(s[i]) && pairs.get(s[i]) !== stk[0]) return false;
    if (s[i] === pairs.get(s[i + 1])) {
      i = i + 1;
    } else {
      if (pairs.get(s[i]) === stk[0]) {
        stk.shift()
      } else {
        stk.unshift(s[i])
      }

    }
  }
  return stk.length === 1;

}
let result = isValid('{[]}[]')
console.log(result);

