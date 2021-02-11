/*
Use the request library to make the HTTP request
Use Node's fs module to write the file
Use the callback based approach we've been learning so far
Do not use the pipe function
Do not use synchronous functions (see warning below)
*/

const request = require('request'); //require node request
const fs = require("fs"); //require fileshare

const filePath = process.argv[3]; //take 3rd arg from command line input
const website = process.argv[2]; //take 2nd arg from command line input

//request from website (checking error, reponse, and body)
// most websites will respond with one of the below 3 types of data
request(website, (error, response, body) => {
  //if(response) {
  //console.log('response:', response); //< --- logs response if one is made
  //}
  if (error) { //if no website is found return error
    console.log('MY-error:', error);
  }

  //fs.writeFile('message.txt', 'Hello Node.js', 'utf8', callback) - nodejs docs
  fs.writeFile(filePath, body, function(error) {
    if (error) {
      console.log("MY-error:", error);
    } else {
      console.log(`Downloaded and saved ${fs.statSync(filePath).size} bytes to ${filePath}`);
    }
  });
});

/*
const request = require('request');
request('http://www.google.com', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
*/