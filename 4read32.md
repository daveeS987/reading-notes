## Read 32: Custom Hooks

### Review, Research, and Discussion

1. What does a component’s lifecycle refer to?  
   Mounting - putting elements into the dom  
   Updating - whenever there is chqange in the components state or prop  
   Unmounting - when a component is removed from the DOM
1. Why do you sometimes need to “wrap” functions in useCallback when called from within useEffect?  
   UseCallback helps you prevent infinite loops. Whenver a function is inside another function, it gets recreated whenever the outer function runs. When that innerfunction is a dependency of useEffect(), this creates an infinite loop. When a components rebuilds, the innerfunction changes, and the outer function reruns, creating an infinite loop.
1. Why are functional components preferred over class components?  
   They allow you to write cleaner code. You're able to pass down individual states rather than instances of classes.
1. What is wrong with the following code?  
   Use effect is in the for loop. You can't have a useEffect inside a conditional or loop.

```
import React, {useState, useEffect} from 'react';

function MyComponent(props) {
  const [count, setCount] = useState(0);

  function changeCount(e) {
    setCount(e.target.value);
  }

  let renderedItems = []

  for (let i = 0; i < count; i++) {
    useEffect( () => {
      console.log('component mount/update');
    }, [count]);

    renderedItems.push(<div key={i}>Item</div>);
  }

  return (<div>
     <input type='number' value={count} onChange={changeCount}/>
      {renderedItems}
    </div>);
}
```

### Vocabulary Terms

- state hook - hook that lets you add React state to function component.
- effect hook - allows you to register a function which executes after the current render cycle. perform side effects in function components
- reducer hook - accepts a reducer function with the application initial state, returns the current application state, then dispatches a function.

### Links:

- [custom hooks - all you need to know](https://www.telerik.com/blogs/everything-you-need-to-create-a-custom-react-hook)
- [async hooks](https://dev.to/vinodchauhan7/react-hooks-with-async-await-1n9g)
- [useReducer Hook](https://reactjs.org/docs/hooks-reference.html#usereducer)
- [react custom hooks](https://reactjs.org/docs/hooks-custom.html)
- [use hooks](https://usehooks.com/)
- [hooks list](https://github.com/rehooks/awesome-react-hooks)
- [10 essential react hooks](https://blog.bitsrc.io/10-react-custom-hooks-you-should-have-in-your-toolbox-aa27d3f5564d)

<br>
<br>

[Back to Table of Contents](README.md)
