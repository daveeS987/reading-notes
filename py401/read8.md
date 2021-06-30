# Class 8 Notes

## Links and Resources

- [List Comprehensions](https://www.pythonforbeginners.com/basics/list-comprehensions-in-python)
- [Primer on Decorators](https://realpython.com/primer-on-python-decorators/)
- [Debugging with PySnooper](https://www.pythonpodcast.com/pysnooper-python-debugging-episode-241/)

### List Comprehensions

```python

[ expression for item in list if conditional ]

# is equivalent to

for item in list:
    if conditional:
        expression

```

### Decorators

- decorator - a function that takes another function and extends its behavior without modifying it
  - they wrap a function modifying its behavior
- In python, functions are considered first-class objects meaning they can be passed around as arguments
- Python also allows you to use functions as return values

```python
from datetime import datetime

def my_decorator(func):
    def wrapper():
        print("Something is happening before the function is called.")
        func()
        print("Something is happening after the function is called.")
    return wrapper

def say_whee():
    print("Whee!")

say_whee = my_decorator(say_whee)
```

is the same as

```python
def my_decorator(func):
    def wrapper():
        print("Something is happening before the function is called.")
        func()
        print("Something is happening after the function is called.")
    return wrapper

@my_decorator
def say_whee():
    print("Whee!")
```

- Use \*args and \*\*kwargs if you need to decorate functions that take arguments

```python
def do_twice(func):
    def wrapper_do_twice(*args, **kwargs):
        func(*args, **kwargs)
        func(*args, **kwargs)
    return wrapper_do_twice
```

- Pay attention to what or if decorators need to return something
- make sure the wrapper function returns the return value of the decorated function

```python
def do_twice(func):
    def wrapper_do_twice(*args, **kwargs):
        func(*args, **kwargs)
        return func(*args, **kwargs)
    return wrapper_do_twice
```

- to preserve information about the original function

```python
import functools

def do_twice(func):
    @functools.wraps(func)
    def wrapper_do_twice(*args, **kwargs):
        func(*args, **kwargs)
        return func(*args, **kwargs)
    return wrapper_do_twice
```
