# Design Patterns: Adapter, Composite, Decorator, Facade, and Proxy

This document outlines several important Gang of Four (GoF) design patterns: Adapter, Composite, Decorator, Facade, and Proxy.

## 1. Adapter Pattern

**Intent:** Convert the interface of a class into another interface clients expect. Adapter lets classes work together that couldn't otherwise because of incompatible interfaces.

**Explanation:** The Adapter pattern acts as a bridge between two incompatible interfaces. It allows classes with different interfaces to collaborate without modification to their source code. It achieves this by creating an adapter class that implements the target interface and delegates calls to the adaptee class.

**Analogy:** Think of a power adapter for a laptop. Different countries have different power outlets. The adapter allows a laptop with a specific plug to be used in a country with a different type of outlet.

## 2. Composite Pattern

**Intent:** Compose objects into tree structures to represent part-whole hierarchies. Composite lets clients treat individual objects and compositions of objects uniformly.

**Explanation:** The Composite pattern allows you to treat individual objects and compositions of objects in the same way. It creates a tree-like structure where each node can be either a leaf (individual object) or a composite (collection of objects). This simplifies client code because it doesn't need to distinguish between individual objects and groups of objects.

**Analogy:** Consider a file system. A file can be considered an individual object (leaf), while a directory can contain files and other directories (composite). You can perform operations like copying or deleting on both files and directories in the same way.

## 3. Decorator Pattern

**Intent:** Attach additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.

**Explanation:** The Decorator pattern allows you to add new behaviors to objects dynamically without altering their class. It achieves this by wrapping the original object with one or more decorator objects. Each decorator adds its own specific functionality.

**Analogy:** Think of decorating a Christmas tree. You start with a basic tree and then add ornaments, lights, and a star. Each decoration adds a new feature to the tree without changing the tree itself.

## 4. Facade Pattern

**Intent:** Provide a unified interface to a set of interfaces in a subsystem. Facade defines a higher-level interface that makes the subsystem easier to use.

**Explanation:** The Facade pattern provides a simplified interface to a complex subsystem. It hides the complexity of the subsystem behind a single facade object, making it easier for clients to use.

**Analogy:** Imagine ordering a complex computer system. Instead of dealing with individual components like the CPU, motherboard, and RAM, you interact with a sales representative who acts as a facade. The sales representative handles the details of putting the system together.

## 5. Proxy Pattern

**Intent:** Provide a surrogate or placeholder for another object to control access to it.

**Explanation:** The Proxy pattern provides a substitute for another object. It controls access to the original object, allowing you to perform actions like lazy initialization, access control, or logging before or after the request is passed to the real object.

**Analogy:** Think of a security guard at a building. The security guard acts as a proxy for the building, controlling who has access. They can verify identification, log entries, and prevent unauthorized access.

This provides a code-less explanation of the design patterns. For a deeper understanding, consulting the original GoF book is highly recommended.