# Class 7 Readings

## Links and Resources

- [Python Scope](https://realpython.com/python-scope-legb-rule/)
- [Don’t be CONFUSED by BIG O notation anymore!](https://www.youtube.com/watch?v=5Uqawfl0VHQ)
- [Rolling Dice Examples](https://artofproblemsolving.com/wiki/index.php/Basic_Programming_With_Python#Program_Example_1_3)

### Python Scope

- Concept of scope rules how variables and names are looked up in your code
- Python scope concept uses a rule called LEGB rule
- LEGB - Local, Enclosing, Global, Built-in
- Scope - in programming it means the area of a program where you can access a variable name
- Global Scope - name is available to all your code
- Local Scope - name is accessable only within a certain area
- Python names can be created through assignments, import operations, function definitions, argument definition in context of functions, class definition
- Python scopes are implemented as diciontaries that map names to objects aka namespaces
- Namespaces are stored in a special attribute called .**dict**

```python
# Will return a list of all names defined at top level of the module
import sys
sys.__dict__.keys()
```

```python
# These methods are used to access ps1 name
sys.ps1
sys.__dict__['ps1']
```

- LEGB
  - Local - scope within a function. Names are created at function call not when defining. So the different function calls will create different scopes, even if you call the function recursively
  - Enclosing - scope that exist for nested function. This would be the outer scope of a nested function.
  - Global - top most scope
  - Built In - special python scope thats created whenever you run a script or open an ineractive session. This scope contains names such as keywords, fucntions, exceptions, and other attributes that are built into python.

```python
def create_lazy_name():
    global lazy  # Create a global name, lazy
    lazy = 100
    return lazy

create_lazy_name()

lazy  # The name is now available in the global scope
```

- global keyword can be used to modify and create global names inside functions

```python
def func():
    var = 100  # A nonlocal variable
    def nested():
        nonlocal var  # Declare var as nonlocal
        var += 100

    nested()
    print(var)

func() # will return 200
```

- nonlocal keyword only works in nested functions
- can be used to modify variables one scope up in nested functions

```python
# Using Enclosing Scopes as closures
def power_factory(exp):
    def power(base):
        return base ** exp
    return power

square = power_factory(2)
square(10) # returns 100

cube = power_factory(3)
cube(10) # returns 1000

cube(5) # returns 125

square(15) # returns 225
```

```python
def mean():
    sample = []
    def _mean(number):
        sample.append(number)
        return sum(sample) / len(sample)
    return _mean

current_mean = mean()
current_mean(10) # 10
current_mean(15) # 12.5
current_mean(12) # 12.3333334
current_mean(11) # 12.0
current_mean(13) # 12.2
```

```python
def mean():
    total = 0
    length = 0
    def _mean(number):
        nonlocal total, length
        total += number
        length += 1
        return total / length
    return _mean

current_mean = mean()
current_mean(10) # 10
current_mean(15) # 12.5
current_mean(12) # 12.3333334
current_mean(11) # 12.0
current_mean(13) # 12.2
```
