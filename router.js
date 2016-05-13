var Profile = require("./profile.js");
var renderer = require("./renderer.js");
var querystring = require("querystring");
var commonHeaders = {'Content-Type': 'text/html'};


// We want to handle the http route GET / and POST / i.e. Home
function home(request, response)
{
    //if url == "/" && GET
    if (request.url === "/"){
        if (request.method.toLowerCase() === "get") {
            //show search
            response.writeHead(200, commonHeaders);
            renderer.view("header", {}, response);
            renderer.view("search", {}, response);
            renderer.view("footer", {}, response);
            response.end();
        } else {
                 //if url == "/" && POST
                 //get the post data from body
                 request.on("data", function(postBody){
                      var query = querystring.parse(postBody.toString());
                      response.writeHead(303, {"Location": "/" + query.username})
                      response.end();
                 });
                 //extract the username
                 //redirect to /:username
        }
    }
}

        //show search


// Handle HTTP route GET /:username i.e. /seansutherland
function user(request, response){
     //if url == "/...."
     var username = request.url.replace("/", "");
     if (username.length > 0){
         response.writeHead(200, commonHeaders);
         renderer.view("header", {}, response);

         //Get json from Treehouse
         var studentProfile = new Profile(username);
         //on "end"
         studentProfile.on("end", function(profileJSON){
            //show profile
            //store the values which we need
            var values = {
                avatarUrl: profileJSON.gravatar_url,
                username: profileJSON.profile_name,
                badges: profileJSON.badges.length,
                javaScriptPoints: profileJSON.points.JavaScript
            }
            //Simple response
            renderer.view("profile", values, response);
            renderer.view("footer", {}, response);
            response.end();

         });

         studentProfile.on("error", function(error){
            //show error
            renderer.view("error", {errorMessage: error.message}, response);
            renderer.view("search", {}, response);
            renderer.view("footer", {}, response);
            response.end();
         });

           }
       }


module.exports.home = home;
module.exports.user = user;