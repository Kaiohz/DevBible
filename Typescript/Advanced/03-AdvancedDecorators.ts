// Advanced Decorator Patterns

// Method Decorator Factory
function Measure() {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const originalMethod = descriptor.value;

        descriptor.value = async function (...args: any[]) {
            const start = performance.now();
            const result = await originalMethod.apply(this, args);
            const finish = performance.now();
            console.log(`${propertyKey} Execution time: ${finish - start}ms`);
            return result;
        };

        return descriptor;
    };
}

// Parameter Decorator
function ValidateParam(target: any, methodName: string, paramIndex: number) {
    const key = `${methodName}_validations`;
    if (!Reflect.hasMetadata(key, target)) {
        Reflect.defineMetadata(key, [], target);
    }
    const validations = Reflect.getMetadata(key, target);
    validations.push(paramIndex);
}

// Property Decorator with Metadata
function MaxLength(length: number) {
    return function(target: any, propertyKey: string) {
        let value: string;
        
        const getter = function() {
            return value;
        };
        
        const setter = function(newVal: string) {
            if (newVal.length > length) {
                throw new Error(`${propertyKey} cannot be longer than ${length} characters`);
            }
            value = newVal;
        };
        
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    };
}

// Class Decorator Factory
function Controller(prefix: string) {
    return function<T extends { new (...args: any[]): {} }>(constructor: T) {
        return class extends constructor {
            _prefix = prefix;
        };
    };
}

// Usage Example
@Controller('/api')
class UserController {
    @MaxLength(10)
    name: string;

    @Measure()
    async getData(@ValidateParam id: string) {
        // Simulating async operation
        await new Promise(resolve => setTimeout(resolve, 1000));
        return { id, data: 'some data' };
    }
} 