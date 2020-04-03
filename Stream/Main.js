//

//Stream

// Readable
// Writable
// Duplex
// Transform

// EvenEmitter
// : data
// : end
// : error
// : finish


var fs = require("fs");

var data = '';

//
var readerStream = fs.createReadStream('input.txt');
readerStream.setEncoding('utf8');

readerStream.on('data',function (chunk) {
    data +=chunk;
});

readerStream.on('end',function () {
    console.log(data);
});


readerStream.on('error',function (err) {
    console.log(err.stack);
});

console.log('end');

//


data = 'endablog: https://endacsd.com'
var writableStream =fs.createWriteStream('output.txt');

writableStream.write(data,'utf8');

writableStream.end();

writableStream.on('finish',function () {
    console.log('write finish');
});

writableStream.on('error',function (err) {
    console.log(err.stack);
});

console.log('end');


