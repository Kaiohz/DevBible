// Advanced Types in TypeScript

// Intersection Types
type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

// Type Guards
function isEmployee(staff: Admin | Employee): staff is Employee {
    return (staff as Employee).startDate !== undefined;
}

// Discriminated Unions
interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    switch (animal.type) {
        case 'bird':
            return `Flying at speed: ${animal.flyingSpeed}`;
        case 'horse':
            return `Running at speed: ${animal.runningSpeed}`;
    }
}

// Index Types
interface ErrorContainer {
    [prop: string]: string;
}

// Mapped Types
type Optional<T> = {
    [P in keyof T]?: T[P];
};

type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};

// Conditional Types
type ExtractType<T> = T extends string
    ? 'string'
    : T extends number
    ? 'number'
    : T extends boolean
    ? 'boolean'
    : 'object';

// Template Literal Types
type EmailLocaleIDs = 'welcome_email' | 'email_heading';
type FooterLocaleIDs = 'footer_title' | 'footer_sendoff';
type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`; 