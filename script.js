// script.js - Fun & Bouncy
document.addEventListener('DOMContentLoaded', () => {
    // Move the fixed navbar into the top edge once scrolling begins.
    const funNav = document.querySelector('.fun-nav');

    if (funNav) {
        const updateNavPosition = () => {
            funNav.classList.toggle('is-scrolled', window.scrollY > 20);
        };

        updateNavPosition();
        window.addEventListener('scroll', updateNavPosition, { passive: true });
    }

    // Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('is-active');
            navLinks.classList.toggle('active');
        });

        // Close menu when a link is clicked
        const navItems = document.querySelectorAll('.nav-links a');
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                mobileMenu.classList.remove('is-active');
                navLinks.classList.remove('active');
            });
        });
    }

    // Bouncy Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.scroll-bounce');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
            }
        });
    }, {
        root: null,
        threshold: 0.1, 
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));
});
