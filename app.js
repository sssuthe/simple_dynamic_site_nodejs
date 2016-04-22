//Problem: We need a simple way to look at a user's badge count and JavaScript points from a web browser
//Solution: Use Node.js to perform the profile look ups and server our template via HTTP

//1.  Create a web server
var http = require('http');
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write("This is before the end\n");
  response.end('Hello World\n');
  response.write("This is after the end\n");
}).listen(3000);
console.log('Server running at http://<workspace-url>/');

//2.  We want to handle the http route GET / and POST / i.e. Home
     //if url == "/" && GET
        //show search
     //if url == "/" && POST
        //redirect to /:username

//3.  Handle HTTP route GET /:username i.e. /seansutherland
     //if url == "/...."
       //get json from Treehouse
         //on "end"
            //show profile
         //on "error"
           //show error

//4.  Function that handles the reading of files and merge in values
     //read from file and get a string
       //merge values into string