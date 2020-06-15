'use strict';

require('dotenv').config();

// Brings in Express Library
const express = require('express');

// Creates an application from Express
const app = express();

// Tell Application to use the Public Folder
app.use(express.static('./public'));

// Start the Server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));



app.get('/hello', (request, response) => {
  response.status(200).send('Hello');
});

app.get('/data', (request, response) => {
  let airplanes = {
    departure: Date.now(),
    canFly: true,
    pilot: 'Well Trained'
  }
  response.status(200).json(airplanes);
});

app.use('*', (request, response) => response.send('Sorry, that route does not exist.'))

