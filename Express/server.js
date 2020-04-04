/*
var express = require('express');

var app =express();

app.use('/public',express.static('public'));

app.get('/index.html',function (req,res) {
   res.sendFile(__dirname+ "/" + "index.html");
});


app.get('/process_get',function (req,res) {

    //
    var response = {
        'first_name' :req.query.first_name,
        'last_name' :req.query.last_name
    };

    console.log(response);
    res.end(JSON.stringify(response));

});


var server =app.listen(8081,function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("http://%s:%s",host,port);
});


/*
var express = require('express');
var app = express();

app.use('/public', express.static('public'));

app.get('/index.htm', function (req, res) {
    res.sendFile( __dirname + "/" + "index.html" );
})

app.get('/process_get', function (req, res) {

    // 输出 JSON 格式
    var response = {
        "first_name":req.query.first_name,
        "last_name":req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})

 */

/*
var express = require('express');
var app = express();
var bodyParser = require('body-parser');



//
var urlencodedParser = bodyParser.urlencoded({extends: false});
//var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use('/public',express.static('public'));

app.get('/index.html',function (req,res) {
   res.sendFile(__dirname +"/"+"index.html");
});

app.post('/process_post',urlencodedParser,function (req,res) {

    var response ={
      "first_name" : req.body.first_name,
      "last_name" : req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});


var server =app.listen(8081,function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("http://%s:%s",host,port);
});

 */


var express = require('express');
var app = express();
var fs = require("fs");


var bodyParser = require('body-parser');
var multer = require('multer');

app.use('/public',express.static('public'));
app.use(bodyParser.urlencoded({extends: false}));
app.use(multer({dest: '/tmp/'}).array('image'));

app.get('/index.html',function (req,res) {
   res.sendFile(__dirname+"/"+"index.html");
});

app.post('/file_upload',function (req,res) {
   console.log(req,files[0]);
   var des_file = __dirname + "/" + req.file[0].originalname;
   fs.readFile(req.files[0].path,function (err,data) {
       fs.writeFile(des_file,data,function (err) {
           if(err){
               console.log(err);
           }else{
               response= {
                   message: 'File uploaded successfully',
                   filename : req.files[0].originalname
               };
           }

           console.log(response);
           res.end(JSON.stringify(response));
       });
   });
});

var server =app.listen(8081,function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("http://%s:%s",host,port);
});
