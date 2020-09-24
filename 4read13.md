## Read 13: Bearer Authorization

### Review, Research, and Discussion

1. Write the following steps in the correct order:
   - Register your application to get a client_id and client_secret
   - Redirect to a third party authentication endpoint
   - Ask the client if they want to sign in via a third party
   - Receive authorization code
   - Make a request to the access token endpoint
   - Receive access token
   - Make a request to a third-party API endpoint
1. What can you do with an authorization code?
   - make a request to the token server to get a token
1. What can you do with an access token?
   - access certain information from an API
1. What’s a benefit of using OAuth instead of your own basic authentication?
   - Easier to implement and provides stronger authentication. Protects user data by providing access to the data without revealing the user’s identity or credentials. Third-party services can make requests on behalf of a user without accessing passwords and other sensitive information.

### Vocabulary Terms

- Client ID - public identifier for apps
- Client Secret - secret known only to the application and the authorization server
- Authentication Endpoint - asks users to login
- Access Token Endpoint - this is where you take the authorization code and exchange for access token
- API Endpoint - once access token is given, you can request for more info from these endpoints
- Authorization Code - code that is given once user has logged in through third party
- Access Token - token given once user is authorized. Contains the security credentials for a login session and identifies the user, the user's groups, the user's privileges, and, in some cases, a particular application

### Preview

1. Which 3 things had you heard about previously and now have better clarity on?
   - Json web token
1. Which 3 things are you hoping to learn more about in the upcoming lecture/demo?
   - Oauth
1. What are you most excited about trying to implement or see how it works?
   - using different Oauth

<br>
<br>

[Back to Table of Contents](README.md)
