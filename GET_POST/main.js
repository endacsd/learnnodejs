var http = require('http');
var url = require('url');
var util =require('util');
var querystring = require('querystring');
/*
http.createServer(function (req, res) {
    res.writeHead(200,{'Content-Type': 'text/plain; charset=utf-8'});
    res.end(util.inspect(url.parse(req.url,true)));
}).listen(3000);

 */
/*
http.createServer(function (req,res) {
    res.writeHead(200,{'Content-Type': 'text/plain ; utf-8'});

    var parms = url.parse(req.url,true).query;
    res.write('websitename: '+parms.name);
    res.write("\n");
    res.write("website URL:"+ parms.url);
    res.end();
}).listen(3000);

 */


//post

/*
http.createServer(function (req,res) {
    var post = '';

    req.on('data',function (chunk) {
        post+=chunk;
    });

    req.on('end',function () {
        post =querystring.pares(post);
        res.end(util.inspect(post));
    });
}).listen(3000);

 */


var postHTML =
    '<html><head><meta charset="utf-8"><title> EndAsBlog Node.js </title></html>'+
    '<body>' +
    '<form method="post">' +
    'websitename : <input name="name"><br>'+
    'website URL : <input name="url"><br>' +
    '<input type="submit">' +
    '</form>>' +
    '</body></html>';

http.createServer(function (req,res) {

    var body = "";
    req.on('data',function (chunk) {
        body +=chunk;
    });

    req.on('end',function () {
        //
        body = querystring.parse(body);
        //
        res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'});

        if(body.name && body.url ){
            res.write('websitename: '+ body.name);
            res.write("<br>");
            res.write("website URL :" + body.url);
        } else{
            res.write(postHTML);
        }
        res.end();
    });
}).listen(3000);