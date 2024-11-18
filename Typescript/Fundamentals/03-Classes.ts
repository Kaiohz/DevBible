// Classes in TypeScript

// Basic class
class Animal {
    // Properties
    private name: string;
    protected age: number;
    readonly species: string;

    // Constructor
    constructor(name: string, age: number, species: string) {
        this.name = name;
        this.age = age;
        this.species = species;
    }

    // Methods
    public makeSound(): void {
        console.log("Some generic sound");
    }
}

// Inheritance
class Dog extends Animal {
    // Additional property
    private breed: string;

    constructor(name: string, age: number, breed: string) {
        super(name, age, "Canis"); // Call parent constructor
        this.breed = breed;
    }

    // Method override
    public makeSound(): void {
        console.log("Woof!");
    }
}

// Abstract class
abstract class Shape {
    abstract getArea(): number; // Abstract method

    // Concrete method
    printArea(): void {
        console.log(`Area: ${this.getArea()}`);
    }
}

// Implementing abstract class
class Circle extends Shape {
    constructor(private radius: number) {
        super();
    }

    getArea(): number {
        return Math.PI * this.radius ** 2;
    }
} 