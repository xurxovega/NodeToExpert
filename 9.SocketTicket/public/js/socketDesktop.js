var socket = io();
var labelDesktop = $('#lblDesktop');
var labelTicket = $('#lblTicket');

var searchParams = new URLSearchParams( window.location.search );

if (!searchParams.has('desktop')){
    window.location = 'index.html' // vuelve al index
    throw new Error('Deskot obligatory')
}

var desktop = searchParams.get('desktop');
labelDesktop.text('Desktop ' + desktop);

//socket.emit Para enviar desde el boton en el Front End
$('button').on('click', function () {
    //console.log('click Attend Ticket');
    socket.emit('attendTicket', {desktop: desktop}, (res) => {
        //console.log('CallBack', res.ticket);
        if (res === 'No tickets'){
            alert(res);
            return
        }
        labelTicket.text(res.ticket);
    });
});
