// Datos de productos ampliados
const products = [
    { 
        id: 1, 
        name: "Zapatillas Nike Air Max 270", 
        price: "$180.000", 
        category: ["deportivo", "hombre", "urbano"],
        description: "Las Nike Air Max 270 ofrecen una amortiguación innovadora que proporciona comodidad durante todo el día. Con su diseño moderno y colores vibrantes, son perfectas para el estilo urbano y el running.",
        features: [
            "Amortiguación Air Max para máxima comodidad",
            "Upper transpirable",
            "Suela de goma duradera",
            "Disponible en varios colores"
        ],
        sizes: ["38", "39", "40", "41", "42", "43", "44"],
        image: "img/p1.jpg"
    },
    { 
        id: 2, 
        name: "Zapatillas Adidas Ultraboost", 
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
        image: "img/p2.jpg"
    },
    { 
        id: 3, 
        name: "Zapatillas Puma RS-X", 
        price: "$190.000", 
        category: ["casual", "hombre", "urbano"],
        description: "Las Puma RS-X combinan estilo retro con comodidad moderna. Su diseño llamativo y su suela amortiguada las hacen perfectas para el uso diario.",
        features: [
            "Estilo retro futurista",
            "Suela RS amortiguada",
            "Materiales premium",
            "Cómodas para todo el día"
        ],
        sizes: ["39", "40", "41", "42", "43"],
        image: "img/p3.jpg"
    },
    { 
        id: 4, 
        name: "Zapatillas New Balance 574", 
        price: "$210.000", 
        category: ["casual", "mujer", "urbano"],
        description: "Las clásicas New Balance 574 ofrecen estilo y comodidad en un diseño atemporal. Perfectas para quienes buscan un calzado versátil y duradero.",
        features: [
            "Diseño clásico atemporal",
            "Suela ENCAP para soporte y durabilidad",
            "Plantilla cómoda",
            "Variedad de colores"
        ],
        sizes: ["35", "36", "37", "38", "39"],
        image: "img/p4.jpg"
    },
    { 
        id: 5, 
        name: "Zapatillas Reebok Nano X", 
        price: "$230.000", 
        category: ["deportivo", "hombre", "running"],
        description: "Diseñadas para entrenamiento cruzado, las Reebok Nano X ofrecen estabilidad y flexibilidad para cualquier tipo de ejercicio.",
        features: [
            "FlexWeave para soporte y flexibilidad",
            "Suela de goma duradera",
            "Amortiguación Floatride Energy",
            "Ideal para crossfit"
        ],
        sizes: ["40", "41", "42", "43", "44"],
        image: "img/p5.jpg"
    },
    { 
        id: 6, 
        name: "Zapatillas Vans Old Skool", 
        price: "$160.000", 
        category: ["casual", "hombre", "mujer"],
        description: "Las icónicas Vans Old Skool son un clásico del calzado urbano. Con su diseño sencillo y su durabilidad, son perfectas para el día a día.",
        features: [
            "Estilo clásico con franja lateral",
            "Suela de goma con agarre",
            "Forro acolchado para comodidad",
            "Disponible en múltiples colores"
        ],
        sizes: ["36", "37", "38", "39", "40", "41", "42"],
        image: "img/p6.jpg"
    },
    { 
        id: 7, 
        name: "Zapatillas Under Armour HOVR Phantom", 
        price: "$250.000", 
        category: ["deportivo", "running", "hombre"],
        description: "Tecnología HOVR para una carrera sin esfuerzo. Las Under Armour HOVR Phantom ofrecen una amortiguación excepcional y retorno de energía.",
        features: [
            "Tecnología HOVR para amortiguación",
            "Upper sin costuras para mayor comodidad",
            "Suela de goma de alta tracción",
            "Conectividad con app MapMyRun"
        ],
        sizes: ["39", "40", "41", "42", "43", "44"],
        image: "img/p7.jpg"
    },
    { 
        id: 8, 
        name: "Zapatillas Converse Chuck Taylor All Star", 
        price: "$150.000", 
        category: ["casual", "hombre", "mujer"],
        description: "Las clásicas Converse Chuck Taylor All Star son un ícono de la moda casual. Ideales para combinar con cualquier estilo.",
        features: [
            "Diseño clásico atemporal",
            "Suela de goma resistente",
            "Capellada de lona duradera",
            "Disponible en múltiples colores"
        ],
        sizes: ["36", "37", "38", "39", "40", "41", "42"],
        image: "img/p8.jpg"
    }
];

let cart = [];
const productsPerPage = 8;
let currentPage = 1;
let filteredProducts = [...products];

// Renderizar productos
function renderProducts(productsToShow = filteredProducts) {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = '';
    
    // Calcular productos para la página actual
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const paginatedProducts = productsToShow.slice(startIndex, endIndex);
    
    if (paginatedProducts.length === 0) {
        grid.innerHTML = '<p class="no-products">No se encontraron productos que coincidan con tu búsqueda</p>';
        updateProductsCount(0);
        renderPagination(0);
        return;
    }
    
    updateProductsCount(productsToShow.length);
    renderPagination(productsToShow.length);
    
    paginatedProducts.forEach(product => {
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

// Actualizar contador de productos
function updateProductsCount(count) {
    const productsCount = document.getElementById('products-count');
    if (productsCount) {
        productsCount.textContent = `Mostrando ${Math.min((currentPage - 1) * productsPerPage + 1, count)}-${Math.min(currentPage * productsPerPage, count)} de ${count} productos`;
    }
}

// Renderizar paginación
function renderPagination(totalProducts) {
    const pagination = document.getElementById('pagination');
    if (!pagination) return;
    
    pagination.innerHTML = '';
    const totalPages = Math.ceil(totalProducts / productsPerPage);
    
    if (totalPages <= 1) return;
    
    // Botón Anterior
    const prevBtn = document.createElement('button');
    prevBtn.className = 'page-btn';
    prevBtn.innerHTML = '&laquo;';
    prevBtn.disabled = currentPage === 1;
    prevBtn.onclick = () => {
        if (currentPage > 1) {
            currentPage--;
            renderProducts();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };
    pagination.appendChild(prevBtn);
    
    // Botones de página
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    if (startPage > 1) {
        const firstPageBtn = document.createElement('button');
        firstPageBtn.className = 'page-btn';
        firstPageBtn.textContent = '1';
        firstPageBtn.onclick = () => {
            currentPage = 1;
            renderProducts();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        pagination.appendChild(firstPageBtn);
        
        if (startPage > 2) {
            const ellipsis = document.createElement('span');
            ellipsis.textContent = '...';
            ellipsis.style.padding = '0.5rem';
            pagination.appendChild(ellipsis);
        }
    }
    
    for (let i = startPage; i <= endPage; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.className = `page-btn ${i === currentPage ? 'active' : ''}`;
        pageBtn.textContent = i;
        pageBtn.onclick = () => {
            currentPage = i;
            renderProducts();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        pagination.appendChild(pageBtn);
    }
    
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            const ellipsis = document.createElement('span');
            ellipsis.textContent = '...';
            ellipsis.style.padding = '0.5rem';
            pagination.appendChild(ellipsis);
        }
        
        const lastPageBtn = document.createElement('button');
        lastPageBtn.className = 'page-btn';
        lastPageBtn.textContent = totalPages;
        lastPageBtn.onclick = () => {
            currentPage = totalPages;
            renderProducts();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        pagination.appendChild(lastPageBtn);
    }
    
    // Botón Siguiente
    const nextBtn = document.createElement('button');
    nextBtn.className = 'page-btn';
    nextBtn.innerHTML = '&raquo;';
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.onclick = () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderProducts();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };
    pagination.appendChild(nextBtn);
}

// Filtrar productos
function filterProducts(category) {
    // Resetear a la primera página
    currentPage = 1;
    
    // Actualizar botones de filtro activos
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick').includes(`'${category}'`)) {
            btn.classList.add('active');
        }
    });

    if (category === 'todos') {
        filteredProducts = [...products];
    } else {
        filteredProducts = products.filter(product => 
            product.category.includes(category)
        );
    }
    
    renderProducts();
    
    // Cerrar menú móvil si está abierto
    document.querySelector('.nav-menu')?.classList.remove('active');
    
    // Scroll al inicio del catálogo
    if (window.location.pathname.includes('catalogo.html')) {
        window.scrollTo({
            top: document.getElementById('catalogo').offsetTop - 80,
            behavior: 'smooth'
        });
    }
}

// Ordenar productos
function sortProducts() {
    const sortSelect = document.getElementById('sort-select');
    const sortValue = sortSelect.value;
    
    // Resetear a la primera página
    currentPage = 1;
    
    switch(sortValue) {
        case 'price-asc':
            filteredProducts.sort((a, b) => {
                const priceA = parseFloat(a.price.replace(/[^0-9]/g, ''));
                const priceB = parseFloat(b.price.replace(/[^0-9]/g, ''));
                return priceA - priceB;
            });
            break;
        case 'price-desc':
            filteredProducts.sort((a, b) => {
                const priceA = parseFloat(a.price.replace(/[^0-9]/g, ''));
                const priceB = parseFloat(b.price.replace(/[^0-9]/g, ''));
                return priceB - priceA;
            });
            break;
        case 'name-asc':
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name-desc':
            filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
            break;
        default:
            // No ordenar
            break;
    }
    
    renderProducts();
}

// Buscar productos
function setupSearch() {
    const searchInput = document.getElementById('search-input');
    const searchIcon = document.querySelector('.search-icon');
    
    const performSearch = () => {
        const searchTerm = searchInput.value.toLowerCase();
        currentPage = 1;
        
        if (searchTerm.length > 0) {
            filteredProducts = products.filter(product => 
                product.name.toLowerCase().includes(searchTerm) ||
                product.description.toLowerCase().includes(searchTerm) ||
                product.category.some(cat => cat.toLowerCase().includes(searchTerm))
            );
        } else {
            filteredProducts = [...products];
        }
        
        renderProducts();
    };
    
    searchInput.addEventListener('input', performSearch);
    searchIcon.addEventListener('click', performSearch);
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
    if (!cartItems) return;
    
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

// Mostrar modal del producto
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
                    ${product.sizes.map(size => size ? `<button class="size-btn">${size}</button>` : '').join('')}
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
    
    // Manejar selección de tallas
    const sizeButtons = modalBody.querySelectorAll('.size-btn');
    sizeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            sizeButtons.forEach(b => b.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
    
    document.getElementById('product-modal').style.display = 'flex';
}

// Cerrar modal del producto
function closeProductModal() {
    document.getElementById('product-modal').style.display = 'none';
}

// Enviar mensaje de WhatsApp sobre un producto
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
    // Verificar si estamos en la página de catálogo
    const isCatalogPage = window.location.pathname.includes('catalogo.html');
    
    if (isCatalogPage) {
        // Configurar búsqueda y ordenamiento
        setupSearch();
        
        // Verificar parámetros de URL para filtros
        const urlParams = new URLSearchParams(window.location.search);
        const filter = urlParams.get('filter');
        
        if (filter) {
            filterProducts(filter);
        } else {
            // Mostrar todos los productos por defecto
            filteredProducts = [...products];
            renderProducts();
        }
    } else {
        // Para otras páginas, solo renderizar los productos necesarios
        renderProducts();
    }
    
    // Prevenir recarga del formulario de contacto
    document.querySelector('.contact-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        sendContactMessage();
    });
});
