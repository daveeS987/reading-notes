use strict';

create your folder with a server.js file, any demo .json files,
and a nameless .env file.
install libraries/dependencies
for basic server setup:
NOTE:MAKE SURE YOU ARE IN ROOT FOLDER OF REPO WHEN INSTALLING NPM LIBRARIES
go to terminal, npm install express, cors, dotenv
nodejs allows us to run javascript natively on our computer.
node package manager (npm) is an application that assists with installing libraries
Cross Origin Resource Sharing (CORS) is explained on line 38
dotenv allows us to access variables stored in our .env file and keep them private.
**NOTE: NEVER upload your .env files to github. Make sure your gitignore includes .env and .env.test**
initialize npm with command npm init -y
this will create a package.json file and initialize an npm app named after the root folder
package.json should include details on all the libraries you installed above.
go to your .env file and specify your PORT variable
usually 3000, I'm using 4000 today
initialize our libraries.  
You will just need to memorize these commands similiarly to how you learned ACP:
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT;
now get an 'instance' of express as our app:
const app = express();
this allows us to use CORS. CORS allows our server.js to communicate securely with other applications.  
It allows your server to specify WHO can access its data and HOW it can be accessed. See:
https:developer.mozilla.org/en-US/docs/Web/HTTP/CORS
https:www.codecademy.com/articles/what-is-cors
app.use(cors() );
.listen always expects a PORT and a callback function:
app.listen(PORT, ()=> console.log('server running on port', PORT));
ok. We should be up and running. Let's test out a route:
app.get('/', homepageHandler);
I have my route function declared below instead of in the get request.  
This is just an organizational preference. Remember request is the input from the front end,
and response isthe output returned by your server. Status 200 means everything is working fine.
function homepageHandler (request,response){
response.status(200).send('Proof of Life');
};
now that our route is set up, go to terminal and start nodemon. Nodemon is a library that checks
for any updates to our server and restarts it so we don't have to restart the server every time we\
 save a change. on windows, ctrl c exits your server, rs restarts it.
now when you visit http:localhost:4000/ you should see 'Proof of Life' on the browser
and the console log "port running on 4000" in your terminal. Congrats your server is up
and running!
one last step, if you want your server to be able to make requests to APIs,
you will need an agent to do so on your behalf. We need to install superagent.
Exit nodemon in your terminal if it's still running.
npm install superagent
now initiailize superagent:
const superagent = require('superagent');
Ok. lets set up our SQL database. Exit nodemon in your terminal.
make sure there is a file in your root folder named schema.sql this can be potatoes.
install postgres into your root folder. Postgres allows us to safely make SQL requests to our database
and automatically sanitizes the input so users cannot maliciously inject harmful requests and delete data.
see: https:xkcd.com/327/

PSQL Database

In Terminal Create Database:

- `psql`
- `CREATE DATABASE dbname`;

List of Common Commands:

- \l to view all databases
- \c dbname to enter into your database
- \dt to view the tables in your database
- \q to quit

Put in .env file:
`DATABASE_URL = postgres:localhost:5432/_database name_`

Link to schema
psql -f file.sql -d databasename
ex: `psql -f schema.sql -d dbtest`
