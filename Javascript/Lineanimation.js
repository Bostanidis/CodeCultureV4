  // Function to add underline effect on hover
  function addUnderlineEffect(button) {
    // Create underline element
    const underline = document.createElement('div');
    underline.classList.add('underline');
    button.appendChild(underline);

    // Add hover effect
    button.addEventListener('mouseenter', () => {
        underline.style.width = '100%';
    });

    // Remove hover effect
    button.addEventListener('mouseleave', () => {
        underline.style.width = '0';
    });
}

// Apply effect to each button
document.querySelectorAll('.Header-Button').forEach(button => addUnderlineEffect(button));