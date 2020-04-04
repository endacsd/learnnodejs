var express = require('express');

var app = express();


app.get('/',function(req,res){
    console.log('main page GET ');
    res.send('Hello GET');
});


app.post('/',function (req,res) {
    console.log("main page POST");
    res.send('Hello POST');
});

app.get('/del_user',function(req,res){
   console.log("/del_user call DELETE !");
   res.send('delete page');
});

app.get('/list_user',function (req,res) {
   console.log('/list_user GET');
   res.send('user list page');
});

app.get('/ab*cd',function (req,res) {
    console.log("/ab*cd GET");
    res.send('req');
});

var server =app.listen(8081,function () {
   var host = server.address().address;
   var port = server.address().port;

   console.log("http://%s:%s",host,port);
});