// Advanced TypeScript Patterns

// Singleton Pattern with Private Constructor
class Singleton {
    private static instance: Singleton;
    private constructor() {}

    static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}

// Builder Pattern with Method Chaining
class RequestBuilder {
    private data: any = {};

    setMethod(method: 'GET' | 'POST' | 'PUT' | 'DELETE') {
        this.data.method = method;
        return this;
    }

    setURL(url: string) {
        this.data.url = url;
        return this;
    }

    setBody(body: unknown) {
        this.data.body = body;
        return this;
    }

    build() {
        return this.data;
    }
}

// Mixin Pattern
type Constructor<T = {}> = new (...args: any[]) => T;

function Timestamped<TBase extends Constructor>(Base: TBase) {
    return class extends Base {
        timestamp = new Date();
    };
}

function Activatable<TBase extends Constructor>(Base: TBase) {
    return class extends Base {
        isActive = false;
        activate() { this.isActive = true; }
        deactivate() { this.isActive = false; }
    };
}

// Factory Pattern with Generics
interface Product {
    name: string;
    price: number;
}

class ProductFactory {
    static createProduct<T extends Product>(type: { new(): T }): T {
        return new type();
    }
} 