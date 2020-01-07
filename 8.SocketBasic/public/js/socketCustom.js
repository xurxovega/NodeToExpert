var socket = io();
// socket.on For Listen from FronEnd
socket.on('connect', function () {// When client connect
    console.log('Connected to server OPEN');
});
socket.on('disconnect', function () { // When client DISconnect
    console.log('Connection to Server LOST');
});

//socket.emit for send
socket.emit('sendMessageToServer', {
    user: 'Darío Jorge',
    message: 'Hello World'
    }, function (res) {
        console.log('Response Server', res);
});

// Listen the Server
socket.on('sendMessageToClient', function (message) {
    console.log('Server Message', message);
});