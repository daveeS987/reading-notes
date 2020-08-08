// --------------------------
//    Callbacks
// --------------------------

// File System Module for Node.js
const fs = require('fs');

// first paramater is location, 2nd parameter is error first calback
fs.readFile('./words.text', (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data.toString());
});

/*
Look into ASCii table
*/

// --------------------------
//    Promises
// --------------------------

//

//

// --------------------------
//    Async/ Await
// --------------------------
