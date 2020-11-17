## Read 29: Routing

### Review, Research, and Discussion

1. Do child components have direct access to props/state from the parent?  
   Not directly. Parents need to pass down props with methods or properties in order for child components to have access

2. When a component “wraps” another component, how does the child component’s output get rendered?
   Uses the parents structure to display the child elements. This pattern is useful for creating UI elements that are repeated through out a design.

```
<Main>
  <Content />
</Main>
```

3. Can a component, such as `<Content />`, which is a child also be used as a standalone component elsewhere in the application?  
   Yes

4. What trick can a parent use to share all props with it’s children?  
   Use a spread operator. I think...  
   Example:

```
<ChildComponent {...props}>
```

### Vocabulary Terms

- props.children - is what is between the opening and closing tags of the parent element
- composition - In React, composition is a natural pattern of the component model. It's how we build components from other components, of varying complexity and specialization through props. Depending on how generalized these components are, they can be used in building many other components.

### Preview

1. Which 3 things had you heard about previously and now have better clarity on?  
   React composition, components, props
1. Which 3 things are you hoping to learn more about in the upcoming lecture/demo?  
   Testing, Routing,
1. What are you most excited about trying to implement or see how it works?
   Using Browser Routers

### Links

- [browser router tutorial](https://blog.pshrmn.com/entry/simple-react-router-v4-tutorial/)
- [browser router api docs](https://reacttraining.com/react-router/web/api)
- [react-if component](https://www.npmjs.com/package/react-if)
- [react testing library queries](https://testing-library.com/docs/dom-testing-library/api-queries)
- [aria roles](https://www.w3.org/TR/html-aria/)

<br>
<br>

[Back to Table of Contents](README.md)
