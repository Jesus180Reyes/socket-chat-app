const socketController = (socket) => {
    console.log("cliente conectado!!",socket.id);
    // console.log("clientes conectados",socket);
    
    socket.on("disconnect", ()=> {
        console.log("Cliente desconectado",socket.id);
    });
    socket.on("enviar-mensaje",(payload)=> {
        console.log(payload);
        socket.to(payload.to).emit("enviar-mensaje", payload );
        // callback(20);
    }); 
    
}


module.exports = {
    socketController
}