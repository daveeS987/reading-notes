## Classes, Inheritance, Functional Programming

### Video Links:

- [TDD in JS](http://www.letscodejavascript.com/)
- [JavaScript Context Tutorial](https://www.youtube.com/watch?v=fjJoX9F_F5g)

### Bookmark / Skim

- [MDN Inheritance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [MDN this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
- [MDN class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [Node Error Docs](https://nodejs.org/dist/latest-v6.x/docs/api/errors.html)
- [Jest Docs](https://jestjs.io/docs/en/getting-started)

### Questions:

1. Name 3 advantages to Test Driven Development
   Leads to more modularized, flexible & extensible code. Gives organizations the ability to painlessly update their software to address new business requirements or other unforeseen variables. Writing the tests first requires you to really consider what do you want from the code.

1. In what case would you need to use beforeEach() or afterEach() in a test suite?
   f you have some work you need to do repeatedly for many tests, you can use beforeEach and afterEach. beforeEach and afterEach can handle asynchronous code in the same ways that tests can handle asynchronous code - they can either take a done parameter or return a promise.

1. What is one downside of Test Driven Development
   It necessitates a lot of time and effort up front, which can make development feel slow to begin with.

1. What’s the primary difference between ES6 Classes and Constructor/Prototype Classes?
   A class defines a type which can be instantiated at runtime, whereas a prototype is itself an object instance. A child of an ES6 class is another type definition which extends the parent with new properties and methods, which in turn can be instantiated at runtime. A child of a prototype is another object instance which delegates to the parent any properties that aren’t implemented on the child.

1. Name a use case for a static method
   Static methods are often used to create utility functions for an application. In other words, static methods have no access to data stored in specific objects.

1. Write an example of a Higher Order function and describe the use case it solves

### Terms to know:

- functional programming - the process of building software by composing pure functions, avoiding shared state, mutable data, and side-effects. Functional programming is declarative rather than imperative, and application state flows through pure functions. Immutability is a central concept of functional programming because without it, the data flow in your program is lossy. Keep function and data separate.

- pure function - when given the same inputs, alwasy returns the same output and has no side effects

- higher-order function - any function which takes a function as an argument, returns a function, or both

- immutable state - when the values of a property cannot change

- object - An object is a collection of properties, and a property is an association between a name (or key) and a value

- object-oriented programming (OOP) - application state is usually shared and colocated with methods in objects.

- class - Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 classalike semantics.

- prototype - The prototype is an object that is associated with every functions and objects by default in JavaScript, where function's prototype property is accessible and modifiable and object's prototype property (aka attribute) is not visible. The prototype object is special type of enumerable object to which additional properties can be attached to it which will be shared across all the instances of it's constructor function.

- super - The super keyword is used to access and call functions on an object's parent.

- inheritance - Inheritance allows us to define a class in terms of another class, which makes it easier to create and maintain an application. This also provides an opportunity to reuse the code functionality and fast implementation time.

- constructor - function that creates an instance of a class which is typically called an “object”. A onstructor gets called when you declare an object using the new keyword

- instance - object created using a particular constructor function

- context - refers to the object within the function being executed.

- this - refers to the object that the function is executing in

- Test Driven Development (TDD) - a software development process that relies on the repetition of a very short development cycle. Automated unit tests are written before the code is actually written. Running these tests give you fast confirmation of whether your code behaves as it should or not.

- Jest - a javascript testing framework

- Continuous Integration (CI) - Continuous integration (CI) is the practice of automating the integration of code changes from multiple contributors into a single software project. The CI process is comprised of automatic tools that assert the new code’s correctness before integration

- unit test - UNIT TESTING is a level of software testing where individual units/ components of a software are tested. The purpose is to validate that each unit of the software performs as designed. A unit is the smallest testable part of any software. It usually has one or a few inputs and usually a single output.

### Sources

- https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0
- https://apiumhub.com/tech-blog-barcelona/advantages-of-test-driven-development/#:~:text=One%20of%20the%20advantages%20of,address%20improvement%20suggestions%20with%20aplomb.
- https://leantesting.com/test-driven-development/#:~:text=Now%2C%20let's%20take%20a%20look,can%20mean%20major%20refactoring%20requirements.
- https://www.atlassian.com/continuous-delivery/continuous-integration#:~:text=Continuous%20integration%20(CI)%20is%20the,into%20a%20single%20software%20project.&text=The%20version%20control%20system%20is,style%20review%20tools%2C%20and%20more.
- http://softwaretestingfundamentals.com/unit-testing/
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#:~:text=Classes%20are%20a%20template%20for,shared%20with%20ES5%20classalike%20semantics.

<br>
<br>

[Back to Table of Contents](README.md)
