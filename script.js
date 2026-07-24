// Wait for DOM tree nodes to completely parse into memory
document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================================================
    // 1. MOBILE RESPONSIVE HAMBURGER NAVIGATION LOGIC
    // ==========================================================================
    const menuToggle = document.getElementById('menuToggle');
    const navWrapper = document.getElementById('navWrapper');
    const navLinks = document.querySelectorAll('.nav-link a');

    if (menuToggle && navWrapper) {
        menuToggle.addEventListener('click', () => {
            // Toggles navigation view visibility framework
            navWrapper.classList.toggle('active');
            
            // Switch burger icon into close cross vector symbol states
            const icon = menuToggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-xmark');
        });

        // Autoclose navigation window map once an internal link node is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navWrapper.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-xmark');
            });
        });
    }

    // ==========================================================================
    // 2. DYNAMIC TYPEWRITER EFFECT ENGINE
    // ==========================================================================
    const words = ["Digital Designer", "Web Developer", "Graphics Designer", "Presentation Designer"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typewriterElement = document.getElementById('typewriter');

    function typeEffect() {
        if (!typewriterElement) return;

        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            // Subtracts a single character snapshot string slice frame
            typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            // Injects an added structural text substring character slice trace
            typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        // Logic timing controls adjustment blueprints
        let typingSpeed = isDeleting ? 50 : 100; // Deleting text executes twice as fast as entry paths

        // Once a word finishes printing fully
        if (!isDeleting && charIndex === currentWord.length) {
            typingSpeed = 2000; // Keeps the finished string static for 2 seconds before deletion
            isDeleting = true;
        } 
        // Once a word is completely cleared away
        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length; // Moves forward to next index position array item
            typingSpeed = 500; // Small delay before typing the next string track
        }

        setTimeout(typeEffect, typingSpeed);
    }

    // Starts the typing sequence execution engine tracking loop
    typeEffect();

    // ==========================================================================
// 3. CONTACT FORM VALIDATION ENGINE FOR ORIGINAL STRUCTURE
// ==========================================================================
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        let isFormValid = true;

        // Target elements precisely using their attributes inside your exact form layout
        const nameInput = contactForm.querySelector('input[placeholder="Your Name"]');
        const emailInput = contactForm.querySelector('input[placeholder="Your Email"]');
        const subjectInput = contactForm.querySelector('input[placeholder="Subject"]');
        const messageInput = contactForm.querySelector('textarea[name="message"]');

        // 1. Name Verification
        if (!nameInput || nameInput.value.trim() === '') {
            alert('Please enter your name.');
            if (nameInput) nameInput.focus();
            isFormValid = false;
        }

        // 2. Email Structure Verification
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (isFormValid && (!emailInput || !emailPattern.test(emailInput.value.trim()))) {
            alert('Please enter a valid email address.');
            if (emailInput) emailInput.focus();
            isFormValid = false;
        }

        // 3. Subject Verification
        if (isFormValid && (!subjectInput || subjectInput.value.trim() === '')) {
            alert('Please enter a subject for your message.');
            if (subjectInput) subjectInput.focus();
            isFormValid = false;
        }

        // 4. Message Body Content Verification
        if (isFormValid && (!messageInput || messageInput.value.trim() === '')) {
            alert('Please write a message before sending.');
            if (messageInput) messageInput.focus();
            isFormValid = false;
        }

        // Halts page reloads if validation criteria paths break down
        if (!isFormValid) {
            event.preventDefault();
        } else {
            alert('Thank you! Your message has been validated successfully.');
        }
    });
}})
