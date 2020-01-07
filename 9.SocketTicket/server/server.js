const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const path = require('path');
const app = express();
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));
// Mantiene comunicación abierta con servidor.was-validated
module.exports.io = socketIO(server);
require('./socket/socket')

/* app.listen(port, (err) => {
    if (err) throw new Error(err);
    console.log(`Servidor corriendo en puerto ${ port }`);
}); */
server.listen(port, (err) => {
    if (err) throw new Error(err);
    console.log(`Servidor corriendo en puerto ${port}`);
});