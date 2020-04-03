/*
var fs =require('fs');

var readerStream = fs.createReadStream('input.txt');
var writerStream = fs.createWriteStream('output.txt');

//
readerStream.pipe(writerStream);
console.log('end');

*/
/*
var fs =require('fs');
var zlib = require('zlib');
fs.createReadStream('input.txt')
.pipe(zlib.createGzip()).pipe(fs.createWriteStream('input.txt.gz'));

console.log('file zip finish!');

 */

var fs =require('fs');
var zlib =require('zlib');

fs.createReadStream('input.txt.gz')
.pipe(zlib.createGzip())
.pipe(fs.createWriteStream('inputuzip.txt'));

console.log('end');