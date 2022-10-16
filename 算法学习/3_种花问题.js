const canPlaceFlowers = (flowerbed, n) => {
  let count = 0
  for (let i = 0, len = flowerbed.length; i < len; i++) {
    if (flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1 && flowerbed[i] !== 1)  {
      count++,
       i = i + 1
    }
  }
  console.log(count);
  if (count >= n) {
    return true
  } else {
    return false
  }
}

const flowerbed = [0, 0, 1]
const n = 1
const result = canPlaceFlowers(flowerbed, n)
console.log(result);