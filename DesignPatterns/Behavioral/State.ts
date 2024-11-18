// State Pattern Example

// State interface
interface VendingMachineState {
    insertCoin(): void;
    ejectCoin(): void;
    selectProduct(): void;
    dispense(): void;
}

// Context
export class VendingMachine {
    private noCoinState: State;
    private hasCoinState: State;
    private soldState: State;
    private soldOutState: State;
    
    private currentState: VendingMachineState;
    private count: number = 0;

    constructor(itemCount: number) {
        this.noCoinState = new NoCoinState(this);
        this.hasCoinState = new HasCoinState(this);
        this.soldState = new SoldState(this);
        this.soldOutState = new SoldOutState(this);

        this.count = itemCount;
        this.currentState = itemCount > 0 ? this.noCoinState : this.soldOutState;
    }

    setState(state: VendingMachineState): void {
        this.currentState = state;
    }

    getHasCoinState(): State {
        return this.hasCoinState;
    }

    getNoCoinState(): State {
        return this.noCoinState;
    }

    getSoldState(): State {
        return this.soldState;
    }

    getSoldOutState(): State {
        return this.soldOutState;
    }

    insertCoin(): void {
        this.currentState.insertCoin();
    }

    ejectCoin(): void {
        this.currentState.ejectCoin();
    }

    selectProduct(): void {
        this.currentState.selectProduct();
    }

    dispense(): void {
        this.currentState.dispense();
        this.count--;
    }

    getCount(): number {
        return this.count;
    }
}

// Concrete States
class NoCoinState implements VendingMachineState {
    constructor(private machine: VendingMachine) {}

    insertCoin(): void {
        console.log("Coin inserted");
        this.machine.setState(this.machine.getHasCoinState());
    }

    ejectCoin(): void {
        console.log("No coin to eject");
    }

    selectProduct(): void {
        console.log("Please insert a coin first");
    }

    dispense(): void {
        console.log("Please insert a coin first");
    }
}

class HasCoinState implements VendingMachineState {
    constructor(private machine: VendingMachine) {}

    insertCoin(): void {
        console.log("Coin already inserted");
    }

    ejectCoin(): void {
        console.log("Coin ejected");
        this.machine.setState(this.machine.getNoCoinState());
    }

    selectProduct(): void {
        console.log("Product selected");
        this.machine.setState(this.machine.getSoldState());
    }

    dispense(): void {
        console.log("No product dispensed");
    }
}

class SoldState implements VendingMachineState {
    constructor(private machine: VendingMachine) {}

    insertCoin(): void {
        console.log("Please wait, dispensing product");
    }

    ejectCoin(): void {
        console.log("Sorry, already dispensing");
    }

    selectProduct(): void {
        console.log("Already dispensing product");
    }

    dispense(): void {
        if (this.machine.getCount() > 0) {
            console.log("Product dispensed");
            this.machine.setState(this.machine.getNoCoinState());
        } else {
            console.log("Out of products");
            this.machine.setState(this.machine.getSoldOutState());
        }
    }
}

class SoldOutState implements VendingMachineState {
    constructor(private machine: VendingMachine) {}

    insertCoin(): void {
        console.log("Machine is sold out");
    }

    ejectCoin(): void {
        console.log("Cannot eject, no coin inserted");
    }

    selectProduct(): void {
        console.log("Machine is sold out");
    }

    dispense(): void {
        console.log("No product dispensed");
    }
}

// Usage
const vendingMachine = new VendingMachine(2);
vendingMachine.insertCoin();
vendingMachine.selectProduct();
vendingMachine.dispense(); 