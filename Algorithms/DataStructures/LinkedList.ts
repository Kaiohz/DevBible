// Node class for Linked List
class ListNode<T> {
    constructor(
        public data: T,
        public next: ListNode<T> | null = null
    ) {}
}

// Linked List implementation
export class LinkedList<T> {
    private head: ListNode<T> | null = null;
    private size: number = 0;

    // Add element to the end of the list
    append(data: T): void {
        const newNode = new ListNode(data);
        this.size++;

        if (!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    // Add element to the beginning of the list
    prepend(data: T): void {
        const newNode = new ListNode(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    // Delete first occurrence of an element
    delete(data: T): boolean {
        if (!this.head) return false;

        if (this.head.data === data) {
            this.head = this.head.next;
            this.size--;
            return true;
        }

        let current = this.head;
        while (current.next) {
            if (current.next.data === data) {
                current.next = current.next.next;
                this.size--;
                return true;
            }
            current = current.next;
        }

        return false;
    }

    // Search for an element
    find(data: T): ListNode<T> | null {
        let current = this.head;
        while (current) {
            if (current.data === data) {
                return current;
            }
            current = current.next;
        }
        return null;
    }

    // Get size of the list
    getSize(): number {
        return this.size;
    }

    // Convert list to array
    toArray(): T[] {
        const result: T[] = [];
        let current = this.head;
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        return result;
    }

    // Print the list
    print(): void {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

// Usage example
const list = new LinkedList<number>();

list.append(1);
list.append(2);
list.append(3);
list.prepend(0);

console.log("List as array:", list.toArray()); // [0, 1, 2, 3]
console.log("Size:", list.getSize()); // 4

list.delete(2);
console.log("After deleting 2:", list.toArray()); // [0, 1, 3]

const foundNode = list.find(1);
console.log("Found node with value 1:", foundNode?.data); // 1

/* 
Time Complexities:
- Append: O(n)
- Prepend: O(1)
- Delete: O(n)
- Find: O(n)
- GetSize: O(1)

Advantages:
1. Dynamic size
2. Efficient insertion/deletion at the beginning
3. No memory wastage

Disadvantages:
1. No random access
2. Extra memory for pointers
3. Not cache friendly
*/ 