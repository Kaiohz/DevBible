// Implementation of KMP (Knuth-Morris-Pratt) Pattern Searching Algorithm
export class KMPSearch {
    // Compute the longest prefix suffix (LPS) array
    private static computeLPSArray(pattern: string): number[] {
        const m = pattern.length;
        const lps = new Array(m).fill(0);
        let len = 0;  // length of the previous longest prefix suffix
        let i = 1;

        while (i < m) {
            if (pattern[i] === pattern[len]) {
                len++;
                lps[i] = len;
                i++;
            } else {
                if (len !== 0) {
                    len = lps[len - 1];
                } else {
                    lps[i] = 0;
                    i++;
                }
            }
        }

        return lps;
    }

    // Find all occurrences of pattern in text
    static search(text: string, pattern: string): number[] {
        const matches: number[] = [];
        const n = text.length;
        const m = pattern.length;

        // Edge cases
        if (m === 0) return matches;
        if (n < m) return matches;

        // Create LPS array
        const lps = this.computeLPSArray(pattern);

        let i = 0; // index for text
        let j = 0; // index for pattern

        while (i < n) {
            if (pattern[j] === text[i]) {
                i++;
                j++;
            }

            if (j === m) {
                matches.push(i - j); // Pattern found at index i-j
                j = lps[j - 1];
            } else if (i < n && pattern[j] !== text[i]) {
                if (j !== 0) {
                    j = lps[j - 1];
                } else {
                    i++;
                }
            }
        }

        return matches;
    }

    // Utility method to print all matches
    static printMatches(text: string, pattern: string): void {
        const matches = this.search(text, pattern);
        if (matches.length === 0) {
            console.log("Pattern not found in text");
            return;
        }

        console.log(`Pattern "${pattern}" found at indices:`, matches);
        matches.forEach(index => {
            console.log(`${text.substring(0, index)}[${text.substring(index, index + pattern.length)}]${text.substring(index + pattern.length)}`);
        });
    }
}

// Usage example
const text = "AABAACAADAABAAABAA";
const pattern = "AABA";

console.log("Text:", text);
console.log("Pattern:", pattern);
KMPSearch.printMatches(text, pattern);

/* 
Time Complexity: O(n + m) where n is text length and m is pattern length
Space Complexity: O(m) for LPS array

Key Concepts:
1. Preprocessing pattern to create LPS (Longest Prefix Suffix) array
2. Using LPS array to avoid unnecessary comparisons
3. Linear time complexity
4. No backtracking in the text
*/ 