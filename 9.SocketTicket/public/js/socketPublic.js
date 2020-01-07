var socket = io();
var labelTicket1 = $('#lblTicket1');
var labelTicket2 = $('#lblTicket2');
var labelTicket3 = $('#lblTicket3');
var labelTicket4 = $('#lblTicket4');
var labelDesktop1 = $('#lblDesktop1');
var labelDesktop2 = $('#lblDesktop2');
var labelDesktop3 = $('#lblDesktop3');
var labelDesktop4 = $('#lblDesktop4');

var lblTickets = [ 
    labelTicket1, 
    labelTicket2, 
    labelTicket3, 
    labelTicket4
];
var labelDesktop = [
    labelDesktop1, 
    labelDesktop2, 
    labelDesktop3, 
    labelDesktop4
];

//Listen evento Estado Actual
socket.on('sendLastTicket', (data) => {
    updateHTML(data.last4Ticket);
});

// Last 4 tickets
socket.on('sendLast4Tickets', function(data) {
    //console.log('socketPublic.SendLast4Tickets');
    let audio = new Audio('../audio/new-ticket.mp3');
    audio.play();
    updateHTML(data);
});

function updateHTML(last4Ticket){
    //console.log('Length', last4Ticket.length);
    for (var i = 0; i < last4Ticket.length ; i++){
        lblTickets[i].text(last4Ticket[i].ticket)
        labelDesktop[i].text('Desktop ' + last4Ticket[i].desktop)
    }
}

