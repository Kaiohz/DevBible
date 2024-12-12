# Design Patterns: Builder, Factory (Factory Method & Abstract Factory), and Singleton

This document outlines three creational Gang of Four (GoF) design patterns: Builder, Factory (including Factory Method and Abstract Factory), and Singleton.

## 1. Builder Pattern

**Intent:** Separate the construction of a complex object from its representation so that the same construction process can create different representations.

**Explanation:** The Builder pattern is used to construct complex objects step by step. It separates the construction logic from the object's representation, allowing you to create different variations of the object using the same construction process. This is particularly useful when an object has many optional components or requires a complex initialization process.

**Analogy:** Think of building a house. You don't build the entire house at once. Instead, you follow a series of steps: laying the foundation, building the walls, installing the roof, and so on. The Builder pattern is like a construction crew that follows a specific plan (the builder) to create different types of houses (the products).

## 2. Factory Pattern

The Factory pattern comes in two main forms: Factory Method and Abstract Factory.

### 2.1. Factory Method

**Intent:** Define an interface for creating an object, but let subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses.

**Explanation:** The Factory Method pattern defines an interface for creating objects, but the actual creation is delegated to subclasses. This allows you to create objects without specifying their concrete classes in the client code. It's useful when you don't know the exact type of object you need to create at compile time.

**Analogy:** Imagine a car factory that produces different types of cars (sedans, SUVs, trucks). The factory has a general "create car" method, but the specific type of car created depends on which production line (subclass) is used.

### 2.2. Abstract Factory

**Intent:** Provide an interface for creating families of related or dependent objects without specifying their concrete classes.

**Explanation:** The Abstract Factory pattern provides an interface for creating families of related objects without specifying their concrete classes. It's useful when you need to create multiple related objects that belong to the same "family" or "product line."

**Analogy:** Consider a GUI toolkit that supports different operating systems (Windows, macOS). An abstract factory could provide interfaces for creating related GUI elements (buttons, text fields, windows) for each operating system. The client code would use the appropriate factory (e.g., a Windows factory or a macOS factory) to create the GUI elements, without needing to know the specific implementation details.

**Key Difference between Factory Method and Abstract Factory:**

*   **Factory Method:** Creates *one* type of object, but lets subclasses decide *which* concrete type.
*   **Abstract Factory:** Creates *families* of *related* objects, without specifying concrete classes.

## 3. Singleton Pattern

**Intent:** Ensure a class only has one instance, and provide a global point of access to it.

**Explanation:** The Singleton pattern ensures that a class has only one instance and provides a global point of access to that instance. It's useful when you need to have exactly one object of a certain type in your application, such as a configuration manager or a logging service.

**Analogy:** Think of the president of a country. There can only be one president at a time. The Singleton pattern ensures that there's only one instance of the "President" class and provides a way to access that instance globally.

**Important Considerations for Singleton:**

*   **Thread Safety:** In multithreaded environments, you need to ensure that the Singleton's instantiation is thread-safe to prevent multiple instances from being created.
*   **Testing:** Singletons can make unit testing more difficult because they introduce global state.

This provides a code-less explanation of these creational design patterns. For a more in-depth understanding, consulting the original GoF book is highly recommended.