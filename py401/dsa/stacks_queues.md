# Stacks & Queues

## Links and Resources

- [Stacks and Queues](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-10/resources/stacks_and_queues.html)

## Stacks

Terminology:

- Push - adding nodes to the top of the stack
- Pop - taking a node off the top of stack
- Top - node at the top
- Peek - looking at the top value
- isEmpty - returns true if stack is empty
- FILO - First in Last out
- LIFO - Last in First Out
- Analogy - stacking plates. First one to be processed will be the last plate that was put on top.

### Stack Methods

```python
class Stacks:
  def __init__(self, node=None):
      self.top = node
```

### Push

```python
    def push(self, value):
      node = Node(value)
      node.next = self.top
      self.top = node
      return self
```

Big O:

- Time: O(1)

### Pop

```python
    def pop(self):
      if self.top is None:
        return None

      popped = self.top.value
      self.top = self.top.next
      return popped
```

Big O:

- Time: O(1)

### Peek

```python
    def peek(self):
      if self.top is None:
        return None
      return self.top.value
```

Big O:

- Time: O(1)

### isEmpty

```python
    def isEmpty(self):
      return self.top == None
```

Big O:

- Time: O(1)

## Queues

Terminology:

- Enqueue - add to queue
- Dequeue - remove from queue
- Front - first node
- Rear - last node
- Peek - view value of front node
- isEmpty - return true if queue is empty
- FIFO - first in first out
- LILO - last in last out
- Analogy - line at the movie theaters. Who ever is first, will be processed first.

### Queue Methods

```python
class Queue:
  def __init__(self, node=None):
      self.front = node
```

### Enqueue

```python
    def enqueue(self, value):
      node = Node(value)

      if self.front is None:
        self.front = node
        return self

      current = self.front

      while current.next:
        current = current.next

      current.next = node
      return self
```

Big O:

- Time: O(n)

### Dequeue

```python
    def dequeue(self):
      if self.front is None:
        return None

      dequeued = self.front.value
      self.front = self.front.next
      return dequeud
```

Big O:

- Time: O(1)

### Peek

```python
    def peek(self):
      if self.front is None:
        return None
      return self.front.value
```

Big O:

- Time: O(1)

### isEmpty

```python
    def isEmpty(self):
      return self.front == None
```

Big O:

- Time: O(1)
