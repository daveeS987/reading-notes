## Read 31: Hooks API

### Review, Research, and Discussion

1. Why do we not need more .html pages in a multi-page React app?  
   React Routers allows you to put the content of a page inside a route component and switch to other pages that are contained inside a different route component
2. If we wanted a component to show up on every page, where would we put it and why?

- Outside the `<BrowserRouter/>`
- Inside the `<BrowserRouter />`, outside a `<Route />`
- Inside a `<Route />`  
   The second option. To use routes, everything needs to be inside a BrowserRouter. For content to be seen by all pages, it can't be inside a route component. The route component is meant for content that needs to be switched out if a user goes from page to page.

3. What does props.children contain?  
   All child elements that are inside the components opening and closing tag.

### Vocabulary Terms

- Composition - a natural pattern of the component model. It's how we build components from other components, of varying complexity and specialization through props. Depending on how generalized these components are, they can be used in building many other components.
- Children / Child Components - components that are inside other components
- Hash Routing - uses URL hash, it puts no limitations on supported browsers or web server. Server-side routing is independent from client-side routing.
- Link Routing - a dynamic routing algorithm in which each router shares knowledge of its neighbors with every other router in the network. A router sends its information about its neighbors only to all the routers through flooding. Information sharing takes place only whenever there is a change.

### Links:

- [making sense of hooks](https://medium.com/@dan_abramov/making-sense-of-react-hooks-fdbde8803889)
- [the state hook](https://reactjs.org/docs/hooks-state.html)
- [hooks api](https://reactjs.org/docs/hooks-overview.html)
- [hooks api reference](https://reactjs.org/docs/hooks-reference.html)
- [effects hook](https://reactjs.org/docs/hooks-effect.html)

<br>
<br>

[Back to Table of Contents](../README.md)
