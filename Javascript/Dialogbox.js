document.addEventListener("DOMContentLoaded", function() {
    // Select the Contact Us button
    const contactButton = document.querySelector('.Header-Button-Contact-Us');
    
    // Select the dialog and close button
    const contactDialog = document.getElementById('contactDialog');
    const closeButton = document.querySelector('.close-button');
    const contactForm = document.getElementById('contactForm');
  
    // Open the dialog when the Contact Us button is clicked
    contactButton.addEventListener('click', function() {
      contactDialog.style.display = 'block'; // Show the dialog
    });
  
    // Close the dialog when the close button is clicked
    closeButton.addEventListener('click', function() {
      contactDialog.style.display = 'none'; // Hide the dialog
    });
  
    // Close the dialog when clicking outside of it
    window.addEventListener('click', function(event) {
      if (event.target === contactDialog) {
        contactDialog.style.display = 'none'; // Hide the dialog
      }
    });
  
    // Handle form submission
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting normally
  
      // Extract form data
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
  
      // You can replace the URL with your backend endpoint
      fetch('https://example.com/send-email', { // Replace with your server endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, message: message }),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        alert('Your message has been sent!');
        contactDialog.style.display = 'none'; // Close the dialog after sending
        contactForm.reset(); // Reset the form fields
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('There was an error sending your message.');
      });
    });
  });