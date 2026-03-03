/**
 * Custom Brand UI - JavaScript Interactions
 * Handles mobile menu, alert dismissals, and interactive components
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // MOBILE MENU TOGGLE
    // ============================================
    
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
            
            // Toggle menu visibility
            mobileMenu.classList.toggle('hidden');
            
            // Update aria-expanded attribute for accessibility
            mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
            
            // Toggle icon
            const icon = mobileMenuButton.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });
        
        // Close mobile menu when clicking on a link
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
                mobileMenuButton.setAttribute('aria-expanded', 'false');
                const icon = mobileMenuButton.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            });
        });
    }
    
    // ============================================
    // ALERT CLOSE FUNCTIONALITY
    // ============================================
    
    const alertCloseButtons = document.querySelectorAll('.alert-close');
    
    alertCloseButtons.forEach(button => {
        button.addEventListener('click', function() {
            const alert = this.closest('.alert');
            if (alert) {
                // Fade out animation
                alert.style.opacity = '0';
                alert.style.transform = 'translateY(-10px)';
                alert.style.transition = 'all 0.3s ease-out';
                
                // Remove from DOM after animation
                setTimeout(() => {
                    alert.remove();
                }, 300);
            }
        });
    });
    
    // ============================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ============================================
    
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Don't prevent default if it's just "#"
            if (href === '#') return;
            
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                // Get the navbar height for offset
                const navbar = document.querySelector('nav');
                const navbarHeight = navbar ? navbar.offsetHeight : 0;
                
                // Calculate position
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                // Smooth scroll to target
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update URL without jumping
                history.pushState(null, null, href);
            }
        });
    });
    
    // ============================================
    // FORM VALIDATION
    // ============================================
    
    const contactForm = document.querySelector('form[aria-label="Contact form"]');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading state
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;
            submitButton.disabled = true;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Basic validation (HTML5 validation handles most of this)
            let isValid = true;
            
            // Email validation
            const email = data.email;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                isValid = false;
                showNotification('Please enter a valid email address.', 'error');
                submitButton.disabled = false;
                submitButton.innerHTML = originalText;
                return;
            }
            
            if (isValid) {
                // Simulate sending (replace with actual API call)
                setTimeout(() => {
                    // Show success message
                    showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
                    
                    // Reset form
                    contactForm.reset();
                    
                    // Reset button
                    submitButton.disabled = false;
                    submitButton.innerHTML = originalText;
                    
                    // In a real application, you would send the data to a server here
                    console.log('Form submitted:', data);
                }, 1500);
            }
        });
    }
    
    // ============================================
    // ANIMATED STATS COUNTER
    // ============================================
    
    function animateCounter(element, target, duration = 2000) {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current).toLocaleString();
            }
        }, 16);
    }
    
    // Observe stats for animation
    const statCards = document.querySelectorAll('.stat-card');
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statValue = entry.target.querySelector('div:first-child');
                const text = statValue.textContent;
                
                // Extract number from text
                const match = text.match(/[\d.]+/);
                if (match) {
                    const number = parseFloat(match[0]);
                    const suffix = text.replace(/[\d.]+/, '');
                    
                    if (text.includes('K')) {
                        let counter = 0;
                        const target = number;
                        const timer = setInterval(() => {
                            counter += target / 50;
                            if (counter >= target) {
                                statValue.textContent = target + 'K+';
                                clearInterval(timer);
                            } else {
                                statValue.textContent = Math.floor(counter) + 'K+';
                            }
                        }, 30);
                    } else {
                        statValue.textContent = text;
                    }
                }
                
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statCards.forEach(card => statsObserver.observe(card));
    
    // ============================================
    // INTERACTIVE BUTTONS - GET STARTED / CTA
    // ============================================
    
    const ctaButtons = document.querySelectorAll('button, a');
    
    ctaButtons.forEach(button => {
        const text = button.textContent.trim().toLowerCase();
        
        // Get Started buttons
        if (text.includes('get started') || text.includes('start building')) {
            button.addEventListener('click', (e) => {
                if (button.tagName === 'BUTTON' || button.getAttribute('href') === '#') {
                    e.preventDefault();
                    showNotification('🚀 Welcome! Sign up feature coming soon!', 'info');
                    // Open signup modal or redirect
                    console.log('Get Started clicked');
                }
            });
        }
        
        // Sign In buttons
        if (text.includes('sign in')) {
            button.addEventListener('click', (e) => {
                if (button.tagName === 'BUTTON' || button.getAttribute('href') === '#') {
                    e.preventDefault();
                    showNotification('👋 Sign in feature coming soon!', 'info');
                    console.log('Sign In clicked');
                }
            });
        }
        
        // Watch Demo buttons
        if (text.includes('watch demo')) {
            button.addEventListener('click', (e) => {
                if (button.tagName === 'BUTTON' || button.getAttribute('href') === '#') {
                    e.preventDefault();
                    showDemoModal();
                }
            });
        }
        
        // Pricing buttons
        if (text.includes('choose basic') || text.includes('choose pro') || text.includes('choose enterprise')) {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const plan = text.includes('basic') ? 'Basic' : text.includes('pro') ? 'Pro' : 'Enterprise';
                showNotification(`✨ You selected the ${plan} plan! Redirecting to checkout...`, 'success');
                console.log(`Selected plan: ${plan}`);
                
                // Animate the button
                button.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    button.style.transform = '';
                }, 200);
            });
        }
    });
    
    // ============================================
    // INTERACTIVE FEATURE CARDS
    // ============================================
    
    const featureCardsForClick = document.querySelectorAll('.feature-card');
    
    featureCardsForClick.forEach(card => {
        card.style.cursor = 'pointer';
        
        card.addEventListener('click', function(e) {
            // Don't trigger if clicking a link inside
            if (e.target.tagName === 'A') return;
            
            const title = this.querySelector('.feature-title')?.textContent || 'Feature';
            showNotification(`📖 Learn more about: ${title}`, 'info');
            console.log(`Feature card clicked: ${title}`);
            
            // Add a pulse animation
            this.style.animation = 'pulse 0.5s ease';
            setTimeout(() => {
                this.style.animation = '';
            }, 500);
        });
    });
    
    // ============================================
    // INTERACTIVE PRICING CARDS
    // ============================================
    
    const pricingCardsForClick = document.querySelectorAll('.pricing-card');
    
    pricingCardsForClick.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('click', function(e) {
            // Don't trigger if clicking a button inside
            if (e.target.tagName === 'BUTTON') return;
            
            // Highlight selected card
            pricingCardsForClick.forEach(c => c.style.borderColor = 'transparent');
            this.style.borderColor = 'var(--color-primary)';
            
            const planName = this.querySelector('h3')?.textContent || 'Plan';
            console.log(`Pricing card selected: ${planName}`);
        });
    });
    
    // ============================================
    // DEMO VIDEO MODAL
    // ============================================
    
    function showDemoModal() {
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 z-[1050] flex items-center justify-center p-4 animate-fade-in';
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        
        modal.innerHTML = `
            <div class="bg-white rounded-2xl max-w-3xl w-full p-8 relative animate-slide-in-right" style="animation: slideInRight 0.3s ease-out;">
                <button class="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors" id="close-modal">
                    <i class="fas fa-times text-neutral-600"></i>
                </button>
                
                <h2 class="text-3xl font-bold mb-4 text-brand-dark">🎬 Product Demo</h2>
                <p class="text-neutral-600 mb-6">Watch how our platform can transform your workflow</p>
                
                <div class="bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent rounded-xl aspect-video flex items-center justify-center mb-6">
                    <div class="text-center text-white">
                        <i class="fas fa-play-circle text-6xl mb-4"></i>
                        <p class="text-lg font-semibold">Demo Video</p>
                        <p class="text-sm opacity-80">Click play to start</p>
                    </div>
                </div>
                
                <div class="flex gap-4">
                    <button class="btn-primary flex-1" id="start-trial">
                        Start Free Trial
                    </button>
                    <button class="btn-secondary" id="close-modal-btn">
                        Close
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden';
        
        // Close modal functionality
        function closeModal() {
            modal.style.opacity = '0';
            setTimeout(() => {
                modal.remove();
                document.body.style.overflow = '';
            }, 300);
        }
        
        modal.querySelector('#close-modal').addEventListener('click', closeModal);
        modal.querySelector('#close-modal-btn').addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
        
        document.addEventListener('keydown', function escHandler(e) {
            if (e.key === 'Escape') {
                closeModal();
                document.removeEventListener('keydown', escHandler);
            }
        });
        
        modal.querySelector('#start-trial').addEventListener('click', () => {
            closeModal();
            showNotification('🎉 Great! Starting your free trial...', 'success');
        });
    }
    
    // ============================================
    // SOCIAL LINKS INTERACTION
    // ============================================
    
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const icon = link.querySelector('i');
            let platform = 'social media';
            
            if (icon.classList.contains('fa-facebook-f')) platform = 'Facebook';
            else if (icon.classList.contains('fa-twitter')) platform = 'Twitter';
            else if (icon.classList.contains('fa-linkedin-in')) platform = 'LinkedIn';
            else if (icon.classList.contains('fa-github')) platform = 'GitHub';
            
            showNotification(`🔗 Opening ${platform}...`, 'info');
            console.log(`Social link clicked: ${platform}`);
        });
    });
    
    // ============================================
    // LOGO CLICK INTERACTION
    // ============================================
    
    const logoLinks = document.querySelectorAll('a[aria-label="Home"]');
    
    logoLinks.forEach(logo => {
        logo.addEventListener('click', (e) => {
            if (window.scrollY === 0) {
                e.preventDefault();
                showNotification('🏠 You\'re already at the top!', 'info');
            }
        });
    });
    
    // ============================================
    // NAVBAR SCROLL EFFECT
    // ============================================
    
    const navbar = document.querySelector('nav');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (navbar) {
            // Add shadow when scrolled
            if (scrollTop > 50) {
                navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.05)';
            }
        }
        
        lastScrollTop = scrollTop;
    });
    
    // ============================================
    // INTERSECTION OBSERVER FOR ANIMATIONS
    // ============================================
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        observer.observe(card);
    });
    
    // Observe pricing cards
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach(card => {
        observer.observe(card);
    });
    
    // ============================================
    // ACTIVE NAV LINK ON SCROLL
    // ============================================
    
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const scrollPosition = window.pageYOffset + 200;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
    
    // ============================================
    // UTILITY FUNCTIONS
    // ============================================
    
    /**
     * Copy text to clipboard
     * @param {string} text - The text to copy
     * @param {string} message - Success message to display
     */
    function addCopyFunctionality(text, message = 'Copied to clipboard!') {
        navigator.clipboard.writeText(text).then(() => {
            showNotification(message, 'success');
        }).catch(() => {
            showNotification('Failed to copy', 'error');
        });
    }
    
    // ============================================
    // KEYBOARD NAVIGATION ENHANCEMENTS
    // ============================================
    
    // Trap focus in mobile menu when open
    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    
    document.addEventListener('keydown', function(e) {
        // Close mobile menu with Escape key
        if (e.key === 'Escape' && mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            mobileMenuButton.setAttribute('aria-expanded', 'false');
            mobileMenuButton.focus();
        }
    });
    
    // ============================================
    // INITIALIZE TOOLTIPS (if implemented)
    // ============================================
    
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            const tooltipText = this.getAttribute('data-tooltip');
            if (tooltipText) {
                showTooltip(this, tooltipText);
            }
        });
        
        element.addEventListener('mouseleave', function() {
            hideTooltip();
        });
    });
    
    function showTooltip(element, text) {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = text;
        tooltip.style.cssText = `
            position: absolute;
            background: rgba(30, 41, 59, 0.95);
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 0.5rem;
            font-size: 0.875rem;
            pointer-events: none;
            z-index: 1070;
            white-space: nowrap;
        `;
        
        document.body.appendChild(tooltip);
        
        const rect = element.getBoundingClientRect();
        tooltip.style.top = rect.top - tooltip.offsetHeight - 5 + window.scrollY + 'px';
        tooltip.style.left = rect.left + (rect.width - tooltip.offsetWidth) / 2 + 'px';
    }
    
    function hideTooltip() {
        const tooltip = document.querySelector('.tooltip');
        if (tooltip) {
            tooltip.remove();
        }
    }
    
    // ============================================
    // BUTTON RIPPLE EFFECT
    // ============================================
    
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-white');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.5);
                top: ${y}px;
                left: ${x}px;
                pointer-events: none;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            ripple.addEventListener('animationend', () => {
                ripple.remove();
            });
        });
    });
    
    // Add ripple animation to CSS dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
        }
        
        @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
        
        .shake { animation: shake 0.5s ease; }
        .bounce { animation: bounce 0.6s ease; }
    `;
    document.head.appendChild(style);
    
    // ============================================
    // FLOATING ACTION BUTTON (Scroll to Top)
    // ============================================
    
    const scrollToTopButton = document.createElement('button');
    scrollToTopButton.className = 'fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-brand-primary to-brand-secondary text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 z-40 hidden';
    scrollToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopButton.setAttribute('aria-label', 'Scroll to top');
    scrollToTopButton.style.transform = 'scale(0)';
    document.body.appendChild(scrollToTopButton);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollToTopButton.classList.remove('hidden');
            scrollToTopButton.style.transform = 'scale(1)';
        } else {
            scrollToTopButton.style.transform = 'scale(0)';
            setTimeout(() => {
                if (window.scrollY <= 500) {
                    scrollToTopButton.classList.add('hidden');
                }
            }, 300);
        }
    });
    
    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        showNotification('⬆️ Back to top!', 'info');
    });
    
    // ============================================
    // INTERACTIVE INPUT FOCUS EFFECTS
    // ============================================
    
    const formInputs = document.querySelectorAll('.form-input');
    
    formInputs.forEach(input => {
        // Add floating label effect
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
            const label = this.parentElement.querySelector('.form-label');
            if (label) {
                label.style.color = 'var(--color-primary)';
                label.style.transform = 'scale(0.95)';
                label.style.transition = 'all 0.3s ease';
            }
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
            const label = this.parentElement.querySelector('.form-label');
            if (label) {
                label.style.color = '';
                label.style.transform = '';
            }
        });
        
        // Character counter for textarea
        if (input.tagName === 'TEXTAREA') {
            const maxLength = input.getAttribute('maxlength') || 500;
            const counter = document.createElement('div');
            counter.className = 'text-sm text-neutral-400 mt-1';
            counter.textContent = `0 / ${maxLength} characters`;
            input.parentElement.appendChild(counter);
            
            input.addEventListener('input', function() {
                const length = this.value.length;
                counter.textContent = `${length} / ${maxLength} characters`;
                
                if (length > maxLength * 0.9) {
                    counter.style.color = 'var(--color-warning)';
                } else {
                    counter.style.color = '';
                }
            });
        }
    });
    
    // ============================================
    // BADGE CLICK INTERACTIONS
    // ============================================
    
    const badges = document.querySelectorAll('[class*="badge-"]');
    
    badges.forEach(badge => {
        badge.style.cursor = 'pointer';
        badge.addEventListener('click', function() {
            this.classList.add('bounce');
            setTimeout(() => {
                this.classList.remove('bounce');
            }, 600);
            
            const text = this.textContent.trim();
            console.log(`Badge clicked: ${text}`);
        });
    });
    
    // ============================================
    // EASTER EGG - KONAMI CODE
    // ============================================
    
    let konamiCode = [];
    const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA
    
    document.addEventListener('keydown', (e) => {
        konamiCode.push(e.keyCode);
        konamiCode.splice(-konamiSequence.length - 1, konamiCode.length - konamiSequence.length);
        
        if (konamiCode.join('').includes(konamiSequence.join(''))) {
            activateEasterEgg();
            konamiCode = [];
        }
    });
    
    function activateEasterEgg() {
        showNotification('🎉 You found the secret! Have some confetti!', 'success');
        createConfetti();
    }
    
    function createConfetti() {
        for (let i = 0; i < 100; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.style.cssText = `
                    position: fixed;
                    width: 10px;
                    height: 10px;
                    background: ${['#6366f1', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b'][Math.floor(Math.random() * 5)]};
                    left: ${Math.random() * 100}vw;
                    top: -20px;
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 9999;
                    animation: fall ${2 + Math.random() * 3}s linear;
                `;
                document.body.appendChild(confetti);
                
                setTimeout(() => confetti.remove(), 5000);
            }, i * 30);
        }
        
        // Add fall animation
        if (!document.querySelector('#confetti-style')) {
            const confettiStyle = document.createElement('style');
            confettiStyle.id = 'confetti-style';
            confettiStyle.textContent = `
                @keyframes fall {
                    to {
                        transform: translateY(100vh) rotate(360deg);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(confettiStyle);
        }
    }
    
    // ============================================
    // COPY TO CLIPBOARD FUNCTIONALITY
    // ============================================
    
    function addCopyFunctionality(text, message = 'Copied to clipboard!') {
        navigator.clipboard.writeText(text).then(() => {
            showNotification(message, 'success');
        }).catch(() => {
            showNotification('Failed to copy', 'error');
        });
    }
    
    // ============================================
    // DOUBLE CLICK TO LIKE/FAVORITE
    // ============================================
    
    featureCardsForClick.forEach(card => {
        let clickCount = 0;
        let clickTimer = null;
        
        card.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') return;
            
            clickCount++;
            
            if (clickCount === 1) {
                clickTimer = setTimeout(() => {
                    clickCount = 0;
                }, 300);
            } else if (clickCount === 2) {
                clearTimeout(clickTimer);
                clickCount = 0;
                
                // Double click detected
                const heart = document.createElement('div');
                heart.innerHTML = '<i class="fas fa-heart"></i>';
                heart.style.cssText = `
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%) scale(0);
                    font-size: 4rem;
                    color: var(--color-accent);
                    pointer-events: none;
                    z-index: 10;
                    animation: heartPop 0.6s ease;
                `;
                
                this.style.position = 'relative';
                this.appendChild(heart);
                
                setTimeout(() => heart.remove(), 600);
                
                showNotification('❤️ Added to favorites!', 'success');
            }
        });
    });
    
    // Add heart animation
    const heartStyle = document.createElement('style');
    heartStyle.textContent = `
        @keyframes heartPop {
            0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
            50% { transform: translate(-50%, -50%) scale(1.2); opacity: 1; }
            100% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
        }
    `;
    document.head.appendChild(heartStyle);
    
    // ============================================
    // PERFORMANCE OPTIMIZATION
    // ============================================
    
    // Debounce function for scroll events
    function debounce(func, wait = 10) {
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
    
    // ============================================
    // INTERACTIVE HOVER EFFECTS
    // ============================================
    
    const allCards = document.querySelectorAll('.feature-card, .pricing-card');
    
    allCards.forEach(card => {
        card.addEventListener('mouseenter', function(e) {
            // Create glow effect
            this.style.boxShadow = '0 20px 50px rgba(99, 102, 241, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });
        
        // Parallax effect on mouse move
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
    
    // ============================================
    // LOG INITIALIZATION
    // ============================================
    
    console.log('%c🎨 Custom Brand UI Initialized!', 
        'color: #6366f1; font-size: 16px; font-weight: bold;');
    console.log('%cTheme: Modern Gradient Design System', 
        'color: #8b5cf6; font-size: 12px;');
    console.log('%cAccessibility: WCAG 2.1 Level AA', 
        'color: #10b981; font-size: 12px;');
    console.log('%c✨ Everything is now interactive!', 
        'color: #ec4899; font-size: 12px; font-weight: bold;');
    console.log('%cTry double-clicking cards, using the Konami code (↑↑↓↓←→←→BA), and clicking all buttons!', 
        'color: #f59e0b; font-size: 10px;');
    
    // ============================================
    // READING PROGRESS BAR
    // ============================================
    
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, var(--color-primary), var(--color-secondary), var(--color-accent));
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrolled = window.scrollY;
        const progress = (scrolled / documentHeight) * 100;
        progressBar.style.width = progress + '%';
    });
    
    // ============================================
    // MOUSE CURSOR TRAIL EFFECT (Optional - subtle)
    // ============================================
    
    let cursorTrailEnabled = false; // Set to true to enable
    
    if (cursorTrailEnabled) {
        document.addEventListener('mousemove', (e) => {
            const trail = document.createElement('div');
            trail.style.cssText = `
                position: fixed;
                width: 5px;
                height: 5px;
                border-radius: 50%;
                background: var(--color-primary);
                pointer-events: none;
                z-index: 9998;
                left: ${e.clientX}px;
                top: ${e.clientY}px;
                opacity: 0.6;
                animation: trailFade 0.8s ease-out;
            `;
            document.body.appendChild(trail);
            
            setTimeout(() => trail.remove(), 800);
        });
        
        const trailStyle = document.createElement('style');
        trailStyle.textContent = `
            @keyframes trailFade {
                to { transform: scale(2); opacity: 0; }
            }
        `;
        document.head.appendChild(trailStyle);
    }
    
    // ============================================
    // TYPING EFFECT FOR HERO TEXT (If needed)
    // ============================================
    
    function typeWriter(element, text, speed = 50) {
        let i = 0;
        element.textContent = '';
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }
    
    // ============================================
    // CONTEXT MENU CUSTOMIZATION
    // ============================================
    
    document.addEventListener('contextmenu', (e) => {
        // Allow default right-click menu but log the action
        console.log('Right-click detected at:', e.clientX, e.clientY);
    });
    
    // ============================================
    // SECTION VISIBILITY TRACKING
    // ============================================
    
    const allSections = document.querySelectorAll('section[id]');
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log(`Now viewing section: ${entry.target.id}`);
                // Could trigger analytics here
            }
        });
    }, { threshold: 0.5 });
    
    allSections.forEach(section => sectionObserver.observe(section));
    
    // ============================================
    // LINK PREVIEW ON HOVER
    // ============================================
    
    const footerLinks = document.querySelectorAll('.footer-link');
    
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
                showNotification('🔗 ' + this.textContent + ' page coming soon!', 'info');
            }
        });
    });
    
    // ============================================
    // BUTTON SOUND EFFECTS (Optional)
    // ============================================
    
    let soundEnabled = false; // Set to true to enable button sounds
    
    function playClickSound() {
        if (!soundEnabled) return;
        
        // Create a simple click sound using Web Audio API
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = 800;
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
    }
    
    // Add sound to all buttons
    document.querySelectorAll('button, .btn-primary, .btn-secondary').forEach(btn => {
        btn.addEventListener('click', playClickSound);
    });
    
    // ============================================
    // SHAKE ON ERROR
    // ============================================
    
    window.addEventListener('error', (e) => {
        console.error('Error detected:', e.message);
    });
    
    // ============================================
    // INTERACTIVE ALERTS STACKING
    // ============================================
    
    let notificationStack = [];
    const maxNotifications = 3;
    
    function showNotification(message, type = 'info') {
        // Remove oldest notification if stack is full
        if (notificationStack.length >= maxNotifications) {
            const oldest = notificationStack.shift();
            if (oldest && oldest.parentElement) {
                oldest.style.opacity = '0';
                oldest.style.transform = 'translateX(100%)';
                setTimeout(() => oldest.remove(), 300);
            }
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `alert alert-${type} fixed right-4 max-w-md z-50 animate-slide-in-right`;
        notification.setAttribute('role', 'alert');
        notification.style.minWidth = '300px';
        notification.style.transition = 'all 0.3s ease';
        
        // Calculate top position based on stack
        const topPosition = 16 + (notificationStack.length * 80);
        notification.style.top = topPosition + 'px';
        
        // Set icon based on type
        let icon = 'fa-info-circle';
        if (type === 'success') icon = 'fa-check-circle';
        if (type === 'error') icon = 'fa-times-circle';
        if (type === 'warning') icon = 'fa-exclamation-triangle';
        
        notification.innerHTML = `
            <i class="fas ${icon} text-xl"></i>
            <div class="flex-1">
                <p class="text-sm font-medium">${message}</p>
            </div>
            <button class="alert-close" aria-label="Close notification">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        // Add to page and stack
        document.body.appendChild(notification);
        notificationStack.push(notification);
        
        // Add close functionality
        const closeButton = notification.querySelector('.alert-close');
        closeButton.addEventListener('click', function() {
            removeNotification(notification);
        });
        
        // Click notification to dismiss
        notification.addEventListener('click', function(e) {
            if (!e.target.closest('.alert-close')) {
                removeNotification(notification);
            }
        });
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentElement) {
                removeNotification(notification);
            }
        }, 5000);
    }
    
    function removeNotification(notification) {
        const index = notificationStack.indexOf(notification);
        if (index > -1) {
            notificationStack.splice(index, 1);
        }
        
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
            // Reposition remaining notifications
            repositionNotifications();
        }, 300);
    }
    
    function repositionNotifications() {
        notificationStack.forEach((notif, index) => {
            const topPosition = 16 + (index * 80);
            notif.style.top = topPosition + 'px';
        });
    }
    
    // ============================================
    // WELCOME MESSAGE
    // ============================================
    
    setTimeout(() => {
        showNotification('👋 Welcome to BrandName UI! Everything is interactive - explore and click around!', 'info');
    }, 1000);
});

// ============================================
// EXPORT FOR MODULE SYSTEMS (if needed)
// ============================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        // Export any functions you want to make available
    };
}