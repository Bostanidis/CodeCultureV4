// Select the header using class name
const header = document.querySelector('.Header'); // Use querySelector to select by class

// Set the original height
const originalHeight = 120; // Original height in pixels
const reducedHeight = 90; // Height after scrolling

// Function to handle scroll events
function handleScroll() {
    if (window.scrollY > 0) {
        // When scrolled down, reduce header height
        header.style.height = reducedHeight + 'px';
    } else {
        // When at the top, reset to original height
        header.style.height = originalHeight + 'px';
    }
}

// Add event listener for scroll
window.addEventListener('scroll', handleScroll);
