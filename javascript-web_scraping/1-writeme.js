#!/usr/bin/node
const fs = require('fs');

// Retrieve the command line arguments for file path and content to write
const filePath = process.argv[2];
const content = process.argv[3];

// Function to write the string to the file
fs.writeFile(filePath, content, 'utf-8', function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log(`Content written to ${filePath}`);
  }
});
