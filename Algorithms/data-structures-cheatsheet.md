
# Data Structures Cheatsheet

## How to Choose a Data Structure

1. Consider the operations you need:
   - Frequent insertions/deletions? → Linked List
   - Fast lookup? → Hash Table/Array
   - Ordered data? → Tree/Sorted Array
   - FIFO? → Queue
   - LIFO? → Stack
   - Key-value pairs? → Hash Table

## Common Data Structures

### Arrays
- **Use when**: You need fixed size, sequential access, or direct indexing
- **Time Complexity**:
  - Access: O(1)
  - Search: O(n)
  - Insert/Delete: O(n)
- **Best for**: 
  - Sequential data
  - Fixed size collections
  - Direct indexing

### Linked Lists
- **Use when**: Size is dynamic, frequent insertions/deletions
- **Time Complexity**:
  - Access: O(n)
  - Search: O(n)
  - Insert/Delete: O(1)
- **Best for**:
  - Dynamic size
  - Frequent insertions/deletions
  - Memory efficiency

### Stack
- **Use when**: LIFO (Last In First Out) operations
- **Time Complexity**: O(1) for push/pop
- **Best for**:
  - Function calls
  - Undo operations
  - Expression evaluation
  - Backtracking algorithms

### Queue
- **Use when**: FIFO (First In First Out) operations
- **Time Complexity**: O(1) for enqueue/dequeue
- **Best for**:
  - BFS algorithms
  - Task scheduling
  - Print queue
  - Request processing

### Hash Tables
- **Use when**: Key-value pairs, fast lookup
- **Time Complexity**: 
  - Average: O(1) for insert/delete/search
  - Worst: O(n)
- **Best for**:
  - Caching
  - Dictionary
  - Counting frequencies
  - Removing duplicates

### Trees
- **Use when**: Hierarchical data, ordered operations
- **Time Complexity** (BST):
  - Average: O(log n)
  - Worst: O(n)
- **Best for**:
  - Hierarchical data
  - Sorting
  - Database indexing
  - Decision making

### Heap
- **Use when**: Priority queue operations
- **Time Complexity**: O(log n) for insert/delete-min
- **Best for**:
  - Priority queues
  - Scheduling
  - Finding k-th largest/smallest
  - Dijkstra's algorithm

### Graph
- **Use when**: Relationships between objects
- **Time Complexity**: Varies by operation
- **Best for**:
  - Social networks
  - Maps/Navigation
  - Network routing
  - Dependencies

## Common Problem Patterns

1. **Need to track frequencies?**
   → Use Hash Table

2. **Need to find min/max frequently?**
   → Use Heap

3. **Need to model relationships?**
   → Use Graph

4. **Need ordered traversal?**
   → Use Tree

5. **Need fast lookups?**
   → Use Hash Table or Array

6. **Need to track history/undo?**
   → Use Stack

7. **Need to process in order?**
   → Use Queue

## Performance Comparison

| Data Structure | Access | Search | Insert | Delete |
|---------------|---------|---------|---------|---------|
| Array         | O(1)    | O(n)    | O(n)    | O(n)    |
| Linked List   | O(n)    | O(n)    | O(1)    | O(1)    |
| Stack         | O(n)    | O(n)    | O(1)    | O(1)    |
| Queue         | O(n)    | O(n)    | O(1)    | O(1)    |
| Hash Table    | N/A     | O(1)*   | O(1)*   | O(1)*   |
| BST           | O(log n)| O(log n)| O(log n)| O(log n)|
| Heap          | O(1)    | O(n)    | O(log n)| O(log n)|

*Average case, assuming good hash function