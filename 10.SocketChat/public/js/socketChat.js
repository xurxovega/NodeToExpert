var socket = io();
var searchParams = new URLSearchParams(window.location.search);

if (!searchParams.has('name') || !searchParams.has('room')) { 
    window.location = 'index.html';
    throw new Error ('Name & Room Obligatoriy');
}

var user = {
    name: searchParams.get('name'),
    room: searchParams.get('room')
}

socket.on('connect', function() {
    //console.log('FrontEnd.Connect');
    socket.emit('logOnChat', user, function(res){
        //console.log('FrontEnd.logOnChat', res);
        renderUsers(res);
    });
});

 socket.on('disconnect', function () {
    //console.log('FrontEnd.Disconnect');
});

socket.on('sendMessage', function (msg) {
    //console.log('FrontEnd.sendMessage', msg);
    renderMessage(msg, false);
    scrollBottom();
});

socket.on('listUsers', function (msg) {
    //console.log('FrontEnd.listUsers', msg);
    renderUsers(msg)
});

socket.on('privateMessage', function (msg) {
    //console.log('FrontEnd.privateMessage', msg);
}); 