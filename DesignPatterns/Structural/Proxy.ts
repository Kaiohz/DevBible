// Proxy Pattern Example

// Subject interface
interface Image {
    display(): void;
}

// Real Subject
class RealImage implements Image {
    private filename: string;

    constructor(filename: string) {
        this.filename = filename;
        this.loadFromDisk();
    }

    private loadFromDisk(): void {
        console.log(`Loading ${this.filename} from disk`);
    }

    display(): void {
        console.log(`Displaying ${this.filename}`);
    }
}

// Proxy
export class ProxyImage implements Image {
    private realImage: RealImage | null = null;
    private filename: string;

    constructor(filename: string) {
        this.filename = filename;
    }

    // The image is loaded only when needed
    display(): void {
        if (this.realImage === null) {
            this.realImage = new RealImage(this.filename);
        }
        this.realImage.display();
    }
}

// Virtual Proxy Example
export class LazyLoadedImage implements Image {
    private realImage: RealImage | null = null;

    constructor(private filename: string) {}

    display(): void {
        if (!this.realImage) {
            this.realImage = new RealImage(this.filename);
        }
        this.realImage.display();
    }
}

// Protection Proxy Example
export class ProtectedImage implements Image {
    private realImage: RealImage;

    constructor(
        private filename: string,
        private isAdmin: boolean
    ) {
        this.realImage = new RealImage(filename);
    }

    display(): void {
        if (this.isAdmin) {
            this.realImage.display();
        } else {
            console.log("Access denied: Admin rights required");
        }
    }
}

// Usage
console.log("Using Virtual Proxy:");
const image1 = new ProxyImage("photo1.jpg");
const image2 = new ProxyImage("photo2.jpg");

// Image will be loaded only when display is called
image1.display(); // Loading and displaying photo1.jpg
image1.display(); // Only displaying photo1.jpg (already loaded)

console.log("\nUsing Protection Proxy:");
const adminImage = new ProtectedImage("confidential.jpg", true);
const userImage = new ProtectedImage("confidential.jpg", false);

adminImage.display(); // Shows the image
userImage.display();  // Shows "Access denied" 