## Read 37: Redux - Combined Reducers

### Review, Research, and Discussion

1. Why choose Redux instead of the Context API for global state?  
   React Context will trigger a re-render on each update, and optimizing it can be tough. Redux is better for applications with frequent updates and more complex states. Also changes to states are centralized and happen one by one in a strict order so there are no subtle race conditions to watch out for.
1. What is the purpose of a reducer?  
   It will update the state depending on which action gets dispatched
1. What does an action contain?  
   Type and payload
1. Why do we need to copy the state in a reducer?  
   Reducers are pure functions that take the previous state and action and return the next state. Reducers are never allowed to mutate the original/current state values. It must make "immutable updates" by copying the existing state and making changes to the copied values.

### Vocabulary Terms

- immutable state - state that can not be changed
- time travel in redux - the ability to see dispatched actions and the state of the redux store at every point in time. This makes it possible to inspect the state and travel back in time to previous state without reloading the page or restarting the app. Use Redux DevTools
- action creator - a function that returns an action object
- reducer - these are functions with state and actions passed in. These work with action.type in switch cases and return the updated state it optionally needs to accept payload to work properly. Sometimes you will need to merge separate reducers before creating a store
- dispatch - a method in redux that will use an action object to trigger the reducer to update a state

### Links:

<br>
<br>

[Back to Table of Contents](README.md)
