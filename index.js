var btnConnect = document.getElementById('btnConnect');
var txtIP = document.getElementById('ip');
var txtPort = document.getElementById('port');
var txtPath = document.getElementById('path');
var txtQuery = document.getElementById('query');

var txtEventName = document.getElementById('eventName');
var txtEventBody = document.getElementById('eventBody');
var btnSend = document.getElementById('btnSend');

var socket;
btnConnect.onclick = function(event) {
  if (socket && socket.connected) {
    socket.disconnect();
    return;
  }

  var ip = txtIP.value;
  var port = txtPort.value;

  // TODO: unused variables.
  var path = txtPath.value;
  var query = txtQuery.value;

  socket = io('http://' + ip + ':' + port);
  socket.on('connect', function() {
    console.log('client connected.');
    btnConnect.innerText = 'Disconnect';
  });
  socket.on('disconnect', function() {
    btnConnect.innerText = 'Connect';
  });
};

btnSend.onclick = function(event) {
  var eventName = txtEventName.value;
  var eventBody = txtEventBody.value;

  console.log('eventName :', eventName);
  console.log('eventBody :', eventBody);
  
  socket.emit(eventName, eventBody);
};
