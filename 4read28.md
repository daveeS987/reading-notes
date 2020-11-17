## Read 28: Component & Composition

### Review, Research, and Discussion

1. Can a parent component access the state of a child component?  
   Not directly. Its possible but you would need to create a method in the parent element to pass down to child and call that method in the child and grab its state.
1. What can be passed along in a prop variable?
   Variables or methods
1. How can a child component “know” the state of another component?
   It can't know directly. The parent would need to pass down a method through props that allows a child to update a state in the parent element. The siblings would then need to use that method to send their own state to the parent. Once a parent has that information another sibling could know that state if the parent passes down a prop to them.

### Vocabulary Terms

- component props - arguments passed into React components
- component state - object that contains information for the React component
- application state - State is a JavaScript object. It stores a component’s dynamic data and determines the component’s behavior. In other words, it is the interface between any data of changes (backend or local) and the representation of this data with UI-elements in the frontend.

### Preview

1. Which 3 things had you heard about previously and now have better clarity on?  
   Components, props, state
1. Which 3 things are you hoping to learn more about in the upcoming lecture/demo?  
   Testing react apps, using composition vs inheritance, component lifecycle
1. What are you most excited about trying to implement or see how it works?  
   Building React Apps

### Links

- [react basics recap](https://medium.freecodecamp.org/these-are-the-concepts-you-should-know-in-react-js-after-you-learn-the-basics-ee1d2f4b8030)
- [props.children](https://codeburst.io/a-quick-intro-to-reacts-props-children-cb3d2fce4891)
- [composition vs inheritance](https://reactjs.org/docs/composition-vs-inheritance.html)
- [react testing library api example](https://testing-library.com/docs/react-testing-library/example-intro)
- [react-if component](https://www.npmjs.com/package/react-if)
- [react-testing-library-async](https://testing-library.com/docs/dom-testing-library/api-async)

<br>
<br>

[Back to Table of Contents](README.md)
