function canBeEqual(target: number[], arr: number[]): boolean {
  target.sort((a, b) => a - b);
  arr.sort((a, b) => a - b);
  return target.toString() === arr.toString();
};

let target: number[] = [2,3];
let arr: number[] = [6,7];

let result = canBeEqual(target, arr);
console.log(result);