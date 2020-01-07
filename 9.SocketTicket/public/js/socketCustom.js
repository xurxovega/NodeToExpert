var socket = io();
// socket.on For Listen
/* socket.on('connect', function () {
    console.log('Connected to server');
});
socket.on('disconnect', function () {
    console.log('Connection lost');
});
//socket.emit for send

socket.emit('sendMessageToServer', {
    user: 'Darío Jorge',
    message: 'Hello World'
}, function (res) {
    console.log('Response Server', res);
}); */

socket.on('sendMessageToClient', function (message) {
    console.log(message);
});