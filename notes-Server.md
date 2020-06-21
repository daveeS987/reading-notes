## Random Notes on Server

- touch server.js
- npm init -y (creates package.json file)
- server.js will run on our machine 
- the command "node" will run js files in the terminal
- the command "npm" will look into package.json > script> and run whatever js file you choose

- will use express(node application library)
- node allows us to run js files
- npm is used to install javascript dependencies(can be found in package.json file)
- use npm to install express(when express is installed node_modules is created)

`const express = require('express');` is how we link js files from package.json into a server js file. 

nodemon is like using live server


when deploying site to heroku, make sure to change 'server' inside app.js to corresponding heroku address



remember to prevent default on get location to prevent reload

$('map').html(mapHTML);    is like using append

remember to empty before rendering so duplicates aren't made



npm init -y   : creates package.json file
npm install express  - allows javascript to be a web server
npm install dotenv
npm install cors   (cross origin resource sharing) - helper library
touch .env      - can put PORT = 3000

nodemon - watches server and restarts when changes are made

xhr is ajax call

