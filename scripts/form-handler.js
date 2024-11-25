document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the default form submission
        
        // Here you would typically handle form data submission to a server
        // For now, we'll just redirect to the thank you page
        window.location.href = './thank-you.html';
    });
});
