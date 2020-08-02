class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertexOne, vertexTwo) { //Remove one of the push statementst to make directed graph
    if (!this.adjacencyList[vertexOne].includes(vertexTwo)) {
      this.adjacencyList[vertexOne].push(vertexTwo);
    }
    if (!this.adjacencyList[vertexTwo].includes(vertexOne)) {
      this.adjacencyList[vertexTwo].push(vertexOne);
    }
  }
  removeEdge(vertexOne, vertexTwo) {
    if (this.adjacencyList[vertexOne].includes(vertexTwo)) {
      this.adjacencyList[vertexOne] = this.adjacencyList[vertexOne].filter(
        v => v !== vertexTwo
      );
    }
    if (this.adjacencyList[vertexTwo].includes(vertexOne)) {
      this.adjacencyList[vertexTwo] = this.adjacencyList[vertexTwo].filter(
        v => v !== vertexOne
      );
    }
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex]; //This is unlikely to be seen in practice
  }
  dfsRecursive(vertex) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    const traverse = key => {
      if (!key) return null;
      visited[key] = true;
      result.push(key);
      adjacencyList[key].forEach(neighbor => {
        if (!visited[neighbor]) {
          return traverse(neighbor);
        }
      })
    }
    traverse(vertex);
    return result;
  }
  dfsIterative(vertex) {
    const stack = [];
    const visited = {};
    const result = [];
    let currentVertex;

    stack.push(vertex);

    while (stack.length) {
      currentVertex = stack.pop();
      if (!visited[currentVertex]) {
        visited[currentVertex] = true;
        result.push(currentVertex);
        this.adjacencyList[currentVertex].forEach(neighbor => {
          stack.push(neighbor);
        });
      }
    }
    return result;
  }
  bfsIterative(vertex) {
    const queue = [];
    const visited = {};
    const result = [];
    let currentVertex;

    queue.push(vertex);

    while (queue.length) {
      currentVertex = queue.shift();
      if (!visited[currentVertex]) {
        visited[currentVertex] = true;
        result.push(currentVertex);
        this.adjacencyList[currentVertex].forEach(neighbor => {
          queue.push(neighbor);
        });
      }
    }
    return result;
  }
}

let g = new Graph;
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log(g);
console.log(g.dfsRecursive("A"));
