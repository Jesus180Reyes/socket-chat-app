const chatController = (socket)=> {
    console.log("cliente conectado!!",socket.id);
    // console.log("clientes conectados",socket);
    
    socket.on("disconnect", ()=> {
        console.log("Cliente desconectado",socket.id);
    });
    // socket.on("enviar-mensaje",(payload)=> {
    //     console.log(payload);
    //     socket.to(payload.to).emit("enviar-mensaje", payload );
    //     // callback(20);
    // }); 

    socket.on("send-message", (payload) => {
        console.log("Mensaje Recivido");
        console.log(payload);
        // socket.broadcast.emit("recibir-mensaje",payload );
        socket.broadcast.emit("recibir-mensaje", payload);

        

    });
    socket.on("send-message-to", (payload) => {
        console.log("Mensaje Recivido");
        console.log(payload);
        // socket.broadcast.emit("recibir-mensaje",payload );
        socket.to([payload.id]).emit("recibir-mensaje-to", payload);
        // socket.broadcast.emit("recibir-mensaje-to", payload);


    });
}



module.exports = {
    chatController
}