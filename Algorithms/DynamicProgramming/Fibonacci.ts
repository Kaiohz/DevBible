// Different approaches to calculate Fibonacci numbers

// 1. Recursive approach (inefficient)
export function fibRecursive(n: number): number {
    if (n <= 1) return n;
    return fibRecursive(n - 1) + fibRecursive(n - 2);
}

// 2. Dynamic Programming with Memoization (top-down)
export function fibMemoization(n: number, memo: Map<number, number> = new Map()): number {
    if (n <= 1) return n;
    
    if (memo.has(n)) {
        return memo.get(n)!;
    }

    const result = fibMemoization(n - 1, memo) + fibMemoization(n - 2, memo);
    memo.set(n, result);
    return result;
}

// 3. Dynamic Programming with Tabulation (bottom-up)
export function fibTabulation(n: number): number {
    if (n <= 1) return n;

    const dp: number[] = new Array(n + 1);
    dp[0] = 0;
    dp[1] = 1;

    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
}

// 4. Space-optimized iterative solution
export function fibOptimized(n: number): number {
    if (n <= 1) return n;

    let prev2 = 0;
    let prev1 = 1;
    let current = 0;

    for (let i = 2; i <= n; i++) {
        current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }

    return current;
}

// Usage and comparison
const n = 10;
console.log(`Calculating Fibonacci(${n}) using different approaches:`);
console.log("Recursive:", fibRecursive(n));
console.log("Memoization:", fibMemoization(n));
console.log("Tabulation:", fibTabulation(n));
console.log("Optimized:", fibOptimized(n));

/* 
Time Complexities:
- Recursive: O(2^n)
- Memoization: O(n)
- Tabulation: O(n)
- Optimized: O(n)

Space Complexities:
- Recursive: O(n) due to call stack
- Memoization: O(n)
- Tabulation: O(n)
- Optimized: O(1)

Key Concepts:
1. Overlapping subproblems
2. Optimal substructure
3. Memoization vs Tabulation
4. Space-time tradeoffs
*/ 