// Command Pattern Example

// Command interface
interface Command {
    execute(): void;
    undo(): void;
}

// Receiver
class Light {
    private isOn: boolean = false;

    on(): void {
        this.isOn = true;
        console.log("Light is on");
    }

    off(): void {
        this.isOn = false;
        console.log("Light is off");
    }
}

// Concrete Commands
export class LightOnCommand implements Command {
    constructor(private light: Light) {}

    execute(): void {
        this.light.on();
    }

    undo(): void {
        this.light.off();
    }
}

export class LightOffCommand implements Command {
    constructor(private light: Light) {}

    execute(): void {
        this.light.off();
    }

    undo(): void {
        this.light.on();
    }
}

// Invoker
export class RemoteControl {
    private commands: Command[] = [];
    private undoStack: Command[] = [];

    addCommand(command: Command): void {
        this.commands.push(command);
    }

    executeCommand(index: number): void {
        if (index >= 0 && index < this.commands.length) {
            const command = this.commands[index];
            command.execute();
            this.undoStack.push(command);
        }
    }

    undo(): void {
        const command = this.undoStack.pop();
        if (command) {
            command.undo();
        }
    }
}

// Usage
const light = new Light();
const lightOn = new LightOnCommand(light);
const lightOff = new LightOffCommand(light);

const remote = new RemoteControl();
remote.addCommand(lightOn);
remote.addCommand(lightOff);

remote.executeCommand(0); // Light is on
remote.executeCommand(1); // Light is off
remote.undo(); // Light is on 