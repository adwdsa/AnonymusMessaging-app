const messagesContainer = document.getElementById('messages');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');

// Array to store messages
let messages = [];

// Function to display messages
function displayMessages() {
    // Clear the messages container
    messagesContainer.innerHTML = '';

    // Append all messages to the container
    messages.forEach(message => {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.textContent = message;
        messagesContainer.appendChild(messageElement);
    });

    // Scroll to the bottom of the messages
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Event listener for the send button
sendButton.addEventListener('click', function() {
    const messageText = messageInput.value.trim();

    if (messageText) {
        // Add the new message to the messages array
        messages.push(messageText);

        // Clear the input
        messageInput.value = '';

        // Display all messages
        displayMessages();
    }
});
