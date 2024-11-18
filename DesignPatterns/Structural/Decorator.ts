// Decorator Pattern Example

// Base interface
interface Coffee {
    getCost(): number;
    getDescription(): string;
}

// Concrete component
class SimpleCoffee implements Coffee {
    getCost(): number {
        return 10;
    }

    getDescription(): string {
        return "Simple coffee";
    }
}

// Base decorator class
abstract class CoffeeDecorator implements Coffee {
    constructor(protected coffee: Coffee) {}

    getCost(): number {
        return this.coffee.getCost();
    }

    getDescription(): string {
        return this.coffee.getDescription();
    }
}

// Concrete decorators
export class MilkDecorator extends CoffeeDecorator {
    getCost(): number {
        return this.coffee.getCost() + 2;
    }

    getDescription(): string {
        return `${this.coffee.getDescription()}, with milk`;
    }
}

export class SugarDecorator extends CoffeeDecorator {
    getCost(): number {
        return this.coffee.getCost() + 1;
    }

    getDescription(): string {
        return `${this.coffee.getDescription()}, with sugar`;
    }
}

export class WhipDecorator extends CoffeeDecorator {
    getCost(): number {
        return this.coffee.getCost() + 3;
    }

    getDescription(): string {
        return `${this.coffee.getDescription()}, with whip`;
    }
}

// Usage
let coffee: Coffee = new SimpleCoffee();
console.log(coffee.getDescription()); // Simple coffee
console.log(coffee.getCost()); // 10

coffee = new MilkDecorator(coffee);
coffee = new SugarDecorator(coffee);
coffee = new WhipDecorator(coffee);

console.log(coffee.getDescription()); // Simple coffee, with milk, with sugar, with whip
console.log(coffee.getCost()); // 16 