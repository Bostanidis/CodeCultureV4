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
        setTimeout(() => {
            contactDialog.classList.add('show'); // Add class for animation
        }, 10); // Slight delay to allow the display change
    });

    // Close the dialog when the close button is clicked
    closeButton.addEventListener('click', function() {
        contactDialog.style.display = 'none'; // Hide the dialog
        contactDialog.classList.remove('show'); // Remove animation class
    });

    // Close the dialog when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === contactDialog) {
            contactDialog.style.display = 'none'; // Hide the dialog
            contactDialog.classList.remove('show'); // Remove animation class
        }
    });

    // Handle form submission
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        // Add your form handling logic here
        alert("Form submitted!"); // Placeholder for testing
        contactDialog.style.display = 'none'; // Close dialog after submission
        contactForm.reset(); // Reset form fields
    });
});
