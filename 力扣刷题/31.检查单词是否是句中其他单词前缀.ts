function isPrefixOfWord(sentence: string, searchWord: string): number {
  const regex = new RegExp(`^${searchWord}`);
  let arr = sentence.split(' ');
  for (let i = 0; i < arr.length; i++) {
    if(regex.test(arr[i])) {
      return i + 1
    }
  }
  return -1
};


const sentence: string = "this problem is an easy problem";
const searchWord: string = "pro"
console.log(isPrefixOfWord(sentence, searchWord));