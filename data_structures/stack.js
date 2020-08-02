class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let oldFirst = this.first
      this.first = newNode;
      this.first.next = oldFirst;
    }
    this.length++;
    return this.length;
  }
  pop() {
    if (!this.first) return null;
    let oldFirst = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    // oldFirst.next = null; Not needed because the val is returned, not the node itself.
    this.length--;
    return oldFirst.val;
  }
}

let stack = new Stack;
stack.push("First");
stack.push("Second");
stack.push("Third");
console.log(stack.pop());
console.log(stack.pop());
// console.log(stack.pop());
console.log(stack);
