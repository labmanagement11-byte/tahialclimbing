const productos = [
    {
        id: 1,
        nombre: 'Hoodie Suesca Black',
        categoria: 'negro',
        etiqueta: 'hoodie · negro',
        precio: 189000,
        descripcion: 'Hoodie premium en negro con presencia limpia, fuerte y enfoque de escalada urbana.',
        tallas: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        imagen: 'assets/products/hoodie-black.jpeg'
    },
    {
        id: 2,
        nombre: 'Hoodie Farallón Green',
        categoria: 'verde',
        etiqueta: 'hoodie · verde',
        precio: 189000,
        descripcion: 'Versión verde de alto contraste con identidad outdoor y lectura potente del logo.',
        tallas: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        imagen: 'assets/products/hoodie-green.jpeg'
    },
    {
        id: 3,
        nombre: 'Hoodie Cumbre Dorada',
        categoria: 'amarillo',
        etiqueta: 'hoodie · amarillo',
        precio: 189000,
        descripcion: 'Color insignia de la marca para máxima visibilidad y una presencia comercial potente.',
        tallas: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        imagen: 'assets/products/hoodie-yellow.jpeg'
    },
    {
        id: 4,
        nombre: 'Hoodie Magma Red',
        categoria: 'rojo',
        etiqueta: 'hoodie · rojo',
        precio: 189000,
        descripcion: 'Edición roja con presencia intensa para campañas visuales y drops especiales.',
        tallas: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        imagen: 'assets/products/hoodie-red.jpeg'
    },
    {
        id: 5,
        nombre: 'Camiseta Suesca Black',
        categoria: 'negro',
        etiqueta: 'camiseta · negro',
        precio: 89000,
        descripcion: 'Camiseta técnica negra de uso diario y entrenamiento.',
        tallas: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        imagen: 'assets/products/tshirt-black.jpeg',
        imagenFallback: 'assets/products/hoodie-black.jpeg'
    },
    {
        id: 6,
        nombre: 'Camiseta Farallón Green',
        categoria: 'verde',
        etiqueta: 'camiseta · verde',
        precio: 89000,
        descripcion: 'Camiseta verde con identidad Tahial para muro y ciudad.',
        tallas: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        imagen: 'assets/products/tshirt-green.jpeg',
        imagenFallback: 'assets/products/hoodie-green.jpeg'
    },
    {
        id: 7,
        nombre: 'Camiseta Cumbre Dorada',
        categoria: 'amarillo',
        etiqueta: 'camiseta · amarillo',
        precio: 89000,
        descripcion: 'Camiseta amarilla insignia de la marca con máxima visibilidad.',
        tallas: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        imagen: 'assets/products/tshirt-yellow.jpeg',
        imagenFallback: 'assets/products/hoodie-yellow.jpeg'
    },
    {
        id: 8,
        nombre: 'Camiseta Magma Red',
        categoria: 'rojo',
        etiqueta: 'camiseta · rojo',
        precio: 89000,
        descripcion: 'Camiseta roja de alto impacto visual para colección deportiva.',
        tallas: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        imagen: 'assets/products/tshirt-red.jpeg',
        imagenFallback: 'assets/products/hoodie-red.jpeg'
    },
    {
        id: 9,
        nombre: 'Gorra Suesca Black',
        categoria: 'negro',
        etiqueta: 'gorra · negro',
        precio: 79000,
        descripcion: 'Gorra ajustable en negro con look limpio para muro, calle y viaje.',
        tallas: ['Única'],
        imagen: 'assets/products/cap-black.jpeg'
    },
    {
        id: 10,
        nombre: 'Gorra Farallón Green',
        categoria: 'verde',
        etiqueta: 'gorra · verde',
        precio: 79000,
        descripcion: 'Gorra ajustable verde con identidad Tahial para días outdoor y enfoque deportivo.',
        tallas: ['Única'],
        imagen: 'assets/products/cap-green.jpeg'
    },
    {
        id: 11,
        nombre: 'Gorra Cumbre Dorada',
        categoria: 'amarillo',
        etiqueta: 'gorra · amarillo',
        precio: 79000,
        descripcion: 'Gorra ajustable amarilla insignia: máxima visibilidad y presencia de marca.',
        tallas: ['Única'],
        imagen: 'assets/products/cap-yellow.jpeg'
    },
    {
        id: 12,
        nombre: 'Gorra Magma Red',
        categoria: 'rojo',
        etiqueta: 'gorra · rojo',
        precio: 79000,
        descripcion: 'Gorra ajustable roja de alto impacto visual para drops y looks deportivos.',
        tallas: ['Única'],
        imagen: 'assets/products/cap-red.jpeg'
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

function formatoCOP(valor) {
    return valor.toLocaleString('es-CO');
}

function renderProductos(categoria = 'todos') {
    productosGrid.innerHTML = '';
    const lista = categoria === 'todos' ? productos : productos.filter(item => item.categoria === categoria);

    lista.forEach(producto => {
        const card = document.createElement('article');
        card.className = 'product-card reveal';
        const imagenProducto = producto.imagenFallback
            ? `
            <img class="product-image" src="${producto.imagen}" alt="${producto.nombre}" onerror="this.onerror=null;this.src='${producto.imagenFallback}'">
            `
            : `
            <img class="product-image" src="${producto.imagen}" alt="${producto.nombre}">
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
                    <span class="price">$${formatoCOP(producto.precio)}</span>
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

    let activeIndex = 0;
    setInterval(() => {
        heroSlides[activeIndex].classList.remove('active');
        activeIndex = (activeIndex + 1) % heroSlides.length;
        heroSlides[activeIndex].classList.add('active');
    }, 5200);
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
    activarFiltros();
    renderProductos();
    activarReveal();
    aplicarFallbackImagenes();
    activarHeroSlider();
    activarLightbox();
});
