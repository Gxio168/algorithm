function romanToIn(s) {
  let ap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  let i = 0;
  let sum = 0;
  while (i < s.length) {
    if (ap[s[i]] < ap[s[i + 1]]) {
      sum += ap[s[i + 1]] - ap[s[i]];
      i = i + 2;
    } else {
      sum += ap[s[i]];
      i = i + 1;
    }
  }
  return sum;
};

let result = romanToIn("MCMXCIV");
console.log(result);