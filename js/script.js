// Project data - Replace with your actual projects
const projects = [
    {
        id: 1,
        title: "E-commerce Dashboard",
        description: "A comprehensive admin dashboard for managing online store operations with real-time analytics and inventory management.",
        image: "", // Add your project image URL here
        tags: ["UI Design", "Dashboard", "Analytics"],
        category: "ui-design",
        details: {
            overview: "Designed a comprehensive e-commerce dashboard that helps store owners manage their operations efficiently.",
            challenge: "The main challenge was presenting complex data in an intuitive and actionable way while maintaining visual hierarchy.",
            solution: "Created a modular dashboard with customizable widgets, clear data visualization, and responsive design.",
            tools: ["Figma", "Adobe XD", "Principle"],
            duration: "6 weeks",
            role: "Lead UI/UX Designer",
            features: [
                "Real-time sales analytics",
                "Inventory management system",
                "Customer insights dashboard",
                "Order tracking interface",
                "Mobile-responsive design"
            ]
        }
    },
    {
        id: 2,
        title: "Mobile Banking App Flow",
        description: "Complete user journey design for a mobile banking application, focusing on security and user experience.",
        image: "", // Add your project image URL here
        tags: ["UX Flow", "Mobile", "FinTech"],
        category: "ux-flow",
        details: {
            overview: "Designed the complete user flow for a mobile banking application with emphasis on security and ease of use.",
            challenge: "Balancing security requirements with user convenience while ensuring compliance with banking regulations.",
            solution: "Implemented a progressive authentication system with biometric integration and intuitive navigation patterns.",
            tools: ["Figma", "Miro", "InVision"],
            duration: "8 weeks",
            role: "UX Designer",
            features: [
                "Biometric authentication",
                "Quick transfer system",
                "Expense tracking",
                "Bill payment integration",
                "Investment portfolio view"
            ]
        }
    },
    {
        id: 3,
        title: "Interactive Prototype - Food Delivery",
        description: "High-fidelity interactive prototype for a food delivery app with micro-interactions and animations.",
        image: "", // Add your project image URL here
        tags: ["Prototype", "Mobile", "Animation"],
        category: "prototype",
        details: {
            overview: "Created an interactive prototype for a food delivery app with smooth animations and micro-interactions.",
            challenge: "Creating engaging micro-interactions that enhance the user experience without overwhelming the interface.",
            solution: "Developed a cohesive animation system with purposeful transitions that guide users through the ordering process.",
            tools: ["Figma", "Principle", "After Effects"],
            duration: "4 weeks",
            role: "Interaction Designer",
            features: [
                "Animated onboarding",
                "Interactive menu browsing",
                "Real-time order tracking",
                "Gesture-based navigation",
                "Contextual micro-animations"
            ]
        }
    },
    {
        id: 4,
        title: "SaaS Landing Page",
        description: "Modern landing page for a SaaS product with conversion-focused design and responsive layout.",
        image: "", // Add your project image URL here
        tags: ["Web Design", "Landing Page", "Conversion"],
        category: "web-dev",
        details: {
            overview: "Designed and developed a high-converting landing page for a SaaS productivity tool.",
            challenge: "Creating a page that effectively communicates complex product benefits while driving conversions.",
            solution: "Implemented a clean design with clear value propositions, social proof, and strategic CTAs.",
            tools: ["Figma", "HTML/CSS", "JavaScript", "React"],
            duration: "3 weeks",
            role: "UI/UX Designer & Developer",
            features: [
                "Conversion-optimized design",
                "Interactive product demos",
                "Responsive across all devices",
                "A/B tested elements",
                "Performance optimized"
            ]
        }
    },
    {
        id: 5,
        title: "Design System Components",
        description: "Comprehensive design system with reusable components for a multi-platform product ecosystem.",
        image: "", // Add your project image URL here
        tags: ["Design System", "Components", "Documentation"],
        category: "ui-design",
        details: {
            overview: "Built a comprehensive design system to ensure consistency across multiple products and platforms.",
            challenge: "Creating flexible components that work across different use cases while maintaining visual consistency.",
            solution: "Developed a token-based system with detailed documentation and usage guidelines.",
            tools: ["Figma", "Storybook", "Zeroheight"],
            duration: "12 weeks",
            role: "Senior Design Systems Designer",
            features: [
                "40+ reusable components",
                "Design tokens system",
                "Interactive documentation",
                "Dark/light theme support",
                "Accessibility guidelines"
            ]
        }
    },
    {
        id: 6,
        title: "User Onboarding Flow",
        description: "Streamlined onboarding experience for a productivity app, reducing drop-off rates by 40%.",
        image: "", // Add your project image URL here
        tags: ["UX Flow", "Onboarding", "Mobile"],
        category: "ux-flow",
        details: {
            overview: "Redesigned the onboarding flow for a productivity app to improve user activation and retention.",
            challenge: "High drop-off rates during onboarding were preventing users from experiencing the app's core value.",
            solution: "Created a progressive onboarding system that demonstrates value quickly while collecting necessary information.",
            tools: ["Figma", "Hotjar", "Google Analytics"],
            duration: "5 weeks",
            role: "UX Designer",
            features: [
                "Progressive disclosure",
                "Interactive tutorials",
                "Personalized setup",
                "Skip options for power users",
                "Progress indicators"
            ]
        }
    }
];

// DOM elements
const projectGrid = document.getElementById('projectGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const themeTransition = document.getElementById('themeTransition');
const sunIcon = document.getElementById('sunIcon');
const moonIcon = document.getElementById('moonIcon');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Add loading animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    // Initialize dark mode first
    initializeDarkMode();
    
    // Initialize components
    renderProjects(projects);
    setupEventListeners();
    setupScrollAnimations();
    setupClickAnimations();
    setupParallaxEffects();
    addScrollClasses();
    
    // Fade in page once everything is loaded
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    // Preload images for better performance
    preloadImages();
});

// Preload images
function preloadImages() {
    const imageUrls = projects
        .filter(project => project.image)
        .map(project => project.image);
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Dark Mode Functionality
function initializeDarkMode() {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set initial theme
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme, false); // false = no animation on initial load
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            setTheme(e.matches ? 'dark' : 'light', true);
        }
    });
}

function setTheme(theme, animate = true) {
    const root = document.documentElement;
    const currentTheme = root.getAttribute('data-theme');
    
    // Don't animate if theme is the same
    if (currentTheme === theme && animate) return;
    
    if (animate) {
        // Add transition overlay
        themeTransition.classList.add('active');
        
        // Add rotation animation to icon
        themeIcon.classList.add('rotating');
        
        setTimeout(() => {
            applyThemeChanges(theme);
        }, 150);
        
        setTimeout(() => {
            themeTransition.classList.remove('active');
            themeIcon.classList.remove('rotating');
        }, 300);
    } else {
        applyThemeChanges(theme);
    }
}

function applyThemeChanges(theme) {
    const root = document.documentElement;
    
    // Set theme attribute
    root.setAttribute('data-theme', theme);
    
    // Update icons and tooltip
    if (theme === 'dark') {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
        themeToggle.setAttribute('data-tooltip', 'Switch to light mode');
        themeToggle.setAttribute('aria-label', 'Switch to light mode');
    } else {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
        themeToggle.setAttribute('data-tooltip', 'Switch to dark mode');
        themeToggle.setAttribute('aria-label', 'Switch to dark mode');
    }
    
    // Save to localStorage
    localStorage.setItem('theme', theme);
    
    // Update meta theme-color for mobile browsers
    updateMetaThemeColor(theme);
}

function updateMetaThemeColor(theme) {
    let metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (!metaThemeColor) {
        metaThemeColor = document.createElement('meta');
        metaThemeColor.name = 'theme-color';
        document.head.appendChild(metaThemeColor);
    }
    
    metaThemeColor.content = theme === 'dark' ? '#0F172A' : '#FFFFFF';
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme, true);
    
    // Add haptic feedback for mobile devices
    if (navigator.vibrate) {
        navigator.vibrate(50);
    }
}

function getCurrentTheme() {
    return document.documentElement.getAttribute('data-theme') || 'light';
}

// Add classes to elements for scroll animation
function addScrollClasses() {
    const elementsToAnimate = [
        '.hero-name',
        '.hero-role', 
        '.hero-description',
        '.hero-cta',
        '.work-header',
        '.filter-nav',
        '.about-title',
        '.about-description',
        '.process',
        '.skills',
        '.contact-title',
        '.contact-description',
        '.contact-info'
    ];
    
    elementsToAnimate.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            el.classList.add('animate-on-scroll');
        });
    });
    
    // Add staggered animation delays
    const processSteps = document.querySelectorAll('.process-step');
    processSteps.forEach((step, index) => {
        step.classList.add('animate-on-scroll');
        step.style.animationDelay = `${index * 0.2}s`;
    });
    
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach((category, index) => {
        category.classList.add('animate-on-scroll');
        category.style.animationDelay = `${index * 0.15}s`;
    });
    
    const contactLinks = document.querySelectorAll('.contact-link');
    contactLinks.forEach((link, index) => {
        link.classList.add('animate-on-scroll');
        link.style.animationDelay = `${index * 0.1}s`;
    });
}

// Render projects in the grid
function renderProjects(projectsToRender) {
    projectGrid.innerHTML = '';
    
    projectsToRender.forEach((project, index) => {
        const projectCard = createProjectCard(project);
        projectGrid.appendChild(projectCard);
        
        // Add staggered animation
        setTimeout(() => {
            projectCard.classList.add('fade-in-scale');
        }, index * 100);
    });
}

// Create a project card element
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.dataset.category = project.category;
    card.addEventListener('click', () => openProjectModal(project));
    
    card.innerHTML = `
        <div class="project-image">
            ${project.image ? 
                `<img src="${project.image}" alt="${project.title}" loading="lazy">` : 
                `<span>Project Image Placeholder</span>`
            }
        </div>
        <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
            </div>
        </div>
    `;
    
    return card;
}

// Filter projects based on category
function filterProjects(category) {
    const cards = document.querySelectorAll('.project-card');
    
    cards.forEach((card, index) => {
        if (category === 'all' || card.dataset.category === category) {
            card.classList.remove('hidden');
            // Add staggered animation for filtered items
            setTimeout(() => {
                card.style.animation = 'fadeInUp 0.6s ease-out';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 50);
        } else {
            card.classList.add('hidden');
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
        }
    });
}

// Open project modal with detailed information
function openProjectModal(project) {
    const details = project.details;
    
    modalBody.innerHTML = `
        <div class="modal-header">
            <h2 class="modal-title">${project.title}</h2>
            <div class="modal-meta">
                <span class="modal-role">${details.role}</span>
                <span class="modal-duration">${details.duration}</span>
            </div>
        </div>
        
        <div class="modal-image">
            ${project.image ? 
                `<img src="${project.image}" alt="${project.title}" loading="lazy">` : 
                `<div class="placeholder-image">Project Image Placeholder</div>`
            }
        </div>
        
        <div class="modal-content-grid">
            <div class="modal-main">
                <section class="modal-section">
                    <h3>Overview</h3>
                    <p>${details.overview}</p>
                </section>
                
                <section class="modal-section">
                    <h3>Challenge</h3>
                    <p>${details.challenge}</p>
                </section>
                
                <section class="modal-section">
                    <h3>Solution</h3>
                    <p>${details.solution}</p>
                </section>
                
                <section class="modal-section">
                    <h3>Key Features</h3>
                    <ul class="feature-list">
                        ${details.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </section>
            </div>
            
            <div class="modal-sidebar">
                <section class="modal-section">
                    <h3>Tools Used</h3>
                    <div class="tool-tags">
                        ${details.tools.map(tool => `<span class="tool-tag">${tool}</span>`).join('')}
                    </div>
                </section>
                
                <section class="modal-section">
                    <h3>Project Tags</h3>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                    </div>
                </section>
                
                <div class="modal-actions">
                    <button class="btn btn-primary">View Live Project</button>
                    <button class="btn btn-secondary">View Case Study</button>
                </div>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close project modal
function closeProjectModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Setup event listeners
function setupEventListeners() {
    // Filter button listeners
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter projects
            const category = button.dataset.filter;
            filterProjects(category);
        });
    });
    
    // Modal listeners
    modalClose.addEventListener('click', closeProjectModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeProjectModal();
        }
    });
    
    // Theme toggle listener
    themeToggle.addEventListener('click', toggleTheme);
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeProjectModal();
        }
        // Keyboard shortcut for theme toggle (Ctrl/Cmd + Shift + D)
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'D') {
            e.preventDefault();
            toggleTheme();
        }
    });
    
    // Smooth scrolling for navigation links
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

// Setup scroll animations and navbar behavior
function setupScrollAnimations() {
    const nav = document.querySelector('.nav');
    let lastScrollTop = 0;
    
    // Navbar scroll behavior with enhanced effects
    window.addEventListener('scroll', throttle(() => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add scrolled class for styling
        if (scrollTop > 50) {
            nav.classList.add('nav-scrolled');
        } else {
            nav.classList.remove('nav-scrolled');
        }
        
        // Hide/show navbar on scroll
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            nav.classList.add('nav-hidden');
        } else {
            nav.classList.remove('nav-hidden');
        }
        
        lastScrollTop = scrollTop;
    }, 10));
    
    // Enhanced Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -80px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                
                // Special handling for different elements
                if (entry.target.classList.contains('hero-name')) {
                    entry.target.style.animation = 'fadeInLeft 1s ease-out';
                } else if (entry.target.classList.contains('hero-role')) {
                    entry.target.style.animation = 'fadeInRight 1s ease-out 0.3s';
                    entry.target.style.animationFillMode = 'both';
                } else if (entry.target.classList.contains('hero-description')) {
                    entry.target.style.animation = 'fadeInUp 1s ease-out 0.6s';
                    entry.target.style.animationFillMode = 'both';
                } else if (entry.target.classList.contains('hero-cta')) {
                    entry.target.style.animation = 'bounceIn 1s ease-out 0.9s';
                    entry.target.style.animationFillMode = 'both';
                } else if (entry.target.classList.contains('work-header')) {
                    entry.target.style.animation = 'fadeInScale 0.8s ease-out';
                } else if (entry.target.classList.contains('filter-nav')) {
                    entry.target.style.animation = 'slideInDown 0.6s ease-out 0.2s';
                    entry.target.style.animationFillMode = 'both';
                } else {
                    entry.target.style.animation = 'fadeInUp 0.8s ease-out';
                }
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
    
    // Parallax effect for hero background
    window.addEventListener('scroll', throttle(() => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            const rate = scrolled * -0.3;
            hero.style.transform = `translateY(${rate}px)`;
        }
    }, 10));
}

// Setup click animations and micro-interactions
function setupClickAnimations() {
    // Enhanced button click effects
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            createRippleEffect(e, this);
        });
    });
    
    // Filter button enhanced animations
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // Project card click enhancement
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        card.addEventListener('click', function(e) {
            createClickWave(e, this);
        });
    });
    
    // Contact links enhanced interaction
    const contactLinks = document.querySelectorAll('.contact-link');
    contactLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.querySelector('.contact-value').style.transform = 'scale(1.05)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.querySelector('.contact-value').style.transform = 'scale(1)';
        });
    });
}

// Create ripple effect for buttons
function createRippleEffect(event, element) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        pointer-events: none;
        left: ${x}px;
        top: ${y}px;
        width: ${size}px;
        height: ${size}px;
        animation: ripple 0.6s ease-out;
        z-index: 0;
    `;
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Create click wave effect for cards
function createClickWave(event, element) {
    const wave = document.createElement('div');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    wave.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(0, 102, 255, 0.1);
        pointer-events: none;
        left: ${x}px;
        top: ${y}px;
        width: ${size}px;
        height: ${size}px;
        animation: wave 0.8s ease-out;
        z-index: 0;
    `;
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(wave);
    
    setTimeout(() => {
        wave.remove();
    }, 800);
}

// Setup parallax effects
function setupParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.step-number');
    
    window.addEventListener('scroll', throttle(() => {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach((element, index) => {
            const rate = (scrolled * 0.1 * (index + 1));
            element.style.transform = `translateY(${rate}px) scale(${1 + rate * 0.001})`;
        });
    }, 16));
}

// Add CSS for ripple and wave animations
const animationStyles = document.createElement('style');
animationStyles.textContent = `
    @keyframes ripple {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        100% {
            transform: scale(1);
            opacity: 0;
        }
    }
    
    @keyframes wave {
        0% {
            transform: scale(0);
            opacity: 0.5;
        }
        100% {
            transform: scale(1);
            opacity: 0;
        }
    }
`;
document.head.appendChild(animationStyles);

// Utility functions
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

function throttle(func, limit) {
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

// Add loading states
function showLoading(element) {
    element.classList.add('loading');
}

function hideLoading(element) {
    element.classList.remove('loading');
}

// Export functions for potential testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        projects,
        renderProjects,
        filterProjects,
        debounce
    };
}
