var events = require('events');


var eventEmitter = new events.EventEmitter();


eventEmitter.on('myCustomeEvent', function() {
    console.log('custom event fired');
});

setTimeout(function(){
    eventEmitter.emit('myCustomeEvent');
},2000);

eventEmitter.on('myCustomeEvent2', function(a,b) {
    console.log('custom event fired by: '+a+' '+b);
});

setTimeout(function(){
    eventEmitter.emit('myCustomeEvent2','Bishal','Jaiswal');
},1000);