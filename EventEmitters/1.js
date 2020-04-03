
var events = require('events');

var eventEmitter =new events.EventEmitter();

var connectHandler =function () {
    console.log('link sucess!');

    eventEmitter.emit('data_received');

};

eventEmitter.on('connection',connectHandler);

eventEmitter.on('data_received',function () {
    console.log('data received success!');
});


eventEmitter.emit('connection');

console.log('end');