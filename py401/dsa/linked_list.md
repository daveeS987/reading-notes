# Linked List

## Links and Resources

- [Linked Lists](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-05/resources/singly_linked_list.html)
- [What’s a Linked List, Anyway pt1](https://medium.com/basecs/whats-a-linked-list-anyway-part-1-d8b7e6508b9d)
- [What’s a Linked List, Anyway pt2](https://medium.com/basecs/whats-a-linked-list-anyway-part-2-131d96f71996)

## Terminology to understand

- Linked list - a data structure that contains nodes that points to the next node
- Singly - nodes have one reference or property that points to next node
- Doubly - nodes can have two references to next and previous
- Node - Individual items that contain data and point to the next node
- Next - property of node that points to next node
- Head - reference to the front of list
- Current - reference to current node that is being looked at

A linked list is a sequence of nodes that are connected and linked to each other. The next property is what identifies which node is next in the list. They are considered a linear data structure because there is an order and a sequence to how they're constructed and traversed.

Linked list are similar to arrays but they differ in how memory is allocated. Arrays require a contiguous block of memory and are considered static data structures. Linked List data can be scattered throughout memory and just connect with the next property. Linked List are considered dynamic data structures.

### Node Class

```python

class Node:
    def __init__(self, value=None, next=None):
        self.val = value
        self.next = next

```

### Includes Method

```Python

def includes (value):

  if self.head is None:
      return None

  current = self.head
  while current is not None:
      if current.val == value:
          return true
      current = current.next

  return false

```

Big O:

- Time: O(n)
- Space O(1)

### Add to Beginning of List Method

```Python

def insert(value):

    node = Node(value)

    node.next = self.head
    self.head = node
    return self

```

Big O:

- Time: O(1)
- Space: O(1)

### Add to End of List Method

```Python

def append(value):

    node = Node(value)

    if(self.head is None):
        self.head = node
        return self

    current = self.head
    while(current.next is not None):
        current = current.next

    current.next = node
    return self

```

Big O:

- Time: O(n)
- Space: O(1)

### Add After Method

```Python

def add_after(value, target):

    node = Node(value)

    if self.head is None:
      self.head = node
      return self

    current = self.head
    while current.next is not None:
        if current.val == target:
            node.next = current.next
            current.next = node
            return self
        current = current.next

    print('Target is not within list')
```

Big O:

- Time: O(n)
- Space: O(1)
