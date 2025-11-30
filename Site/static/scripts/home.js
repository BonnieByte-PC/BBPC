// Homepage specific functionality
function initializeHomepage() {
    initializeMailerLiteEnhanced();   // REPLACED
    initializeLazyLoading();
    initializeHomepageAnimations();
}

/* ============================================================
   MAILERLITE – Enhanced Form Handling (Success UI + Loader)
   ============================================================ */
function initializeMailerLiteEnhanced() {
    const form = document.querySelector(".bb-form"); 
    if (!form) {
        console.log("No bb-form detected, skipping MailerLite enhancements.");
        return;
    }

    const submitBtn = form.querySelector(".bb-submit-btn");
    const btnText = form.querySelector(".bb-btn-text");
    const btnLoader = form.querySelector(".bb-btn-loader");
    const successMsg = form.querySelector(".bb-success-message");
    const errorMsg = form.querySelector(".bb-error-message");

    // Hide messages upon typing
    const emailField = form.querySelector("input[name='fields[email]']");
    if (emailField) {
        emailField.addEventListener("input", () => {
            successMsg.style.display = "none";
            errorMsg.style.display = "none";
        });
    }

    // On submit → show loading
    form.addEventListener("submit", function () {
        successMsg.style.display = "none";
        errorMsg.style.display = "none";

        btnText.style.display = "none";
        btnLoader.style.display = "inline-block";
    });

    // MailerLite JSONP global event → handle result
    document.addEventListener("mlWebformSubmission", function (event) {
        // Stop loader
        btnLoader.style.display = "none";
        btnText.style.display = "inline";

        if (event.detail.success) {
            successMsg.style.display = "block";
            errorMsg.style.display = "none";
            form.reset();
        } else {
            errorMsg.style.display = "block";
            successMsg.style.display = "none";
        }
    });
}

// Lazy loading for product images
function initializeLazyLoading() {
    const productImage = document.querySelector('.product-image');
    if (productImage && !productImage.style.backgroundImage) {
        productImage.style.background =
            '#ddd url("https://via.placeholder.com/500x300/6633FF/ffffff?text=BonnieByte+Fans") center/cover';
    }
}

// Homepage animations
function initializeHomepageAnimations() {
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

// CommonJS export (for bundlers)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeHomepage,
        initializeMailerLiteEnhanced,
        initializeLazyLoading,
        initializeHomepageAnimations
    };
}
