// Import the 'fs' module for file system operations
const fs = require('fs');

// Get the file path from the command line arguments
const filePath = process.argv[2];

// Function to read and print file content
function readFile(filePath) {
  fs.readFile(filePath, 'utf-8', (error, data) => {
    if (error) {
      // Print the error object if there's an error
      console.error({
        Error: error.message,
        errno: error.errno,
        code: error.code,
        syscall: error.syscall,
        path: error.path
      });
    } else {
      // Print the file content if read successfully
      console.log(data);
    }
  });
}

// Call the function with the provided file path
readFile(filePath);
