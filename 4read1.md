# Readings: Node Ecosystem, TDD

Links:

- [What is NPM](https://docs.npmjs.com/getting-started/what-is-npm)
- [npm docs](https://docs.npmjs.com/)

## Vocabulary Terms

- ecosystem

- Node.js - is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Node. js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices. Allows you to run javascript on your machine.

- V8 Engine - a browser engine that runs javascript code. takes javavscript code and turns into binary code that the cpu can read

- module - A module is any file or directory in the node_modules directory that can be loaded by the Node.js require() function.

- package - A package is a file or directory that is described by a package.json file. A package must contain a package.json file in order to be published to the npm registry.bits of reusable code, sometimes called modules. directory with one or more files in it.

- node package manager (npm) - world's largest software registry. consist of three components: the website, command line interface(CLI), the registry

- server - hardware or software that can send information or serve the client

- environment-

- interpreter - can take the raw JavaScript code and run it for you

- compiler - translates code into bytecode that the machine understands and can execute.

## Questions

1. Why would you want to run JavaScript code outside of a browser?

- When you run Javascript inside a browser its limited to one thread. If you were to run it in the node.js system you can have an additional worker threads that can be responsible for asynchronous operations. These worker threads are managed by an event queue. Thats why node.js is considered to have a non-blocking event-driven asynchronous I/O architecture.

2. What is the difference between a module and a package?

- Modules are libraries for Node.js. A package can be one or more modules grouped or packaged together.

3. What does the node package manager do?

- Aids in package installation, version management, and dependency management. Serves as an online repository for the publishing of opeen-source Node.js projects.

4. Provide code snippets showing 3 different ways to export a function from a node module
