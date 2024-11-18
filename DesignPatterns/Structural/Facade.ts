// Facade Pattern Example

// Complex subsystem classes
class CPU {
    freeze(): void {
        console.log("CPU: Freezing processor");
    }

    jump(position: number): void {
        console.log(`CPU: Jumping to position ${position}`);
    }

    execute(): void {
        console.log("CPU: Executing instructions");
    }
}

class Memory {
    load(position: number, data: string): void {
        console.log(`Memory: Loading data "${data}" at position ${position}`);
    }
}

class HardDrive {
    read(position: number, size: number): string {
        console.log(`HardDrive: Reading ${size} bytes from position ${position}`);
        return "data";
    }
}

// Facade
export class ComputerFacade {
    private cpu: CPU;
    private memory: Memory;
    private hardDrive: HardDrive;

    constructor() {
        this.cpu = new CPU();
        this.memory = new Memory();
        this.hardDrive = new HardDrive();
    }

    start(): void {
        console.log("Computer is starting...");
        this.cpu.freeze();
        this.memory.load(0, this.hardDrive.read(0, 1024));
        this.cpu.jump(0);
        this.cpu.execute();
        console.log("Computer has started");
    }
}

// Usage
const computer = new ComputerFacade();
computer.start();
/* Output:
Computer is starting...
CPU: Freezing processor
HardDrive: Reading 1024 bytes from position 0
Memory: Loading data "data" at position 0
CPU: Jumping to position 0
CPU: Executing instructions
Computer has started
*/ 