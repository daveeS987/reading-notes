## Read 10 - The Call Stack & Debugging

**Links:**

- [The Call Stack defined on MDN](https://developer.mozilla.org/en-US/docs/Glossary/Call_stack)  
- [Understanding the JavaScript Call Stack](https://medium.freecodecamp.org/understanding-the-javascript-call-stack-861e41ae61d4)
- [JavaScript error messages](https://codeburst.io/javascript-error-messages-debugging-d23f84f0ae7c)
- [JavaScript errors reference on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors)

### Call Stack

- A call stack is a mechanism for an interpreter (like the JavaScript interpreter in a web browser) to keep track of its place in a script that calls multiple functions. 

- The JavaScript engine (which is found in a hosting environment like the browser), is a single-threaded interpreter comprising of a heap and a single call stack. 

- Call stack is a data structure that uses the Last In, First Out (LIFO) principle to temporarily store and manage function invocation (call)

- A stack overflow occurs when there is a recursive function (a function that calls itself) without an exit point.

```
function callMyself(){
  callMyself();
}

callMyself();
```

The key takeaways from the call stack are:
1. It is single-threaded. Meaning it can only do one thing at a time.
2. Code execution is synchronous.
3. A function invocation creates a stack frame that occupies a temporary memory.
4. It works as a LIFO — Last In, First Out data structure.

### JavaScript Error Messages

- Reference errors - using a variable that is not yet declared
- Syntax -
- Range - Try to manipulate an object with some kind of length and give it an invalid length
- Type - when the types you are trying to use or access is incompatible


- Add names to function whenever possible
- Try using try…catch when the type checks are becoming “longer than your function logic”, when a request is made and you aren’t sure if the response might change or temporarily when a code is continuously giving you problems




<br>
<br>

[Back to Table of Contents](README.md)