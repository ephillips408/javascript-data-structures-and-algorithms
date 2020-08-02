function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((left + right) / 2);

  while (arr[mid] !== val && left <= right) {
    if (val < arr[mid]) right = mid - 1;
    else left = mid + 1;
    mid = Math.floor((left + right) / 2);
  }
  return arr[mid] === val ? mid : -1;
  // if (arr[mid] === val) return mid;
  // return -1;
};

let myArr = [2,5,6,9,13,15,28,30];
console.log(binarySearch(myArr, 9));
