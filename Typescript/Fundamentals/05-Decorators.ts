// Decorators in TypeScript
// Note: Enable experimentalDecorators in tsconfig.json

// Class decorator
function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

// Method decorator
function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    let originalMethod = descriptor.value;
    
    descriptor.value = function(...args: any[]) {
        console.log(`Calling ${propertyKey} with args: ${JSON.stringify(args)}`);
        return originalMethod.apply(this, args);
    };
    
    return descriptor;
}

// Property decorator
function format(formatString: string) {
    return function (target: any, propertyKey: string) {
        let value: string;
        
        const getter = function() {
            return `${formatString} ${value}`;
        };
        
        const setter = function(newVal: string) {
            value = newVal;
        };
        
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    };
}

// Example usage
@sealed
class Example {
    @format("Hello")
    greeting: string;

    @log
    greet(name: string): string {
        return `Hello, ${name}!`;
    }
} 