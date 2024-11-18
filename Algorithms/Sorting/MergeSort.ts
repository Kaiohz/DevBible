export function mergeSort<T>(arr: T[]): T[] {
    // Base case: arrays with 0 or 1 element are already sorted
    if (arr.length <= 1) return arr;

    // Find the middle point to divide array into two halves
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // Recursively sort the two halves
    return merge(mergeSort(left), mergeSort(right));
}

// Helper function to merge two sorted arrays
function merge<T>(left: T[], right: T[]): T[] {
    const result: T[] = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare elements from both arrays and merge them in sorted order
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] <= right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Add remaining elements from left array, if any
    while (leftIndex < left.length) {
        result.push(left[leftIndex]);
        leftIndex++;
    }

    // Add remaining elements from right array, if any
    while (rightIndex < right.length) {
        result.push(right[rightIndex]);
        rightIndex++;
    }

    return result;
}

// Usage example
const numbers = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", numbers);
console.log("Sorted array:", mergeSort(numbers));

/* 
Time Complexity: O(n log n) in all cases
Space Complexity: O(n)
Stable: Yes
In-place: No

Explanation:
1. Merge Sort uses divide-and-conquer strategy
2. Divides input array into two halves
3. Recursively sorts the two halves
4. Merges the sorted halves to produce final sorted array
5. Very efficient for large datasets
6. Stable sort algorithm (maintains relative order of equal elements)
7. Requires extra space proportional to input size
*/ 