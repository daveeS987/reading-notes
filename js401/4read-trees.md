# Binary Trees and Binary Search Trees

## Common Terminology

- Node - A node is the individual item/data that makes up the data structure
- Root - The root is the first/top Node in the tree
- Left Child - The node that is positioned to the left of a root or node
- Right Child - The node that is positioned to the right of a root or node
- Edge - The edge in a tree is the link between a parent and child node
- Leaf - A leaf is a node that does not contain any children
- Height - The height of a tree is determined by the number of edges from the root to the bottommost node

There are two categories for traversal of trees

- Depth First will prioritize going through the depth of the tree first. Best way to do this is to make use of the call stack and use recursive functions.

  - Pre-order: root >> left >> right
  - In-order: left >> root >> right
  - Post-order: left >> right >> root

- Breadth First traversal will look through each node level by level. To implement this you will need to use a queue.

[Back to Table of Contents](../README.md)
