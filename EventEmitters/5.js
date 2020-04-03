var events = require('events');
var eventEmitter = new events.EventEmitter();

//listener #1

var listener1 = function () {
    console.log('lestener1 start');
};
var listener2 = function () {
    console.log('lestener2 start');
};

//
eventEmitter.addListener('connection',listener1);
eventEmitter.on('connection',listener2);

var eventListeners =eventEmitter.listenerCount('connection');

console.log('link listeners are '+ eventListeners);


eventEmitter.emit('connection');

eventEmitter.removeListener('connection',listener1);

eventListeners =eventEmitter.listenerCount('connection');

console.log('link listeners are '+ eventListeners);
eventEmitter.emit('connection');

console.log('end');
