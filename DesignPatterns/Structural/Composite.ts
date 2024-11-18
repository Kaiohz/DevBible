// Composite Pattern Example

// Component interface
interface FileSystemComponent {
    getName(): string;
    getSize(): number;
    print(indent: string): void;
}

// Leaf class
class File implements FileSystemComponent {
    constructor(private name: string, private size: number) {}

    getName(): string {
        return this.name;
    }

    getSize(): number {
        return this.size;
    }

    print(indent: string): void {
        console.log(`${indent}File: ${this.name} (${this.size} bytes)`);
    }
}

// Composite class
export class Directory implements FileSystemComponent {
    private children: FileSystemComponent[] = [];

    constructor(private name: string) {}

    add(component: FileSystemComponent): void {
        this.children.push(component);
    }

    remove(component: FileSystemComponent): void {
        const index = this.children.indexOf(component);
        if (index !== -1) {
            this.children.splice(index, 1);
        }
    }

    getName(): string {
        return this.name;
    }

    getSize(): number {
        return this.children.reduce((sum, child) => sum + child.getSize(), 0);
    }

    print(indent: string = ""): void {
        console.log(`${indent}Directory: ${this.name} (${this.getSize()} bytes)`);
        this.children.forEach(child => child.print(indent + "  "));
    }
}

// Usage
const root = new Directory("root");
const docs = new Directory("docs");
const pictures = new Directory("pictures");

const file1 = new File("document.txt", 100);
const file2 = new File("image.jpg", 200);
const file3 = new File("notes.txt", 300);

docs.add(file1);
docs.add(file3);
pictures.add(file2);

root.add(docs);
root.add(pictures);

root.print();
/* Output:
Directory: root (600 bytes)
  Directory: docs (400 bytes)
    File: document.txt (100 bytes)
    File: notes.txt (300 bytes)
  Directory: pictures (200 bytes)
    File: image.jpg (200 bytes)
*/ 