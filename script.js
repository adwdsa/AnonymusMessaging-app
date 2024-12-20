document.getElementById('sendButton').addEventListener('click', function() {
    const messageInput = document.getElementById('messageInput');
    const messageText = messageInput.value;

    if (messageText.trim() !== "") {
        const messagesContainer = document.getElementById('messages');

        // Create a new message element
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'kovzi'); // All messages are from "kovzi"
        messageElement.textContent = messageText;

        // Append the message to the messages container
        messagesContainer.appendChild(messageElement);

        // Clear the input
        messageInput.value = '';

        // Scroll to the bottom of the messages
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
});
