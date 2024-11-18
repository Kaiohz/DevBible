export function binarySearch<T>(arr: T[], target: T): number {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        // Found the target
        if (arr[mid] === target) {
            return mid;
        }

        // Target is in the right half
        if (arr[mid] < target) {
            left = mid + 1;
        }
        // Target is in the left half
        else {
            right = mid - 1;
        }
    }

    // Target not found
    return -1;
}

// Recursive version
export function binarySearchRecursive<T>(
    arr: T[],
    target: T,
    left: number = 0,
    right: number = arr.length - 1
): number {
    // Base case: element not found
    if (left > right) return -1;

    const mid = Math.floor((left + right) / 2);

    // Found the target
    if (arr[mid] === target) return mid;

    // Search in left or right half
    return arr[mid] > target
        ? binarySearchRecursive(arr, target, left, mid - 1)
        : binarySearchRecursive(arr, target, mid + 1, right);
}

// Usage example
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 7;

console.log("Array:", sortedArray);
console.log("Target:", target);
console.log("Found at index (iterative):", binarySearch(sortedArray, target));
console.log("Found at index (recursive):", binarySearchRecursive(sortedArray, target));

/* 
Time Complexity: O(log n)
Space Complexity: O(1) for iterative, O(log n) for recursive
Requirements: Array must be sorted

Explanation:
1. Binary Search works on sorted arrays
2. Repeatedly divides the search interval in half
3. Compares the middle element with the target value
4. If target matches the middle element, we're done
5. If target is less than the middle element, search the left half
6. If target is greater than the middle element, search the right half
7. If the search interval is empty, the target is not in the array
*/ 