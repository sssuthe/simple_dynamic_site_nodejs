var Profile = require("./profile.js");





// We want to handle the http route GET / and POST / i.e. Home
function home(request, response)
{
    //if url == "/" && GET
    if (request.url === "/"){
    //show search
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Header\n");
    response.write("Search\n");
    response.end('Footer\n');
    }
}

        //show search
     //if url == "/" && POST
        //redirect to /:username

// Handle HTTP route GET /:username i.e. /seansutherland
function user(request, response){
     //if url == "/...."
     var username = request.url.replace("/", "");
     if (username.length > 0){
         response.writeHead(200, {'Content-Type': 'text/plain'});
         response.write("Header\n");

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
            response.write(values.username + " has " + values.badges + " badges\n");
            response.end('Footer\n');
         });

         studentProfile.on("error", function(error){
            //show error
            response.write(error.message);
            response.end('Footer\n');
         });

           }
       }


module.exports.home = home;
module.exports.user = user;