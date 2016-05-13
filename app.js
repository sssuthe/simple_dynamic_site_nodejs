//Problem: We need a simple way to look at a user's badge count and JavaScript points from a web browser
//Solution: Use Node.js to perform the profile look ups and server our template via HTTP

var router = require("./router.js");
// Create a web server
var http = require('http');
http.createServer(function (request, response) {
     router.home(request, response);
     router.user(request, response);

}).listen(1337);
console.log('Server running locally on port 1337/');



