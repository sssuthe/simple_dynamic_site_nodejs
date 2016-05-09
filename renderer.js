// Function that handles the reading of files and merge in values
     //read from file and get a string
       //merge values into string
var fs = require('fs');

  function view(templateName, values, response){
    //Read from the template file
    var fileContents = fs.readFileSync('./views/' + templateName + '.html');
      //Insert values in to the content

      //Write out the contents to the response
      response.write(fileContents);
  }

  module.exports.view = view;
