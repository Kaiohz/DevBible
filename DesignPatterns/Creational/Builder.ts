// Builder Pattern Example
class Product {
    private parts: string[] = [];

    public add(part: string): void {
        this.parts.push(part);
    }

    public listParts(): void {
        console.log(`Product parts: ${this.parts.join(', ')}`);
    }
}

interface Builder {
    reset(): void;
    buildPartA(): void;
    buildPartB(): void;
    buildPartC(): void;
    getResult(): Product;
}

export class ConcreteBuilder implements Builder {
    private product!: Product;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.product = new Product();
    }

    public buildPartA(): void {
        this.product.add("PartA");
    }

    public buildPartB(): void {
        this.product.add("PartB");
    }

    public buildPartC(): void {
        this.product.add("PartC");
    }

    public getResult(): Product {
        const result = this.product;
        this.reset();
        return result;
    }
}

class Director {
    private builder!: Builder;

    public setBuilder(builder: Builder): void {
        this.builder = builder;
    }

    public buildMinimalProduct(): void {
        this.builder.buildPartA();
    }

    public buildFullProduct(): void {
        this.builder.buildPartA();
        this.builder.buildPartB();
        this.builder.buildPartC();
    }
}

// Usage
const director = new Director();
const builder = new ConcreteBuilder();
director.setBuilder(builder);

director.buildMinimalProduct();
let product = builder.getResult();
product.listParts(); // Product parts: PartA

director.buildFullProduct();
product = builder.getResult();
product.listParts(); // Product parts: PartA, PartB, PartC 