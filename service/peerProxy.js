const { WebSocketServer } = require("ws");
 
 function peerProxy(httpServer) {
   //creates a websocket object
   const socketServer = new WebSocketServer({ server: httpServer });
 
   socketServer.on("connection", (socket) => {
     socket.isAlive = true;
 
     //forward messages to everyone except the sender
     socket.on("message", function message(data) {
       socketServer.clients.forEach((client) => {
         if (client !== socket && client.readyState === WebSocket.OPEN) {
           client.send(data);
         }
       });
     });
 
     //respond to pong messages by marking the connection alive
     socket.on("pong", () => {
       socket.isAlive = true;
     });
   });
 
   //periodically sned out a ping message to make sure clients are alive
   setInterval(() => {
     socketServer.clients.forEach(function each(client) {
       if (client.isAlive === false) return client.terminate();
 
       client.isAlive = false;
       client.ping();
     });
   }, 10000);
 }

 module.exports = {peerProxy};