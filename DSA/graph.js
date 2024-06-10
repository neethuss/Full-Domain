class Graph{
  constructor(){
    this.adjacencyList = {}
  }

  addVertex(vertex){
    if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
  }

  addEdge(vertex1, vertex2){
    if(!this.adjacencyList[vertex1]) this.adjacencyList[vertex1] = []
    if(!this.adjacencyList[vertex2]) this.adjacencyList[vertex2] = []
    
    if(!this.adjacencyList[vertex1].includes(vertex2)) this.adjacencyList[vertex1].push(vertex2)
      if(!this.adjacencyList[vertex2].includes(vertex1)) this.adjacencyList[vertex2].push(vertex1)
  }

  removeEdge(vertex1, vertex2){
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v!= vertex2)
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v!= vertex1)
  }

  removeVertex(vertex){
    while(this.adjacencyList[vertex].length){
      let adjacentVertex = this.adjacencyList[vertex].pop()
      this.removeEdge(vertex, adjacentVertex)
    }
    delete this.adjacencyList[vertex]
  }

  BFS(){
    let queue = [start]
    let result = []
    let visited = {}
    visited[start] = true
    while(queue.length){
      let currentVertex = queue.shift()
      result.push(currentVertex)
      this.adjacencyList[currentVertex].forEach(neighbour => {
        if(!visited[neighbour]){
          visited[neighbour] = true
          queue.push(visited[neighbour])
        }
      })
    }
  }

  DFS(){
    let stack = [start]
    let result = []
    let visited = {}
    visited[start] = true
    while(stack.length){
      let currentVertex = stack.pop()
      result.push(currentVertex)
      this.adjacencyList[currentVertex].forEach(neighbour =>{
        if(!visited[neighbour]){
          visited[neighbour] = true
          stack.push(visited[neighbour])
        }
      })
    }
  }
}