class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while(true) {
        if (val === current.val) return undefined;
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
  find(val) {
    if (!this.root) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        found = true;  //return true
      }
    }
    if (!found) return false; //just return false
    return current; //remove this for boolean return
  }// The comments show the changes if a boolean return is desired
  breadthFirstSearch() {
    let queue = [];
    let visited = [];
    let queueVal = this.root
    queue.push(queueVal);

    while(queue.length !== 0) {
      queueVal = queue.shift();
      visited.push(queueVal); //push queueVal.val for just the node values
      if (queueVal.left) queue.push(queueVal.left)
      if (queueVal.right) queue.push(queueVal.right);
    }
    return visited;
  }
  depthFirstSearchPreOrder() {
    let visited = [];
    let current = this.root;
    const traverse = node => {
      visited.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return visited;
  }
  depthFirstSearchPostOrder() {
    let visited = [];
    let current = this.root;
    const traverse = node => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.val);
    }
    traverse(current);
    return visited;
  }
  depthFirstSearchInOrder() {
    let visited = [];
    let current = this.root;
    const traverse = node => {
      if (node.left) traverse(node.left);
      visited.push(node.val);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return visited;
  }
}

let bst = new BinarySearchTree;
bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);
console.log(bst.depthFirstSearchPreOrder());
