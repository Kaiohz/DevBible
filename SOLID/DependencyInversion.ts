// BAD APPROACH - Violating Dependency Inversion Principle
class MySQLDatabase {
    connect(): void {
        console.log("Connecting to MySQL database...");
    }

    query(sql: string): void {
        console.log(`Executing MySQL query: ${sql}`);
    }
}

class UserService {
    private database: MySQLDatabase;

    constructor() {
        // High-level module directly depends on low-level module
        this.database = new MySQLDatabase();
    }

    saveUser(name: string, email: string): void {
        this.database.connect();
        const sql = `INSERT INTO users (name, email) VALUES (${name}, ${email})`;
        this.database.query(sql);
    }
}

// GOOD APPROACH - Following Dependency Inversion Principle
interface IDatabase {
    connect(): void;
    query(sql: string): void;
}

interface ILogger {
    log(message: string): void;
}

// Low-level module implementing the interface
class MySQL implements IDatabase {
    connect(): void {
        console.log("Connecting to MySQL database...");
    }

    query(sql: string): void {
        console.log(`Executing MySQL query: ${sql}`);
    }
}

class PostgreSQL implements IDatabase {
    connect(): void {
        console.log("Connecting to PostgreSQL database...");
    }

    query(sql: string): void {
        console.log(`Executing PostgreSQL query: ${sql}`);
    }
}

class ConsoleLogger implements ILogger {
    log(message: string): void {
        console.log(message);
    }
}

// High-level module depending on abstractions
class ImprovedUserService {
    constructor(
        private database: IDatabase,
        private logger: ILogger
    ) {}

    saveUser(name: string, email: string): void {
        this.logger.log("Attempting to save user...");
        this.database.connect();
        const sql = `INSERT INTO users (name, email) VALUES (${name}, ${email})`;
        this.database.query(sql);
        this.logger.log("User saved successfully");
    }
}

// Example usage
// Bad approach
const userService = new UserService();
userService.saveUser("John", "john@example.com");

// Good approach
const mysql = new MySQL();
const postgres = new PostgreSQL();
const logger = new ConsoleLogger();

// We can easily switch between different database implementations
const mysqlUserService = new ImprovedUserService(mysql, logger);
const postgresUserService = new ImprovedUserService(postgres, logger);

mysqlUserService.saveUser("John", "john@example.com");
postgresUserService.saveUser("Jane", "jane@example.com");

// We can also easily mock dependencies for testing
class MockDatabase implements IDatabase {
    connect(): void {
        // Do nothing
    }

    query(sql: string): void {
        // Do nothing
    }
}

class MockLogger implements ILogger {
    messages: string[] = [];

    log(message: string): void {
        this.messages.push(message);
    }
}

// Easy to test with mocks
const mockDb = new MockDatabase();
const mockLogger = new MockLogger();
const testUserService = new ImprovedUserService(mockDb, mockLogger);
testUserService.saveUser("Test", "test@example.com"); 