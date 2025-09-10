const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navlinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// contact form

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;const message = document.getElementById('message').value;

    alert(`Thank You, ${name}! your message has been sent.`);
    
    contactForm.reset();
});