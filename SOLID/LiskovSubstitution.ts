// BAD APPROACH - Violating Liskov Substitution Principle
class Bird {
    fly(): void {
        console.log("Flying in the sky");
    }
}

class Duck extends Bird {
    swim(): void {
        console.log("Swimming in the pond");
    }
}

// This violates LSP because penguins can't fly!
class Penguin extends Bird {
    fly(): void {
        // This violates LSP because it doesn't fulfill the base class contract
        throw new Error("Sorry, I can't fly!");
    }
}

// GOOD APPROACH - Following Liskov Substitution Principle
interface IMovable {
    move(): void;
}

class FlyingBird implements IMovable {
    move(): void {
        this.fly();
    }

    protected fly(): void {
        console.log("Flying in the sky");
    }
}

class SwimmingBird implements IMovable {
    move(): void {
        this.swim();
    }

    protected swim(): void {
        console.log("Swimming in the water");
    }
}

// Now we can properly implement different types of birds
class ImprovedDuck implements IMovable {
    move(): void {
        this.swim();
        this.fly();
    }

    protected swim(): void {
        console.log("Swimming in the pond");
    }

    protected fly(): void {
        console.log("Flying in the sky");
    }
}

class ImprovedPenguin extends SwimmingBird {
    // Penguin only swims, no flying needed
    // Perfectly follows LSP as it fulfills the SwimmingBird contract
}

// Example usage that demonstrates LSP
function moveAnimal(animal: IMovable): void {
    // This function works correctly with any class that implements IMovable
    animal.move();
}

// All these calls work without any surprises
const duck = new ImprovedDuck();
const penguin = new ImprovedPenguin();
const flyingBird = new FlyingBird();

moveAnimal(duck);      // Will both swim and fly
moveAnimal(penguin);   // Will swim
moveAnimal(flyingBird); // Will fly

// Bad approach example that would break
function makeBirdFly(bird: Bird): void {
    // This might throw an error with Penguin!
    bird.fly();
}

// This would throw an error!
// const penguin = new Penguin();
// makeBirdFly(penguin); // Throws error: "Sorry, I can't fly!" 