const { io } = require('../server');
const { ticketControl } = require('../class/ticketControl')

let ticket = new ticketControl();

io.on('connection', (client) => {

    //Escuchando al Front End
    client.on('newTicket', (data, callback) => {
        let newTicket = ticket.nextTicket()
        //console.log('Received from New Ticket Emit', newTicket);
        callback(newTicket);
    });

    //Emitir nuevo evento Estado Actual
    client.emit('sendLastTicket', {
        lastTicket: ticket.getLastTicket(),
        last4Ticket: ticket.getLast4Ticket()
    });

    //Escuchando al Front End
    client.on('attendTicket', (data, callback) => {
        if (!data.desktop){
            return callback({
                err: true,
                messsage: 'Desktop obligatory'
            })
        }

        let attendTicket = ticket.attendTicket(data.desktop);
        callback(attendTicket);
        
        client.broadcast.emit('sendLast4Tickets', ticket.getLast4Ticket()); //Para emitir a todo el mundo
    });

})