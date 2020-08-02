class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(val) {
    this.values.push(val);
    let index = this.values.length - 1;
    const newItem = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (newItem <= parent) break;
      this.values[parentIndex] = newItem;
      this.values[index] = parent;
      index = parentIndex
    }
  }
  extractMax() {
    let max = this.values[0];
    this.values[0] = this.values.pop();
    this.sinkDown(0);
    return max;
  }
  sinkDown(index) { // This is a helper method for extractMax.
    let left = 2 * index + 1;
    let right = 2 * index + 2;
    let largest = index;
    const length = this.values.length;

    if (left <= length && this.values[left] > this.values[largest]) {
      largest = left;
    }

    if (right <= length && this.values[right] > this.values[largest]) {
      largest = right;
    }

    if (largest !== index) {
      let temp = this.values[index];
      this.values[index] = this.values[largest];
      this.values[largest] = temp;
      this.sinkDown(largest);
    }
  }
}

let mbh = new MaxBinaryHeap;
mbh.insert(41);
mbh.insert(39);
mbh.insert(33);
mbh.insert(18);
mbh.insert(27);
mbh.insert(12);
mbh.insert(55);
mbh.insert(67);

console.log(mbh.extractMax());
console.log(mbh);
console.log(mbh.extractMax());
console.log(mbh);
