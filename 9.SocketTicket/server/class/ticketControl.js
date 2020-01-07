const fs = require('fs');

class Ticket {
    constructor(ticket, desktop) {
        this.ticket = ticket;
        this.desktop = desktop;
    }
}

class ticketControl {

    constructor(){
        this.lastTicket = 0;
        this.dayOfYear = new Date().getDate();
        this.ticketNoAttend = [];
        this.last4Tickets = [];

        let data = require('../data/data.json');

        if (data.today === this.dayOfYear){
            this.lastTicket = data.lastTicket;
            this.ticketNoAttend = data.ticketNoAttend;
            this.last4Tickets = data.last4Tickets;
        }else{
            this.resetTicket();
        }
        //console.log('Constructor', data);
    }

    resetTicket(){
        this.lastTicket = 0;
        this.dayOfYear = new Date().getDate();
        this.ticketNoAttend = [];
        this.last4Tickets = [];
        //console.log('Reset Data');
        this.saveFile();
    }

    nextTicket() {
        this.lastTicket += 1;
        let ticketToAttend = new Ticket (this.getLastTicket(), null);
        this.ticketNoAttend.push(ticketToAttend);
        this.saveFile();
        return `Ticket ${this.lastTicket}`;
    }

    getLastTicket(){
        return `Ticket ${this.lastTicket}`;
    }

    getLast4Ticket() {
        return this.last4Tickets;
    }

    attendTicket(desktop) {

        if(this.ticketNoAttend.length === 0 || this.ticketNoAttend == null){
            return 'No tickets to attend';
        }

        //Número de ticket
        let numberTicket = this.ticketNoAttend[0].ticket; 

        //Borra el primero
        this.ticketNoAttend.shift();
        let ticketToAttend = new Ticket(numberTicket, desktop);

        //Asigna en la primera posición
        this.last4Tickets.unshift(ticketToAttend); 

        if (this.last4Tickets.length > 4) {
            // Borra el último elemento
            this.last4Tickets.splice(-1, 1); 
        }
        this.saveFile();
        return ticketToAttend;
    }

    saveFile(){
        let jsonData = {
            lastTicket: this.lastTicket,
            today: this.dayOfYear,
            ticketNoAttend: this.ticketNoAttend,
            last4Tickets: this.last4Tickets
        };
        let jsonDataString = JSON.stringify(jsonData); fs.writeFileSync('./server/data/data.json', jsonDataString);
    }
}

module.exports = {
    ticketControl
}