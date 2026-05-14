// 1. Sticky Navbar & Scroll Top Button
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const scrollTop = document.getElementById('scrollTop');
    
    if (window.scrollY > 100) {
        navbar.classList.add('sticky');
        scrollTop.style.display = 'block';
    } else {
        navbar.classList.remove('sticky');
        scrollTop.style.display = 'none';
    }
});

// 2. Mobile Menu Toggle Logic
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = hamburger.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = hamburger.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    });
});

// 3. Simple Scroll Reveal Animation (Smooth Entry)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.dish-card, .offer-card, .about-img').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = '0.8s ease-out';
    observer.observe(el);
});

// 4. Form Submission Mockup
const resForm = document.getElementById('resForm');
resForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for choosing Spice Heaven! Your table request has been received.');
    resForm.reset();
});

// 5. Back to Top Click
document.getElementById('scrollTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});