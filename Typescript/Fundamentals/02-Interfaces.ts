// Interfaces in TypeScript

// Basic interface
interface Person {
    firstName: string;
    lastName: string;
    age?: number; // Optional property
    readonly id: number; // Read-only property
}

// Implementing an interface
let person: Person = {
    firstName: "John",
    lastName: "Doe",
    id: 1
};

// Interface with methods
interface Vehicle {
    start(): void;
    stop(): void;
    speed: number;
}

// Class implementing an interface
class Car implements Vehicle {
    speed: number = 0;
    
    start(): void {
        console.log("Car started");
    }
    
    stop(): void {
        console.log("Car stopped");
    }
}

// Interface extending another interface
interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

// Interface for indexable types
interface StringArray {
    [index: number]: string;
}

let myArray: StringArray = ["Bob", "Fred"]; 