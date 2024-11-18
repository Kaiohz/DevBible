// Implementation of Rabin-Karp String Matching Algorithm
export class RabinKarp {
    private static readonly PRIME = 101; // A prime number for hash calculation
    private static readonly ALPHABET_SIZE = 256; // Number of characters in alphabet

    // Calculate hash value for a string
    private static hash(str: string, length: number): number {
        let result = 0;
        for (let i = 0; i < length; i++) {
            result = (this.ALPHABET_SIZE * result + str.charCodeAt(i)) % this.PRIME;
        }
        return result;
    }

    // Calculate rolling hash value
    private static recalculateHash(
        text: string,
        oldIndex: number,
        newIndex: number,
        oldHash: number,
        patternLength: number
    ): number {
        let newHash = oldHash;
        
        // Remove leading digit
        newHash = newHash - (text.charCodeAt(oldIndex) * Math.pow(this.ALPHABET_SIZE, patternLength - 1));
        
        // Add trailing digit
        newHash = (newHash * this.ALPHABET_SIZE + text.charCodeAt(newIndex)) % this.PRIME;
        
        return newHash >= 0 ? newHash : newHash + this.PRIME;
    }

    // Check if two strings are equal
    private static checkEqual(
        str1: string,
        start1: number,
        str2: string,
        start2: number,
        length: number
    ): boolean {
        for (let i = 0; i < length; i++) {
            if (str1[start1 + i] !== str2[start2 + i]) {
                return false;
            }
        }
        return true;
    }

    // Find all occurrences of pattern in text
    static search(text: string, pattern: string): number[] {
        const matches: number[] = [];
        const n = text.length;
        const m = pattern.length;

        // Edge cases
        if (m === 0 || m > n) return matches;

        // Calculate hash value for pattern and first window of text
        const patternHash = this.hash(pattern, m);
        let textHash = this.hash(text, m);

        // Check for matches
        for (let i = 0; i <= n - m; i++) {
            if (patternHash === textHash) {
                // Verify character by character
                if (this.checkEqual(text, i, pattern, 0, m)) {
                    matches.push(i);
                }
            }

            // Calculate hash value for next window
            if (i < n - m) {
                textHash = this.recalculateHash(
                    text,
                    i,
                    i + m,
                    textHash,
                    m
                );
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
RabinKarp.printMatches(text, pattern);

/* 
Time Complexity: 
- Average and Best Case: O(n + m)
- Worst Case: O(nm)
Space Complexity: O(1)

Key Concepts:
1. Rolling hash function
2. Modular arithmetic for hash calculation
3. Sliding window approach
4. False positives need verification
*/ 