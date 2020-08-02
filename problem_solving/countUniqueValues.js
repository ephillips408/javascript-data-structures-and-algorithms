// count the number of unique values in array
// start at arr[0]
// check if every value after start equals the start value
//   if the value does equal start
//     move to next array value
//   if the value does not equal the start value
//     give the start value the number in the array that does not equal start number
//     move on to the next array value

const countUniqueValues = arr => {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

let myArr = [1,1,1,2,3,4,5,6,6,7,8];
console.log(countUniqueValues(myArr));
