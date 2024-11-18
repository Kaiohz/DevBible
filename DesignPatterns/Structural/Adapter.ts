// Adapter Pattern Example

// Existing interface that needs to be adapted
interface OldPrinter {
    printOnDotMatrix(text: string): void;
}

// Modern interface we want to use
interface ModernPrinter {
    print(text: string): void;
    printInColor(text: string, color: string): void;
}

// Old implementation
class OldDotMatrixPrinter implements OldPrinter {
    printOnDotMatrix(text: string): void {
        console.log(`Printing on dot matrix: ${text}`);
    }
}

// Modern implementation
class NewColorPrinter implements ModernPrinter {
    print(text: string): void {
        console.log(`Printing: ${text}`);
    }

    printInColor(text: string, color: string): void {
        console.log(`Printing in ${color}: ${text}`);
    }
}

// Adapter to make OldPrinter work like ModernPrinter
export class PrinterAdapter implements ModernPrinter {
    constructor(private oldPrinter: OldPrinter) {}

    print(text: string): void {
        this.oldPrinter.printOnDotMatrix(text);
    }

    printInColor(text: string, color: string): void {
        // Simulate color printing using old printer
        this.oldPrinter.printOnDotMatrix(`[${color}] ${text}`);
    }
}

// Usage
const oldPrinter = new OldDotMatrixPrinter();
const adapter = new PrinterAdapter(oldPrinter);

adapter.print("Hello World"); // Prints: Printing on dot matrix: Hello World
adapter.printInColor("Colorful text", "red"); // Prints: Printing on dot matrix: [red] Colorful text 