#!/usr/bin/node
const request = require('request');

// Retrieve the URL from the command line argument
const url = process.argv[2];

// Function to perform a GET request
request(url, function (error, response) {
  if (error) {
    console.log(error);
  } else {
    // Print the status code
    console.log(`code: ${response.statusCode}`);
  }
});
