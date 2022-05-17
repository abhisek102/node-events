const EventEmitter = require('events');
const event = new EventEmitter();

event.on('Status_Check', (sc, msg) => {
  console.log(`Connected with ${sc} and page is ${msg}`);
});

event.emit('Status_Check', 200, 'ok');
