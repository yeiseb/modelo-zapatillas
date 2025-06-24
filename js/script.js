 // Datos de productos ampliados
        const products = [
            { 
                id: 1, 
                name: "Nike Air Max 270", 
                price: "$180.000", 
                category: ["deportivo", "hombre", "running"],
                description: "Las Nike Air Max 270 ofrecen una amortiguación innovadora que proporciona comodidad durante todo el día. Con su diseño moderno y colores vibrantes, son perfectas para el estilo urbano y el running.",
                features: [
                    "Amortiguación Air Max para máxima comodidad",
                    "Upper transpirable",
                    "Suela de goma duradera",
                    "Disponible en varios colores"
                ],
                sizes: ["38", "39", "40", "41", "42", "43", "44"]
            },
            { 
                id: 2, 
                name: "Adidas Ultraboost", 
                price: "$220.000", 
                category: ["deportivo", "mujer", "running"],
                description: "Las Adidas Ultraboost son el epítome de la tecnología en calzado deportivo. Con su suela Boost que devuelve la energía con cada paso, son ideales para corredores exigentes.",
                features: [
                    "Tecnología Boost para máxima energía",
                    "Upper Primeknit ajustable",
                    "Suela Continental para mejor tracción",
                    "Plantilla Ortholite para confort"
                ],
                sizes: ["36", "37", "38", "39", "40"]
            },
            { 
                id: 3, 
                name: "Converse All Star", 
                price: "$120.000", 
                category: ["casual", "urbano"],
                description: "El clásico que nunca pasa de moda. Las Converse All Star son perfectas para cualquier ocasión casual, con su diseño sencillo y versátil que combina con todo.",
                features: [
                    "Diseño clásico de lona",
                    "Suela de goma resistente",
                    "Disponible en múltiples colores",
                    "Estilo unisex"
                ],
                sizes: ["36", "37", "38", "39", "40", "41", "42", "43"]
            },
            { 
                id: 4, 
                name: "Puma RS-X", 
                price: "$160.000", 
                category: ["deportivo", "urbano"],
                description: "Las Puma RS-X combinan estilo retro con tecnología moderna. Con su diseño llamativo y comodidad excepcional, son perfectas para el día a día.",
                features: [
                    "Diseño inspirado en los años 80",
                    "Amortiguación RS para mayor confort",
                    "Upper de malla transpirable",
                    "Suela de goma con tracción mejorada"
                ],
                sizes: ["38", "39", "40", "41", "42", "43"]
            },
            { 
                id: 5, 
                name: "Vans Old Skool", 
                price: "$140.000", 
                category: ["casual", "urbano"],
                description: "Las Vans Old Skool son un ícono del skateboarding que trascendió a la cultura urbana. Con su franja lateral característica, son un must-have en cualquier guardarropa.",
                features: [
                    "Duradero upper de lona",
                    "Suela waffle para mejor tracción",
                    "Plantilla acolchada",
                    "Diseño clásico con franja lateral"
                ],
                sizes: ["36", "37", "38", "39", "40", "41", "42"]
            },
            { 
                id: 6, 
                name: "New Balance 574", 
                price: "$170.000", 
                category: ["casual", "hombre"],
                description: "Las New Balance 574 combinan estilo clásico con comodidad moderna. Con su diseño atemporal y tecnología ENCAP, son perfectas para todo el día.",
                features: [
                    "Tecnología ENCAP para soporte y durabilidad",
                    "Upper en mezcla de materiales premium",
                    "Suela de goma duradera",
                    "Estilo retro-moderno"
                ],
                sizes: ["38", "39", "40", "41", "42", "43", "44", "45"]
            },
            { 
                id: 7, 
                name: "Jordan 1 Retro", 
                price: "$350.000", 
                category: ["urbano", "hombre"],
                description: "Las Jordan 1 Retro son un ícono del baloncesto y la cultura sneaker. Con su diseño clásico y calidad premium, son las favoritas de coleccionistas.",
                features: [
                    "Upper de cuero premium",
                    "Suela de goma con excelente tracción",
                    "Diseño clásico de 1985",
                    "Logo Wings en el tobillo"
                ],
                sizes: ["39", "40", "41", "42", "43", "44"]
            },
            { 
                id: 8, 
                name: "Fila Disruptor", 
                price: "$130.000", 
                category: ["casual", "mujer"],
                description: "Las Fila Disruptor son el modelo más popular de la marca, con su suela gruesa y diseño futurista que las hace perfectas para el streetwear.",
                features: [
                    "Suela gruesa de estilo retro",
                    "Upper de cuero sintético",
                    "Plantilla acolchada",
                    "Estilo chunky sole"
                ],
                sizes: ["35", "36", "37", "38", "39"]
            },
            { 
                id: 9, 
                name: "Reebok Classic", 
                price: "$110.000", 
                category: ["casual", "deportivo"],
                description: "Las Reebok Classic son un modelo icónico de los 80 que sigue siendo relevante hoy. Con su diseño limpio y comodidad duradera, son perfectas para el día a día.",
                features: [
                    "Upper de cuero suave",
                    "Suela de goma resistente",
                    "Logo vector clásico",
                    "Estilo retro minimalista"
                ],
                sizes: ["36", "37", "38", "39", "40", "41", "42"]
            },
            { 
                id: 10, 
                name: "Nike React Element", 
                price: "$200.000", 
                category: ["deportivo", "mujer", "running"],
                description: "Las Nike React Element combinan tecnología de amortiguación React con un diseño futurista. Ideales para corredoras que buscan estilo y rendimiento.",
                features: [
                    "Amortiguación React para máxima energía",
                    "Upper ligero y transpirable",
                    "Suela de goma duradera",
                    "Diseño moderno y llamativo"
                ],
                sizes: ["35", "36", "37", "38", "39"]
            },
            { 
                id: 11, 
                name: "Adidas Stan Smith", 
                price: "$150.000", 
                category: ["casual", "urbano"],
                description: "Las Adidas Stan Smith son un clásico del tenis que se convirtió en ícono de la moda. Con su diseño minimalista y versátil, son perfectas para cualquier ocasión.",
                features: [
                    "Upper de cuero premium",
                    "Diseño minimalista con perforaciones",
                    "Suela de goma con detalles de color",
                    "Logo Stan Smith en la lengüeta"
                ],
                sizes: ["36", "37", "38", "39", "40", "41", "42"]
            },
            { 
                id: 12, 
                name: "Under Armour HOVR", 
                price: "$190.000", 
                category: ["deportivo", "running"],
                description: "Las Under Armour HOVR ofrecen tecnología de amortiguación que devuelve energía con cada paso. Perfectas para corredores que buscan máximo rendimiento.",
                features: [
                    "Tecnología HOVR para cero pérdida de energía",
                    "Upper transpirable y ajustado",
                    "Suela de goma con tracción estratégica",
                    "Conectividad con apps de running"
                ],
                sizes: ["38", "39", "40", "41", "42", "43", "44"]
            }
        ];

        let cart = [];

        // Renderizar productos
        function renderProducts(productsToShow = products) {
            const grid = document.getElementById('products-grid');
            grid.innerHTML = '';
            
            productsToShow.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.innerHTML = `
                    <div class="product-image" onclick="showProductModal(${product.id})"></div>
                    <div class="product-info">
                        <h3 class="product-name" onclick="showProductModal(${product.id})">${product.name}</h3>
                        <p class="product-price">${product.price}</p>
                        <button class="add-to-cart" onclick="addToCart(${product.id})">
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
            
            // Scroll al catálogo
            document.getElementById('catalogo').scrollIntoView({ 
                behavior: 'smooth' 
            });
        }

        // Agregar al carrito
        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ ...product, quantity: 1 });
            }
            
            updateCartDisplay();
            
            // Animación de feedback
            const button = event.target;
            button.style.background = '#4CAF50';
            button.textContent = '✓ Agregado';
            setTimeout(() => {
                button.style.background = '';
                button.textContent = 'Agregar al Carrito';
            }, 1000);
        }

        // Actualizar display del carrito
        function updateCartDisplay() {
            const cartCount = document.getElementById('cart-count');
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCount.textContent = totalItems;
            
            const cartItems = document.getElementById('cart-items');
            cartItems.innerHTML = '';
            
            if (cart.length === 0) {
                cartItems.innerHTML = '<p>No hay productos seleccionados</p>';
                return;
            }
            
            cart.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <div>
                        <strong>${item.name}</strong><br>
                        ${item.price} x ${item.quantity}
                    </div>
                    <button onclick="removeFromCart(${item.id})" style="background: #ff6b6b; color: white; border: none; padding: 0.5rem; border-radius: 5px;">
                        Eliminar
                    </button>
                `;
                cartItems.appendChild(cartItem);
            });
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
        }

        // Enviar mensaje de WhatsApp
        function sendWhatsAppMessage() {
            if (cart.length === 0) {
                alert('No hay productos seleccionados');
                return;
            }
            
            let message = 'Hola Sandez! Me interesan estos productos:\n\n';
            cart.forEach(item => {
                message += `• ${item.name} - ${item.price} (Cantidad: ${item.quantity})\n`;
            });
            message += '\n¿Podrían darme más información sobre disponibilidad y métodos de pago?';
            
            const phoneNumber = '573174196677';
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        }

        // Enviar mensaje de contacto
        function sendContactMessage() {
            const inputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
            let message = 'Consulta desde la página web:\n\n';
            
            inputs.forEach(input => {
                if (input.value.trim()) {
                    message += `${input.placeholder}: ${input.value}\n`;
                }
            });
            
            const phoneNumber = '573174196677';
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        }

        // Función para buscar productos
        function setupSearch() {
            const searchInput = document.getElementById('search-input');
            searchInput.addEventListener('input', function() {
                const searchTerm = this.value.toLowerCase();
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
            });
        }

        // Función para mostrar el modal del producto
        function showProductModal(productId) {
            const product = products.find(p => p.id === productId);
            if (!product) return;
            
            const modalBody = document.getElementById('product-modal-body');
            modalBody.innerHTML = `
                <div class="product-modal-image">
                    <span style="font-size: 8rem;">👟</span>
                </div>
                <div class="product-modal-info">
                    <h2 class="product-modal-title">${product.name}</h2>
                    <p class="product-modal-price">${product.price}</p>
                    <p class="product-modal-description">${product.description}</p>
                    
                    <h4>Características:</h4>
                    <ul class="product-modal-features">
                        ${product.features.map(feat => `<li>${feat}</li>`).join('')}
                    </ul>
                    
                    <h4>Tallas disponibles:</h4>
                    <p>${product.sizes.join(', ')}</p>
                    
                    <div class="product-modal-actions">
                        <button class="add-to-cart" onclick="addToCart(${product.id}); closeProductModal()">
                            Agregar al Carrito
                        </button>
                        <button class="product-whatsapp-btn" onclick="sendSingleProductWhatsApp(${product.id})">
                            <span>Consultar por WhatsApp</span>
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
            
            let message = `Hola Sandez! Estoy interesado en el producto:\n\n`;
            message += `• ${product.name} - ${product.price}\n\n`;
            message += `¿Podrían darme más información sobre disponibilidad y métodos de pago?`;
            
            const phoneNumber = '573174196677';
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        }

        // Toggle menú móvil
        function toggleMobileMenu() {
            const navMenu = document.querySelector('.nav-menu');
            navMenu.classList.toggle('active');
        }

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
            });
        });

        // Efecto de navbar al hacer scroll
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 100) {
                navbar.style.background = 'linear-gradient(135deg, rgba(26,26,26,0.95) 0%, rgba(45,45,45,0.95) 100%)';
            } else {
                navbar.style.background = 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)';
            }
        });

        // Cerrar modal al hacer click fuera
        document.getElementById('cart-modal').addEventListener('click', (e) => {
            if (e.target.id === 'cart-modal') {
                toggleCart();
            }
        });

        document.getElementById('product-modal').addEventListener('click', (e) => {
            if (e.target.id === 'product-modal') {
                closeProductModal();
            }
        });

        // Inicializar la página
        document.addEventListener('DOMContentLoaded', () => {
            renderProducts();
            setupSearch();
        });