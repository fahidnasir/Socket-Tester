const server = require('http').createServer();

const io = require('socket.io')(server, {
  serveClient: false,
  // below are engine.IO options
  pingInterval: 10000,
  pingTimeout: 5000,
  cookie: false
});

io.on('connect', function(socket) {
  console.log('Client connected: ' + socket.id);

  socket.on('event1', function(data) {
    console.log('Event fired: event1, Data: ', data);
  });
  socket.on('event2', function(data) {
    console.log('Event fired: event2, Data: ', data);
  });

  socket.on('disconnect', function(reason) {
    console.log('Socket disconnect - reason:' + reason + ' id: ' + socket.id);
  });
  socket.on('disconnecting', function(reason) {
    console.log(
      'Socket disconnecting - reason:' + reason + ' id: ' + socket.id
    );
  });
  socket.on('error', function(error) {
    console.log('Socket error - error:' + error + ' id: ' + socket.id);
  });
});

io.on('connect', function(socket) {
  console.log('Hello connect again.');
});
io.on('connection', function(socket) {
  console.log('Hello connection again.');
});

server.listen(3000, function() {
  console.log('Server is listening on Port 3000.');
});
