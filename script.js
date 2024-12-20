const socket = io(); // Connect to the Socket.IO server

// Listen for incoming messages
socket.on('chat message', function(msg) {
    const messagesContainer = document.getElementById('messages');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', 'kovzi'); // All messages are from "kovzi"
    messageElement.textContent = msg;
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll to the bottom
});

// Send message on button click
document.getElementById('sendButton').addEventListener('click
