var events = require('events');
var emitter = new events.EventEmitter();

emitter.on('error',function () {
    console.log('error');
})
emitter.emit('error');