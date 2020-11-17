## Read 27: Props and State

### Review, Research, and Discussion

1. Does a deployed React application require a server?  
   Its possible to run React locally without a traditional server. It does not need a webserver to create virtual DOMs. It can build the DOM on the client's browser. However to be useful, it would need to be served from a traditional server. Also in development, its useful to use a server so you can see the changes as you update files.
1. Why do we prefer to test a React application at the behavior rather than the unit level?
   Because we want to test the outcome of a user interaction with our site vs individual functions which can throw false positives
1. What does npm run build do?
   It lets you perform any necessary building/prep tasks for your project, prior to it being used in another project. Runs the build field from the package.json scripts field.
1. Describe the actual composition / architecture of a React application
   React applications consist of components. Each component can have its own state, methods, and render out sections of the dom. Parent element can pass down methods or variables to child components using props. Passing down methods can allow a child element to change the state of a parent element.

### Vocabulary Terms

- BDD- behavior driven development - focuse on the business value that a customer should get from the software rather than describing the user interface of the software, or how the software should accomplish the goals. Basically test the outcome of a user interaction vs testing individual function outcomes
- Acceptance Tests - Formal testing with respect to user needs, requirements, and business processes conducted to determine whether or not a system satisfies the acceptance criteria and to enable the user, customers or other authorized entity to determine whether or not to accept the system. unit testing >> integration testing >> system testing >> acceptance testing
- mounting - "Mounting" is when React "renders" the component for the first time and actually builds the initial DOM from those instructions.
- build - When it’s time to move your app to production, having multiple JavaScript or CSS files isn’t ideal. When a user visits your site, each of your files will require an additional HTTP request, making your site slower to load. So to remedy this, you can create a “build” of our app, which merges all your CSS files into one file, and does the same with your JavaScript. This way, you minimize the number and size of files the user gets. To create this “build”, you use a “build tool”. Hence the use of npm run build.

### Preview

1. Which 3 things had you heard about previously and now have better clarity on?  
   Npm run build, behavior testing, components
1. Which 3 things are you hoping to learn more about in the upcoming lecture/demo?  
   State, lifecycle, testing
1. What are you most excited about trying to implement or see how it works?  
   Building react applications

### Links:

- [setState explained](https://css-tricks.com/understanding-react-setstate/)
- [handling events](https://facebook.github.io/react/docs/handling-events.html)
- [forms](https://facebook.github.io/react/docs/forms.html)
- [state and lifecycle](https://facebook.github.io/react/docs/state-and-lifecycle.html)
- [components and props](https://facebook.github.io/react/docs/components-and-props.html)
- [React Testing Library](https://testing-library.com/docs/react-testing-library)
- [RTL Testing Example](https://thomlom.dev/beginner-guide-testing-react-apps/)
- [Roles Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques#Roles)

<br>
<br>

[Back to Table of Contents](README.md)

<!--

Arrange Act Assert

-->
