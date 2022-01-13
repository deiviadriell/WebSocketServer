
const socketController = (socket) => {  

    console.log('Cliente conectado', socket.id);
    
    socket.on('enviar-mensaje', (payload, callback) => {
        socket.broadcast.emit('enviar-mensaje', payload);
        const id=1234567890;
        callback(id);
    })
}

module.exports = {
    socketController

}