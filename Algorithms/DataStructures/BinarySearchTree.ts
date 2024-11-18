// Node class for Binary Search Tree
class TreeNode<T> {
    constructor(
        public data: T,
        public left: TreeNode<T> | null = null,
        public right: TreeNode<T> | null = null
    ) {}
}

export class BinarySearchTree<T> {
    private root: TreeNode<T> | null = null;

    // Insert a value into the BST
    insert(data: T): void {
        const newNode = new TreeNode(data);

        if (!this.root) {
            this.root = newNode;
            return;
        }

        this.insertNode(this.root, newNode);
    }

    private insertNode(node: TreeNode<T>, newNode: TreeNode<T>): void {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    // Tree traversal methods
    inorderTraversal(): T[] {
        const result: T[] = [];
        this.inorderTraversalHelper(this.root, result);
        return result;
    }

    private inorderTraversalHelper(node: TreeNode<T> | null, result: T[]): void {
        if (node) {
            this.inorderTraversalHelper(node.left, result);
            result.push(node.data);
            this.inorderTraversalHelper(node.right, result);
        }
    }

    // Search for a value
    search(data: T): boolean {
        return this.searchNode(this.root, data);
    }

    private searchNode(node: TreeNode<T> | null, data: T): boolean {
        if (node === null) {
            return false;
        }

        if (data < node.data) {
            return this.searchNode(node.left, data);
        } else if (data > node.data) {
            return this.searchNode(node.right, data);
        }

        return true; // data === node.data
    }

    // Find minimum value
    findMin(): T | null {
        if (!this.root) return null;

        let current = this.root;
        while (current.left) {
            current = current.left;
        }
        return current.data;
    }

    // Find maximum value
    findMax(): T | null {
        if (!this.root) return null;

        let current = this.root;
        while (current.right) {
            current = current.right;
        }
        return current.data;
    }
}

// Usage example
const bst = new BinarySearchTree<number>();
bst.insert(15);
bst.insert(10);
bst.insert(20);
bst.insert(8);
bst.insert(12);
bst.insert(17);
bst.insert(25);

console.log("Inorder traversal:", bst.inorderTraversal()); // [8, 10, 12, 15, 17, 20, 25]
console.log("Search for 12:", bst.search(12)); // true
console.log("Search for 11:", bst.search(11)); // false
console.log("Minimum value:", bst.findMin()); // 8
console.log("Maximum value:", bst.findMax()); // 25

/* 
Time Complexities:
- Insert: O(log n) average, O(n) worst
- Search: O(log n) average, O(n) worst
- FindMin/FindMax: O(log n) average, O(n) worst

Advantages:
1. Fast search, insertion, and deletion
2. Maintains sorted order
3. Flexible size

Disadvantages:
1. May become unbalanced
2. No constant-time operations
*/ 