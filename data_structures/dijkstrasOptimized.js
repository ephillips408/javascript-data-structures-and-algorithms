class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority)
    this.values.push(newNode);
    let index = this.values.length - 1;
    let newItem = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (newItem.priority > parent.priority) break;
      this.values[parentIndex] = this.values[index];
      this.values[index] = parent;
      index = parentIndex;
    }
    return this;
  }
  dequeue() {
    let min = this.values[0];
    if (this.values.length === 1) return this.values.pop();
    this.values[0] = this.values.pop();
    this.sinkDown(0);
    return min;
  }
  sinkDown(index) {
    let left = 2 * index + 1;
    let right = 2 * index + 2;
    let largest = index;
    const length = this.values.length - 1;

    if (left <= length && this.values[left].priority < this.values[largest].priority) {
      largest = left;
    }

    if (right <= length && this.values[right].priority < this.values[largest].priority) {
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

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertexOne, vertexTwo, weight) { //Remove one of the push statementst to make directed graph
    if (!this.adjacencyList[vertexOne].includes(vertexTwo)) {
      this.adjacencyList[vertexOne].push({node: vertexTwo, weight});
    }
    if (!this.adjacencyList[vertexTwo].includes(vertexOne)) {
      this.adjacencyList[vertexTwo].push({node: vertexOne, weight});
    }
  }
  dijkstra(start, finish) {
    const nodes = new PriorityQueue;
    const distances = {};
    const previous = {};
    let path = []; // return this at end
    let smallest;

    // build initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    // as long as there is something to visit
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;
      if (smallest === finish) {
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          // Find neighboring node
          let nextNode = this.adjacencyList[smallest][neighbor];
          //calculate new distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            //updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            //updating previous - How we got to neighbor
            previous[nextNeighbor] = smallest;
            //enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

let graph = new WeightedGraph;
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

console.log(graph.dijkstra("A", "E"));
