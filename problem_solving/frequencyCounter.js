const checkForCubes = (arr1, obj) => {
  if (arr1.length !== Object.keys(obj).length) return false;
  let freqCounterOne = {};
  let freqCounterTwo = {};
  for (let num of arr1) {
    freqCounterOne[num] ? freqCounterOne[num] += 1 : freqCounterOne[num] = 1;
  }
  for (let num of Object.values(obj)) {
    freqCounterTwo[num] ? freqCounterTwo[num] += 1 : freqCounterTwo[num] = 1;
  }
  for (let key in freqCounterOne) {
    if (!(key ** 3 in freqCounterTwo)) return false;
  }
  return true;
}

let cubeObj = {
  one: 1,
  eight: 8,
  twentySeven: 27
};

console.log(checkForCubes([1,2,3], cubeObj));
