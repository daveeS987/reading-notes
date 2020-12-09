## Read 36: Application State with Redux

### Review, Research, and Discussion

1. What are the advantages of storing tokens in “Cookies” vs “Local Storage”?  
   The cookie is not accessible via JavaScript; hence, it is not as vulnerable to XSS attacks as localStorage.
2. Explain 3rd party cookies.  
   Third-party cookies are created by domains that are not the website (or domain) that you are visiting. These are usually used for online-advertising purposes and placed on a website through adding scripts or tags. A third-party cookie is accessible on any website that loads the third-party server’s code.
3. How do pixel tags work?  
   Pixel tags are typically single pixel, transparent GIF images that are added to a web page. Even though the pixel tag is virtually invisible, it is still served just like any other image you may see online. The trick is that the web page is served from the website’s domain while the image is served from the ad server’s domain. This allows the ad server to read and record the cookie with the unique ID and the extended information it needs to record.

### Vocabulary Terms

- cookies - a small piece of data stored on the user's computer by the web browser while browsing a website. Cookies were designed to be a reliable mechanism for websites to remember stateful information or to record the user's browsing activity
- authorization - gives users permission to access a resource
- authentication - confirms a user is who they say they are
- access control - authenticate and authorize individuals to access the information they are allowed to see and use.
- conditional rendering - rendering an element if a condition is met

### Links:

- [Dan Abramov Redux Tutorials](https://egghead.io/courses/getting-started-with-redux)
- [worlds easiest guide to redux](https://medium.freecodecamp.org/understanding-redux-the-worlds-easiest-guide-to-beginning-redux-c695f45546f6)
- [testing reducers](https://medium.com/@netxm/testing-redux-reducers-with-jest-6653abbfe3e1)
- [Redux Docs](https://redux.js.org/)

<br>
<br>

[Back to Table of Contents](README.md)
