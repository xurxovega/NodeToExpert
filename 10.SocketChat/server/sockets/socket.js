const { io } = require('../server');
const { Users } = require('../classes/users');
const { sendMessage } = require('../utils/utils');

const users = new Users();

io.on('connection', (client) => {

    //console.log('BackEnd.Connection');

    client.on('logOnChat', (data, callback) => {
        //console.log('Connection: ', client.id);
        if(!data.name || !data.room){
            return callback({
                error: true,
                message: 'No name/room Found'
            });
        }
        client.join(data.room); // Añade usuario a la sala indicada
        users.addPerson(client.id, data.name, data.room); // Añade a la colección
        // Emite a todos los usuarios que estén el to(). En este caso es la sala
        //console.log('BackEnd.logOnChat', users.getPersonByRoom(data.room));
        client.broadcast.to(data.room).emit('listUsers', users.getPersonByRoom(data.room));
        client.broadcast.to(data.room).emit('sendMessage', sendMessage('Admin', `${data.name} has joined.`))
        callback(users.getPersonByRoom(data.room));
    });

    client.on('sendMessage', (data, callback) => {
        let user = users.getPerson(client.id);
        //client.broadcast.emit('sendMessage', sendMessage(user.name, msg));
        client.broadcast.to(user.room).emit('sendMessage', sendMessage(user.name, data.message));
        // console.log('BackEnd.sendMessage', data, user);
        callback(sendMessage(user.name, data.message));
    });


    client.on('disconnect', () => {
        //console.log('BackEnd.Disconnect');
        let userDeleted = users.deletePerson(client.id);
        //client.broadcast.emit('sendMessage', { 
        //    user: 'Admin', 
        //    message: `User ${userDeleted.name} left out chat` 
        //}); 
        //client.broadcast.emit('sendMessage', sendMessage('Admin', `User ${userDeleted.name} left out chat`));
        //client.broadcast.emit('listUsers', users.getPeople()); 

        client.broadcast.to(userDeleted.room).emit('sendMessage',
            sendMessage('Admin', `${userDeleted.name} left chat`)
        );
        client.broadcast.to(userDeleted.room).emit('listUsers',
            users.getPersonByRoom(userDeleted.room)
        );
    });    

    client.on('privateMessage', (data) => {
        let user = users.getPerson(client.id);
        //console.log('privateMessage', user);
        // Emite mensaje al usuario del to()
        client.broadcast.to(data.toUser).emit('sendMessage', sendMessage(user.name, data.message));
    });

});
