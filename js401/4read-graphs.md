# Graphs

## Terms to know

- Vertex - A vertex, also called a “node”, is a data object that can have zero or more adjacent vertices.
- Edge - An edge is a connection between two nodes.
- Neighbor - The neighbors of a node are its adjacent nodes, i.e., are connected via an edge.
- Degree - The degree of a vertex is the number of edges connected to that vertex.
- Undirected graph - graph where each edge is undirected or bi-directional. This means that the undirected graph does not move in any direction
- Directed graph - also called a Digraph is a graph where every edge is directed
- Complete graphs - when all nodes are connected to all other nodes.
- Connected - graph that has all of vertices/nodes have at least one edge
- Disconnected - some vertices may not have edges
- Acyclic - a directed graph without cycles
- Cyclic - graph that has cycles.
- Adjancy Matrix - graph represented through a 2-dimensional array. If there are n vertices, then we are looking at an n x n Boolean matrix
- Adjancy list - graph represented through a collection of linked lists or array that lists all of the other vertices that are connected.
- Weighted Graphs - a graph with numbers assigned to its edges. These numbers are called weights

## Notes

There are two methods in order to traverse the graphs. Breadth first and Depth first. Breadth first will use a queueu to enquue the starting node. We will also declare a vistedNodes "set" to store our vertex. While there is stuff in the queue, it will dequeue a vertex and look at its corresponding neighbors list. For each neighbor vertex in that list, it will loop through and check if the vertex has already been added to our visitedNode "set". If it hasn't , that node will be added to our set and enqueued into our queue. This process will continue until there is nothing in our queue. Depth first will work the same except with a stack.

[Back to Table of Contents](../README.md)
