## Read 7: Express

### Review, Research, and Discussion

1. What’s the difference between PUT and PATCH?  
   PUT method uses the request URI to supply a modified version of the requested resource which replaces the original version of the resource, whereas the PATCH method supplies a set of instructions to modify the resource.

1. Provide links to 3 services or tools that allow you to “mock” an API for development like json-server

   - [mockable.io](https://www.mockable.io/)
   - [jsonplaceholder](https://jsonplaceholder.typicode.com/)
   - [swagger](https://swagger.io/)

1. Compare and contrast Swagger and APIDoc.js

   - APIDoc creates documentation from API annotations in the source code. Swagger will take care of alot of the work for you. You just need to select endpoints you've tested.

1. Which HTTP status codes should be sent with each type of (un)successful API call?

   - 400 Bad Request
   - 401 Unauthorized
   - 403 Forbidden
   - 404 Not Found The requested data was not found on the server
   - 405 Method Not Allowed

1. Compare and contrast SOAP and ReST

   - SOAP is a protocol whereas REST is an architectural pattern.

   - SOAP uses service interfaces to expose its functionality to client applications while REST uses Uniform Service locators to access to the components on the hardware device.
   - SOAP needs more bandwidth for its usage whereas REST doesn’t need much bandwidth.
   - SOAP only works with XML formats whereas REST work with plain text, XML, HTML and JSON.
   - SOAP cannot make use of REST whereas REST can make use of SOAP.

### Vocabulary Terms

- SOAP - SOAP is a protocol designed before REST. The main idea behind designing SOAP was to ensure that programs built on different platforms and programming languages could exchange data in an easy manner.

- ReST Verbs - POST, GET, PUT, PATCH, DELETE
- CRUD Verbs - Create, Read, Update, Delete
- Swagger - Swagger is in essence an Interface Description Language for describing RESTful APIs expressed using JSON. Swagger is used together with a set of open-source software tools to design, build, document, and use RESTful web services. Swagger includes automated documentation, code generation, and test-case generation.

### Preview

1. Which 3 things had you heard about previously and now have better clarity on?

   - I've heard about REST api and I understand it a little more.

1. Which 3 things are you hoping to learn more about in the upcoming lecture/demo?

   - How to use Swagger and create documentation.

1. What are you most excited about trying to implement or see how it works?
   - How to make APIs

<br>
<br>

[Back to Table of Contents](README.md)
