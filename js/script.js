// Datos de productos ampliados
const products = [
    { 
        id: 1, 
        name: "Ref: W-96-35-40-108", 
        price: "$180.000", 
        category: ["", "hombre", ""],
        description: "Las Nike Air Max 270 ofrecen una amortiguación innovadora que proporciona comodidad durante todo el día. Con su diseño moderno y colores vibrantes, son perfectas para el estilo urbano y el running.",
        features: [
            "Amortiguación Air Max para máxima comodidad",
            "Upper transpirable",
            "Suela de goma duradera",
            "Disponible en varios colores"
        ],
        sizes: ["", "", "", "", "", "", ""],
        image: "img/p.png"
    },
    { 
        id: 2, 
        name: "Ref: M-18-40-45", 
        price: "$220.000", 
        category: ["deportivo", "mujer", "running"],
        description: "Las Adidas Ultraboost son el epítome de la tecnología en calzado deportivo. Con su suela Boost que devuelve la energía con cada paso, son ideales para corredores exigentes.",
        features: [
            "Tecnología Boost para máxima energía",
            "Upper Primeknit ajustable",
            "Suela Continental para mejor tracción",
            "Plantilla Ortholite para confort"
        ],
        sizes: ["36", "37", "38", "39", "40"],
        image: "img/2.jpeg"
    },
    // ... (otros productos con el mismo formato, cada uno con su propiedad image)
];

let cart = [];

// Renderizar productos
function renderProducts(productsToShow = products) {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = '';
    
    if (productsToShow.length === 0) {
        grid.innerHTML = '<p class="no-products">No se encontraron productos que coincidan con tu búsqueda</p>';
        return;
    }
    
    productsToShow.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image" onclick="showProductModal(${product.id})">
                <img src="${product.image || 'img/default-shoe.jpg'}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3 class="product-name" onclick="showProductModal(${product.id})">${product.name}</h3>
                <p class="product-price">${product.price}</p>
                <button class="add-to-cart" onclick="addToCart(${product.id}, event)">
                    Agregar al Carrito
                </button>
            </div>
        `;
        grid.appendChild(productCard);
    });
}

// Filtrar productos
function filterProducts(category) {
    if (category === 'todos') {
        renderProducts(products);
    } else {
        const filtered = products.filter(product => 
            product.category.includes(category)
        );
        renderProducts(filtered);
    }
    
    // Cerrar menú móvil si está abierto
    document.querySelector('.nav-menu').classList.remove('active');
    
    // Scroll al catálogo
    document.getElementById('catalogo').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Agregar al carrito
function addToCart(productId, event) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCartDisplay();
    
    // Animación de feedback
    if (event) {
        const button = event.target;
        button.style.background = '#4CAF50';
        button.textContent = '✓ Agregado';
        setTimeout(() => {
            button.style.background = '';
            button.textContent = 'Agregar al Carrito';
        }, 1000);
    }
    
    // Actualizar contador del carrito con animación
    const cartCount = document.getElementById('cart-count');
    cartCount.classList.add('animate-bounce');
    setTimeout(() => cartCount.classList.remove('animate-bounce'), 1000);
}

// Actualizar display del carrito
function updateCartDisplay() {
    const cartCount = document.getElementById('cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">No hay productos seleccionados</p>';
        return;
    }
    
    let total = 0;
    
    cart.forEach(item => {
        const priceNumber = parseFloat(item.price.replace(/[^0-9]/g, ''));
        total += priceNumber * item.quantity;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>${item.price} x ${item.quantity}</p>
            </div>
            <button onclick="removeFromCart(${item.id})" class="remove-item">
                ×
            </button>
        `;
        cartItems.appendChild(cartItem);
    });
    
    // Mostrar total
    const totalElement = document.createElement('div');
    totalElement.className = 'cart-total';
    totalElement.innerHTML = `
        <hr>
        <div class="total-row">
            <strong>Total:</strong>
            <span>$${total.toLocaleString('es-CO')}</span>
        </div>
    `;
    cartItems.appendChild(totalElement);
}

// Eliminar del carrito
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
}

// Toggle carrito modal
function toggleCart() {
    const modal = document.getElementById('cart-modal');
    modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
    
    // Actualizar el carrito cuando se abre
    if (modal.style.display === 'flex') {
        updateCartDisplay();
    }
}

// Enviar mensaje de WhatsApp
function sendWhatsAppMessage() {
    if (cart.length === 0) {
        alert('Por favor agrega productos al carrito primero');
        return;
    }
    
    let message = '¡Hola Sandez! Estoy interesado/a en los siguientes productos:\n\n';
    let total = 0;
    
    cart.forEach(item => {
        const priceNumber = parseFloat(item.price.replace(/[^0-9]/g, ''));
        total += priceNumber * item.quantity;
        message += `• ${item.name} - ${item.price} x ${item.quantity}\n`;
    });
    
    message += `\nTotal: $${total.toLocaleString('es-CO')}\n\n`;
    message += 'Por favor indíquenme disponibilidad y métodos de pago. ¡Gracias!';
    
    const phoneNumber = '573174196677';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Enviar mensaje de contacto
function sendContactMessage() {
    const name = document.querySelector('.contact-form input[type="text"]').value.trim();
    const email = document.querySelector('.contact-form input[type="email"]').value.trim();
    const phone = document.querySelector('.contact-form input[type="tel"]').value.trim();
    const message = document.querySelector('.contact-form textarea').value.trim();
    
    if (!name || !email || !message) {
        alert('Por favor completa los campos requeridos: Nombre, Email y Mensaje');
        return;
    }
    
    let whatsappMessage = 'Consulta desde la página web:\n\n';
    whatsappMessage += `Nombre: ${name}\n`;
    whatsappMessage += `Email: ${email}\n`;
    if (phone) whatsappMessage += `Teléfono: ${phone}\n`;
    whatsappMessage += `Mensaje: ${message}`;
    
    const phoneNumber = '573174196677';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
}

// Función para buscar productos
function setupSearch() {
    const searchInput = document.getElementById('search-input');
    const searchIcon = document.querySelector('.search-icon');
    
    const performSearch = () => {
        const searchTerm = searchInput.value.toLowerCase();
        if (searchTerm.length > 0) {
            const filtered = products.filter(product => 
                product.name.toLowerCase().includes(searchTerm) ||
                product.description.toLowerCase().includes(searchTerm) ||
                product.category.some(cat => cat.toLowerCase().includes(searchTerm))
            );
            renderProducts(filtered);
        } else {
            renderProducts(products);
        }
    };
    
    searchInput.addEventListener('input', performSearch);
    searchIcon.addEventListener('click', performSearch);
}

// Función para mostrar el modal del producto
function showProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const modalBody = document.getElementById('product-modal-body');
    modalBody.innerHTML = `
        <div class="product-modal-image">
            <img src="${product.image || 'img/default-shoe.jpg'}" alt="${product.name}">
        </div>
        <div class="product-modal-info">
            <h2>${product.name}</h2>
            <p class="product-modal-price">${product.price}</p>
            <p class="product-modal-description">${product.description}</p>
            
            <div class="product-details-section">
                <h4>Características:</h4>
                <ul class="product-modal-features">
                    ${product.features.map(feat => `<li>${feat}</li>`).join('')}
                </ul>
            </div>
            
            <div class="product-details-section">
                <h4>Tallas disponibles:</h4>
                <div class="size-buttons">
                    ${product.sizes.map(size => `<button class="size-btn">${size}</button>`).join('')}
                </div>
            </div>
            
            <div class="product-modal-actions">
                <button class="add-to-cart" onclick="addToCart(${product.id}); closeProductModal()">
                    Agregar al Carrito
                </button>
                <button class="whatsapp-button" onclick="sendSingleProductWhatsApp(${product.id})">
                    Consultar por WhatsApp
                </button>
            </div>
        </div>
    `;
    
    document.getElementById('product-modal').style.display = 'flex';
}

// Función para cerrar el modal
function closeProductModal() {
    document.getElementById('product-modal').style.display = 'none';
}

// Función para enviar mensaje de WhatsApp sobre un solo producto
function sendSingleProductWhatsApp(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    let message = `¡Hola Sandez! Estoy interesado/a en el producto:\n\n`;
    message += `• ${product.name} - ${product.price}\n\n`;
    message += `¿Podrían darme más información sobre disponibilidad y métodos de pago?`;
    
    const phoneNumber = '573174196677';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Toggle menú móvil
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const mobileBtn = document.getElementById('mobile-menu-btn');
    navMenu.classList.toggle('active');
    mobileBtn.classList.toggle('active');
}

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            document.querySelector('.nav-menu').classList.remove('active');
            document.getElementById('mobile-menu-btn').classList.remove('active');
        }
    });
});

// Navegación suave
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
        
        // Cerrar menú móvil si está abierto
        document.querySelector('.nav-menu').classList.remove('active');
        document.getElementById('mobile-menu-btn').classList.remove('active');
    });
});

// Efecto de navbar al hacer scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
        navbar.style.padding = '0.3rem 0';
    } else {
        navbar.style.boxShadow = '0 4px 20px rgba(4, 78, 23, 0.3)';
        navbar.style.padding = '0.5rem 0';
    }
});

// Cerrar modales al hacer click fuera
document.addEventListener('click', (e) => {
    const cartModal = document.getElementById('cart-modal');
    if (e.target === cartModal) {
        toggleCart();
    }
    
    const productModal = document.getElementById('product-modal');
    if (e.target === productModal) {
        closeProductModal();
    }
});

// Cerrar modales con ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.getElementById('cart-modal').style.display = 'none';
        document.getElementById('product-modal').style.display = 'none';
    }
});

// Inicializar la página
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    setupSearch();
    
    // Prevenir recarga del formulario
    document.querySelector('.contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        sendContactMessage();
    });
});
