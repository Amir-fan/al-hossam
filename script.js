// Premium Arabic Landing Page - الحسام ALHOSAM
// JavaScript for interactivity and animations

(function() {
    'use strict';

    // DOM Elements
    const navbar = document.querySelector('.navbar');
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');
    const logoImg = document.getElementById('logo-img');

    // Navbar Scroll Effect
    function handleNavbarScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    // Mobile Menu Toggle
    function toggleMobileMenu() {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    }

    // Close Mobile Menu on Link Click
    function closeMobileMenu() {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Smooth Scroll for Navigation Links
    function smoothScroll(e) {
        const href = this.getAttribute('href');
        
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                closeMobileMenu();
            }
        }
    }

    // Intersection Observer for Fade-in Animations - Trigger earlier
    function setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.01,
            rootMargin: '200px 0px 0px 0px' // Trigger 200px before element enters viewport
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target); // Stop observing once animated
                }
            });
        }, observerOptions);

        // Observe elements - faster, less staggered
        const animateElements = document.querySelectorAll(
            '.about-content, .product-card, .quality-item, .packaging-item, .contact-item, .gallery-item'
        );

        animateElements.forEach((el, index) => {
            el.classList.add('animate-ready');
            observer.observe(el);
        });
    }

    // Product Card Hover Effects
    function setupProductCards() {
        const productCards = document.querySelectorAll('.product-card');
        
        productCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.zIndex = '10';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.zIndex = '1';
            });
        });
    }

    // Parallax Effect for Hero Section - Removed for cleaner look
    function setupParallax() {
        // Parallax removed for premium, static design
    }

    // Logo Error Handling
    function handleLogoError() {
        if (logoImg) {
            logoImg.onerror = function() {
                // Create a fallback logo if image fails to load
                const logoContainer = logoImg.parentElement;
                logoContainer.innerHTML = `
                    <div style="
                        width: 150px;
                        height: 60px;
                        background: linear-gradient(135deg, #D4AF37 0%, #B8941F 100%);
                        border-radius: 8px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: white;
                        font-weight: 700;
                        font-size: 1.2rem;
                        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                    ">
                        الحسام
                    </div>
                `;
            };
        }
    }

    // Active Navigation Link Highlighting
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // Lazy Loading for Images (if needed in future)
    function setupLazyLoading() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                            imageObserver.unobserve(img);
                        }
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    // Form Validation (if contact form is added later)
    function setupFormValidation() {
        const forms = document.querySelectorAll('form');
        
        forms.forEach(form => {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Add form validation logic here
                const inputs = form.querySelectorAll('input[required], textarea[required]');
                let isValid = true;
                
                inputs.forEach(input => {
                    if (!input.value.trim()) {
                        isValid = false;
                        input.style.borderColor = '#ff0000';
                    } else {
                        input.style.borderColor = '';
                    }
                });
                
                if (isValid) {
                    // Form submission logic
                    console.log('Form is valid and ready to submit');
                }
            });
        });
    }

    // Performance Optimization: Debounce Function
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Initialize all functions
    function init() {
        // Event Listeners
        window.addEventListener('scroll', debounce(() => {
            handleNavbarScroll();
            updateActiveNavLink();
        }, 10));

        if (menuToggle) {
            menuToggle.addEventListener('click', toggleMobileMenu);
        }

        navLinks.forEach(link => {
            link.addEventListener('click', smoothScroll);
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (navMenu.classList.contains('active') && 
                !navMenu.contains(e.target) && 
                !menuToggle.contains(e.target)) {
                closeMobileMenu();
            }
        });

        // Initialize features
        setupIntersectionObserver();
        setupProductCards();
        setupParallax();
        handleLogoError();
        setupLazyLoading();
        setupFormValidation();

        // Initial navbar state
        handleNavbarScroll();
    }

    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Add CSS for active nav link
    const style = document.createElement('style');
    style.textContent = `
        .nav-menu a.active {
            color: var(--gold);
        }
        .nav-menu a.active::after {
            width: 100%;
        }
    `;
    document.head.appendChild(style);

    // Console message
    console.log('%cالحسام للمنتجات الزراعية', 'color: #8B1A1A; font-size: 24px; font-weight: bold;');
    console.log('%cALHOSAM Agricultural Products', 'color: #D4AF37; font-size: 16px;');

})();

