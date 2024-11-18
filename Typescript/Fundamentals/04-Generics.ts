// Generics in TypeScript

// Generic function
function identity<T>(arg: T): T {
    return arg;
}

// Generic interface
interface GenericResponse<T> {
    data: T;
    status: number;
    message: string;
}

// Generic class
class Queue<T> {
    private data: T[] = [];

    push(item: T): void {
        this.data.push(item);
    }

    pop(): T | undefined {
        return this.data.shift();
    }
}

// Generic constraints
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}

// Generic type aliases
type Pair<T, U> = {
    first: T;
    second: U;
};

// Using multiple type parameters
function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
} 