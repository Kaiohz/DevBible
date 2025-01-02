## Python interview questions

## how to use pointers in python ? 
Python doesn't have direct pointer support like C/C++. However, Python uses object references:
- Everything in Python is an object
- Variables store references to objects (memory addresses)
- The 'id()' function shows an object's memory address
- Memory management is automatic through garbage collection
- No pointer arithmetic or direct memory manipulation is possible

## When you pass a variable in a method is it passed by value or reference ?
In Python, variables are passed by object reference. This means:
- For mutable objects (lists, dictionaries, etc.), the reference allows modifying the original object
- For immutable objects (integers, strings, tuples), modifications create a new object
- Python doesn't use true pass-by-value or pass-by-reference like some other languages

## if you want the variable to not be modified once is passed in a function, how can you do it ?
There are several ways to prevent modifications:
1. Use immutable types (tuples instead of lists)
2. Create a copy of the object before passing:
   - Use .copy() for shallow copies
   - Use copy.deepcopy() for deep copies
3. Use the @functools.wraps decorator to ensure the original object remains unchanged

## why fastAPI is so fast and efficient ?
FastAPI's high performance comes from:
1. Built on Starlette and Pydantic
2. Async support by default
3. Just-in-time compilation using Python type hints
4. Automatic data validation
5. OpenAPI documentation generation
6. Built-in concurrency using async/await

## How asynchronous works ?
Asynchronous programming in Python works through:
1. Coroutines (async/await syntax)
2. Event loop that manages async operations
3. Non-blocking I/O operations
4. Tasks that can be paused and resumed
The event loop coordinates multiple coroutines, allowing concurrent execution without blocking.

## asynchronous in python does it create threads ?
No, Python's async/await doesn't create threads. Instead:
- It uses a single-threaded event loop
- Manages concurrent operations through coroutines
- Switches between tasks when they're waiting for I/O
- More lightweight than threads
- Better for I/O-bound operations
- Different from Python's threading or multiprocessing



