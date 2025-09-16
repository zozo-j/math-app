// Header functionality
class HeaderComponent {
    constructor() {
        this.init();
        this.bindEvents();
    }

    init() {
        // Initialize header component
        this.header = document.getElementById('appHeader');
        this.mobileMenuToggle = document.getElementById('mobileMenuToggle');
        this.navMenu = document.querySelector('.nav-menu');
        this.aboutBtn = document.getElementById('aboutBtn');
        this.contactBtn = document.getElementById('contactBtn');
        
        // Set up initial state
        this.isMobileMenuOpen = false;
    }

    bindEvents() {
        // Mobile menu toggle
        if (this.mobileMenuToggle) {
            this.mobileMenuToggle.addEventListener('click', () => {
                this.toggleMobileMenu();
            });
        }

        // Navigation links
        if (this.aboutBtn) {
            this.aboutBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.handleAboutClick();
            });
        }

        if (this.contactBtn) {
            this.contactBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.handleContactClick();
            });
        }

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (this.isMobileMenuOpen && 
                !this.navMenu.contains(e.target) && 
                !this.mobileMenuToggle.contains(e.target)) {
                this.closeMobileMenu();
            }
        });

        // Handle window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && this.isMobileMenuOpen) {
                this.closeMobileMenu();
            }
        });

        // Smooth scroll behavior for navigation
        this.addSmoothScrolling();
    }

    toggleMobileMenu() {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
        
        if (this.isMobileMenuOpen) {
            this.openMobileMenu();
        } else {
            this.closeMobileMenu();
        }
    }

    openMobileMenu() {
        this.navMenu.classList.add('active');
        this.mobileMenuToggle.classList.add('active');
        this.isMobileMenuOpen = true;
        
        // Prevent body scrolling when menu is open
        document.body.style.overflow = 'hidden';
    }

    closeMobileMenu() {
        this.navMenu.classList.remove('active');
        this.mobileMenuToggle.classList.remove('active');
        this.isMobileMenuOpen = false;
        
        // Restore body scrolling
        document.body.style.overflow = '';
    }

    handleAboutClick() {
        this.closeMobileMenu();
        this.showAboutModal();
    }

    handleContactClick() {
        this.closeMobileMenu();
        this.showContactModal();
    }

    showAboutModal() {
        // Create and show about modal
        const modal = this.createModal('About Math Wizard', `
            <div class="modal-content-section">
                <h3>Welcome to Math Wizard! 🧙‍♂️</h3>
                <p>Math Wizard is an interactive learning platform designed to make mathematics fun and engaging for learners of all levels.</p>
                
                <h4>Features:</h4>
                <ul>
                    <li><strong>Multiple Difficulty Levels:</strong> From beginner to advanced geometric calculations</li>
                    <li><strong>Interactive Exercises:</strong> Practice with instant feedback and scoring</li>
                    <li><strong>Learning Modules:</strong> Comprehensive explanations for each topic</li>
                    <li><strong>Progress Tracking:</strong> Monitor your improvement over time</li>
                    <li><strong>Responsive Design:</strong> Works perfectly on all devices</li>
                </ul>
                
                <h4>Educational Goals:</h4>
                <p>Our mission is to transform the way students learn mathematics by providing:</p>
                <ul>
                    <li>Step-by-step learning progressions</li>
                    <li>Visual problem-solving approaches</li>
                    <li>Immediate feedback and encouragement</li>
                    <li>Personalized learning experiences</li>
                </ul>
                
                <div class="version-info">
                    <p><strong>Version:</strong> 1.0.0</p>
                    <p><strong>Last Updated:</strong> 2025</p>
                </div>
            </div>
        `);
        
        this.showModal(modal);
    }

    showContactModal() {
        // Create and show contact modal
        const modal = this.createModal('Contact Us', `
            <div class="modal-content-section">
                <h3>Get in Touch</h3>
                <p>We'd love to hear from you! Whether you have questions, suggestions, or need help, don't hesitate to reach out.</p>
                
                <div class="contact-methods">
                    <div class="contact-item">
                        <h4>📧 Email</h4>
                        <p><a href="mailto:geovinnel@gmail.com">geovinnel@gmail.com</a></p>
                    </div>
                    
                    <div class="contact-item">
                        <h4>💬 Live Chat</h4>
                        <p>Available Monday - Friday, 9 AM - 6 PM EST</p>
                        <button class="chat-btn" onclick="alert('Live chat feature coming soon!')">Start Chat</button>
                    </div>
                    
                    <div class="contact-item">
                        <h4>📱 Social Media</h4>
                        <p>Follow us for updates and tips:</p>
                        <div class="social-links">
                            <a href="#" onclick="alert('Social media links coming soon!')">Twitter</a>
                            <a href="https://www.facebook.com/geovinneplays" target="_blank" rel="noopener noreferrer">Facebook</a>
                            <a href="#" onclick="alert('Social media links coming soon!')">Instagram</a>
                        </div>
                    </div>
                </div>
                
                <div class="contact-form">
                    <h4>Send us a Message</h4>
                    <form id="contactForm" onsubmit="return headerComponent.handleContactForm(event)">
                        <div class="form-group">
                            <input type="text" id="contactName" placeholder="Your Name" required>
                        </div>
                        <div class="form-group">
                            <input type="email" id="contactEmail" placeholder="Your Email" required>
                        </div>
                        <div class="form-group">
                            <textarea id="contactMessage" placeholder="Your Message" rows="4" required></textarea>
                        </div>
                        <button type="submit" class="submit-btn">Send Message</button>
                    </form>
                </div>
            </div>
        `);
        
        this.showModal(modal);
    }

    createModal(title, content) {
        const modal = document.createElement('div');
        modal.className = 'custom-modal';
        modal.innerHTML = `
            <div class="modal-overlay">
                <div class="modal-container">
                    <div class="modal-header">
                        <h2>${title}</h2>
                        <button class="modal-close" onclick="headerComponent.closeModal()">&times;</button>
                    </div>
                    <div class="modal-body">
                        ${content}
                    </div>
                </div>
            </div>
        `;
        
        return modal;
    }

    showModal(modal) {
        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden';
        
        // Add animation
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
    }

    closeModal() {
        const modal = document.querySelector('.custom-modal');
        if (modal) {
            modal.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(modal);
                document.body.style.overflow = '';
            }, 300);
        }
    }

    handleContactForm(event) {
        event.preventDefault();
        
        const name = document.getElementById('contactName').value;
        const email = document.getElementById('contactEmail').value;
        const message = document.getElementById('contactMessage').value;
        
        // Simulate form submission
        const submitBtn = event.target.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert(`Thank you, ${name}! Your message has been sent. We'll get back to you at ${email} soon.`);
            this.closeModal();
        }, 1500);
        
        return false;
    }

    addSmoothScrolling() {
        // Add smooth scrolling for any anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Public method to update header state based on current page/section
    updateHeaderState(currentSection) {
        // Remove active state from all nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        
        // Add active state to current section link if applicable
        const currentLink = document.querySelector(`[data-section="${currentSection}"]`);
        if (currentLink) {
            currentLink.classList.add('active');
        }
    }
}

// Initialize header component when DOM is loaded
let headerComponent;
document.addEventListener('DOMContentLoaded', () => {
    headerComponent = new HeaderComponent();
});

// Export for use in other modules if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = HeaderComponent;
}
