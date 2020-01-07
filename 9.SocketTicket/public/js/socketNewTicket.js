var socket = io();
var labelNewTicket = $('#lblNewTicket');

//socket.emit Para enviar desde el boton en el Front End
$('button').on('click', function(){
    //console.log('click New Ticket');
    socket.emit('newTicket', null, (newTicket) => {
        labelNewTicket.text(newTicket);
    });
})

//Recibir de getLastTicket
socket.on('sendLastTicket', function (res) {
    labelNewTicket.text(res.message);
});