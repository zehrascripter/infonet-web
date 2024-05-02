document.addEventListener('DOMContentLoaded', function() {
    // Code for counting viewers (if needed)


    // Form submission
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        const formDataJSON = JSON.stringify(Object.fromEntries(formData));
        console.log(formDataJSON); 
        alert('Form submitted successfully!');
        form.reset();
    });
});
