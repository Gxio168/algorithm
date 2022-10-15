function busyStudent(startTime: number[], endTime: number[], queryTime: number): number {
  const { length } = startTime;
  let nums: number = 0
  for (let i = 0; i < length; i++) {
    if (startTime[i] <= queryTime && endTime[i] >= queryTime) {
      nums++
    }
  }
  return nums
};

let result = busyStudent([1, 2, 3], [3, 2, 7], 4);
console.log(result);