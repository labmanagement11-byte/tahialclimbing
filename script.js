const productos = [
    {
        id: 1,
        nombre: 'Hoodie Suesca Black',
        categoria: 'negro',
        etiqueta: 'hoodie · negro',
        precio: 120000,
        envio: true,
        descripcion: 'Hoodie premium en negro con presencia limpia, fuerte y enfoque de escalada urbana.',
        tallas: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        imagen: 'assets/gallery/tahial-hoodie-black.jpeg'
    },
    {
        id: 2,
        nombre: 'Hoodie Farallón Green',
        categoria: 'verde',
        etiqueta: 'hoodie · verde',
        precio: 120000,
        envio: true,
        descripcion: 'Versión verde de alto contraste con identidad outdoor y lectura potente del logo.',
        tallas: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        imagen: 'assets/gallery/tahial-hoodie-green.jpeg'
    },
    {
        id: 3,
        nombre: 'Hoodie Cumbre Dorada',
        categoria: 'amarillo',
        etiqueta: 'hoodie · amarillo',
        precio: 120000,
        envio: true,
        descripcion: 'Color insignia de la marca para máxima visibilidad y una presencia comercial potente.',
        tallas: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        imagen: 'assets/gallery/tahial-hoodie-yellow.jpeg'
    },
    {
        id: 4,
        nombre: 'Hoodie Magma Red',
        categoria: 'rojo',
        etiqueta: 'hoodie · rojo',
        precio: 120000,
        envio: true,
        descripcion: 'Edición roja con presencia intensa para campañas visuales y drops especiales.',
        tallas: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        imagen: 'assets/gallery/tahial-hoodie-red.jpeg'
    },
    {
        id: 13,
        nombre: 'Hoodie Cielo Azul',
        categoria: 'azul',
        etiqueta: 'hoodie · azul',
        precio: 120000,
        envio: true,
        descripcion: 'Hoodie azul royal con presencia sólida y energía de expedición.',
        tallas: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        imagen: 'assets/gallery/tahial-hoodie-blue.jpeg'
    },
    {
        id: 14,
        nombre: 'Hoodie Vertiente Naranja',
        categoria: 'naranja',
        etiqueta: 'hoodie · naranja',
        precio: 120000,
        envio: true,
        descripcion: 'Naranja de alto impacto para máxima visibilidad en roca y ciudad.',
        tallas: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        imagen: 'assets/gallery/tahial-hoodie-orange.jpeg'
    },
    {
        id: 15,
        nombre: 'Hoodie Cóndor Morado',
        categoria: 'morado',
        etiqueta: 'hoodie · morado',
        precio: 120000,
        envio: true,
        descripcion: 'Morado profundo con carácter y presencia de marca única.',
        tallas: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        imagen: 'assets/gallery/tahial-hoodie-purple.jpeg'
    },
    {
        id: 16,
        nombre: 'Hoodie Flor Rosado',
        categoria: 'rosado',
        etiqueta: 'hoodie · rosado',
        precio: 120000,
        envio: true,
        descripcion: 'Rosado vibrante con personalidad fuerte para escalar con estilo.',
        tallas: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        imagen: 'assets/gallery/tahial-hoodie-pink.jpeg'
    },
    {
        id: 17,
        nombre: 'Hoodie Roca Gris',
        categoria: 'gris',
        etiqueta: 'hoodie · gris',
        precio: 120000,
        envio: true,
        descripcion: 'Gris clásico y versátil para cualquier terreno y cualquier look.',
        tallas: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        imagen: 'assets/gallery/tahial-hoodie-gray.jpeg'
    },
    {
        id: 18,
        nombre: 'Hoodie Nieve Blanco',
        categoria: 'blanco',
        etiqueta: 'hoodie · blanco',
        precio: 120000,
        envio: true,
        descripcion: 'Blanco limpio con máxima lectura del logo Tahial Climbing.',
        tallas: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        imagen: 'assets/gallery/tahial-hoodie-white.jpeg'
    },
    {
        id: 5,
        nombre: 'Camiseta Suesca Black',
        categoria: 'negro',
        etiqueta: 'camiseta · negro',
        precio: 85000,
        envio: true,
        descripcion: 'Camiseta técnica negra de uso diario y entrenamiento.',
        tallas: ['8', '10', '12', '14', '16', 'XS', 'S', 'M', 'L', 'XL', 'XXL'],
        imagen: 'assets/products/tshirt-black.jpeg',
        imagenFallback: 'assets/products/hoodie-black.jpeg'
    },
    {
        id: 6,
        nombre: 'Camiseta Farallón Green',
        categoria: 'verde',
        etiqueta: 'camiseta · verde',
        precio: 85000,
        envio: true,
        descripcion: 'Camiseta verde con identidad Tahial para muro y ciudad.',
        tallas: ['8', '10', '12', '14', '16', 'XS', 'S', 'M', 'L', 'XL', 'XXL'],
        imagen: 'assets/products/tshirt-green.jpeg',
        imagenFallback: 'assets/products/hoodie-green.jpeg'
    },
    {
        id: 7,
        nombre: 'Camiseta Cumbre Dorada',
        categoria: 'amarillo',
        etiqueta: 'camiseta · amarillo',
        precio: 85000,
        envio: true,
        descripcion: 'Camiseta amarilla insignia de la marca con máxima visibilidad.',
        tallas: ['8', '10', '12', '14', '16', 'XS', 'S', 'M', 'L', 'XL', 'XXL'],
        imagen: 'assets/products/tshirt-yellow.jpeg',
        imagenFallback: 'assets/products/hoodie-yellow.jpeg'
    },
    {
        id: 8,
        nombre: 'Camiseta Magma Red',
        categoria: 'rojo',
        etiqueta: 'camiseta · rojo',
        precio: 85000,
        envio: true,
        descripcion: 'Camiseta roja de alto impacto visual para colección deportiva.',
        tallas: ['8', '10', '12', '14', '16', 'XS', 'S', 'M', 'L', 'XL', 'XXL'],
        imagen: 'assets/products/tshirt-red.jpeg',
        imagenFallback: 'assets/products/hoodie-red.jpeg'
    },
    {
        id: 9,
        nombre: 'Gorra Arena Beige',
        categoria: 'beige',
        etiqueta: 'gorra · beige',
        precio: 79000,
        envio: true,
        descripcion: 'Gorra beige con tono neutro y elegancia outdoor para cualquier ocasión.',
        tallas: ['Única'],
        imagen: 'WhatsApp Image 2026-04-19 at 3.47.54 PM.jpeg'
    },
    {
        id: 10,
        nombre: 'Gorra Farallón Green',
        categoria: 'verde',
        etiqueta: 'gorra · verde',
        precio: 79000,
        envio: true,
        descripcion: 'Gorra ajustable verde con identidad Tahial para días outdoor y enfoque deportivo.',
        tallas: ['Única'],
        imagen: 'WhatsApp Image 2026-04-19 at 3.47.53 PM (2) - Copy.jpeg'
    },
    {
        id: 11,
        nombre: 'Gorra Cumbre Dorada',
        categoria: 'amarillo',
        etiqueta: 'gorra · amarillo',
        precio: 79000,
        envio: true,
        descripcion: 'Gorra ajustable amarilla insignia: máxima visibilidad y presencia de marca.',
        tallas: ['Única'],
        imagen: 'WhatsApp Image 2026-04-19 at 3.47.55 PM - Copy.jpeg'
    },
    {
        id: 12,
        nombre: 'Gorra Cielo Azul',
        categoria: 'azul',
        etiqueta: 'gorra · azul',
        precio: 79000,
        envio: true,
        descripcion: 'Gorra azul royal con presencia fuerte y energía de expedición.',
        tallas: ['Única'],
        imagen: 'WhatsApp Image 2026-04-19 at 3.47.56 PM - Copy.jpeg'
    },
    {
        id: 25,
        nombre: 'Gorra Cóndor Morado',
        categoria: 'morado',
        etiqueta: 'gorra · morado',
        precio: 79000,
        envio: true,
        descripcion: 'Gorra morada con carácter y presencia de marca única.',
        tallas: ['Única'],
        imagen: 'WhatsApp Image 2026-04-19 at 3.47.57 PM.jpeg'
    },
    {
        id: 26,
        nombre: 'Gorra Flor Rosado',
        categoria: 'rosado',
        etiqueta: 'gorra · rosado',
        precio: 79000,
        envio: true,
        descripcion: 'Gorra rosada vibrante con personalidad fuerte para escalar con estilo.',
        tallas: ['Única'],
        imagen: 'WhatsApp Image 2026-04-19 at 3.47.58 PM.jpeg'
    },
    {
        id: 27,
        nombre: 'Gorra Roca Gris',
        categoria: 'gris',
        etiqueta: 'gorra · gris',
        precio: 79000,
        envio: true,
        descripcion: 'Gorra gris clásica y versátil para cualquier terreno y cualquier look.',
        tallas: ['Única'],
        imagen: 'WhatsApp Image 2026-04-19 at 3.48.01 PM (1) - Copy.jpeg'
    },
    {
        id: 28,
        nombre: 'Gorra Nieve Blanco',
        categoria: 'blanco',
        etiqueta: 'gorra · blanco',
        precio: 79000,
        envio: true,
        descripcion: 'Gorra blanca limpia con máxima lectura del logo Tahial Climbing.',
        tallas: ['Única'],
        imagen: 'WhatsApp Image 2026-04-19 at 3.48.01 PM.jpeg'
    },
    {
        id: 29,
        nombre: 'Gorra Suesca Black',
        categoria: 'negro',
        etiqueta: 'gorra · negro',
        precio: 79000,
        envio: true,
        descripcion: 'Gorra ajustable en negro con look limpio para muro, calle y viaje.',
        tallas: ['Única'],
        imagen: 'WhatsApp Image 2026-04-19 at 3.48.02 PM.jpeg'
    },
    {
        id: 30,
        nombre: 'Gorra Magma Red',
        categoria: 'rojo',
        etiqueta: 'gorra · rojo',
        precio: 79000,
        envio: true,
        descripcion: 'Gorra ajustable roja de alto impacto visual para drops y looks deportivos.',
        tallas: ['Única'],
        imagen: 'WhatsApp Image 2026-04-19 at 3.47.53 PM (1) - Copy.jpeg'
    }
];

let carrito = [];

const productosGrid = document.getElementById('productos-grid');
const filtros = document.querySelectorAll('.filter-btn');
const cartButton = document.getElementById('open-cart');
const cartModal = document.getElementById('carrito-modal');
const closeCart = document.getElementById('close-cart');
const cartItems = document.getElementById('carrito-items');
const totalPrecio = document.getElementById('total-precio');
const cartCount = document.querySelector('.cart-count');
const checkoutBtn = document.getElementById('checkout-btn');
const contactForm = document.getElementById('contact-form');
const heroSlides = document.querySelectorAll('.hero-slide');
const galleryImages = document.querySelectorAll('.js-gallery-image');
const lightbox = document.getElementById('gallery-lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxClose = document.getElementById('lightbox-close');
const menuToggle = document.getElementById('menu-toggle');
const siteNav = document.getElementById('site-nav');
const navLinks = document.querySelectorAll('.nav-link');
const videos = document.querySelectorAll('.video-card video');
const copySiteLinkBtn = document.getElementById('copy-site-link');
const shareSiteBtn = document.getElementById('share-site');
const siteUrl = 'https://tahialclimbing.com/';
const hoodiePreviewImage = document.getElementById('hoodie-preview-image');
const hoodiePreviewTitle = document.getElementById('hoodie-preview-title');
const hoodiePreviewDesc = document.getElementById('hoodie-preview-desc');
const hoodiePreviewPrice = document.getElementById('hoodie-preview-price');
const hoodieColorButtons = document.querySelectorAll('.hoodie-color-btn');
const capPreviewImage = document.getElementById('cap-preview-image');
const capPreviewTitle = document.getElementById('cap-preview-title');
const capPreviewDesc = document.getElementById('cap-preview-desc');
const capPreviewPrice = document.getElementById('cap-preview-price');
const capColorButtons = document.querySelectorAll('.cap-color-btn');

function formatoCOP(valor) {
    return valor.toLocaleString('es-CO');
}

function obtenerHoodiePorColor(color) {
    return productos.find(item => item.etiqueta?.includes('hoodie') && item.categoria === color);
}

function actualizarPreviewHoodie(color = 'negro') {
    const hoodie = obtenerHoodiePorColor(color) || obtenerHoodiePorColor('negro');

    if (!hoodie || !hoodiePreviewImage) {
        return;
    }

    hoodiePreviewImage.src = hoodie.imagen;
    hoodiePreviewImage.alt = `${hoodie.nombre} · Tahial Climbing`;

    if (hoodiePreviewTitle) hoodiePreviewTitle.textContent = hoodie.nombre;
    if (hoodiePreviewDesc) hoodiePreviewDesc.textContent = hoodie.descripcion;
    if (hoodiePreviewPrice) hoodiePreviewPrice.textContent = `$${formatoCOP(hoodie.precio)}`;

    hoodieColorButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.hoodieColor === hoodie.categoria);
    });
}

function activarPreviewHoodie() {
    if (!hoodieColorButtons.length) {
        return;
    }

    hoodieColorButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const color = btn.dataset.hoodieColor;
            actualizarPreviewHoodie(color);

            filtros.forEach(item => item.classList.toggle('active', item.dataset.filter === color));
            renderProductos(color);
        });
    });
}

function obtenerGorraPorColor(color) {
    return productos.find(item => item.etiqueta?.includes('gorra') && item.categoria === color);
}

function actualizarPreviewCap(color = 'beige') {
    const gorra = obtenerGorraPorColor(color) || obtenerGorraPorColor('beige');

    if (!gorra || !capPreviewImage) {
        return;
    }

    capPreviewImage.src = gorra.imagen;
    capPreviewImage.alt = `${gorra.nombre} · Tahial Climbing`;

    if (capPreviewTitle) capPreviewTitle.textContent = gorra.nombre;
    if (capPreviewDesc) capPreviewDesc.textContent = gorra.descripcion;
    if (capPreviewPrice) capPreviewPrice.textContent = `$${formatoCOP(gorra.precio)}`;

    capColorButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.capColor === gorra.categoria);
    });
}

function activarPreviewCap() {
    if (!capColorButtons.length) {
        return;
    }

    capColorButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const color = btn.dataset.capColor;
            actualizarPreviewCap(color);
        });
    });
}

function renderProductos(categoria = 'todos') {
    productosGrid.innerHTML = '';
    const lista = categoria === 'todos' ? productos : productos.filter(item => item.categoria === categoria);

    lista.forEach(producto => {
        const card = document.createElement('article');
        card.className = `product-card product-${producto.categoria} reveal`;
        const imagenProducto = !producto.imagen
            ? `
            <div class="product-image product-image-placeholder" aria-label="Imagen en actualización">
                <span>Imagen en actualización</span>
            </div>
            `
            : producto.imagenFallback
            ? `
            <img class="product-image" src="${producto.imagen}" alt="${producto.nombre}" loading="lazy" decoding="async" onerror="this.onerror=null;this.src='${producto.imagenFallback}'">
            `
            : `
            <img class="product-image" src="${producto.imagen}" alt="${producto.nombre}" loading="lazy" decoding="async">
            `;
        card.innerHTML = `
            ${imagenProducto}
            <div class="product-body">
                <p class="product-category">${producto.etiqueta || producto.categoria}</p>
                <h3 class="product-title">${producto.nombre}</h3>
                <p class="product-desc">${producto.descripcion}</p>
                <div class="product-sizes">
                    ${(producto.tallas || []).map(talla => `<span class="size-chip">${talla}</span>`).join('')}
                </div>
                <div class="product-footer">
                    <div class="price-block">
                        <span class="price">$${formatoCOP(producto.precio)}</span>
                        ${producto.envio ? '<span class="envio-badge">✈ envío incluido</span>' : ''}
                    </div>
                    <button class="add-btn" data-id="${producto.id}">Agregar</button>
                </div>
            </div>
        `;

        productosGrid.appendChild(card);
    });

    document.querySelectorAll('.add-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = Number(btn.dataset.id);
            agregarAlCarrito(id);
        });
    });

    activarReveal();
}

function agregarAlCarrito(id) {
    const producto = productos.find(item => item.id === id);
    if (!producto) {
        return;
    }

    const existente = carrito.find(item => item.id === id);
    if (existente) {
        existente.cantidad += 1;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }

    actualizarCarrito();
    mostrarNotificacion('Producto agregado al carrito');
}

function actualizarCarrito() {
    cartCount.textContent = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    localStorage.setItem('tahial-carrito', JSON.stringify(carrito));
}

function renderCarrito() {
    if (carrito.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Tu carrito está vacío.</p>';
        totalPrecio.textContent = '0';
        return;
    }

    cartItems.innerHTML = carrito.map((item, index) => `
        <div class="cart-item">
            <div>
                <strong>${item.nombre}</strong>
                <p>Cantidad: ${item.cantidad}</p>
                <p>$${formatoCOP(item.precio * item.cantidad)}</p>
            </div>
            <button class="remove-btn" data-index="${index}">Quitar</button>
        </div>
    `).join('');

    document.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const index = Number(btn.dataset.index);
            carrito.splice(index, 1);
            actualizarCarrito();
            renderCarrito();
        });
    });

    const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
    totalPrecio.textContent = formatoCOP(total);
}

function abrirCarrito() {
    renderCarrito();
    cartModal.classList.add('show');
    cartModal.setAttribute('aria-hidden', 'false');
}

function cerrarCarrito() {
    cartModal.classList.remove('show');
    cartModal.setAttribute('aria-hidden', 'true');
}

function activarFiltros() {
    filtros.forEach(btn => {
        btn.addEventListener('click', () => {
            filtros.forEach(item => item.classList.remove('active'));
            btn.classList.add('active');
            if (btn.dataset.filter !== 'todos') {
                actualizarPreviewHoodie(btn.dataset.filter);
            }
            renderProductos(btn.dataset.filter);
        });
    });
}

function activarReveal() {
    const elements = document.querySelectorAll('.reveal');

    if (!('IntersectionObserver' in window)) {
        elements.forEach(el => el.classList.add('is-visible'));
        return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));
}

function mostrarNotificacion(mensaje) {
    const div = document.createElement('div');
    div.textContent = mensaje;
    div.style.cssText = `
        position: fixed;
        right: 20px;
        top: 90px;
        background: #16923c;
        color: #111;
        padding: 10px 16px;
        border-radius: 999px;
        font-weight: 700;
        z-index: 2000;
        box-shadow: 0 8px 25px rgba(0,0,0,.35);
    `;
    document.body.appendChild(div);
    setTimeout(() => div.remove(), 1800);
}

function cargarCarritoLocal() {
    const data = localStorage.getItem('tahial-carrito');
    if (!data) {
        return;
    }

    try {
        carrito = JSON.parse(data);
        if (!Array.isArray(carrito)) {
            carrito = [];
        }
    } catch {
        carrito = [];
    }

    actualizarCarrito();
}

function activarEventosBase() {
    cartButton.addEventListener('click', abrirCarrito);
    closeCart.addEventListener('click', cerrarCarrito);
    cartModal.addEventListener('click', event => {
        if (event.target === cartModal) {
            cerrarCarrito();
        }
    });

    checkoutBtn.addEventListener('click', () => {
        if (carrito.length === 0) {
            mostrarNotificacion('Tu carrito está vacío');
            return;
        }
        mostrarNotificacion('Pedido enviado. Te contactaremos pronto.');
        carrito = [];
        actualizarCarrito();
        renderCarrito();
    });

    if (contactForm) {
        contactForm.addEventListener('submit', event => {
            event.preventDefault();
            mostrarNotificacion('Mensaje enviado correctamente');
            contactForm.reset();
        });
    }

    if (copySiteLinkBtn) {
        copySiteLinkBtn.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(siteUrl);
                mostrarNotificacion('Link copiado');
            } catch {
                mostrarNotificacion('No se pudo copiar el link');
            }
        });
    }

    if (shareSiteBtn) {
        if (navigator.share) {
            shareSiteBtn.addEventListener('click', async () => {
                try {
                    await navigator.share({
                        title: 'Tahial Climbing',
                        text: 'Mira la web oficial de Tahial Climbing',
                        url: siteUrl
                    });
                } catch {
                    // no-op
                }
            });
        } else {
            shareSiteBtn.addEventListener('click', async () => {
                try {
                    await navigator.clipboard.writeText(siteUrl);
                    mostrarNotificacion('Link copiado para compartir');
                } catch {
                    mostrarNotificacion('No se pudo compartir');
                }
            });
        }
    }
}

function activarMenuMovil() {
    if (!menuToggle || !siteNav) {
        return;
    }

    const cerrarMenu = () => {
        siteNav.classList.remove('is-open');
        menuToggle.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
    };

    menuToggle.addEventListener('click', () => {
        const abierto = siteNav.classList.toggle('is-open');
        menuToggle.classList.toggle('is-open', abierto);
        menuToggle.setAttribute('aria-expanded', abierto ? 'true' : 'false');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 760) {
                cerrarMenu();
            }
        });
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 760) {
            cerrarMenu();
        }
    });
}

function aplicarFallbackImagenes() {
    const imagesWithFallback = document.querySelectorAll('img[data-fallback]');
    const applyFallback = (image) => {
        const fallback = image.dataset.fallback;
        if (fallback && image.src !== fallback) {
            image.src = fallback;
        }
    };

    imagesWithFallback.forEach(image => {
        image.addEventListener('error', () => {
            applyFallback(image);
        }, { once: true });

        if (image.complete && image.naturalWidth === 0) {
            applyFallback(image);
        }
    });

    window.setTimeout(() => {
        imagesWithFallback.forEach(image => {
            if (image.complete && image.naturalWidth === 0) {
                applyFallback(image);
            }
        });
    }, 300);
}

function activarHeroSlider() {
    if (heroSlides.length <= 1) {
        return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
    }

    let activeIndex = 0;
    setInterval(() => {
        heroSlides[activeIndex].classList.remove('active');
        activeIndex = (activeIndex + 1) % heroSlides.length;
        heroSlides[activeIndex].classList.add('active');
    }, 5200);
}

function activarVideosVisibles() {
    if (!videos.length) {
        return;
    }

    videos.forEach(video => {
        video.muted = true;
        video.playsInline = true;
    });

    if (!('IntersectionObserver' in window)) {
        videos.forEach(video => {
            video.play().catch(() => {});
        });
        return;
    }

    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target;
            if (entry.isIntersecting) {
                video.play().catch(() => {});
            } else {
                video.pause();
            }
        });
    }, { threshold: 0.35 });

    videos.forEach(video => videoObserver.observe(video));
}

function activarLightbox() {
    if (!lightbox || !lightboxImage || !lightboxClose) {
        return;
    }

    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            lightboxImage.src = image.currentSrc || image.src;
            lightboxImage.alt = image.alt;
            lightbox.classList.add('show');
            lightbox.setAttribute('aria-hidden', 'false');
        });
    });

    lightboxClose.addEventListener('click', () => {
        lightbox.classList.remove('show');
        lightbox.setAttribute('aria-hidden', 'true');
    });

    lightbox.addEventListener('click', event => {
        if (event.target === lightbox) {
            lightbox.classList.remove('show');
            lightbox.setAttribute('aria-hidden', 'true');
        }
    });

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && lightbox.classList.contains('show')) {
            lightbox.classList.remove('show');
            lightbox.setAttribute('aria-hidden', 'true');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    cargarCarritoLocal();
    activarEventosBase();
    activarMenuMovil();
    activarFiltros();
    activarPreviewHoodie();
    activarPreviewCap();
    renderProductos();
    actualizarPreviewHoodie('negro');
    actualizarPreviewCap('negro');
    activarReveal();
    aplicarFallbackImagenes();
    activarHeroSlider();
    activarVideosVisibles();
    activarLightbox();
});
