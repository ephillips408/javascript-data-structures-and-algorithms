function merge (arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++
  }
  return result;
}

let firstArr = [2,4,6,12];
let secondArr = [3,5,15,19];

console.log(merge(firstArr, secondArr));
