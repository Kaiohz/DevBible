// Factory Pattern Example
interface Product {
    operation(): string;
}

class ConcreteProductA implements Product {
    operation(): string {
        return "Result of ConcreteProductA";
    }
}

class ConcreteProductB implements Product {
    operation(): string {
        return "Result of ConcreteProductB";
    }
}

export class Factory {
    public createProduct(type: string): Product {
        switch (type) {
            case "A":
                return new ConcreteProductA();
            case "B":
                return new ConcreteProductB();
            default:
                throw new Error("Invalid product type");
        }
    }
}

// Usage
const factory = new Factory();
const productA = factory.createProduct("A");
console.log(productA.operation()); // Result of ConcreteProductA 