# Python Fundamentals Cheat Sheet

Python is a versatile, high-level programming language. Below are the core concepts and fundamentals every Python programmer should know.

---

## 1. **Basic Syntax**
- Case-sensitive, indentation-sensitive language.
- Code blocks are defined by indentation.
  ```python
  if True:
      print("Hello, Python!")  # Proper indentation
  ```

---

## 2. **Variables and Data Types**
### Variables:
- No need to declare types explicitly; Python is dynamically typed.
  ```python
  x = 5         # Integer
  name = "John" # String
  is_active = True  # Boolean
  ```

### Data Types:
- **Numeric**: `int`, `float`, `complex`
- **Sequence**: `list`, `tuple`, `range`
- **Text**: `str`
- **Mapping**: `dict`
- **Set Types**: `set`, `frozenset`
- **Boolean**: `bool`
- **NoneType**: `None`

---

## 3. **Operators**
- **Arithmetic**: `+`, `-`, `*`, `/`, `//`, `%`, `**`
- **Comparison**: `==`, `!=`, `>`, `<`, `>=`, `<=`
- **Logical**: `and`, `or`, `not`
- **Membership**: `in`, `not in`
- **Identity**: `is`, `is not`

---

## 4. **Control Flow**
### Conditional Statements:
```python
if condition:
    # Code block
elif another_condition:
    # Another code block
else:
    # Fallback code block
```

### Loops:
- **For Loop**:
  ```python
  for i in range(5):
      print(i)
  ```
- **While Loop**:
  ```python
  while condition:
      # Loop body
  ```

- Use `break` and `continue` to control loops.

---

## 5. **Functions**
- Defined using the `def` keyword.
  ```python
  def greet(name):
      return f"Hello, {name}!"
  ```

- **Lambda Functions**:
  ```python
  square = lambda x: x ** 2
  ```

---

## 6. **Data Structures**
### Lists:
- Mutable, ordered collection.
  ```python
  my_list = [1, 2, 3]
  ```

### Tuples:
- Immutable, ordered collection.
  ```python
  my_tuple = (1, 2, 3)
  ```

### Sets:
- Unordered collection of unique items.
  ```python
  my_set = {1, 2, 3}
  ```

### Dictionaries:
- Key-value pairs.
  ```python
  my_dict = {"name": "Alice", "age": 25}
  ```

---

## 7. **File Handling**
- Open, read, write, and close files.
  ```python
  with open("file.txt", "r") as file:
      content = file.read()
  ```

---

## 8. **Modules and Libraries**
- Importing modules:
  ```python
  import math
  print(math.sqrt(16))
  ```

- Common libraries: `os`, `sys`, `random`, `datetime`, `re`, `json`

---

## 9. **Object-Oriented Programming (OOP)**
### Classes and Objects:
```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        return f"Hi, I am {self.name}"

p = Person("Alice", 30)
print(p.greet())
```

---

## 10. **Error Handling**
- Using `try`, `except`, `else`, and `finally`:
  ```python
  try:
      result = 10 / 0
  except ZeroDivisionError:
      print("Division by zero is not allowed!")
  finally:
      print("Execution complete.")
  ```

---

## 11. **Comprehensions**
- Shorter syntax for creating sequences.
  ```python
  squares = [x**2 for x in range(10)]
  ```

---

## 12. **Useful Features**
### F-strings:
- String interpolation.
  ```python
  name = "Alice"
  print(f"Hello, {name}!")
  ```

### Enumerate:
- Iterating with index.
  ```python
  for idx, val in enumerate(["a", "b", "c"]):
      print(idx, val)
  ```

---

## 13. **Advanced Topics**
- Decorators
- Generators
- Context Managers
- Multithreading and Multiprocessing
- Asynchronous Programming (`asyncio`)

---

## Resources
- [Python Documentation](https://docs.python.org/3/)
- [Real Python](https://realpython.com/)
- [W3Schools Python](https://www.w3schools.com/python/)

---
