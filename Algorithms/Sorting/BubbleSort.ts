export function bubbleSort<T>(arr: T[]): T[] {
    const len = arr.length;
    let swapped: boolean;

    // Clone array to avoid modifying original
    const result = [...arr];

    // Outer loop for passes
    for (let i = 0; i < len - 1; i++) {
        swapped = false;

        // Inner loop for comparisons in each pass
        for (let j = 0; j < len - 1 - i; j++) {
            // Compare adjacent elements
            if (result[j] > result[j + 1]) {
                // Swap elements if they are in wrong order
                [result[j], result[j + 1]] = [result[j + 1], result[j]];
                swapped = true;
            }
        }

        // If no swapping occurred, array is already sorted
        if (!swapped) break;
    }

    return result;
}

// Usage example
const numbers = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", numbers);
console.log("Sorted array:", bubbleSort(numbers));

/* 
Time Complexity: O(n²) in worst and average cases, O(n) in best case
Space Complexity: O(1)
Stable: Yes
In-place: Yes

Explanation:
1. Bubble Sort works by repeatedly stepping through the list
2. Compares adjacent elements and swaps them if they are in the wrong order
3. The pass through the list is repeated until no swaps are needed
4. In each iteration, the largest unsorted element "bubbles up" to its correct position
5. The optimization with 'swapped' flag helps to exit early if array is already sorted
*/ 