// Footer functionality
class FooterComponent {
    constructor() {
        this.init();
        this.bindEvents();
    }

    init() {
        // Initialize footer component
        this.footer = document.getElementById('appFooter');
        this.footerAboutBtn = document.getElementById('footerAboutBtn');
        this.footerContactBtn = document.getElementById('footerContactBtn');
        
        // Set current year in copyright
        this.updateCopyright();
        
        // Initialize footer animations
        this.initializeAnimations();
    }

    bindEvents() {
        // Footer navigation links
        if (this.footerAboutBtn) {
            this.footerAboutBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.handleAboutClick();
            });
        }

        if (this.footerContactBtn) {
            this.footerContactBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.handleContactClick();
            });
        }

        // Add scroll to top functionality
        this.addScrollToTop();
        
        // Add footer visibility observer
        this.observeFooterVisibility();
    }

    updateCopyright() {
        const currentYear = new Date().getFullYear();
        const copyrightElement = this.footer.querySelector('.copyright p');
        if (copyrightElement) {
            copyrightElement.innerHTML = `&copy; ${currentYear} Math Wizard. All rights reserved.`;
        }
    }

    initializeAnimations() {
        // Add intersection observer for animation on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, {
            threshold: 0.1
        });

        if (this.footer) {
            observer.observe(this.footer);
        }
    }

    handleAboutClick() {
        // Scroll to top and trigger about modal
        this.scrollToTop();
        
        setTimeout(() => {
            if (typeof headerComponent !== 'undefined') {
                headerComponent.showAboutModal();
            } else {
                this.showFooterAboutModal();
            }
        }, 500);
    }

    handleContactClick() {
        // Scroll to top and trigger contact modal
        this.scrollToTop();
        
        setTimeout(() => {
            if (typeof headerComponent !== 'undefined') {
                headerComponent.showContactModal();
            } else {
                this.showFooterContactModal();
            }
        }, 500);
    }

    showFooterAboutModal() {
        // Fallback about modal if header component is not available
        alert('About Math Wizard\n\nMath Wizard is an interactive learning platform designed to make mathematics fun and engaging for learners of all levels.\n\nFeatures include multiple difficulty levels, interactive exercises, learning modules, progress tracking, and responsive design.');
    }

    showFooterContactModal() {
        // Fallback contact modal if header component is not available
        const userMessage = prompt('We\'d love to hear from you! Please enter your message:');
        if (userMessage) {
            alert('Thank you for your message! We\'ll get back to you soon.\n\nFor immediate assistance, please email: geovinnel@gmail.com');
        }
    }

    addScrollToTop() {
        // Create scroll to top button
        const scrollButton = document.createElement('button');
        scrollButton.className = 'scroll-to-top';
        scrollButton.innerHTML = '↑';
        scrollButton.title = 'Scroll to top';
        scrollButton.setAttribute('aria-label', 'Scroll to top of page');
        
        // Add to footer
        this.footer.appendChild(scrollButton);
        
        // Show/hide based on scroll position
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollButton.classList.add('visible');
            } else {
                scrollButton.classList.remove('visible');
            }
        });
        
        // Handle click
        scrollButton.addEventListener('click', () => {
            this.scrollToTop();
        });
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    observeFooterVisibility() {
        // Track when footer becomes visible for analytics or other purposes
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Footer is visible
                    this.onFooterVisible();
                } else {
                    // Footer is not visible
                    this.onFooterHidden();
                }
            });
        }, {
            threshold: 0.5
        });

        if (this.footer) {
            observer.observe(this.footer);
        }
    }

    onFooterVisible() {
        // Add any functionality when footer becomes visible
        this.footer.classList.add('in-view');
    }

    onFooterHidden() {
        // Add any functionality when footer becomes hidden
        this.footer.classList.remove('in-view');
    }

    // Public method to update footer content dynamically
    updateFooterInfo(info) {
        if (info.year) {
            const copyrightElement = this.footer.querySelector('.copyright p');
            if (copyrightElement) {
                copyrightElement.innerHTML = `&copy; ${info.year} Math Wizard. All rights reserved.`;
            }
        }

        if (info.version) {
            // Add version info if needed
            let versionElement = this.footer.querySelector('.version-info');
            if (!versionElement) {
                versionElement = document.createElement('div');
                versionElement.className = 'version-info';
                this.footer.querySelector('.footer-bottom').appendChild(versionElement);
            }
            versionElement.textContent = `v${info.version}`;
        }
    }

    // Method to add custom footer links dynamically
    addFooterLink(text, href, callback) {
        const linksList = this.footer.querySelector('.footer-links');
        if (linksList) {
            const linkItem = document.createElement('li');
            linkItem.className = 'footer-link-item';
            
            const link = document.createElement('a');
            link.className = 'footer-link';
            link.href = href || '#';
            link.textContent = text;
            
            if (callback) {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    callback(e);
                });
            }
            
            linkItem.appendChild(link);
            linksList.appendChild(linkItem);
        }
    }

    // Method to highlight footer on user interaction
    highlightFooter(duration = 2000) {
        this.footer.classList.add('highlighted');
        
        setTimeout(() => {
            this.footer.classList.remove('highlighted');
        }, duration);
    }

    // Method to show footer notification
    showFooterNotification(message, type = 'info', duration = 3000) {
        // Remove existing notifications
        const existingNotification = this.footer.querySelector('.footer-notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // Create new notification
        const notification = document.createElement('div');
        notification.className = `footer-notification ${type}`;
        notification.textContent = message;

        // Add to footer
        this.footer.insertBefore(notification, this.footer.firstChild);

        // Show notification
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);

        // Hide notification after duration
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }, duration);
    }
}

// Initialize footer component when DOM is loaded
let footerComponent;
document.addEventListener('DOMContentLoaded', () => {
    footerComponent = new FooterComponent();
});

// Export for use in other modules if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FooterComponent;
}
