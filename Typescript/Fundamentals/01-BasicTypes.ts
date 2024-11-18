// Basic Types in TypeScript

// Number - All numbers in TypeScript are floating point values
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// String - Text data
let color: string = "blue";
let fullName: string = `John Doe`; // Template literals
let greeting: string = `Hello, ${fullName}`; // String interpolation

// Boolean
let isDone: boolean = false;

// Array - Two ways to declare arrays
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3]; // Generic array type

// Tuple - Array with fixed number of elements of different types
let tuple: [string, number] = ["hello", 10];

// Enum - A way to give friendly names to numeric values
enum Color {
    Red,     // 0
    Green,   // 1
    Blue     // 2
}
let c: Color = Color.Green;

// Any - Opt-out of type checking
let notSure: any = 4;
notSure = "maybe a string";
notSure = false;

// Void - Absence of any type (used for functions that don't return anything)
function logMessage(): void {
    console.log("Hello!");
}

// Null and Undefined
let u: undefined = undefined;
let n: null = null;

// Never - Values that never occur
function error(message: string): never {
    throw new Error(message);
} 