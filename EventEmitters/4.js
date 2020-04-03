var events =require('events');

var emitter=new events.EventEmitter();

emitter.on('some_event',function (arg1,arg2) {
    console.log('listener1',arg1,arg2);
});
emitter.on('some_event',function (arg1,arg2) {
    console.log('listener2',arg1,arg2);
});

emitter.emit('some_event','arg1','arg2');