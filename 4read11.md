## Read 11: Authentication

### Review, Research, and Discussion

1. Explain what a “Singleton” is (in Computer Science terms)

   - a software design pattern that restricts the instantiation of a class to one "single" instance. This is useful when exactly one object is needed to coordinate actions across the system

1. Explain how the Singleton pattern can be used with Node modules, specifically with classes

   - when we export a module or class, we can instantiate what is being exported so that only one instance is created. this reduces unnecessary instantiations in our app.

1. If you were tasked with building a middleware system like Express uses, what approach might you take to construct/operate it?
   - Draw out a UML
   - Be clear of what the user input is and the expected output
   - Identify each step or process that is needed along the way
   - build out each process into its own module
   - test each module than do unit test

### Vocabulary Terms

- Router Middleware - middleware that is bound to an instance of express.Router().
- Dynamic Module Loading - loading modules based on when the app requires it. Avoids preloading
- Singleton Pattern - a software design pattern that restricts the instantiation of a class to one "single" instance.
- CRUD -> REST Method Matches -
  - Create = Post
  - Read - Get
  - Update - Put, Patch
  - Delete - Delete
- Mock Testing - is an approach to unit testing that lets you make assertions about how the code under test is interacting with other system modules. In mock testing, the dependencies are replaced with objects that simulate the behaviour of the real ones.

### Preview

1. Which 3 things had you heard about previously and now have better clarity on?

   - Singleton patterns and why its used

1. Which 3 things are you hoping to learn more about in the upcoming lecture/demo?

   - using authorization

1. What are you most excited about trying to implement or see how it works?
   - using authorization

<br>
<br>

[Back to Table of Contents](README.md)
