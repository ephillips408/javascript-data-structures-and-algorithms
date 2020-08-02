function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
  let maxDigits = 0;
  arr.forEach((ele) => {
    if (digitCount(ele) > maxDigits) maxDigits = digitCount(ele);
  })
  return maxDigits;
}

function radixSort(arr) {
  let maxDigitCount = mostDigits(arr);
  for (let i = 0; i < maxDigitCount; i++) {
    let buckets = Array.from({length: 10}, () => []);
    for (let j = 0; j < arr.length; j++) {
      let digit = getDigit(arr[j], i);
      buckets[digit].push(arr[j]);
    }
    arr = [].concat(...buckets);
  }
  return arr;
}

console.log(radixSort([123,4,56,789,1234,65,765]));
