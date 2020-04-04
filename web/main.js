

var http = require('http');
var fs = require('fs');
var url = require('url');



http.createServer(function (request,response) {
   //
   var pathname = url.parse(request.url).pathname;

   console.log("Request for " + pathname + "received,");

   fs.readFile(pathname.substr(1),function (err,data) {
      if(err){
          console.log(err);
          //HTTP status code : 404 : NOT FOUND
          //Content Type : text/html
          response.writeHead(404,{'Content-Type': 'text/html'});
      } else{
          //HTTP status code : 200 : ok
          //Content Type : text/html

          response.writeHead(200,{'Content-Type': 'text/html'});

          //
          response.write(data.toString());

          response.end();
      }

   });


}).listen(8080);

console.log('Server running at http://127.0.0.1:8080/');