## Read 8: Express Routing & Connected API

### Review, Research, and Discussion

1. Name 3 real world use cases where you’d want to change the request with custom middleware
   - maybe to add properties in req to be used in other middleware
   - to format the current data in request to be outputed back to client
1. True or false: The route handler is middleware?
   - false??
1. In what ways can a middleware function end the process and send data to the browser?

   - possibly throwing an error by inputing arguments into next()

1. At what point in the request lifecycle can you “inject” middleware?
   - At any point I think...
1. What can cause express to error with “Request headers sent twice, cannot start a second response”
   - When there is more than one res.send. Possibly in other middleware that is in the route.

### Vocabulary Terms

- Middleware - software that lies between an operating system and the applications running on it. Essentially functioning as hidden translation layer, middleware enables communication and data management for distributed applications. It’s sometimes called plumbing, as it connects two applications together so data and databases can be easily passed between the “pipe.” Using middleware allows users to perform such requests as submitting forms on a web browser, or allowing the web server to return dynamic web pages based on a user’s profile.

- Request Object - allows you to examine every aspect about the request that the client made (whether by browser, by cURL, or mobile browser, etc.). This encompasses lots of things like the URL, user agent string, JSON data, form data
- Response Object - lets us send response to the client in the form of strings, json, and files.
- Application Middleware - Middleware that takes place in all routes of the application
- Routing Middleware - middleware that can take place in a specific route

### Preview

1. Which 3 things had you heard about previously and now have better clarity on?

   - I undertand a little more what middleware is.

1. Which 3 things are you hoping to learn more about in the upcoming lecture/demo?

   - Best scenarios for using app.route() and express.Router()

1. What are you most excited about trying to implement or see how it works?

   - modularizing my routes

<br>
<br>

[Back to Table of Contents](../README.md)
