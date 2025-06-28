 // Función para el menú móvil
        function toggleMobileMenu() {
            const navMenu = document.getElementById('nav-menu');
            const mobileBtn = document.getElementById('mobile-menu-btn');
            
            navMenu.classList.toggle('active');
            mobileBtn.classList.toggle('active');
        }

        // Smooth scrolling para enlaces internos
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

        // Animaciones al hacer scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Aplicar animaciones a las tarjetas
        document.addEventListener('DOMContentLoaded', () => {
            const cards = document.querySelectorAll('.value-card, .team-card, .stat-card');
            cards.forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                card.style.transition = 'all 0.6s ease-out';
                observer.observe(card);
            });

            // Animación de números estadísticos
            const statNumbers = document.querySelectorAll('.stat-number');
            const animateNumbers = (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const target = entry.target;
                        const finalValue = target.textContent;
                        const numericValue = parseInt(finalValue.replace(/\D/g, ''));
                        const suffix = finalValue.replace(/\d/g, '');
                        
                        let current = 0;
                        const increment = numericValue / 50;
                        const timer = setInterval(() => {
                            current += increment;
                            if (current >= numericValue) {
                                current = numericValue;
                                clearInterval(timer);
                            }
                            target.textContent = Math.floor(current) + suffix;
                        }, 50);
                        
                        numberObserver.unobserve(target);
                    }
                });
            };
            
            const numberObserver = new IntersectionObserver(animateNumbers, observerOptions);
            statNumbers.forEach(num => numberObserver.observe(num));
        });