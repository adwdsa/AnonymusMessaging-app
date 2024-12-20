const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public')); // Serve static files from the 'public' directory

io.on('connection', (socket) => {
    console.log('A user connected');

    // Listen for incoming messages
    socket.on('sendMessage', (message) => {
        // Broadcast the message to all connected clients
        io.emit('receiveMessage', message);
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

const PORT = process.env.PORT || 80;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
