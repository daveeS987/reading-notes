# Class 6 Notes

## Links & Resources

- [How to use Random Module](https://www.pythonforbeginners.com/random/how-to-use-the-random-module-in-python)
- [What is Risk Analysis](https://www.edureka.co/blog/risk-analysis-in-software-testing/)
- [Big O Notation](https://www.youtube.com/watch?v=v4cd1O4zkGw)
- [Python Random](https://docs.python.org/3/library/random.html)
- [What is Dependency Injection](https://www.freecodecamp.org/news/a-quick-intro-to-dependency-injection-what-it-is-and-when-to-use-it-7578c84fa88f/)

### Random Module

Some Methods in Random Module

- random.randint(start, stop)
- random.random()
- random.choice(array)
- random.randrange(start, stop, [step])

```python
import random
random.randint(0, 5)
random.random() * 100
random.choice( ['red', 'black', 'green'] ).
```

```python
from random import shuffle
x = [[i] for i in range(10)]
shuffle(x)
```

### Risk Analysis

- Risk - probability of any unwanted incident
- Risk Analysis - process of identifying the risk in software and prioritizing them in test
- Risk Assesment
  - Early forecast of unwanted situations in your project
  - Estimate potential loss of such situation
  - Making decisions to deal with such situations
  - Avoid the future consequences
- Perspectives
  - effect
  - cause
  - likelihood
- Perform Risk Analysis
  - Search the risk
  - Analyze the impact of each risk
  - Measures for the risk identified

### Dependency Injection

- Dependency Injection - technique where one object(or static method) supplies the dependencies of another object
- 3 types of dependency injection
  - constructor injection: the dependencies are provided through a class constructor
  - setter injection: the client exposes a setter method that the injector uses to inject the dependency
  - interface injection: the dependency provides an injector method that will inject the dependency into any client passed to it. Clients must implement an interface that exposes a setter method that accepts the dependency
- Dependecy Injections Responsibility
  - create the objects
  - know which classes require those objects
  - provide them all those objects
- A class should depend on abstraction and not upon concretions (in simple terms, hard-coded)
