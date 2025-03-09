// Home page interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Transparent Header on Scroll
    const header = document.querySelector('.header-main');

    // Back to Top button
    const backToTopButton = document.getElementById('back-to-top');

    // Handle scroll events
    window.addEventListener('scroll', function() {
        // Header appearance
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Back to top button visibility
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    // Back to top button functionality
    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
