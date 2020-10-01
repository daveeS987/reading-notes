## Stacks & Queues

Stack is a data structure that doesn't retain the data as you're traversing it. It may look at the data or perform operations but won't store it in memory. It follows a Last in First out concept. Meaning when something is added to the stack, the last item added will be the first one to be executed or popped. The common terminology used with stacks is push, pop, top, and peek. A good example of stack is the javascript runtime stack. Once an operation is added to the stack, it will execute whats on top first, or what was added last. A good analogy is stacking plates and tacking plates off.

Queue is very similar to stack. It follows a first in, first out approach. A good analogy are people in line for the movie theater. The first person to get in line, is the first person to be served. This data structure is good to use when things need to be executed in order. A common example would be the task queue in an event loop. When an async operation completes, it gets added to the task queue. Once the call stack is empty, whatever is in the task queue first, is the one that gets dequeued. The common terminology with stacks is enqueue, dequeue, front, rear, and peek.

<br>
<br>

[Back to Table of Contents](README.md)
