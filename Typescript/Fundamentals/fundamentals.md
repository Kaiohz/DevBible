# TypeScript Fundamentals

What is TypeScript?

TypeScript is a superset of JavaScript that adds optional static typing to the language. This means you can declare the types of variables, function parameters, and return values, which can help you catch errors early in the development process and improve code readability.

Why use TypeScript?

Early Error Detection: TypeScript's type checker can identify potential errors before you run your code.
Improved Code Readability: Explicit typing makes your code more understandable, especially for large projects and complex codebases.
Better Code Completion and IntelliSense: Your IDE can provide more accurate suggestions and autocompletion.
Enhanced Tooling and Frameworks: Many modern tools and frameworks are built with TypeScript, providing a seamless development experience.
Basic Types

TypeScript supports a variety of basic data types:

Number: Represents numeric values.
String: Represents text.
Boolean: Represents true or false.
Null: Represents a null value.
Undefined: Represents a value that has not been assigned.
Symbol: Represents a unique identifier.
Any: Represents a dynamic type, similar to JavaScript's any.
Unknown: Represents a value of an unknown type.
Never: Represents a type that never occurs.Type Annotations

You can annotate variables and function parameters with types using colons:

TypeScript
let age: number = 25;
let name: string = "Alice";
let isStudent: boolean = true;

function greet(name: string): void {
  console.log("Hello, " + name + "!");
}
Utilisez ce code avec précaution.

Type Inference

TypeScript can often infer types automatically:

TypeScript
let inferredAge = 30; // Inferred as number
let inferredName = "Bob"; // Inferred as string
Utilisez ce code avec précaution.

Arrays and Tuples

Arrays:
TypeScript
let numbers: number[] = [1, 2, 3];
let strings: string[] = ["apple", "banana", "cherry"];
Utilisez ce code avec précaution.

Tuples:
TypeScript
let person: [string, number] = ["Alice", 30];
Utilisez ce code avec précaution.

Objects

TypeScript
interface Person {
  name: string;
  age: number;
}

let person: Person = {
  name: "Bob",
  age: 25
};
Utilisez ce code avec précaution.

Functions

TypeScript
function add(x: number, y: number): number {
  return x + y;
}
Utilisez ce code avec précaution.

Classes

TypeScript
class Car {
  color: string;
  year: number;

  constructor(color: string, year: number) {
    this.color = color;
    this.year = year;
  }
}
Utilisez ce code avec précaution.

Interfaces

Interfaces define the shape of an object:

TypeScript
interface Shape {
  width: number;
  height: number;
}
Utilisez ce code avec précaution.

Generics

Generics allow you to create reusable components that can work with different types:

TypeScript
function identity<T>(arg: T): T {
  return arg;
}
Utilisez ce code avec précaution.

Key Points to Remember:

TypeScript is a superset of JavaScript, adding optional static typing.
Type annotations help catch errors early and improve code readability.
TypeScript can often infer types automatically.
Arrays, tuples, objects, functions, classes, interfaces, and generics are fundamental concepts in TypeScript.
By understanding these fundamentals, you can write more reliable, maintainable, and efficient TypeScript code.
