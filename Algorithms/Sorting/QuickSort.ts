export function quickSort<T>(arr: T[]): T[] {
    // Base case: arrays with 0 or 1 element are already sorted
    if (arr.length <= 1) return arr;

    // Clone array to avoid modifying original
    const result = [...arr];
    
    // Helper function to partition the array
    function partition(low: number, high: number): number {
        const pivot = result[high];
        let i = low - 1;

        for (let j = low; j < high; j++) {
            if (result[j] <= pivot) {
                i++;
                [result[i], result[j]] = [result[j], result[i]];
            }
        }

        [result[i + 1], result[high]] = [result[high], result[i + 1]];
        return i + 1;
    }

    // Helper function to implement quickSort recursively
    function quickSortHelper(low: number, high: number): void {
        if (low < high) {
            const pi = partition(low, high);
            quickSortHelper(low, pi - 1);
            quickSortHelper(pi + 1, high);
        }
    }

    quickSortHelper(0, result.length - 1);
    return result;
}

// Usage example
const numbers = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", numbers);
console.log("Sorted array:", quickSort(numbers));

/* 
Time Complexity: O(n log n) average case, O(n²) worst case
Space Complexity: O(log n) due to recursion
Stable: No
In-place: Yes

Explanation:
1. QuickSort uses a divide-and-conquer strategy
2. Selects a 'pivot' element from the array
3. Partitions other elements into two sub-arrays:
   - Elements less than the pivot
   - Elements greater than the pivot
4. Recursively applies the same process to the sub-arrays
5. The pivot selection and partitioning are key to performance
*/ 