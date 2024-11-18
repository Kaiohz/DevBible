// BAD APPROACH - Violating Interface Segregation Principle
interface WorkerMachine {
    work(): void;
    eat(): void;
    sleep(): void;
    recharge(): void;
    checkBatteryLevel(): number;
    takeBreak(): void;
}

// Human worker is forced to implement unnecessary methods
class HumanWorker implements WorkerMachine {
    work(): void {
        console.log("Human is working");
    }

    eat(): void {
        console.log("Human is eating");
    }

    sleep(): void {
        console.log("Human is sleeping");
    }

    recharge(): void {
        // Humans don't recharge!
        throw new Error("Humans don't recharge!");
    }

    checkBatteryLevel(): number {
        // Humans don't have batteries!
        throw new Error("Humans don't have batteries!");
    }

    takeBreak(): void {
        console.log("Human is taking a break");
    }
}

// Robot worker is forced to implement unnecessary methods
class RobotWorker implements WorkerMachine {
    private batteryLevel: number = 100;

    work(): void {
        console.log("Robot is working");
        this.batteryLevel -= 10;
    }

    eat(): void {
        // Robots don't eat!
        throw new Error("Robots don't eat!");
    }

    sleep(): void {
        // Robots don't sleep!
        throw new Error("Robots don't sleep!");
    }

    recharge(): void {
        console.log("Robot is recharging");
        this.batteryLevel = 100;
    }

    checkBatteryLevel(): number {
        return this.batteryLevel;
    }

    takeBreak(): void {
        // Robots don't take breaks!
        throw new Error("Robots don't take breaks!");
    }
}

// GOOD APPROACH - Following Interface Segregation Principle
interface Workable {
    work(): void;
}

interface Sleepable {
    sleep(): void;
}

interface Eatable {
    eat(): void;
}

interface Rechargeable {
    recharge(): void;
    checkBatteryLevel(): number;
}

interface RestAble {
    takeBreak(): void;
}

// Now we can implement only the interfaces we need
class ImprovedHumanWorker implements Workable, Sleepable, Eatable, RestAble {
    work(): void {
        console.log("Human is working");
    }

    sleep(): void {
        console.log("Human is sleeping");
    }

    eat(): void {
        console.log("Human is eating");
    }

    takeBreak(): void {
        console.log("Human is taking a break");
    }
}

class ImprovedRobotWorker implements Workable, Rechargeable {
    private batteryLevel: number = 100;

    work(): void {
        console.log("Robot is working");
        this.batteryLevel -= 10;
    }

    recharge(): void {
        console.log("Robot is recharging");
        this.batteryLevel = 100;
    }

    checkBatteryLevel(): number {
        return this.batteryLevel;
    }
}

// Usage example
function performWork(worker: Workable) {
    worker.work();
}

function rechargeMachine(machine: Rechargeable) {
    machine.recharge();
}

// Examples of usage
const human = new ImprovedHumanWorker();
const robot = new ImprovedRobotWorker();

performWork(human); // Works fine
performWork(robot); // Works fine

// Only robot can be recharged
rechargeMachine(robot); // Works fine
// rechargeMachine(human); // This would cause a compile error - exactly what we want! 