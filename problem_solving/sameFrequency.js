const sameFrequency = (num1, num2) => {
  let numOneString = num1.toString();
  let numTwoString = num2.toString();
  let freqCountOne = {};
  let freqCountTwo = {};
  for (let char of numOneString) {
    freqCountOne[char] ? freqCountOne[char] += 1 : freqCountOne[char] = 1
  }
  // for (let char of numTwoString) {
  //    freqCountTwo[char] ? freqCountTwo[char] += 1 : freqCountTwo[char] = 1
  //  }
  for (let char of numTwoString) {
    if (!(freqCountOne[char])) {
      return false;
    } else {
      freqCountOne[char]--;
    }
  }
  return true;
}

console.log(sameFrequency(2252, 222));
