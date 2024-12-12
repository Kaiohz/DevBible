# Design Patterns: Command, Iterator, Observer, State, Strategy, and Visitor

This document outlines several important Gang of Four (GoF) design patterns: Command, Iterator, Observer, State, Strategy, and Visitor.

## 1. Command Pattern

**Intent:** Encapsulate a request as an object, thereby letting you parameterize clients with different requests, queue or log requests, and support undoable operations.

**Explanation:** The Command pattern turns actions themselves into objects. This allows you to store, pass around, and manage actions like any other data. Key benefits include:

*   **Decoupling:** The object that triggers an action is decoupled from the object that performs it.
*   **Queuing:** Commands can be placed in a queue for later execution.
*   **Undo/Redo:** By storing a history of commands, you can easily implement undo and redo functionality.
*   **Logging:** Commands can be logged for auditing or debugging purposes.

**Analogy:** Imagine ordering food at a restaurant. You (the client) give your order (the command) to the waiter (the invoker), who then relays it to the kitchen (the receiver). You don't need to know how the food is prepared; you just issue the command.

## 2. Iterator Pattern

**Intent:** Provide a way to access the elements of an aggregate object sequentially without exposing its underlying representation.

**Explanation:** The Iterator pattern provides a standardized way to traverse collections of objects (like lists, arrays, or trees) without needing to know how the collection is stored internally. This promotes code reusability and simplifies working with different types of collections.

**Analogy:** Think of a music playlist. You can go through the songs one by one (iterate) without knowing how the playlist is stored on your device (e.g., as a linked list or an array).

## 3. Observer Pattern

**Intent:** Define a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.

**Explanation:** The Observer pattern establishes a "subscription" mechanism where one object (the subject) maintains a list of its dependents (observers). When the subject's state changes, it automatically notifies all its observers, allowing them to react accordingly.

**Analogy:** Consider a news agency (the subject) and its subscribers (the observers). When the agency publishes a new story, all subscribers are notified and receive the news.

## 4. State Pattern

**Intent:** Allow an object to alter its behavior when its internal state changes. The object will appear to change its class.

**Explanation:** The State pattern allows an object to change its behavior based on its internal state. Instead of using large conditional statements, the object delegates specific behaviors to separate state objects. This makes the code more organized and easier to maintain.

**Analogy:** Think of a traffic light. Its behavior (which lights are on) depends on its current state (red, yellow, or green). The traffic light doesn't need complex if/else logic; it simply delegates to the current state object.

## 5. Strategy Pattern

**Intent:** Define a family of algorithms, encapsulate each one, and make them interchangeable. Strategy lets the algorithm vary independently from clients that use it.

**Explanation:** The Strategy pattern allows you to choose an algorithm at runtime. It defines a common interface for a set of algorithms, allowing you to switch between them easily without modifying the client code.

**Analogy:** Imagine sorting a list of items. You can use different sorting algorithms (e.g., bubble sort, quicksort, merge sort). The Strategy pattern lets you choose which algorithm to use without changing the code that uses the sorting functionality.

## 6. Visitor Pattern

**Intent:** Represent an operation to be performed on the elements of an object structure. Visitor lets you define a new operation without changing the classes of the elements on which it operates.

**Explanation:** The Visitor pattern is used to add new operations to a hierarchy of objects without modifying the classes of those objects. It achieves this by defining a separate "visitor" object that traverses the object structure and performs the desired operation on each element.

**Analogy:** Imagine a museum with different types of exhibits (paintings, sculptures, artifacts). You want to create a guide who can provide information about each exhibit. The Visitor pattern allows you to create different types of guides (e.g., an art historian, a historian) without changing the classes of the exhibits themselves. Each guide (visitor) knows how to provide specific information for each type of exhibit.

This provides a code-less explanation of the design patterns. For a deeper understanding, consulting the original GoF book is highly recommended.