## Read 38: Redux - Asynchronous Actions

### Review, Research, and Discussion

1. How granular should your reducers be?
   - You should break down your reducers to handle different sets of logic.
1. Pro or Con – multiple reducers can “fire” when a commonly named action is dispatched.
   - There are both pros and cons of this. If you have intentions of having an action trigger two reducers, this can be beneficial. This can also be a con, if you accidently have two reducers that use the same action unintentionally.
1. Name a strategy for preventing the above.
   - Just check your reducers to make sure they're not responding to the same action. Confirm you have different action types.

### Vocabulary Terms

- store - holds the whole state tree of your application
- combined reducers - combines all the child reducers into one object and namespaces the state of each reducer under their own keys

### Links:

- [dan abramov on suspense]()
- [async actions](https://redux.js.org/advanced/asyncactions)
- [thunk middleware](https://github.com/reduxjs/redux-thunk)
- [redux thunk](https://alligator.io/redux/redux-thunk/)

<br>
<br>

[Back to Table of Contents](../README.md)
