// Critical JavaScript - Load this inline
const utils = {
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
};

// Critical navigation functionality
const navigation = {
    initialize() {
        const nav = document.querySelector('.nav-container');
        let lastScroll = 0;

        window.addEventListener('scroll', utils.throttle(() => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > lastScroll) {
                nav.style.transform = 'translateY(-100%)';
            } else {
                nav.style.transform = 'translateY(0)';
            }
            
            lastScroll = currentScroll;
        }, 100));

        // Handle keyboard navigation
        const navLinks = document.querySelectorAll('.nav-button');
        navLinks.forEach((link, index) => {
            link.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowRight' && index < navLinks.length - 1) {
                    navLinks[index + 1].focus();
                } else if (e.key === 'ArrowLeft' && index > 0) {
                    navLinks[index - 1].focus();
                } else if (e.key === 'Home') {
                    navLinks[0].focus();
                } else if (e.key === 'End') {
                    navLinks[navLinks.length - 1].focus();
                }
            });
        });
    }
};

// Initialize critical functionality
document.addEventListener('DOMContentLoaded', () => {
    navigation.initialize();
}); 