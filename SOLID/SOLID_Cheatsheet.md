
# SOLID Principles Cheatsheet

## S - Single Responsibility Principle (SRP)
- A class should have only one reason to change
- Each class should have only one job/responsibility
- Example: Separate data storage, data validation, and logging into different classes

## O - Open/Closed Principle (OCP)
- Software entities should be open for extension but closed for modification
- Add new functionality by extending, not modifying existing code
- Example: Use interfaces and inheritance instead of modifying existing classes

## L - Liskov Substitution Principle (LSP)
- Objects of a superclass should be replaceable with objects of its subclasses
- Subtypes must be substitutable for their base types
- Example: If code works with a base class, it should work with any derived class

## I - Interface Segregation Principle (ISP)
- Clients should not be forced to depend on interfaces they don't use
- Many specific interfaces are better than one general-purpose interface
- Example: Split large interfaces into smaller, more specific ones

## D - Dependency Inversion Principle (DIP)
- High-level modules should not depend on low-level modules
- Both should depend on abstractions
- Abstractions should not depend on details
- Example: Use interfaces instead of concrete implementations