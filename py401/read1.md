# Class 1

## Links

- [Pain and Suffering](https://codefellows.github.io/code-401-python-guide/curriculum/class-01/notes/pain_suffering)
- [Beginners Guide to Big O](https://rob-bell.net/2009/06/a-beginners-guide-to-big-o-notation/)
- [Season 1, Episode 6, A friendly intro to Big O Notation](https://www.codenewbie.org/basecs/8)
- [Names and Values in Python](https://www.youtube.com/watch?v=_AEJHKGk9ns)
- [Awesome Python Environment](https://towardsdatascience.com/how-to-setup-an-awesome-python-environment-for-data-science-or-anything-else-35d358cc95d5)
- [Python Module of the Week](https://pymotw.com/3/index.html)

### Notes:

**Big O:**  
Big O notation describes the performance or complexity of an algorithm in relation to the size or time needed to complete. It accounts for worst case scenario.

- O(1) - Best case. Regardless of the size of the data, it will execute in the same time.
- O(n) - A linear relationship between the data size and time to complete.
- O(n\*\*2) - The time to complete is squared in relationship to data size.
- O(2^n) - Each additional data input, doubles the time to complete.
- O(LogN) - Example is Binary Search or using Binary Search Tree. As data size increase, the relative time to completion gets cut in half.

**Names and Values:**

- Mutable Aliasing - similar to pass by reference in JavaScript. This refers to list and dictionaries that can have more than one reference, and changing one will change all references.
- Immutable Values - ints, floats, strings, tuples. These values cant mutate. If you change these, behind the scene a new item is made and the reference points to that.
- rebinding - changing an int or immutable value
- mutating - changing things like list or dictionaries

**Python Environment:**

- Look into pyenv - used to install python
- pyenv-virtualenv - used to configure global tools
- Install by: `curl https://pyenv.run | bash`
- Add following to .bashrc or .zshrc:

```
export PATH="~/.pyenv/bin:$PATH"
eval "$(pyenv init -)"
eval "$(pyenv virtualenv-init -)"
```

- Install python interepreter: `pyenv install VERSION_YOU_WOULD_LIKE_TO_INSTALL`
- poetry - manages project dependencies, separate projects through virtual environments, build applications & libraries
- Look into the following libraries - Black for code formatting, mypy for static type checker, pre-commit

<br/>

[Back to Table of Contents](../README.md)
