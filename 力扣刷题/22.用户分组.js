var groupThePeople = function (groupSizes) {
  let arr = [], index = 0
  groupSizes = groupSizes.map((item, index) => [item, index])
  groupSizes.sort((a, b) => {
    return a[0] > b[0]
  })
  while (index < groupSizes.length) {
    arr.push(groupSizes.slice(index, index + groupSizes[index][0]).map(item => item[1]))
    index += groupSizes[index][0]
  }
  return arr
};




let result = groupThePeople([2, 1, 3, 3, 3, 2]);
console.log(result);