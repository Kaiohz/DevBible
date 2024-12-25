# Advanced Python Topics Cheat Sheet

Explore deeper into Python with advanced topics and features that enhance programming efficiency and complexity.

---

## 1. **Decorators**
- Functions that modify other functions or methods.
- Useful for logging, access control, caching, etc.
  ```python
  def decorator(func):
      def wrapper(*args, **kwargs):
          print("Before function call")
          result = func(*args, **kwargs)
          print("After function call")
          return result
      return wrapper

  @decorator
  def greet(name):
      print(f"Hello, {name}!")

  greet("Alice")
  ```

---

## 2. **Generators**
- Functions that yield values lazily using `yield` instead of `return`.
  ```python
  def count_up_to(n):
      count = 1
      while count <= n:
          yield count
          count += 1

  for num in count_up_to(5):
      print(num)
  ```

---

## 3. **Context Managers**
- Use `with` to manage resources efficiently (e.g., file handling).
  ```python
  with open("file.txt", "r") as file:
      content = file.read()
  ```

- Custom context managers:
  ```python
  from contextlib import contextmanager

  @contextmanager
  def custom_manager():
      print("Entering context")
      yield
      print("Exiting context")

  with custom_manager():
      print("Inside context")
  ```

---

## 4. **Metaclasses**
- Define the behavior of classes themselves.
  ```python
  class Meta(type):
      def __new__(cls, name, bases, dct):
          print(f"Creating class {name}")
          return super().__new__(cls, name, bases, dct)

  class MyClass(metaclass=Meta):
      pass
  ```

---

## 5. **Concurrency and Parallelism**
### Multithreading:
- Perform tasks concurrently using threads.
  ```python
  import threading

  def worker():
      print("Worker thread running")

  thread = threading.Thread(target=worker)
  thread.start()
  thread.join()
  ```

### Multiprocessing:
- Run tasks in parallel across multiple processes.
  ```python
  from multiprocessing import Process

  def worker():
      print("Worker process running")

  process = Process(target=worker)
  process.start()
  process.join()
  ```

### Asyncio:
- Asynchronous programming for I/O-bound tasks.
  ```python
  import asyncio

  async def main():
      print("Before sleep")
      await asyncio.sleep(1)
      print("After sleep")

  asyncio.run(main())
  ```

---

## 6. **Type Hints and Annotations**
- Add type hints for better code clarity.
  ```python
  def greet(name: str) -> str:
      return f"Hello, {name}!"
  ```

---

## 7. **Descriptors**
- Define custom behavior for attribute access.
  ```python
  class Descriptor:
      def __get__(self, instance, owner):
          return instance._value

      def __set__(self, instance, value):
          instance._value = value

  class MyClass:
      attr = Descriptor()

  obj = MyClass()
  obj.attr = 42
  print(obj.attr)
  ```

---

## 8. **Coroutines and Async Generators**
- Coroutines:
  ```python
  async def async_func():
      print("Start")
      await asyncio.sleep(1)
      print("End")
  ```

- Async Generators:
  ```python
  async def async_gen():
      for i in range(3):
          await asyncio.sleep(1)
          yield i

  async def main():
      async for value in async_gen():
          print(value)

  asyncio.run(main())
  ```

---

## 9. **Dynamic Code Execution**
- Use `exec` and `eval` cautiously.
  ```python
  code = "print('Hello World')"
  exec(code)
  ```

---

## 10. **Packaging and Distribution**
- Structure your project with `setup.py` for packaging.
  ```python
  from setuptools import setup, find_packages

  setup(
      name="my_package",
      version="0.1",
      packages=find_packages(),
      install_requires=["numpy", "requests"],
  )
  ```

---

## 11. **Best Practices and Tools**
- Code Linting: `pylint`, `flake8`
- Formatting: `black`, `autopep8`
- Testing: `pytest`, `unittest`
- Debugging: `pdb`, `ipdb`

---

## Resources
- [Python Documentation](https://docs.python.org/3/)
- [Real Python Advanced Topics](https://realpython.com/)
- [Effective Python](https://effectivepython.com/)

---
