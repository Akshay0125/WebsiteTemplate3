// TypeScript interface for Project data
interface Project {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
}

// Sample project data
const projects: Project[] = [
    {
        id: 1,
        name: "Luxury Villa Complex",
        description: "Premium villas in prime location",
        imageUrl: "placeholder-project-1.jpg"
    },
    {
        id: 2,
        name: "Modern Apartments",
        description: "Contemporary living spaces",
        imageUrl: "placeholder-project-2.jpg"
    },
    {
        id: 3,
        name: "Smart Homes",
        description: "Technology-enabled residences",
        imageUrl: "placeholder-project-3.jpg"
    }
];

// Function to handle smooth scrolling
const handleSmoothScroll = (e: Event) => {
    e.preventDefault();
    const target = (e.target as HTMLAnchorElement).getAttribute('href');
    if (target && target.startsWith('#')) {
        const element = document.querySelector(target);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
};

// Function to handle navigation menu for mobile devices
const handleMobileNav = () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const contactButtons = document.querySelector('.contact-buttons');

    hamburger?.addEventListener('click', () => {
        navLinks?.classList.toggle('show');
        contactButtons?.classList.toggle('show');
    });
};

// Function to handle lazy loading of images
const handleLazyLoading = () => {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target as HTMLImageElement;
                img.src = img.dataset.src || '';
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
};

// Function to initialize the application
const initApp = () => {
    // Add smooth scrolling to all navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', handleSmoothScroll);
    });

    // Initialize mobile navigation
    handleMobileNav();

    // Initialize lazy loading
    handleLazyLoading();

    // Add scroll animation to project cards
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        },
        { threshold: 0.1 }
    );

    document.querySelectorAll('.project-card').forEach(
        card => observer.observe(card)
    );
};

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);
