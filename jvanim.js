// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Animation for products when they come into view
    const productos = document.querySelectorAll('.producto');
    
    // Set up the Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Alternate animation styles for products
                const animations = ['bounce-in', 'slide-in-left', 'slide-in-right', 'fade-in'];
                const animationClass = animations[index % animations.length];
                
                // Add the animation class with a staggered delay
                setTimeout(() => {
                    entry.target.classList.add(animationClass);
                    entry.target.style.opacity = 1;
                }, index * 150);
                
                // Unobserve the element after animation
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });
    
    // Initially hide all products
    productos.forEach(producto => {
        producto.style.opacity = 0;
        observer.observe(producto);
    });
    
    // Add hover effects for product images
    productos.forEach(producto => {
        producto.addEventListener('mouseenter', function() {
            const imagen = this.querySelector('.producto-imagen');
            imagen.style.transform = 'scale(1.05)';
        });
        
        producto.addEventListener('mouseleave', function() {
            const imagen = this.querySelector('.producto-imagen');
            imagen.style.transform = 'scale(1)';
        });
    });
    
    // Enhanced add to cart functionality
    const botonesComprar = document.querySelectorAll('.boton-comprar');
    let cantidadCarrito = 0;
    const botonCarrito = document.querySelector('.navbar .menu-button:last-child');
    
    // Create the cart notification element
    const cartNotification = document.createElement('div');
    cartNotification.className = 'cart-notification';
    document.body.appendChild(cartNotification);
    
    botonesComprar.forEach(boton => {
        boton.addEventListener('click', function() {
            // Update cart count
            cantidadCarrito++;
            botonCarrito.textContent = `🛒 Carrito (${cantidadCarrito})`;
            
            // Get product name and price
            const productoElement = this.closest('.producto');
            const nombreProducto = productoElement.querySelector('h3').textContent;
            const precioProducto = productoElement.querySelector('.precio').textContent;
            
            // Animate the button
            this.textContent = "¡Añadido!";
            this.style.backgroundColor = '#4CAF50';
            this.disabled = true;
            
            // Create pulse effect on the cart button
            botonCarrito.style.animation = 'pulse 0.5s ease 2';
            setTimeout(() => {
                botonCarrito.style.animation = '';
            }, 1000);
            
            // Show notification
            cartNotification.textContent = `¡${nombreProducto} añadido al carrito!`;
            cartNotification.classList.add('show');
            
            // Reset button after delay
            setTimeout(() => {
                this.textContent = "Añadir al carrito";
                this.style.backgroundColor = '#c87941';
                this.disabled = false;
                cartNotification.classList.remove('show');
            }, 2000);
            
            // Log for debugging
            console.log(`Producto añadido: ${nombreProducto} - ${precioProducto}`);
        });
    });
    
    // Banner parallax effect
    const banner = document.querySelector('.banner');
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        if (scrollPosition < banner.offsetHeight) {
            banner.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
        }
    });
    
    // Add animation to section titles when they come into view
    const sectionTitles = document.querySelectorAll('h2');
    const titleObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                titleObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    sectionTitles.forEach(title => {
        title.style.opacity = 0;
        title.style.transform = 'translateY(20px)';
        title.style.transition = 'all 0.7s ease';
        titleObserver.observe(title);
    });
    
    // Random sparkle effect on logo hover
    const logo = document.querySelector('.logo');
    logo.addEventListener('mouseenter', function() {
        createSparkles(this);
    });
    
    function createSparkles(element) {
        for (let i = 0; i < 20; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.position = 'absolute';
            sparkle.style.width = '3px';
            sparkle.style.height = '3px';
            sparkle.style.backgroundColor = '#e09e67';
            sparkle.style.borderRadius = '50%';
            
            // Random position around the element
            const rect = element.getBoundingClientRect();
            const posX = Math.random() * rect.width;
            const posY = Math.random() * rect.height;
            
            sparkle.style.left = `${posX + rect.left}px`;
            sparkle.style.top = `${posY + rect.top}px`;
            sparkle.style.zIndex = '9999';
            
            // Add animation
            sparkle.style.animation = `sparkleAnimation 1s forwards`;
            
            document.body.appendChild(sparkle);
            
            // Remove sparkle after animation
            setTimeout(() => {
                sparkle.remove();
            }, 1000);
        }
    }
    
    // Add keyframes for sparkle animation
    const styleSheet = document.createElement('style');
    styleSheet.innerHTML = `
        @keyframes sparkleAnimation {
            0% {
                transform: scale(0) translateY(0);
                opacity: 0;
            }
            50% {
                opacity: 1;
            }
            100% {
                transform: scale(1) translateY(-20px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(styleSheet);
});