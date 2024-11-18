// Implementation of Dijkstra's Shortest Path Algorithm
interface Edge {
    node: number;
    weight: number;
}

export class Graph {
    private adjacencyList: Map<number, Edge[]>;
    private vertices: number;

    constructor(vertices: number) {
        this.vertices = vertices;
        this.adjacencyList = new Map();
        
        // Initialize adjacency list for all vertices
        for (let i = 0; i < vertices; i++) {
            this.adjacencyList.set(i, []);
        }
    }

    addEdge(source: number, destination: number, weight: number): void {
        this.adjacencyList.get(source)?.push({ node: destination, weight });
        // For undirected graph, add the reverse edge
        this.adjacencyList.get(destination)?.push({ node: source, weight });
    }

    dijkstra(startNode: number): { distances: number[], previousNodes: number[] } {
        const distances: number[] = new Array(this.vertices).fill(Infinity);
        const visited: boolean[] = new Array(this.vertices).fill(false);
        const previousNodes: number[] = new Array(this.vertices).fill(-1);
        
        distances[startNode] = 0;

        for (let i = 0; i < this.vertices - 1; i++) {
            // Find minimum distance vertex from unvisited vertices
            const minVertex = this.findMinDistanceVertex(distances, visited);
            visited[minVertex] = true;

            // Update distances of adjacent vertices
            const adjacentEdges = this.adjacencyList.get(minVertex) || [];
            for (const edge of adjacentEdges) {
                const distance = distances[minVertex] + edge.weight;
                
                if (!visited[edge.node] && distance < distances[edge.node]) {
                    distances[edge.node] = distance;
                    previousNodes[edge.node] = minVertex;
                }
            }
        }

        return { distances, previousNodes };
    }

    private findMinDistanceVertex(distances: number[], visited: boolean[]): number {
        let min = Infinity;
        let minVertex = -1;

        for (let v = 0; v < this.vertices; v++) {
            if (!visited[v] && distances[v] <= min) {
                min = distances[v];
                minVertex = v;
            }
        }

        return minVertex;
    }

    // Helper method to get path from source to destination
    getPath(previousNodes: number[], destination: number): number[] {
        const path: number[] = [];
        let current = destination;

        while (current !== -1) {
            path.unshift(current);
            current = previousNodes[current];
        }

        return path;
    }
}

// Usage example
const graph = new Graph(6); // Create a graph with 6 vertices

// Add edges (source, destination, weight)
graph.addEdge(0, 1, 4);
graph.addEdge(0, 2, 2);
graph.addEdge(1, 2, 1);
graph.addEdge(1, 3, 5);
graph.addEdge(2, 3, 8);
graph.addEdge(2, 4, 10);
graph.addEdge(3, 4, 2);
graph.addEdge(3, 5, 6);
graph.addEdge(4, 5, 3);

const startNode = 0;
const { distances, previousNodes } = graph.dijkstra(startNode);

console.log("Shortest distances from node", startNode);
distances.forEach((distance, node) => {
    console.log(`To node ${node}: ${distance}`);
    console.log(`Path:`, graph.getPath(previousNodes, node));
});

/* 
Time Complexity: O(V^2) with adjacency matrix, O((V + E) log V) with min-heap
Space Complexity: O(V)

Key Concepts:
1. Greedy algorithm for finding shortest paths
2. Works with non-negative edge weights
3. Uses priority queue (min-heap) in optimized version
4. Maintains distances and previous nodes for path reconstruction
*/ 