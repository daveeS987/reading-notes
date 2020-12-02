## Read :

### Review, Research, and Discussion

1. Why is the Context API useful?  
   It allows us to pass data through the component tree without having to pass props down manually at every level.

1. Can a component outside of a provider get its context?  
   No

1. What are some common use cases for using the Context API?
   When you have a state in a parent component that needs to be seen in multiple children. Example "settings" for how a particular website should look.

1. Describe “Context Hell”  
   When you have multiple states that needs to be pushed down through multiple child components. This creates massive quantity of nested components making it harder to understand.

### Vocabulary Terms

- global state - states that are available to all children
- global context - a way to share data that can be considered global for a tree of react components
- provider - the components that are providing the states that can be passed down
- consumer - components that are using the global states

### Links:

<br>
<br>

[Back to Table of Contents](README.md)
