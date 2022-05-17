const EventEmitter = require('events');
const event = new EventEmitter();

event.on('myfirstevent', () => {
  console.log('hello this is my event');
});

event.emit('myfirstevent');
