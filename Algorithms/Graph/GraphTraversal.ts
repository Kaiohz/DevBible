// Graph implementation using adjacency list
class Graph {
    private adjacencyList: Map<string, string[]>;

    constructor() {
        this.adjacencyList = new Map();
    }

    // Add vertex to the graph
    addVertex(vertex: string): void {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    // Add edge between vertices
    addEdge(vertex1: string, vertex2: string): void {
        this.adjacencyList.get(vertex1)?.push(vertex2);
        this.adjacencyList.get(vertex2)?.push(vertex1);
    }

    // Depth First Search
    dfs(startVertex: string): string[] {
        const visited = new Set<string>();
        const result: string[] = [];

        const dfsHelper = (vertex: string) => {
            visited.add(vertex);
            result.push(vertex);

            const neighbors = this.adjacencyList.get(vertex) || [];
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    dfsHelper(neighbor);
                }
            }
        };

        dfsHelper(startVertex);
        return result;
    }

    // Breadth First Search
    bfs(startVertex: string): string[] {
        const visited = new Set<string>();
        const result: string[] = [];
        const queue: string[] = [startVertex];

        visited.add(startVertex);

        while (queue.length > 0) {
            const vertex = queue.shift()!;
            result.push(vertex);

            const neighbors = this.adjacencyList.get(vertex) || [];
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }

        return result;
    }
}

// Usage example
const graph = new Graph();

// Add vertices
['A', 'B', 'C', 'D', 'E', 'F'].forEach(vertex => graph.addVertex(vertex));

// Add edges
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

console.log("DFS starting from 'A':", graph.dfs('A'));
console.log("BFS starting from 'A':", graph.bfs('A'));

/* 
Time Complexities:
DFS and BFS: O(V + E) where V is vertices and E is edges

DFS Characteristics:
1. Uses stack (recursive call stack)
2. Goes deep before going wide
3. Good for:
   - Finding paths
   - Detecting cycles
   - Topological sorting

BFS Characteristics:
1. Uses queue
2. Explores neighbors first
3. Good for:
   - Finding shortest path
   - Level-order traversal
   - Finding nodes at distance k
*/ 