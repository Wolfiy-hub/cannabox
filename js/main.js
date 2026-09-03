// Mobile Menu Toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    if (menu) {
        menu.classList.toggle('hidden');
    }
}

// Header scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (header) {
        const currentScroll = window.scrollY;
        if (currentScroll > 50) {
            header.classList.add('shadow-lg');
            header.style.backgroundColor = 'rgba(5, 11, 8, 0.95)';
        } else {
            header.classList.remove('shadow-lg');
            header.style.backgroundColor = 'rgba(5, 11, 8, 0.85)';
        }
        lastScroll = currentScroll;
    }
}, { passive: true });

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active navigation highlighting
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a, #mobileMenu a');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('text-emerald-400');
            link.classList.remove('text-gray-300');
        } else {
            link.classList.remove('text-emerald-400');
            if (!link.classList.contains('text-white')) {
                link.classList.add('text-gray-300');
            }
        }
    });
}

// Intersection Observer for scroll animations - fixed for dynamic content
const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Function to observe elements - can be called after dynamic content loads
function observeAnimatedElements() {
    const animatedElements = document.querySelectorAll('.machine-card, .category-card, .product-card, .stat-card');
    animatedElements.forEach((el, index) => {
        if (!el.style.opacity) {
            el.style.opacity = '0';
        }
        el.style.animationDelay = `${index * 80}ms`;
        observer.observe(el);
    });
}

// Initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    setActiveNavLink();
    // Delay initial observation to allow other scripts to render content first
    setTimeout(observeAnimatedElements, 100);
});

// Export for use by other scripts after dynamic rendering
window.observeAnimatedElements = observeAnimatedElements;

// Utility: Format currency
function formatCurrency(amount, currency = 'HUF') {
    return new Intl.NumberFormat('hu-HU', {
        style: 'currency',
        currency: currency
    }).format(amount);
}

// Utility: Debounce function
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

// Handle window resize
window.addEventListener('resize', debounce(() => {
    if (window.innerWidth >= 768) {
        const mobileMenu = document.getElementById('mobileMenu');
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
    }
}, 250));
