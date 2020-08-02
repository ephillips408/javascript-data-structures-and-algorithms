const instertionSort = arr => {
  for (var i = 1; i < arr.length; i++) {
    let val = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > val; j--) {
      arr[j+1] = arr[j];
    }
    arr[j+1] = val;
  }
  return arr;
}

let myArr = [6,3,2,5,1];
console.log(instertionSort(myArr));
