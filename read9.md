# Read: 09 - Refactoring

Links: 

[Functional Programming Concepts](https://medium.com/the-renaissance-developer/concepts-of-functional-programming-in-javascript-6bc84220d2aa)
[Refactoring Javascript for Readibility](https://dev.to/healeycodes/refactoring-javascript-for-performance-and-readability-with-examples-1hec)


## Concepts of Functional Programming

Pure-functions: 
  - It returns the same result if given the same arguments (it is also referred as deterministic)
  - It does not cause any observable side effects
  - function that aren't pure - ones that reads external files, random number genrations, 
  - mutability is discouraged(modifying global variables)

Immutability:

Referential transparency:
  - if a function consistently yields the same result for the same input
  - pure functions + immutable data = referential transparency

Functions as first-class entities:
  - functions are treated as values and used as data

Higher-Order Functions