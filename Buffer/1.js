var buf = Buffer.from('runoob','ascii');

//
console.log(buf.toString('hex'));

console.log(buf.toString('base64'));

//assci
//utf8
//utf16le
//usc2-utf16le
//base64
//latin1
//binary-latin1
//hex


/*

Buffer.alloc(size[,fill[,encoding]])
Buffer.allocUnsafe(size);
Buffer.allocUnsafeSlow(size);
Buffer.from(array)
Buffer.from(arrayBuffer[,byteOffset[,length]])
Buffer.from(buffer)
Buffer.from(string[,enconding])
 */
/*

const buf1 =Buffer.alloc(10);
const buf2 =Buffer.alloc(10,1);


const buf3 = Buffer.allocUnsafe(10);
const buf4 =Buffer.from('test');

const buf6 = Buffer.from('test','latin1');

*/


//
//buf.write(string[,offset[,length]][,encoding])

//
var buft=Buffer.alloc(256);
len=buft.write('https://endacsd');
console.log('write byte : ' + len);


//
//buf.toString([encoding[,start[,end]]]);
//

buft=Buffer.alloc(26);

for(var i = 0 ; i < 26 ; i++){
    buft[i]= i + 97 ;
}

console.log(buft.toString('ascii'));
console.log(buft.toString('ascii',0,5));
console.log(buft.toString('utf8',0,5));
console.log(buft.toString(undefined,0,5));

//JSON
//but.toJSON();
//JSON.stringify()



const bufk =Buffer.from([0x1,0x2,0x3,0x4,0x5]);
const jsonk = JSON.stringify(bufk);

console.log(jsonk);

const copy = JSON.parse(jsonk,(key,value) =>{
    return value && value.type === 'Buffer' ? Buffer.from(value.data) : value;
} );

console.log(copy);

//Buffer.concat(List[,totalLength]);

var buffer1 =Buffer.from('EndABlog ');
var buffer2 =Buffer.from('https://endacsd.com');
var buffer3 =Buffer.concat([buffer1,buffer2]);
console.log('buffer3: '+buffer3.toString());


//buf.compare(otherBuffer);

buffer1 =Buffer.from('ABC');
buffer2 =Buffer.from('ABCD');

var result = buffer1.compare(buffer2);
console.log(result);


//buf.copy(targetBuffer[,targetStart[, sourceStart[,sourceEnd]]]);

var buf1= Buffer.from('abcdefghijkl');
var buf2= Buffer.from('endacsd');

buf2.copy(buf1,2);
console.log(buf1.toString());


// buf.slice(start[,end]])
//

buffer1 =Buffer.from('endacsd');
buffer2 =buffer1.slice(0,2);