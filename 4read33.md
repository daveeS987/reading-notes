## Read 33: Context API

### Review, Research, and Discussion

1. Describe use cases for useMemo() and useReducer().
   useReducer() is preferred when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. useMemo() will check if any dependencies have changed, if not, it will return the cached return value, not calling the function. It helps optimize performance.
1. Why do custom hooks need the use prefix?  
   So you can instantly know that its a hook and the rules apply to it.
1. What do custom hooks usually do?  
   Custom Hooks are a mechanism to reuse stateful logic (such as setting up a subscription and remembering the current value), but every time you use a custom Hook, all state and effects inside of it are fully isolated.
1. Using any list of custom hooks, research and name one that you think will be useful in your applications  
   react-use-form-state
1. Describe how a hook that fetches API data might work.  
   In useEffect hook, you can grab data from an API on pageload. You just need to pass en empty array as the second argument.

### Vocabulary Terms

- reducer - a function that takes 2 values and returns 1 value

### Links:

- [context api](https://reactjs.org/docs/context.html)
- [hooks and context example](https://medium.com/swlh/snackbars-in-react-an-exercise-in-hooks-and-context-299b43fd2a2b)
- [react context links](https://github.com/diegohaz/awesome-react-context)

<br>
<br>

[Back to Table of Contents](README.md)
