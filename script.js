document.getElementById('sendButton').addEventListener('click', function() {
    const messageInput = document.getElementById('messageInput');
    const messageText = messageInput.value.trim();

    if (messageText) {
        const messagesContainer = document.getElementById('messages');

        // Create a new message element
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'self');
        messageElement.textContent = messageText;

        // Append the message to the messages container
        messagesContainer.appendChild(messageElement);

        // Clear the input
        messageInput.value = '';

        // Scroll to the bottom of the messages
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
});

// For demonstration purposes, simulate receiving a message from another user
setInterval(() => {
    const messagesContainer = document.getElementById('messages');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', 'other');
    messageElement.textContent = "This is a message from another user.";
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}, 5000); // Simulate receiving a message every 5 seconds
