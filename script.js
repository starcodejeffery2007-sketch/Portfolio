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
    // 3. CONTACT FORM SANITIZATION AND VALIDATION ENGINE
    // ==========================================================================
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            let isFormValid = true;

            const name = document.getElementById('nameInput');
            const email = document.getElementById('emailInput');
            const message = document.getElementById('messageInput');

            // Name Verification
            if (name.value.trim() === '') {
                name.parentElement.classList.add('invalid');
                isFormValid = false;
            } else {
                name.parentElement.classList.remove('invalid');
            }

            // Email Regex Structure Verification
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email.value.trim())) {
                email.parentElement.classList.add('invalid');
                isFormValid = false;
            } else {
                email.parentElement.classList.remove('invalid');
            }

            // Message Body Content Verification
            if (message.value.trim() === '') {
                message.parentElement.classList.add('invalid');
                isFormValid = false;
            } else {
                message.parentElement.classList.remove('invalid');
            }

            // Halts page reloads if validation criteria paths break down
            if (!isFormValid) {
                event.preventDefault();
            } else {
                alert('Thank you, Jeffery will get back to you shortly!');
            }
        });
    }
});
