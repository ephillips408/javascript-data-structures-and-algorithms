const anagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  let freqCountOne = {};
  for (let char of str1) {
    freqCountOne[char] ? freqCountOne[char] += 1 : freqCountOne[char] = 1;
  }
  for (let char in str2) {
    if (!(freqCountOne[char])) {
      return false;
    } else {
      freqCountOne[char] -= 1;
    }
  }
  return true;
}

console.log(anagram('aaz', 'zab'));
