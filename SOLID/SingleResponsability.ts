// BAD APPROACH - This class violates SRP by having multiple responsibilities
class Employee {
    constructor(
        private name: string,
        private salary: number,
        private position: string
    ) {}

    // Employee data management
    public getName(): string {
        return this.name;
    }

    public updateEmployeeInfo(name: string, position: string): void {
        this.name = name;
        this.position = position;
    }

    // Salary calculations
    public calculateSalaryWithBonus(bonus: number): number {
        return this.salary + bonus;
    }

    public calculateTaxes(): number {
        return this.salary * 0.2;
    }

    // Database operations
    public saveToDatabase(): void {
        // Imagine complex database logic here
        console.log(`Saving employee ${this.name} to database`);
    }

    // Report generation
    public generatePayrollReport(): string {
        return `
            Employee: ${this.name}
            Position: ${this.position}
            Salary: ${this.salary}
            Taxes: ${this.calculateTaxes()}
        `;
    }
}

// GOOD APPROACH - Separating responsibilities into different classes
class Employee {
    constructor(
        private name: string,
        private salary: number,
        private position: string
    ) {}

    public getName(): string {
        return this.name;
    }

    public getSalary(): number {
        return this.salary;
    }

    public getPosition(): string {
        return this.position;
    }

    public updateInfo(name: string, position: string): void {
        this.name = name;
        this.position = position;
    }
}

class SalaryCalculator {
    public calculateSalaryWithBonus(employee: Employee, bonus: number): number {
        return employee.getSalary() + bonus;
    }

    public calculateTaxes(employee: Employee): number {
        return employee.getSalary() * 0.2;
    }
}

class EmployeeRepository {
    public saveEmployee(employee: Employee): void {
        // Database logic isolated here
        console.log(`Saving employee ${employee.getName()} to database`);
    }
}

class PayrollReportGenerator {
    public generateReport(employee: Employee, calculator: SalaryCalculator): string {
        return `
            Employee: ${employee.getName()}
            Position: ${employee.getPosition()}
            Salary: ${employee.getSalary()}
            Taxes: ${calculator.calculateTaxes(employee)}
        `;
    }
}

// Usage example
const employee = new Employee("John Doe", 50000, "Developer");
const calculator = new SalaryCalculator();
const repository = new EmployeeRepository();
const reportGenerator = new PayrollReportGenerator();

// Each class handles its own responsibility
employee.updateInfo("John Doe", "Senior Developer");
const taxes = calculator.calculateTaxes(employee);
repository.saveEmployee(employee);
const report = reportGenerator.generateReport(employee, calculator);
