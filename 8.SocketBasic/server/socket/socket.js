const { io } = require('../server');
// For Listen From BackEnd ... liste to FronEnd
io.on('connection', (client) => {
    //console.log(client);
    console.log('User connected');

    client.emit('sendMessageToClient', {
        user: 'Admin',
        message: 'Welcome to this app.Connection Open'
    });

    client.on('disconnect', () => {
        console.log('User disconnect');
    });

    //Listen client
    client.on('sendMessageToServer', (data, callback) => {
        console.log('Message from Client', data);

        client.broadcast.emit('sendMessageToClient', data); //Para emitir a todo el mundo

        //callback();
       
       /* if (data.user) {
            callback({
                response: 'Ok'
            });
        } else {
            callback({
                response: 'Fail'
            });
        }*/

    });


})