## Read 9: API Server

### Review, Research, and Discussion

1. How does route prefixing work with an external routing module?

   - I think you can use can declare a router variable equal to express.Router(). And then attach http methods to the router with paths and route handler functions. You would export this router with all the route handlers attached.

1. When routing, what’s the difference between app.get('/data/:id') and app.get('/data/:name')?

   - The colon is used to declare a key in the req.param object. In this case the req.param would have different key names in the properties. One would be name and the other would be id.

1. Explain how Express handles routing conflicts?

   - by throwing a 404 error?

1. What are the ways that a browser can send “data” or request variables to an HTTP server?
   - Through an get, put, post

### Vocabulary Terms

- Routing - refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).
  Each route can have one or more handler functions, which are executed when the route is matched.
- Route Prefixing - I think its a way to group routes so you don't have to repeat code for every individual route.
- Request “Body” - data sent by the client to your API. Contains key-value pairs of data submitted in the request body. By default, it is undefined, and is populated when you use body-parsing middleware such as body-parser
- Request “Query” - An object containing a property for each query string parameter in the route.
- Request “Params” - An object containing properties mapped to the named route “parameters”. For example, if you have the route /user/:name, then the "name" property is available as req.params.name. This object defaults to {}.

### Preview

1. Which 3 things had you heard about previously and now have better clarity on?
   - methods, route, handlers.
1. Which 3 things are you hoping to learn more about in the upcoming lecture/demo?
   - Writing test for these labs.
1. What are you most excited about trying to implement or see how it works? - modularizing my code in an efficient, readable way
   <br>
   <br>

[Back to Table of Contents](README.md)
