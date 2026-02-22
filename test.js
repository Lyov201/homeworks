// Graph Data Structure Implementation
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    // Add a vertex to the graph
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    // Add an edge between two vertices
    addEdge(vertex1, vertex2) {
        this.addVertex(vertex1);
        this.addVertex(vertex2);
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1); // For undirected graph
    }

    // Remove an edge between two vertices
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }

    // Remove a vertex from the graph
    removeVertex(vertex) {
        delete this.adjacencyList[vertex];
        for (let key in this.adjacencyList) {
            this.adjacencyList[key] = this.adjacencyList[key].filter(
                v => v !== vertex
            );
        }
    }

    // Display the graph
    display() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex + " -> " + this.adjacencyList[vertex].join(", "));
        }
    }

    // Breadth-First Search (BFS)
    bfs(startVertex) {
        const visited = {};
        const queue = [startVertex];
        visited[startVertex] = true;

        while (queue.length > 0) {
            const vertex = queue.shift();
            console.log(vertex);

            for (let neighbor of this.adjacencyList[vertex]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            }
        }
    }

    // Depth-First Search (DFS)
    dfs(startVertex, visited = {}) {
        visited[startVertex] = true;
        console.log(startVertex);

        for (let neighbor of this.adjacencyList[startVertex]) {
            if (!visited[neighbor]) {
                this.dfs(neighbor, visited);
            }
        }
    }
}

// Example usage
const graph = new Graph();
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");
graph.addEdge("D", "E");

console.log("Graph Adjacency List:");
graph.display();

console.log("\nBreadth-First Search (BFS):");
graph.bfs("A");

console.log("\nDepth-First Search (DFS):");
graph.dfs("A");