## Read 39: Redux continued..

### Review, Research, and Discussion

1. What’s the best practice for “pre-loading” data into the store (on application start) in a Redux application?

   - create an action using redux thunk middleware and dispatch that action in a use effect.

1. When using a thunk/async action that dispatches the actual action, which do you export from your reducer?
   - the function that makes the async call.

### Vocabulary Terms

- middleware - a special kind of addon that lets you customize the dispatch function. It provides a third-party extension point between dispatching an action, and the moment it reaches the reducer.
- thunk - redux middleware that allows you to perform async logic that interacts with the store

### Links:

<br>
<br>

[Back to Table of Contents](../README.md)
