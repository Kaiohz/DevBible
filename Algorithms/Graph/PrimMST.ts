// Implementation of Prim's Minimum Spanning Tree Algorithm
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
        
        for (let i = 0; i < vertices; i++) {
            this.adjacencyList.set(i, []);
        }
    }

    addEdge(source: number, destination: number, weight: number): void {
        this.adjacencyList.get(source)?.push({ node: destination, weight });
        this.adjacencyList.get(destination)?.push({ node: source, weight });
    }

    primMST(): { parent: number[], key: number[] } {
        const key: number[] = new Array(this.vertices).fill(Infinity); // Key values to pick minimum weight edge
        const parent: number[] = new Array(this.vertices).fill(-1); // Array to store constructed MST
        const mstSet: boolean[] = new Array(this.vertices).fill(false); // Vertices included in MST

        // Start with first vertex
        key[0] = 0;

        for (let count = 0; count < this.vertices - 1; count++) {
            // Pick the minimum key vertex from the vertices not yet included in MST
            const u = this.minKey(key, mstSet);
            mstSet[u] = true;

            // Update key value and parent index of adjacent vertices
            const adjacentEdges = this.adjacencyList.get(u) || [];
            for (const edge of adjacentEdges) {
                const v = edge.node;
                const weight = edge.weight;

                if (!mstSet[v] && weight < key[v]) {
                    parent[v] = u;
                    key[v] = weight;
                }
            }
        }

        return { parent, key };
    }

    private minKey(key: number[], mstSet: boolean[]): number {
        let min = Infinity;
        let minIndex = -1;

        for (let v = 0; v < this.vertices; v++) {
            if (!mstSet[v] && key[v] < min) {
                min = key[v];
                minIndex = v;
            }
        }

        return minIndex;
    }

    // Print the constructed MST
    printMST(parent: number[], key: number[]): void {
        console.log("Edge \tWeight");
        for (let i = 1; i < this.vertices; i++) {
            console.log(`${parent[i]} - ${i}\t${key[i]}`);
        }
    }

    // Calculate total weight of MST
    getMSTWeight(key: number[]): number {
        return key.reduce((sum, weight) => sum + weight, 0);
    }
}

// Usage example
const graph = new Graph(6);

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

const { parent, key } = graph.primMST();
console.log("Minimum Spanning Tree:");
graph.printMST(parent, key);
console.log("Total MST Weight:", graph.getMSTWeight(key));

/* 
Time Complexity: O(V^2) with adjacency matrix, O((V + E) log V) with min-heap
Space Complexity: O(V)

Key Concepts:
1. Greedy algorithm for finding minimum spanning tree
2. Always includes V-1 edges where V is number of vertices
3. Maintains a set of vertices already included in MST
4. Picks minimum weight edge that connects a vertex in MST to a vertex outside MST
*/ 