## Read 17: TCP Servers

### Review, Research, and Discussion

1. Given the examples of front-end events such as button click, window resize, form submit, etc, what are some examples of back-end events?
   - when a route gets triggered, execute a route handler
1. Why are events sometimes better than asynchronous actions with callbacks?
   - With asynchronous actions with callbacks, the callback is under the control of the detecting process or the handler. With events you can have multiple "listeners" that each execute their own reaction, independent of other listeners.
1. What does an EventEmitter instance do?
   - create an instance of an EventEmitter class that can trigger or handle custom events.
1. When is a program’s call stack, event queue, and event loop active?
   - During asynchronous operations, calls stacks are active when there are function or operations processing in the javascript runtime. When async calls are needed, the operation is popped off from the stack, goes to perform its operation, and when complete gets queued into the task queue. Once call stack is empty, the event loop will take from queue and stack back into call stack.

### Vocabulary Terms

- Observer Pattern -a software design pattern in which an object, called the subject, maintains a list of its dependents, called observers, and notifies them automatically of any state changes, usually by calling one of their methods.
- Listener - a procedure or function in a computer program that waits for an event to occur
- Event Handler - the mechanism that controls the event and decides what should happen if an event occurs
- Event Driven Programming -a programming paradigm in which the flow of program execution is determined by events
- Event Loop - a programming construct or design pattern that waits for and dispatches events or messages in a program. The event loop works by making a request to some internal or external "event provider", then calls the relevant event handler
- Event Queue - a queue of events that is watiing to be processed
- Call Stack - is a mechanism for an interpreter (like the JavaScript interpreter in a web browser) to keep track of its place in a script that calls multiple functions — what function is currently being run and what functions are called from within that function, etc.
- Emit/Raise/Trigger - (publish) causes all callbacks registered to the event to 'fire', (get called), or execute.
- Subscribe - listen to an event and act accordingly
- database - a repository of information managed by a database engine which ensures integrity of data and fast access to the data

### Preview

1. Which 3 things had you heard about previously and now have better clarity on?  
   Event loop, event queue, call stack
1. Which 3 things are you hoping to learn more about in the upcoming lecture/demo?  
   Event driven programming
1. What are you most excited about trying to implement or see how it works?  
    Creating mulitiple servers to communicate with each other or to trigger each other  
   <br>
   <br>

[Back to Table of Contents](README.md)
