class QueueNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class BSTNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.count = 1;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  enqueue(val) {
    let newNode = new QueueNode(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.length;
  }
  dequeue() {
    if (!this.first) return undefined;
    let oldFirst = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = oldFirst.next;
    this.length--;
    return oldFirst.val;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    let newNode = new BSTNode(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
      if (val === current.val) {
        current.count++;
        return this;
      }
      if (val < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        } else {
          current = current.left;
          }
        } else if (val > current.val) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  // recursiveInsert(val) {
  //   let newNode = new BSTNode(val);
  //   if (!this.root) {
  //     this.root = newNode;
  //     return this;
  //   } else {
  //     const checkNode = node => {
  //       if (node.val === val) node.count++
  //       if (node.val < val) checkNode(node.left);
  //       if (node.val > val) checkNode(node.right);
  //       if (node.left === null) node.left = node;
  //       if (node.right === null) node.right = node;
  //     }
  //     checkNode(newNode);
  //     return newNode;
  //   }
  // } This needs work
  find(val) {
    if (!this.root) return undefined;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return false;
    return current;
  }
  findCount(val) {
    let found = this.find(val);
    if (found) return found.count;
    else return false;
  }
  breadthFirstSearch() {
    let q = new Queue;
    let visited = [];
    let queueVal = this.root;
    q.enqueue(queueVal);

    while(q.length !== 0) {
      queueVal = q.dequeue();
      visited.push(queueVal.val);
      if (queueVal.left) q.enqueue(queueVal.left);
      if (queueVal.right) q.enqueue(queueVal.right);
    }
    return visited;
  }
  depthFirstSearchPreOrder() {
    if (!this.root) return undefined;
    let current = this.root;
    let visited = [];
    const traverse = node => {
      visited.push(node.val)
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return visited;
  }
}

let bst = new BinarySearchTree;
bst.insert(10);
bst.insert(8);
bst.insert(3);
bst.insert(14);
bst.insert(20);
bst.insert(5);

console.log(bst);
