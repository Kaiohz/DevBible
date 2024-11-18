// Singleton Pattern Example
export class Singleton {
    private static instance: Singleton;
    private constructor() {} // Private constructor to prevent direct construction calls

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }

    public someBusinessLogic() {
        console.log("Executing business logic in Singleton");
    }
}

// Usage
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance1 === instance2); // true - same instance 