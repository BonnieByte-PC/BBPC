// Homepage specific functionality
function initializeHomepage() {
    // MailerLite initialization (if needed)
    initializeMailerLite();
    
    // Product image lazy loading
    initializeLazyLoading();
    
    // Animation triggers for homepage elements
    initializeHomepageAnimations();
}

// MailerLite form enhancements
function initializeMailerLite() {
    // Add any custom MailerLite form enhancements here
    const mailerLiteForm = document.querySelector('.ml-form-embedContainer');
    if (mailerLiteForm) {
        console.log('MailerLite form detected - adding custom enhancements');
        
        // Example: Add form submission tracking
        mailerLiteForm.addEventListener('submit', function(e) {
            // Track form submission if needed
            console.log('Newsletter form submitted');
        });
    }
}

// Lazy loading for product images
function initializeLazyLoading() {
    const productImage = document.querySelector('.product-image');
    if (productImage && !productImage.style.backgroundImage) {
        // Set placeholder or actual image
        productImage.style.background = '#ddd url("https://via.placeholder.com/500x300/6633FF/ffffff?text=BonnieByte+Fans") center/cover';
    }
}

// Homepage specific animations
function initializeHomepageAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe sections for animation
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Initialize homepage when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeHomepage();
    console.log('BonnieByte PC - Homepage scripts loaded');
});

// Export for potential use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeHomepage,
        initializeMailerLite,
        initializeLazyLoading,
        initializeHomepageAnimations
    };
}