document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple form validation
    if (!name || !email || !message) {
        displayMessage('Please fill out all fields.', 'error');
        return;
    }

    // Simulate sending message (you can replace this with actual email sending code)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Clear the form
    document.getElementById('contact-form').reset();

    // Display success message
    displayMessage('Thank you for your message!', 'success');
});

function displayMessage(message, type) {
    const messageContainer = document.createElement('div');
    messageContainer.className = `p-4 my-4 rounded ${type === 'error' ? 'bg-red-200 text-red-800' : 'bg-green-200 text-green-800'}`;
    messageContainer.innerText = message;

    const contactSection = document.getElementById('contact');
    contactSection.insertBefore(messageContainer, contactSection.firstChild);

    // Remove message after 3 seconds
    setTimeout(() => {
        messageContainer.remove();
    }, 3000);
}
