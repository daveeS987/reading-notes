# Read4: Classes, Objects, Recursion, Pytest Fixtures & Coverage

## Links & Resources

- [Classes and Objects](https://www.learnpython.org/en/Classes_and_Objects)
- [Thinking Recursively](https://realpython.com/python-thinking-recursively/)
- [Pytest Fixtures and Coverage](https://www.linuxjournal.com/content/python-testing-pytest-fixtures-and-coverage)
- [Pytest Fixtures](https://docs.pytest.org/en/latest/fixture.html)

### Classes and Objects

- Objects are encapsulations of variables and functions into a single entity
- Clases are essentially a template to create your objects

### Thinking Recursively

- A recursive function is a function defined in terms of itself via self-referential expressions.
- This means a function will continue to call itself until a base condition is met to return a result
- There's two ways to pass a state through a recursive function
  - Threading, which is passing the updated state through the function call as an argument
  - Utilizing global variables that get manipulated on each call(not preferred)

### Pytest fixtures and Coverage

- Fixtures - Objects with data that need to be available to multiple tests, or data involving the network or filesytem
- Coverage
  - look into package called pytest-cov
  - invoke pytest with --cov option
  - example: `pytest --cov=mymul .`
  - `coverage html` - this creates a directory called htmlcov, open the index.html using your browser, and youll get a web based report
