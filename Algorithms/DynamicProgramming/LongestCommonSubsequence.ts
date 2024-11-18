export class LCS {
    // Find the length of Longest Common Subsequence
    static findLength(text1: string, text2: string): number {
        const m = text1.length;
        const n = text2.length;
        const dp: number[][] = Array(m + 1).fill(0)
            .map(() => Array(n + 1).fill(0));

        // Fill the dp table
        for (let i = 1; i <= m; i++) {
            for (let j = 1; j <= n; j++) {
                if (text1[i - 1] === text2[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }

        return dp[m][n];
    }

    // Find the actual Longest Common Subsequence
    static findSequence(text1: string, text2: string): string {
        const m = text1.length;
        const n = text2.length;
        const dp: number[][] = Array(m + 1).fill(0)
            .map(() => Array(n + 1).fill(0));

        // Fill the dp table
        for (let i = 1; i <= m; i++) {
            for (let j = 1; j <= n; j++) {
                if (text1[i - 1] === text2[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }

        // Backtrack to find the sequence
        let lcs = "";
        let i = m, j = n;
        while (i > 0 && j > 0) {
            if (text1[i - 1] === text2[j - 1]) {
                lcs = text1[i - 1] + lcs;
                i--;
                j--;
            } else if (dp[i - 1][j] > dp[i][j - 1]) {
                i--;
            } else {
                j--;
            }
        }

        return lcs;
    }

    // Print the dp table (for debugging)
    static printDPTable(text1: string, text2: string): void {
        const m = text1.length;
        const n = text2.length;
        const dp: number[][] = Array(m + 1).fill(0)
            .map(() => Array(n + 1).fill(0));

        for (let i = 1; i <= m; i++) {
            for (let j = 1; j <= n; j++) {
                if (text1[i - 1] === text2[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }

        console.log("DP Table:");
        console.log("   " + " ".repeat(text2.length) + text2.split("").join(" "));
        for (let i = 0; i <= m; i++) {
            if (i === 0) {
                console.log(" ", dp[i].join(" "));
            } else {
                console.log(text1[i - 1], dp[i].join(" "));
            }
        }
    }
}

// Usage example
const str1 = "ABCDGH";
const str2 = "AEDFHR";

console.log("String 1:", str1);
console.log("String 2:", str2);
console.log("Length of LCS:", LCS.findLength(str1, str2));
console.log("LCS:", LCS.findSequence(str1, str2));
LCS.printDPTable(str1, str2);

/* 
Time Complexity: O(mn)
Space Complexity: O(mn)

Key Concepts:
1. Dynamic Programming table construction
2. Backtracking to find actual sequence
3. Optimal substructure property
4. String matching and comparison
*/ 