// Project data - My actual GitHub projects
const projects = [
  {
    id: 1,
    title: "Air Quality Checker",
    description:
      "A responsive web application that checks air quality by Indian pincode and provides health recommendations based on current pollution levels.",
    image:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["JavaScript", "API Integration", "Health"],
    category: "web-dev",
    details: {
      overview:
        "Built a comprehensive air quality monitoring application that helps users make informed decisions about outdoor activities based on real-time pollution data.",
      challenge:
        "Creating an intuitive interface that presents complex environmental data clearly while providing actionable health recommendations for different AQI levels.",
      solution:
        "Implemented a responsive design with animated mood characters, real-time data validation, and comprehensive error handling with health tips from American Lung Association.",
      tools: ["JavaScript ES6+", "Bootstrap 5", "Font Awesome", "CSS3"],
      duration: "2 weeks",
      role: "Full-Stack Developer",
      features: [
        "Pincode-based air quality search",
        "Animated mood character system (AQI ≤50: 😀, 51-150: 😐, >150: 😷)",
        "Real-time weather information display",
        "Health recommendations based on pollution levels",
        "Mobile-responsive design with touch interactions",
        "Input validation with helpful error suggestions",
        "Progressive disclosure of information",
        "Accessibility-focused keyboard navigation",
      ],
    },
  },
  {
    id: 2,
    title: "Celebrity Personality Match",
    description:
      "An interactive personality quiz that matches users with celebrities based on their traits through 10 engaging questions.",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["JavaScript", "Quiz", "Entertainment"],
    category: "web-dev",
    details: {
      overview:
        "Developed a fun, interactive quiz application that analyzes personality traits and matches users with celebrities from Bollywood and Hollywood.",
      challenge:
        "Creating an engaging user experience with smooth animations while implementing a sophisticated trait mapping algorithm that provides accurate personality matches.",
      solution:
        "Built a responsive quiz interface with progressive disclosure, staggered animations, and a trait-based matching system that tracks 30+ personality characteristics.",
      tools: ["Vanilla JavaScript", "Tailwind CSS", "CSS Animations"],
      duration: "1 week",
      role: "Frontend Developer",
      features: [
        "10 carefully crafted personality questions",
        "Trait mapping algorithm with 30+ characteristics",
        "Celebrity database (12+ Bollywood & Hollywood stars)",
        "Smooth animations and transitions",
        "Progressive UI with step-by-step progress tracking",
        "Touch-friendly mobile interface",
        "Keyboard shortcuts for power users",
        "Sparkle effects and visual feedback on results",
      ],
    },
  },
  {
    id: 3,
    title: "Tic Tac Toe Game",
    description:
      "A modern, responsive Tic Tac Toe game with spectacular fireworks animations and victory celebrations.",
    image:
      "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["JavaScript", "Game", "Animations"],
    category: "game",
    details: {
      overview:
        "Created an enhanced Tic Tac Toe game that transforms the classic experience with modern web technologies and celebration animations.",
      challenge:
        "Enhancing a simple game concept with engaging visual effects while maintaining clean code structure and responsive design.",
      solution:
        "Implemented object-oriented JavaScript with CSS Grid layout, featuring spectacular fireworks animations, RGB background effects, and smooth hover interactions.",
      tools: ["JavaScript ES6+", "CSS3", "CSS Grid", "CSS Animations"],
      duration: "3 days",
      role: "Game Developer",
      features: [
        "Two-player gameplay with turn indicators",
        "Automatic win/tie detection",
        "Spectacular fireworks animation on victory",
        "RGB background animation during celebrations",
        "Winning line highlighting with pulse effects",
        "Responsive design for all device sizes",
        "Smooth hover effects and click animations",
        "Reset functionality with animation cleanup",
      ],
    },
  },
  {
    id: 4,
    title: "Pets Workshop - GitHub Copilot Training",
    description:
      "A comprehensive workshop project demonstrating GitHub Copilot capabilities through a dog shelter management system.",
    image:
      "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["Python", "Flask", "Astro", "DevOps"],
    category: "web-dev",
    details: {
      overview:
        "Developed a full-stack dog shelter website as a training platform for GitHub Copilot workshops, featuring both 1-hour and full-day learning tracks.",
      challenge:
        "Creating a realistic, multi-technology project that effectively demonstrates AI-assisted development while maintaining educational value.",
      solution:
        "Built a complete web application with Python Flask backend, Astro frontend, and comprehensive documentation showing GitHub Copilot integration patterns.",
      tools: [
        "Python",
        "Flask",
        "SQLAlchemy",
        "Astro",
        "Svelte",
        "Tailwind CSS",
      ],
      duration: "1 month",
      role: "Full-Stack Developer & Technical Writer",
      features: [
        "Flask REST API with SQLAlchemy ORM",
        "Astro frontend with Svelte components",
        "SQLite database with breed and dog models",
        "Comprehensive unit test suite",
        "Database seeding with CSV data",
        "Responsive design with Tailwind CSS",
        "GitHub Copilot integration examples",
        "Workshop content for 1-hour and full-day sessions",
      ],
    },
  },
  {
    id: 5,
    title: "AWS Cloud Materials",
    description:
      "Comprehensive collection of AWS cloud computing resources, tutorials, and best practices for cloud practitioners.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["AWS", "Cloud", "DevOps"],
    category: "devops",
    details: {
      overview:
        "Curated and organized a comprehensive repository of AWS learning materials, covering essential cloud services and architectural patterns.",
      challenge:
        "Organizing vast amounts of AWS documentation and best practices into a structured, accessible format for different skill levels.",
      solution:
        "Created a well-structured repository with categorized resources, practical examples, and progressive learning paths for AWS certification preparation.",
      tools: [
        "AWS Services",
        "Documentation",
        "Best Practices",
        "Architecture Patterns",
      ],
      duration: "Ongoing",
      role: "Cloud Solutions Architect",
      features: [
        "Comprehensive AWS service coverage",
        "Practical implementation examples",
        "Architecture best practices",
        "Cost optimization strategies",
        "Security implementation guides",
        "Certification preparation materials",
        "Real-world use case studies",
        "Community contribution guidelines",
      ],
    },
  },
  {
    id: 6,
    title: "Personal Portfolio Website",
    description:
      "A modern, Mobbin-inspired portfolio website showcasing projects with interactive animations and dark mode support.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "web-dev",
    details: {
      overview:
        "Designed and developed a professional portfolio website with modern animations, dark mode, and mobile-responsive design inspired by Mobbin's clean aesthetic.",
      challenge:
        "Creating a portfolio that effectively showcases technical projects while maintaining excellent user experience and accessibility standards.",
      solution:
        "Built a custom portfolio with vanilla web technologies, featuring scroll animations, theme switching, and comprehensive contact integration.",
      tools: ["HTML5", "CSS3", "Vanilla JavaScript", "CSS Custom Properties"],
      duration: "1 week",
      role: "Frontend Developer & Designer",
      features: [
        "Mobbin-inspired clean design",
        "Dark/light mode with localStorage persistence",
        "Smooth scroll animations using Intersection Observer",
        "Filterable project showcase",
        "Interactive contact options (Email, WhatsApp, LinkedIn)",
        "Mobile-responsive design",
        "CSS custom properties for theming",
        "Accessibility-focused development",
      ],
    },
  },
  {
    id: 7,
    title: "Ads Product Testing",
    description:
      "Comprehensive testing and optimization of various advertisement formats with focus on UI/UX performance and data analytics integration.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["QA Testing", "BigQuery", "UI/UX", "Analytics"],
    category: "qa-testing",
    details: {
      overview:
        "Led comprehensive testing initiatives for advertisement products, ensuring optimal performance across multiple ad formats and delivery mechanisms.",
      challenge:
        "Ensuring seamless integration and performance of diverse ad formats while maintaining excellent user experience and accurate data collection.",
      solution:
        "Implemented systematic testing protocols using advanced monitoring tools and analytics platforms to optimize ad delivery and user interaction.",
      tools: ["BigQuery", "Charles Proxy", "MITM Tools", "Analytics Platforms"],
      duration: "6 months",
      role: "QA Lead & Performance Analyst",
      features: [
        "Native ads integration testing",
        "Banner ads performance optimization",
        "HTML ads compatibility testing",
        "Offline ads functionality validation",
        "Video ads playback and performance testing",
        "Suggested apps ads targeting optimization",
        "Comprehensive UI/UX testing protocols",
        "BigQuery event testing and analysis",
        "Advanced network monitoring with Charles/MITM proxy",
        "Data collection accuracy validation",
        "Ad delivery troubleshooting and optimization",
        "Performance metrics and reporting systems",
      ],
    },
  },
  {
    id: 8,
    title: "SRC: Secure Remote Commerce",
    description:
      "Advanced payment security framework promoting interoperability and security within remote card payment experiences through centralized system management.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["FinTech", "Security", "Payment Systems", "Interoperability"],
    category: "fintech",
    details: {
      overview:
        "Developed and implemented Secure Remote Commerce (SRC) framework to enhance security and interoperability in remote payment environments, facilitating seamless checkout experiences.",
      challenge:
        "Creating a unified approach to remote payment security that ensures interoperability between different payment networks, issuers, and merchants while maintaining highest security standards.",
      solution:
        "Implemented comprehensive SRC system architecture with centralized information management, secure token-based transactions, and standardized protocols for payment network participants.",
      tools: [
        "Payment Networks",
        "Security Protocols",
        "API Integration",
        "Tokenization",
      ],
      duration: "1 year",
      role: "Payment Systems Architect",
      features: [
        "Secure Remote Commerce framework implementation",
        "Centralized SRC System for payment network management",
        "Issuer and merchant participant integration",
        "Tokenized payment information storage and management",
        "Enhanced checkout experience through stored credentials",
        "Multi-network interoperability protocols",
        "Advanced security and fraud prevention measures",
        "Real-time transaction processing optimization",
        "Compliance with payment industry standards (PCI DSS)",
        "Cross-platform payment method synchronization",
        "Automated credential management and updates",
        "Performance monitoring and analytics integration",
      ],
    },
  },
  {
    id: 9,
    title: "Chameleon Wallet",
    description:
      "Comprehensive mobile and web wallet solution for storing cards, managing shipping addresses, and facilitating secure online payments with advanced lifecycle management.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: [
      "Mobile Wallet",
      "Payment Gateway",
      "Security",
      "Lifecycle Management",
    ],
    category: "fintech",
    details: {
      overview:
        "Developed a comprehensive digital wallet platform supporting both mobile and web interfaces, enabling secure storage of payment cards and shipping addresses for seamless e-commerce transactions.",
      challenge:
        "Creating a unified wallet solution that securely manages multiple payment methods while providing robust lifecycle management and multi-channel notification systems.",
      solution:
        "Implemented a full-featured wallet platform with advanced security protocols, comprehensive card management, and sophisticated wallet lifecycle controls including suspension, locking, and termination capabilities.",
      tools: [
        "Mobile Development",
        "Web Technologies",
        "Security Protocols",
        "Payment APIs",
      ],
      duration: "8 months",
      role: "Mobile Wallet Developer & Security Architect",
      features: [
        "Cross-platform mobile and web wallet support",
        "Secure card storage and management system",
        "Shipping address management and validation",
        "Merchant payment processing integration",
        "Comprehensive wallet lifecycle management",
        "Multi-factor authentication and security",
        "Password reset functionality with security protocols",
        "OTP delivery through multiple notification channels (SMS, Email, Push)",
        "Wallet suspension and locking mechanisms",
        "Wallet termination with data security compliance",
        "Advanced checkout flow optimization",
        "Real-time transaction monitoring and fraud detection",
        "PCI DSS compliant data handling",
        "Multi-currency support and conversion",
        "Transaction history and analytics dashboard",
        "API integration for third-party merchant services",
      ],
    },
  },
];

// DOM elements
const projectGrid = document.getElementById("projectGrid");
const filterButtons = document.querySelectorAll(".filter-btn");
const modal = document.getElementById("projectModal");
const modalBody = document.getElementById("modalBody");
const modalClose = document.getElementById("modalClose");
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const themeTransition = document.getElementById("themeTransition");
const sunIcon = document.getElementById("sunIcon");
const moonIcon = document.getElementById("moonIcon");

// Initialize the page
document.addEventListener("DOMContentLoaded", function () {
  // Add loading animation
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.5s ease";

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
    document.body.style.opacity = "1";
  }, 100);

  // Preload images for better performance
  preloadImages();
});

// Preload images
function preloadImages() {
  const imageUrls = projects
    .filter((project) => project.image)
    .map((project) => project.image);

  imageUrls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
}

// Dark Mode Functionality
function initializeDarkMode() {
  // Check for saved theme preference or default to light mode
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  // Set initial theme
  const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
  setTheme(initialTheme, false); // false = no animation on initial load

  // Listen for system theme changes
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      if (!localStorage.getItem("theme")) {
        setTheme(e.matches ? "dark" : "light", true);
      }
    });
}

function setTheme(theme, animate = true) {
  const root = document.documentElement;
  const currentTheme = root.getAttribute("data-theme");

  // Don't animate if theme is the same
  if (currentTheme === theme && animate) return;

  if (animate) {
    // Add transition overlay
    themeTransition.classList.add("active");

    // Add rotation animation to icon
    themeIcon.classList.add("rotating");

    setTimeout(() => {
      applyThemeChanges(theme);
    }, 150);

    setTimeout(() => {
      themeTransition.classList.remove("active");
      themeIcon.classList.remove("rotating");
    }, 300);
  } else {
    applyThemeChanges(theme);
  }
}

function applyThemeChanges(theme) {
  const root = document.documentElement;

  // Set theme attribute
  root.setAttribute("data-theme", theme);

  // Update icons and tooltip
  if (theme === "dark") {
    sunIcon.style.display = "none";
    moonIcon.style.display = "block";
    themeToggle.setAttribute("data-tooltip", "Switch to light mode");
    themeToggle.setAttribute("aria-label", "Switch to light mode");
  } else {
    sunIcon.style.display = "block";
    moonIcon.style.display = "none";
    themeToggle.setAttribute("data-tooltip", "Switch to dark mode");
    themeToggle.setAttribute("aria-label", "Switch to dark mode");
  }

  // Save to localStorage
  localStorage.setItem("theme", theme);

  // Update meta theme-color for mobile browsers
  updateMetaThemeColor(theme);
}

function updateMetaThemeColor(theme) {
  let metaThemeColor = document.querySelector('meta[name="theme-color"]');
  if (!metaThemeColor) {
    metaThemeColor = document.createElement("meta");
    metaThemeColor.name = "theme-color";
    document.head.appendChild(metaThemeColor);
  }

  metaThemeColor.content = theme === "dark" ? "#0F172A" : "#FFFFFF";
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  setTheme(newTheme, true);

  // Add haptic feedback for mobile devices
  if (navigator.vibrate) {
    navigator.vibrate(50);
  }
}

function getCurrentTheme() {
  return document.documentElement.getAttribute("data-theme") || "light";
}

// Add classes to elements for scroll animation
function addScrollClasses() {
  const elementsToAnimate = [
    ".hero-name",
    ".hero-role",
    ".hero-description",
    ".hero-cta",
    ".work-header",
    ".filter-nav",
    ".about-title",
    ".about-description",
    ".process",
    ".skills",
    ".contact-title",
    ".contact-description",
    ".contact-info",
  ];

  elementsToAnimate.forEach((selector) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => {
      el.classList.add("animate-on-scroll");
    });
  });

  // Add staggered animation delays
  const processSteps = document.querySelectorAll(".process-step");
  processSteps.forEach((step, index) => {
    step.classList.add("animate-on-scroll");
    step.style.animationDelay = `${index * 0.2}s`;
  });

  const skillCategories = document.querySelectorAll(".skill-category");
  skillCategories.forEach((category, index) => {
    category.classList.add("animate-on-scroll");
    category.style.animationDelay = `${index * 0.15}s`;
  });

  const contactLinks = document.querySelectorAll(".contact-link");
  contactLinks.forEach((link, index) => {
    link.classList.add("animate-on-scroll");
    link.style.animationDelay = `${index * 0.1}s`;
  });
}

// Render projects in the grid
function renderProjects(projectsToRender) {
  projectGrid.innerHTML = "";

  projectsToRender.forEach((project, index) => {
    const projectCard = createProjectCard(project);
    projectGrid.appendChild(projectCard);

    // Add staggered animation
    setTimeout(() => {
      projectCard.classList.add("fade-in-scale");
    }, index * 100);
  });
}

// Create a project card element
function createProjectCard(project) {
  const card = document.createElement("div");
  card.className = "project-card";
  card.dataset.category = project.category;
  card.addEventListener("click", () => openProjectModal(project));

  card.innerHTML = `
        <div class="project-image">
            ${
              project.image
                ? `<img src="${project.image}" alt="${project.title}" loading="lazy">`
                : `<span>Project Image Placeholder</span>`
            }
        </div>
        <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tags">
                ${project.tags
                  .map((tag) => `<span class="project-tag">${tag}</span>`)
                  .join("")}
            </div>
        </div>
    `;

  return card;
}

// Filter projects based on category
function filterProjects(category) {
  const cards = document.querySelectorAll(".project-card");

  cards.forEach((card, index) => {
    if (category === "all" || card.dataset.category === category) {
      card.classList.remove("hidden");
      // Add staggered animation for filtered items
      setTimeout(() => {
        card.style.animation = "fadeInUp 0.6s ease-out";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, index * 50);
    } else {
      card.classList.add("hidden");
      card.style.opacity = "0";
      card.style.transform = "translateY(20px)";
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
            ${
              project.image
                ? `<img src="${project.image}" alt="${project.title}" loading="lazy">`
                : `<div class="placeholder-image">Project Image Placeholder</div>`
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
                        ${details.features
                          .map((feature) => `<li>${feature}</li>`)
                          .join("")}
                    </ul>
                </section>
            </div>
            
            <div class="modal-sidebar">
                <section class="modal-section">
                    <h3>Tools Used</h3>
                    <div class="tool-tags">
                        ${details.tools
                          .map(
                            (tool) => `<span class="tool-tag">${tool}</span>`
                          )
                          .join("")}
                    </div>
                </section>
                
                <section class="modal-section">
                    <h3>Project Tags</h3>
                    <div class="project-tags">
                        ${project.tags
                          .map(
                            (tag) => `<span class="project-tag">${tag}</span>`
                          )
                          .join("")}
                    </div>
                </section>
                
                <div class="modal-actions">
                    <button class="btn btn-primary">View Live Project</button>
                    <button class="btn btn-secondary">View Case Study</button>
                </div>
            </div>
        </div>
    `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

// Close project modal
function closeProjectModal() {
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

// Setup event listeners
function setupEventListeners() {
  // Filter button listeners
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Update active state
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      // Filter projects
      const category = button.dataset.filter;
      filterProjects(category);
    });
  });

  // Modal listeners
  modalClose.addEventListener("click", closeProjectModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeProjectModal();
    }
  });

  // Theme toggle listener
  themeToggle.addEventListener("click", toggleTheme);

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeProjectModal();
    }
    // Keyboard shortcut for theme toggle (Ctrl/Cmd + Shift + D)
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === "D") {
      e.preventDefault();
      toggleTheme();
    }
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// Setup scroll animations and navbar behavior
function setupScrollAnimations() {
  const nav = document.querySelector(".nav");
  let lastScrollTop = 0;

  // Navbar scroll behavior with enhanced effects
  window.addEventListener(
    "scroll",
    throttle(() => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      // Add scrolled class for styling
      if (scrollTop > 50) {
        nav.classList.add("nav-scrolled");
      } else {
        nav.classList.remove("nav-scrolled");
      }

      // Hide/show navbar on scroll
      if (scrollTop > lastScrollTop && scrollTop > 100) {
        nav.classList.add("nav-hidden");
      } else {
        nav.classList.remove("nav-hidden");
      }

      lastScrollTop = scrollTop;
    }, 10)
  );

  // Enhanced Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -80px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animated");

        // Special handling for different elements
        if (entry.target.classList.contains("hero-name")) {
          entry.target.style.animation = "fadeInLeft 1s ease-out";
        } else if (entry.target.classList.contains("hero-role")) {
          entry.target.style.animation = "fadeInRight 1s ease-out 0.3s";
          entry.target.style.animationFillMode = "both";
        } else if (entry.target.classList.contains("hero-description")) {
          entry.target.style.animation = "fadeInUp 1s ease-out 0.6s";
          entry.target.style.animationFillMode = "both";
        } else if (entry.target.classList.contains("hero-cta")) {
          entry.target.style.animation = "bounceIn 1s ease-out 0.9s";
          entry.target.style.animationFillMode = "both";
        } else if (entry.target.classList.contains("work-header")) {
          entry.target.style.animation = "fadeInScale 0.8s ease-out";
        } else if (entry.target.classList.contains("filter-nav")) {
          entry.target.style.animation = "slideInDown 0.6s ease-out 0.2s";
          entry.target.style.animationFillMode = "both";
        } else {
          entry.target.style.animation = "fadeInUp 0.8s ease-out";
        }
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animatedElements = document.querySelectorAll(".animate-on-scroll");
  animatedElements.forEach((el) => observer.observe(el));

  // Parallax effect for hero background
  window.addEventListener(
    "scroll",
    throttle(() => {
      const scrolled = window.pageYOffset;
      const hero = document.querySelector(".hero");
      if (hero) {
        const rate = scrolled * -0.3;
        hero.style.transform = `translateY(${rate}px)`;
      }
    }, 10)
  );
}

// Setup click animations and micro-interactions
function setupClickAnimations() {
  // Enhanced button click effects
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      createRippleEffect(e, this);
    });
  });

  // Filter button enhanced animations
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Add click animation
      this.style.transform = "scale(0.95)";
      setTimeout(() => {
        this.style.transform = "";
      }, 150);
    });
  });

  // Project card click enhancement
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-8px) scale(1.02)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });

    card.addEventListener("click", function (e) {
      createClickWave(e, this);
    });
  });

  // Contact links enhanced interaction
  const contactLinks = document.querySelectorAll(".contact-link");
  contactLinks.forEach((link) => {
    link.addEventListener("mouseenter", function () {
      this.querySelector(".contact-value").style.transform = "scale(1.05)";
    });

    link.addEventListener("mouseleave", function () {
      this.querySelector(".contact-value").style.transform = "scale(1)";
    });
  });
}

// Create ripple effect for buttons
function createRippleEffect(event, element) {
  const ripple = document.createElement("span");
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

  element.style.position = "relative";
  element.style.overflow = "hidden";
  element.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 600);
}

// Create click wave effect for cards
function createClickWave(event, element) {
  const wave = document.createElement("div");
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

  element.style.position = "relative";
  element.style.overflow = "hidden";
  element.appendChild(wave);

  setTimeout(() => {
    wave.remove();
  }, 800);
}

// Setup parallax effects
function setupParallaxEffects() {
  const parallaxElements = document.querySelectorAll(".step-number");

  window.addEventListener(
    "scroll",
    throttle(() => {
      const scrolled = window.pageYOffset;

      parallaxElements.forEach((element, index) => {
        const rate = scrolled * 0.1 * (index + 1);
        element.style.transform = `translateY(${rate}px) scale(${
          1 + rate * 0.001
        })`;
      });
    }, 16)
  );
}

// Add CSS for ripple and wave animations
const animationStyles = document.createElement("style");
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
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Add loading states
function showLoading(element) {
  element.classList.add("loading");
}

function hideLoading(element) {
  element.classList.remove("loading");
}

// Export functions for potential testing
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    projects,
    renderProjects,
    filterProjects,
    debounce,
  };
}
