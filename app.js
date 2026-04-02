// WG | Desarrollo Web & Testing - Interactive JavaScript

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initCustomCursor();
    initCanvasParticles();
    initMagneticButtons();
    initGSAPAnimations();
    initScrollEffects();
    initNavigation();
    initProjectForm();
    initLightbox();
    initAutoSliders();
    initTabTitleGlitch();
    initPerformanceOptimizations();
});

// Custom Cursor System
function initCustomCursor() {
    const cursor = document.createElement('div');
    const follower = document.createElement('div');
    
    cursor.className = 'custom-cursor';
    follower.className = 'custom-cursor-follower';
    
    document.body.appendChild(cursor);
    document.body.appendChild(follower);
    
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let followerX = 0, followerY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.5;
        cursorY += (mouseY - cursorY) * 0.5;
        
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        
        cursor.style.left = cursorX - 10 + 'px';
        cursor.style.top = cursorY - 10 + 'px';
        
        follower.style.left = followerX - 20 + 'px';
        follower.style.top = followerY - 20 + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    
    animateCursor();
    
    // Hide cursor on mobile
    if ('ontouchstart' in window) {
        cursor.style.display = 'none';
        follower.style.display = 'none';
    }
}

// Canvas Particles System
function initCanvasParticles() {
    const canvas = document.getElementById('particleCanvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 50;
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;
            this.speedX = Math.random() * 2 - 1;
            this.speedY = Math.random() * 2 - 1;
            this.opacity = Math.random() * 0.5 + 0.2;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
        }
        
        draw() {
            ctx.fillStyle = `rgba(16, 185, 129, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        // Draw connections
        particles.forEach((particle, i) => {
            particles.slice(i + 1).forEach(otherParticle => {
                const dx = particle.x - otherParticle.x;
                const dy = particle.y - otherParticle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    ctx.strokeStyle = `rgba(16, 185, 129, ${0.1 * (1 - distance / 100)})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particle.x, particle.y);
                    ctx.lineTo(otherParticle.x, otherParticle.y);
                    ctx.stroke();
                }
            });
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Magnetic Buttons System
function initMagneticButtons() {
    const magneticButtons = document.querySelectorAll('.magnetic-btn');
    
    magneticButtons.forEach(button => {
        button.addEventListener('mouseenter', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            this.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px) scale(1.05)`;
        });
        
        button.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            this.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px) scale(1.05)`;
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translate(0, 0) scale(1)';
        });
    });
}

// GSAP Animations - Fixed with proper selectors
function initGSAPAnimations() {
    // Create timeline for hero section
    const heroTimeline = gsap.timeline();
    
    // Hero title animation - Use ID selector
    const heroTitle = document.getElementById('heroTitle');
    if (heroTitle) {
        heroTimeline.from(heroTitle, {
            duration: 1.5,
            y: 100,
            opacity: 0,
            ease: 'power3.out'
        });
    }
    
    // Hero subtitle animation - Use ID selector
    const heroSubtitle = document.getElementById('heroSubtitle');
    if (heroSubtitle) {
        heroTimeline.from(heroSubtitle, {
            duration: 1.2,
            y: 60,
            opacity: 0,
            ease: 'power2.out'
        }, '-=0.8');
    }
    
    // Hero buttons animation with stagger
    const heroButtons = document.querySelectorAll('.hero-subtitle + div .magnetic-btn');
    if (heroButtons.length > 0) {
        heroTimeline.from(heroButtons, {
            duration: 0.8,
            y: 40,
            opacity: 0,
            ease: 'power2.out',
            stagger: 0.2
        }, '-=0.6');
    }
    
    // Hero badges animation
    const heroBadges = document.querySelectorAll('.hero-subtitle + div + div span');
    if (heroBadges.length > 0) {
        heroTimeline.from(heroBadges, {
            duration: 0.6,
            scale: 0,
            opacity: 0,
            ease: 'back.out(1.7)',
            stagger: 0.1
        }, '-=0.4');
    }
    
    // Energy circles animation
    const energyContainer = document.getElementById('energy-container');
    if (energyContainer) {
        heroTimeline.from(energyContainer, {
            duration: 1.8,
            scale: 0.3,
            rotation: -180,
            opacity: 0,
            ease: 'power3.out'
        }, '-=1.2');
    }
    
    // Fade in animations for sections
    gsap.utils.toArray('.fade-in').forEach(element => {
        gsap.from(element, {
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            duration: 1,
            y: 50,
            opacity: 0,
            ease: 'power2.out'
        });
    });
    
    // Project cards animation
    gsap.utils.toArray('.project-card').forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            duration: 0.8,
            y: 80,
            opacity: 0,
            ease: 'power2.out',
            delay: index * 0.1
        });
    });
    
    // Service cards animation
    gsap.utils.toArray('.service-card').forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            duration: 0.8,
            y: 60,
            opacity: 0,
            ease: 'power2.out',
            delay: index * 0.1
        });
    });
}

// Scroll Effects
function initScrollEffects() {
    // Parallax effect for background elements
    gsap.utils.toArray('[data-parallax]').forEach(element => {
        const speed = element.dataset.parallax || 0.5;
        
        gsap.to(element, {
            yPercent: -50 * speed,
            ease: 'none',
            scrollTrigger: {
                trigger: element,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    });
    
    // Navigation scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        const nav = document.querySelector('nav');
        
        if (currentScroll > lastScroll && currentScroll > 100) {
            nav.style.transform = 'translateY(-100%)';
        } else {
            nav.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });
}

// Navigation System
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    
    // Smooth scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: targetSection,
                    ease: 'power2.inOut'
                });
            }
        });
    });
    
    // Mobile menu toggle
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            // Mobile menu implementation
            console.log('Mobile menu clicked');
        });
    }
}

// Project Form System
function initProjectForm() {
    const form = document.getElementById('projectForm');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Submit to Formspree
            const formData = new FormData(form);
            
            fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    showNotification('Briefing enviado con éxito. Te contactaremos pronto.', 'success');
                    form.reset();
                } else {
                    showNotification('Error al enviar el briefing. Inténtalo de nuevo.', 'error');
                }
            })
            .catch(error => {
                showNotification('Error de conexión. Inténtalo más tarde.', 'error');
            });
        });
    }
}

// FAQ Toggle Function
function toggleFAQ(button) {
    const answer = button.nextElementSibling;
    const svg = button.querySelector('svg');
    
    if (answer.classList.contains('hidden')) {
        answer.classList.remove('hidden');
        svg.style.transform = 'rotate(180deg)';
    } else {
        answer.classList.add('hidden');
        svg.style.transform = 'rotate(0deg)';
    }
}

// Lightbox Gallery System
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');
    
    // Close on background click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    });
}

// Project images data
const projectImages = {
    farmacia: [
        { src: 'assets/farmacia.png', caption: 'Farmacia Digital - Vista Principal' },
        { src: 'assets/farmacia1.png', caption: 'Farmacia Digital - Catálogo de Productos' },
        { src: 'assets/farmacia2.png', caption: 'Farmacia Digital - Carrito de Compras' }
    ],
    veterinaria: [
        { src: 'assets/veterinaria1.png', caption: 'Veterinaria E-clinic - Dashboard' },
        { src: 'assets/veterinaria2.png', caption: 'Veterinaria E-clinic - Gestión de Citas' },
        { src: 'assets/veterinaria3.png', caption: 'Veterinaria E-clinic - Historial Médico' },
        { src: 'assets/veterinaria4.png', caption: 'Veterinaria E-clinic - Inventario' }
    ]
};

let currentProject = '';
let currentImageIndex = 0;

// Open lightbox
function openLightbox(project, imageIndex = 0) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');
    
    currentProject = project;
    currentImageIndex = imageIndex;
    
    const images = projectImages[project];
    if (images && images[imageIndex]) {
        lightboxImage.src = images[imageIndex].src;
        lightboxCaption.textContent = images[imageIndex].caption;
        lightbox.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

// Close lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Project Slider System
const projectSliders = {
    farmacia: { current: 0, total: 3 },
    veterinaria: { current: 0, total: 4 }
};

function slideProject(project, direction) {
    const slider = document.getElementById(`${project}-slider`);
    const data = projectSliders[project];
    
    if (!slider || !data) return;
    
    // Update current index
    data.current = (data.current + direction + data.total) % data.total;
    
    // Apply transform
    slider.style.transform = `translateX(-${data.current * 100}%)`;
    
    // Update indicators
    updateIndicators(project, data.current);
}

function updateIndicators(project, currentIndex) {
    const data = projectSliders[project];
    for (let i = 0; i < data.total; i++) {
        const indicator = document.getElementById(`${project}-indicator-${i}`);
        if (indicator) {
            if (i === currentIndex) {
                indicator.className = 'w-2 h-2 bg-emerald-400 rounded-full';
            } else {
                indicator.className = 'w-2 h-2 bg-white/50 rounded-full';
            }
        }
    }
}

// Auto-slide functionality
function initAutoSliders() {
    setInterval(() => {
        slideProject('farmacia', 1);
    }, 5000);
    
    setInterval(() => {
        slideProject('veterinaria', 1);
    }, 6000);
}

// Tab Title Glitch Effect
function initTabTitleGlitch() {
    const originalTitle = document.title;
    let isOriginal = true;
    
    // Change title when tab is not visible
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            document.title = '🚧 Volviendo al Glitch...';
            isOriginal = false;
        } else {
            setTimeout(() => {
                document.title = originalTitle;
                isOriginal = true;
            }, 100);
        }
    });
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 px-6 py-4 rounded-lg text-white font-medium transform translate-x-full transition-transform duration-300`;
    
    if (type === 'success') {
        notification.classList.add('bg-emerald-500');
    } else if (type === 'error') {
        notification.classList.add('bg-red-500');
    } else {
        notification.classList.add('bg-blue-500');
    }
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Performance Optimizations
function initPerformanceOptimizations() {
    // Reduce motion on slower devices
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (reducedMotion.matches) {
        // Disable animations
        gsap.globalTimeline.timeScale(0.1);
        document.getElementById('noiseOverlay').style.display = 'none';
    }
    
    // Optimize canvas performance
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) {
        // Reduce particle count on mobile
        console.log('Mobile device detected - optimizing performance');
    }
}

// Error handling
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
    // In production, you might want to send this to an error tracking service
});
