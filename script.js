const productos = [
    {
        id: 1,
        nombre: 'Hoodie Suesca Black',
        categoria: 'negro',
        etiqueta: 'hoodie · negro',
        precio: 120000,
        envio: true,
        descripcion: 'Hoodie en negro con energía de entrenamiento real y una historia que sigue creciendo sobre el muro.',
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
        descripcion: 'Versión verde conectada con roca, montaña y sesiones donde el esfuerzo sí se ve.',
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
        descripcion: 'Color insignia del sueño Tahial, pensado para destacar dentro y fuera del muro.',
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
        descripcion: 'Edición roja con fuerza visual para días intensos, viajes y sesiones que dejan huella.',
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
        descripcion: 'Azul de expedición para una historia que quiere seguir escalando mucho más alto.',
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
        descripcion: 'Naranja de alto impacto para entrenar, moverse y no pasar desapercibido.',
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
        descripcion: 'Morado profundo con carácter propio y personalidad de cordillera.',
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
        descripcion: 'Rosado vibrante para una colección que no teme mostrar alegría y carácter.',
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
        descripcion: 'Gris clásico para días de pared, viaje y entrenamiento sin perder identidad.',
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
        descripcion: 'Blanco limpio para que el logo y la historia respiren con toda claridad.',
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
        descripcion: 'Camiseta pensada para acompañar entrenamientos, viajes y días reales de escalada.',
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
        descripcion: 'Camiseta verde para llevar la historia Tahial desde el muro hasta la calle.',
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
        descripcion: 'La camiseta del sueño amarillo: visible, emocional y fácil de reconocer.',
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
        descripcion: 'Camiseta roja con impacto visual y energía para acompañar el proceso completo.',
        tallas: ['8', '10', '12', '14', '16', 'XS', 'S', 'M', 'L', 'XL', 'XXL'],
        imagen: 'assets/products/tshirt-red.jpeg',
        imagenFallback: 'assets/products/hoodie-red.jpeg'
    },
    {
        id: 9,
        nombre: 'Gorra Sueño Arena',
        categoria: 'beige',
        etiqueta: 'gorra · beige',
        precio: 79000,
        envio: true,
        descripcion: 'Gorra beige para acompañar entrenamientos, viajes y días de pared con una lectura limpia de la marca.',
        tallas: ['Única'],
        imagen: 'assets/caps/cap-beige.jpeg'
    },
    {
        id: 10,
        nombre: 'Gorra Ruta Verde',
        categoria: 'verde',
        etiqueta: 'gorra · verde',
        precio: 79000,
        envio: true,
        descripcion: 'Gorra verde para rutas largas, entrenamiento outdoor y días de movimiento constante.',
        tallas: ['Única'],
        imagen: 'assets/caps/cap-green.jpeg'
    },
    {
        id: 11,
        nombre: 'Gorra Sueño Amarillo',
        categoria: 'amarillo',
        etiqueta: 'gorra · amarillo',
        precio: 79000,
        envio: true,
        descripcion: 'La gorra del sueño amarillo: visible, luminosa y cargada de identidad Tahial.',
        tallas: ['Única'],
        imagen: 'assets/caps/cap-yellow.jpeg'
    },
    {
        id: 12,
        nombre: 'Gorra Cielo Azul',
        categoria: 'azul',
        etiqueta: 'gorra · azul',
        precio: 79000,
        envio: true,
        descripcion: 'Azul de expedición para días de viaje, entrenamiento y metas grandes.',
        tallas: ['Única'],
        imagen: 'assets/caps/cap-blue.jpeg'
    },
    {
        id: 25,
        nombre: 'Gorra Eco Morado',
        categoria: 'morado',
        etiqueta: 'gorra · morado',
        precio: 79000,
        envio: true,
        descripcion: 'Morado con carácter para una marca que quiere dejar huella propia.',
        tallas: ['Única'],
        imagen: 'assets/caps/cap-purple.jpeg'
    },
    {
        id: 26,
        nombre: 'Gorra Brillo Rosado',
        categoria: 'rosado',
        etiqueta: 'gorra · rosado',
        precio: 79000,
        envio: true,
        descripcion: 'Rosado vibrante para sumar alegría, estilo y personalidad a la historia.',
        tallas: ['Única'],
        imagen: 'assets/caps/cap-pink.jpeg'
    },
    {
        id: 27,
        nombre: 'Gorra Piedra Gris',
        categoria: 'gris',
        etiqueta: 'gorra · gris',
        precio: 79000,
        envio: true,
        descripcion: 'Gris sobrio para combinar con cualquier sesión sin perder identidad.',
        tallas: ['Única'],
        imagen: 'assets/caps/cap-gray.jpeg'
    },
    {
        id: 28,
        nombre: 'Gorra Nube Blanca',
        categoria: 'blanco',
        etiqueta: 'gorra · blanco',
        precio: 79000,
        envio: true,
        descripcion: 'Blanco limpio para dejar que el logo y la historia sean los protagonistas.',
        tallas: ['Única'],
        imagen: 'assets/caps/cap-white.jpeg'
    },
    {
        id: 29,
        nombre: 'Gorra Fuerza Negra',
        categoria: 'negro',
        etiqueta: 'gorra · negro',
        precio: 79000,
        envio: true,
        descripcion: 'Negro fuerte para muro, calle y viaje con una estética sólida y directa.',
        tallas: ['Única'],
        imagen: 'assets/caps/cap-black.jpeg'
    },
    {
        id: 30,
        nombre: 'Gorra Impulso Rojo',
        categoria: 'rojo',
        etiqueta: 'gorra · rojo',
        precio: 79000,
        envio: true,
        descripcion: 'Rojo de impulso para una colección que quiere sentirse viva y en movimiento.',
        tallas: ['Única'],
        imagen: 'assets/caps/cap-red.jpeg'
    }
];

const productTranslations = {
    en: {
        1: {
            etiqueta: 'hoodie · black',
            descripcion: 'Black hoodie with real training energy and a story still growing on the wall.'
        },
        2: {
            etiqueta: 'hoodie · green',
            descripcion: 'Green edition connected to rock, mountains, and sessions where effort is visible.'
        },
        3: {
            etiqueta: 'hoodie · yellow',
            descripcion: 'The signature dream color, made to stand out on and off the wall.'
        },
        4: {
            etiqueta: 'hoodie · red',
            descripcion: 'Red edition with bold energy for intense days, travel, and sessions that leave a mark.'
        },
        13: {
            etiqueta: 'hoodie · blue',
            descripcion: 'Expedition blue for a story that wants to keep climbing much higher.'
        },
        14: {
            etiqueta: 'hoodie · orange',
            descripcion: 'High-impact orange for training, movement, and standing out.'
        },
        15: {
            etiqueta: 'hoodie · purple',
            descripcion: 'Deep purple with a distinct character and mountain spirit.'
        },
        16: {
            etiqueta: 'hoodie · pink',
            descripcion: 'Bright pink for a collection unafraid to show joy and character.'
        },
        17: {
            etiqueta: 'hoodie · gray',
            descripcion: 'Classic gray for wall days, travel, and training without losing identity.'
        },
        18: {
            etiqueta: 'hoodie · white',
            descripcion: 'Clean white so the logo and the story can breathe clearly.'
        },
        5: {
            etiqueta: 't-shirt · black',
            descripcion: 'A t-shirt made for training, travel, and real climbing days.'
        },
        6: {
            etiqueta: 't-shirt · green',
            descripcion: 'Green tee to carry the Tahial story from the wall into the street.'
        },
        7: {
            etiqueta: 't-shirt · yellow',
            descripcion: 'The yellow dream tee: visible, emotional, and easy to recognize.'
        },
        8: {
            etiqueta: 't-shirt · red',
            descripcion: 'Red tee with impact and energy to follow the whole journey.'
        },
        9: {
            nombre: 'Sand Dream Cap',
            etiqueta: 'cap · beige',
            descripcion: 'Beige cap for training, travel, and wall days with a clean brand read.'
        },
        10: {
            nombre: 'Green Route Cap',
            etiqueta: 'cap · green',
            descripcion: 'Green cap for long routes, outdoor training, and days in motion.'
        },
        11: {
            nombre: 'Yellow Dream Cap',
            etiqueta: 'cap · yellow',
            descripcion: 'The yellow dream cap: bright, visible, and full of Tahial identity.'
        },
        12: {
            nombre: 'Blue Sky Cap',
            etiqueta: 'cap · blue',
            descripcion: 'Expedition blue for travel days, training, and big goals.'
        },
        25: {
            nombre: 'Purple Echo Cap',
            etiqueta: 'cap · purple',
            descripcion: 'Purple with character for a brand that wants to leave its own mark.'
        },
        26: {
            nombre: 'Pink Glow Cap',
            etiqueta: 'cap · pink',
            descripcion: 'Bright pink to add joy, style, and personality to the story.'
        },
        27: {
            nombre: 'Stone Gray Cap',
            etiqueta: 'cap · gray',
            descripcion: 'A restrained gray that works with any session without losing identity.'
        },
        28: {
            nombre: 'White Cloud Cap',
            etiqueta: 'cap · white',
            descripcion: 'Clean white to let the logo and the story lead.'
        },
        29: {
            nombre: 'Black Strength Cap',
            etiqueta: 'cap · black',
            descripcion: 'Strong black for wall, street, and travel with a direct solid look.'
        },
        30: {
            nombre: 'Red Momentum Cap',
            etiqueta: 'cap · red',
            descripcion: 'A red impulse for a collection that wants to feel alive and moving.'
        }
    }
};

const colorLabels = {
    negro: { es: 'Negro', en: 'Black' },
    verde: { es: 'Verde', en: 'Green' },
    azul: { es: 'Azul', en: 'Blue' },
    naranja: { es: 'Naranja', en: 'Orange' },
    morado: { es: 'Morado', en: 'Purple' },
    amarillo: { es: 'Amarillo', en: 'Yellow' },
    rosado: { es: 'Rosado', en: 'Pink' },
    gris: { es: 'Gris', en: 'Gray' },
    blanco: { es: 'Blanco', en: 'White' },
    rojo: { es: 'Rojo', en: 'Red' },
    beige: { es: 'Beige', en: 'Beige' }
};

const uiText = {
    es: {
        title: 'Tahial Climbing | Escalada de Montaña Colombiana',
        menuLabel: 'Abrir menú',
        cartLabel: 'Abrir carrito',
        languageSelector: 'Selector de idioma',
        selectors: [
            ['.nav-link[href="#inicio"]', 'Inicio'],
            ['.nav-link[href="#historia"]', 'Historia'],
            ['.nav-link[href="#coleccion"]', 'Colección'],
            ['.nav-link[href="#videos"]', 'Videos'],
            ['.nav-link[href="#lookbook"]', 'Cordillera'],
            ['.nav-link[href="#redes"]', 'Redes'],
            ['.nav-link[href="#contacto"]', 'Contacto'],
            ['.hero-content .eyebrow', 'TAHIAL CLIMBING · COLOMBIA'],
            ['.hero-content h1', 'Un niño. Un sueño. Una historia que está escalando el mundo 💛'],
            ['.hero-text', 'Diseñado para bloque, deportiva y montaña con identidad local, carácter fuerte y enfoque técnico.'],
            ['.hero-actions .btn-primary', 'Ver colección'],
            ['.hero-actions .btn-ghost', 'Ver campaña en video'],
            ['.story-banner .eyebrow', 'FOTOS REALES DE TAHIAL'],
            ['.story-banner h2', 'Cada prenda nace en la pared'],
            ['.story-banner p:last-child', 'Estas imágenes no buscan verse perfectas. Buscan mostrar de dónde sale esta marca: entrenamiento, roca, esfuerzo y una historia real que todavía se está escribiendo.'],
            ['.highlight-card:nth-child(1) h3', 'Movimiento en roca'],
            ['.highlight-card:nth-child(1) p', 'Prendas hechas para tracción, movilidad total y sesiones largas sobre pared real.'],
            ['.highlight-card:nth-child(2) h3', 'Territorio vertical'],
            ['.highlight-card:nth-child(2) p', 'Roca y montaña real para una identidad de escalada nacida en Colombia.'],
            ['.highlight-card:nth-child(3) h3', 'La ropa se prueba donde importa'],
            ['.highlight-card:nth-child(3) p', 'Colección oficial pensada para muro, roca y entrenamiento real, con tallas desde niño hasta adulto.'],
            ['.story-copy .eyebrow', 'QUIÉN ES TAHIAL'],
            ['.story-copy h2', 'Un niño colombiano que está convirtiendo la escalada en su camino'],
            ['.story-copy p:nth-of-type(2)', 'Tahial no es una marca inventada desde un escritorio. Es un niño que entrena, cae, vuelve a intentarlo y sueña con llevar su historia mucho más lejos que el muro donde empezó.'],
            ['.story-copy p:nth-of-type(3)', 'Cada prenda nace cerca de ese proceso: horas de entrenamiento, competencias, viajes, aprendizaje y una familia que empuja el sueño todos los días. Aquí también está mamá, sosteniendo el camino cuando toca seguir incluso en lo difícil.'],
            ['.story-points span:nth-child(1)', 'Edad: una historia que apenas comienza'],
            ['.story-points span:nth-child(2)', 'Sueño: escalar Colombia y el mundo'],
            ['.story-points span:nth-child(3)', 'Proceso: muro, roca, disciplina y constancia'],
            ['.story-points span:nth-child(4)', 'Familia: mamá presente en cada paso 💛'],
            ['.story-panel h3', 'Apoya este sueño'],
            ['.story-panel p:not(.story-note)', 'Comprar una prenda también es acompañar el proceso de Tahial. Si quieres apoyar más directamente, ya dejamos una ruta clara para donación y contacto.'],
            ['.story-actions .btn-primary', 'Apoya este sueño'],
            ['.story-actions .btn-ghost', 'Donar por correo'],
            ['.story-note', 'Si luego defines Nequi, Bancolombia o Stripe, este bloque ya está listo para conectar ese botón con un pago real.'],
            ['#coleccion .section-head .eyebrow', 'COLECCIÓN OFICIAL'],
            ['#coleccion .section-head h2', 'Colección oficial Tahialclimbing'],
            ['#coleccion .section-head p', 'Selecciona la prenda, el color y la talla desde cada bloque. La idea es simple: llevar puesta una historia real, no solo comprar ropa.'],
            ['#hoodie-showcase .hoodie-preview-copy > .eyebrow', 'ESCOGE EL COLOR'],
            ['#tshirt-showcase .hoodie-preview-copy > .eyebrow', 'ESCOGE EL COLOR DE CAMISETA'],
            ['#cap-showcase .hoodie-preview-copy > .eyebrow', 'ESCOGE EL COLOR DE GORRA'],
            ['#hoodie-add-btn', 'Quiero apoyar este sueño 💛'],
            ['#tshirt-add-btn', 'Llevar esta historia conmigo'],
            ['#cap-add-btn', 'Quiero apoyar este sueño 💛'],
            ['#hoodie-showcase .hoodie-preview-note', 'Estamos priorizando fotos reales de Tahial usando cada prenda en muro y roca para que la colección se sienta tan auténtica como la historia.'],
            ['#tshirt-showcase .hoodie-preview-note', 'La siguiente mejora pendiente es reemplazar los mockups más perfectos por más fotos reales de Tahial, contigo y en muro.'],
            ['#cap-showcase .hoodie-preview-note', 'Ahora las gorras hablan más desde la emoción: cada color tiene nombre propio y una pequeña historia.'],
            ['#videos .section-head .eyebrow', 'CAMPAÑA EN MOVIMIENTO'],
            ['#videos .section-head h2', 'Videos para contar el proceso, no solo promocionar la ropa'],
            ['#videos .section-head p', 'Este bloque ya apunta a storytelling real: entrenamientos, caídas, esfuerzo, risas y momentos que expliquen por qué esta historia merece apoyo.'],
            ['.video-card:nth-child(1) h3', 'Entrenar también es empezar de nuevo'],
            ['.video-card:nth-child(1) p', 'Ideal para mostrar repeticiones, foco y disciplina en un día real de entrenamiento.'],
            ['.video-card:nth-child(2) h3', 'Roca, muro y esfuerzo visible'],
            ['.video-card:nth-child(2) p', 'Espacio para secuencias que muestren caída, intento y regreso a la pared.'],
            ['.video-card:nth-child(3) h3', 'El color del sueño en movimiento'],
            ['.video-card:nth-child(3) p', 'Funciona mejor si mezcla logro, risas y momentos humanos, no solo planos de producto.'],
            ['.video-card:nth-child(4) h3', 'Detrás de la sesión'],
            ['.video-card:nth-child(4) p', 'Buen lugar para enseñar preparación, descanso y el ambiente real alrededor del entrenamiento.'],
            ['.video-card:nth-child(5) h3', 'Una historia que vale compartir'],
            ['.video-card:nth-child(5) p', 'Usa este clip para cerrar con emoción: familia, progreso y comunidad alrededor de Tahial.'],
            ['#lookbook .section-head .eyebrow', 'CORDILLERA VISUAL'],
            ['#lookbook .section-head h2', 'Galería Tahial · emoción, autenticidad y credibilidad'],
            ['#lookbook .section-head p', 'Estas fotos son la prueba social más fuerte del sitio. Muestran pared, competencia, premiación y proceso real: justo lo que más ayuda a vender y a compartir.'],
            ['#redes .section-head .eyebrow', 'REDES Y QR'],
            ['#redes .section-head h2', 'Encuentra a Tahial Climbing y comparte la web al instante'],
            ['#redes .section-head p', 'Sigue la marca en redes sociales y usa el código QR para abrir o compartir la página desde cualquier dispositivo.'],
            ['.qr-copy h3', 'Escanea y comparte'],
            ['.qr-copy p', 'Abre tahialclimbing.com en segundos o comparte el QR por WhatsApp, historias o impresos.'],
            ['.qr-actions .btn-primary', 'Descargar QR'],
            ['#copy-site-link', 'Copiar link'],
            ['#share-site', 'Compartir'],
            ['#contacto .eyebrow', 'CONTACTO'],
            ['#contacto h2', 'Activa tu pedido Cordada Tahial'],
            ['#contacto p', 'Asesoría personalizada para tallas, disponibilidad, apoyo directo y envíos en Colombia o desde el exterior.'],
            ['#contact-form button', 'Enviar mensaje'],
            ['#carrito-modal .modal-header h3', 'Tu carrito'],
            ['#total-label', 'Total:'],
            ['#checkout-btn', 'Procesar pedido'],
            ['footer .container > p', '© 2026 Tahial Climbing · Escalada técnica hecha en Colombia']
        ],
        placeholders: [
            ['#contact-form input[type="text"]', 'Nombre'],
            ['#contact-form input[type="email"]', 'Correo'],
            ['#contact-form textarea', 'Mensaje']
        ],
        attrs: [
            ['.language-switcher', 'aria-label', 'Selector de idioma'],
            ['#menu-toggle', 'aria-label', 'Abrir menú'],
            ['#open-cart', 'aria-label', 'Abrir carrito'],
            ['#close-cart', 'aria-label', 'Cerrar carrito'],
            ['#lightbox-close', 'aria-label', 'Cerrar imagen'],
            ['#hoodie-size-select', 'aria-label', 'Seleccionar talla del hoodie'],
            ['#tshirt-size-select', 'aria-label', 'Seleccionar talla de la camiseta'],
            ['#cap-size-select', 'aria-label', 'Seleccionar talla de la gorra'],
            ['.social-instagram', 'aria-label', 'Instagram de Tahial Climbing'],
            ['.social-tiktok', 'aria-label', 'TikTok de Tahial Climbing'],
            ['.social-facebook', 'aria-label', 'Facebook de Tahial Climbing'],
            ['.social-youtube', 'aria-label', 'YouTube de Tahial Climbing'],
            ['.qr-image', 'alt', 'Código QR de tahialclimbing.com'],
            ['.hero-slide:nth-child(1)', 'alt', 'Escalada en roca'],
            ['.hero-slide:nth-child(2)', 'alt', 'Escalada indoor'],
            ['.hero-slide:nth-child(3)', 'alt', 'Montaña real'],
            ['.highlights .highlight-card:nth-child(1) img', 'alt', 'Tahial en competencia de escalada 01'],
            ['.highlights .highlight-card:nth-child(2) img', 'alt', 'Tahial en competencia de escalada 02'],
            ['.highlights .highlight-card:nth-child(3) img', 'alt', 'Tahial en competencia de escalada 03'],
            ['.lookbook-item:nth-child(1) img', 'alt', 'Tahial escalando en roca natural'],
            ['.lookbook-item:nth-child(2) img', 'alt', 'Tahial en muro rojo oficial'],
            ['.lookbook-item:nth-child(3) img', 'alt', 'Tahial en evento con medalla'],
            ['.lookbook-item:nth-child(4) img', 'alt', 'Tahial en muro de entrenamiento'],
            ['.lookbook-item:nth-child(5) img', 'alt', 'Tahial en premiación oficial'],
            ['.lookbook-item:nth-child(6) img', 'alt', 'Tahial en acantilado colombiano'],
            ['.lookbook-item:nth-child(7) img', 'alt', 'Tahial en muro verde oficial'],
            ['.lookbook-item:nth-child(8) img', 'alt', 'Hoodie amarillo Tahial en premiación'],
            ['.lookbook-item:nth-child(9) img', 'alt', 'Tahial con camiseta amarilla y medalla'],
            ['.lookbook-item:nth-child(10) img', 'alt', 'Colección de camisetas Tahial Climbing'],
            ['.lookbook-item:nth-child(11) img', 'alt', 'Tahial en pared de entrenamiento 02'],
            ['.lookbook-item:nth-child(12) img', 'alt', 'Tahial en pared de entrenamiento 03']
        ],
        purchaseColor: 'Color seleccionado:',
        sizeLabel: 'Talla',
        shippingIncluded: '✈ envío incluido',
        emptyCart: 'Tu carrito está vacío.',
        quantityLabel: 'Cantidad',
        removeLabel: 'Quitar',
        colorSelectedAria: 'Seleccionar color',
        notifications: {
            added: 'Ya llevas esta historia contigo',
            emptyCart: 'Tu carrito está vacío',
            orderSent: 'Pedido enviado. Te contactaremos pronto.',
            messageSent: 'Mensaje enviado correctamente',
            linkCopied: 'Link copiado',
            linkCopiedShare: 'Link copiado para compartir',
            copyFailed: 'No se pudo copiar el link',
            shareFailed: 'No se pudo compartir'
        },
        share: {
            title: 'Tahial Climbing',
            text: 'Mira la web oficial de Tahial Climbing'
        }
    },
    en: {
        title: 'Tahial Climbing | Colombian Mountain Climbing',
        menuLabel: 'Open menu',
        cartLabel: 'Open cart',
        languageSelector: 'Language selector',
        selectors: [
            ['.nav-link[href="#inicio"]', 'Home'],
            ['.nav-link[href="#historia"]', 'Story'],
            ['.nav-link[href="#coleccion"]', 'Collection'],
            ['.nav-link[href="#videos"]', 'Videos'],
            ['.nav-link[href="#lookbook"]', 'Cordillera'],
            ['.nav-link[href="#redes"]', 'Social'],
            ['.nav-link[href="#contacto"]', 'Contact'],
            ['.hero-content .eyebrow', 'TAHIAL CLIMBING · COLOMBIA'],
            ['.hero-content h1', 'One child. One dream. One story climbing into the world 💛'],
            ['.hero-text', 'Built for bouldering, sport climbing, and mountains with local identity, strong character, and a technical edge.'],
            ['.hero-actions .btn-primary', 'View collection'],
            ['.hero-actions .btn-ghost', 'Watch the video campaign'],
            ['.story-banner .eyebrow', 'REAL PHOTOS OF TAHIAL'],
            ['.story-banner h2', 'Every garment is born on the wall'],
            ['.story-banner p:last-child', 'These images are not trying to look perfect. They show where this brand comes from: training, rock, effort, and a real story still being written.'],
            ['.highlight-card:nth-child(1) h3', 'Movement on rock'],
            ['.highlight-card:nth-child(1) p', 'Garments built for traction, full mobility, and long sessions on real walls.'],
            ['.highlight-card:nth-child(2) h3', 'Vertical territory'],
            ['.highlight-card:nth-child(2) p', 'Real rock and mountains for a climbing identity born in Colombia.'],
            ['.highlight-card:nth-child(3) h3', 'This gear is tested where it matters'],
            ['.highlight-card:nth-child(3) p', 'Official collection designed for gym walls, rock, and real training, with sizes from kids to adults.'],
            ['.story-copy .eyebrow', 'WHO IS TAHIAL'],
            ['.story-copy h2', 'A Colombian child turning climbing into his path'],
            ['.story-copy p:nth-of-type(2)', 'Tahial is not a brand invented behind a desk. He is a child who trains, falls, tries again, and dreams of taking his story far beyond the wall where it started.'],
            ['.story-copy p:nth-of-type(3)', 'Every garment is close to that process: training hours, competitions, trips, learning, and a family pushing the dream forward every day. His mother is here too, holding the path together when things get hard.'],
            ['.story-points span:nth-child(1)', 'Age: a story that is only beginning'],
            ['.story-points span:nth-child(2)', 'Dream: to climb Colombia and the world'],
            ['.story-points span:nth-child(3)', 'Process: wall, rock, discipline, and consistency'],
            ['.story-points span:nth-child(4)', 'Family: mom present at every step 💛'],
            ['.story-panel h3', 'Support this dream'],
            ['.story-panel p:not(.story-note)', 'Buying a garment also means backing Tahial’s journey. If you want to support him more directly, there is now a clear path for donations and contact.'],
            ['.story-actions .btn-primary', 'Support this dream'],
            ['.story-actions .btn-ghost', 'Donate by email'],
            ['.story-note', 'If you later define Nequi, Bancolombia, or Stripe, this block is already ready to connect that button to a real payment flow.'],
            ['#coleccion .section-head .eyebrow', 'OFFICIAL COLLECTION'],
            ['#coleccion .section-head h2', 'Tahialclimbing official collection'],
            ['#coleccion .section-head p', 'Choose the garment, color, and size from each block. The idea is simple: wear a real story, not just buy clothes.'],
            ['#hoodie-showcase .hoodie-preview-copy > .eyebrow', 'CHOOSE THE COLOR'],
            ['#tshirt-showcase .hoodie-preview-copy > .eyebrow', 'CHOOSE THE T-SHIRT COLOR'],
            ['#cap-showcase .hoodie-preview-copy > .eyebrow', 'CHOOSE THE CAP COLOR'],
            ['#hoodie-add-btn', 'I want to support this dream 💛'],
            ['#tshirt-add-btn', 'Carry this story with me'],
            ['#cap-add-btn', 'I want to support this dream 💛'],
            ['#hoodie-showcase .hoodie-preview-note', 'We are prioritizing real photos of Tahial wearing each garment on the wall and on rock so the collection feels as authentic as the story.'],
            ['#tshirt-showcase .hoodie-preview-note', 'The next improvement is replacing the most polished mockups with more real photos of Tahial, of you with him, and on the wall.'],
            ['#cap-showcase .hoodie-preview-note', 'The caps now speak more from emotion: each color has its own name and a small story.'],
            ['#videos .section-head .eyebrow', 'THE STORY IN MOTION'],
            ['#videos .section-head h2', 'Videos to tell the process, not just promote the clothes'],
            ['#videos .section-head p', 'This block now points to real storytelling: training, falls, effort, laughter, and the moments that explain why this story deserves support.'],
            ['.video-card:nth-child(1) h3', 'Training also means starting again'],
            ['.video-card:nth-child(1) p', 'Perfect for showing repetition, focus, and discipline during a real training day.'],
            ['.video-card:nth-child(2) h3', 'Rock, wall, and visible effort'],
            ['.video-card:nth-child(2) p', 'A place for sequences that show a fall, another attempt, and the return to the wall.'],
            ['.video-card:nth-child(3) h3', 'The color of the dream in motion'],
            ['.video-card:nth-child(3) p', 'It works best when it mixes achievement, laughter, and human moments, not only product shots.'],
            ['.video-card:nth-child(4) h3', 'Behind the session'],
            ['.video-card:nth-child(4) p', 'A strong place to show preparation, rest, and the real atmosphere around training.'],
            ['.video-card:nth-child(5) h3', 'A story worth sharing'],
            ['.video-card:nth-child(5) p', 'Use this clip to close with emotion: family, progress, and community around Tahial.'],
            ['#lookbook .section-head .eyebrow', 'VISUAL CORDILLERA'],
            ['#lookbook .section-head h2', 'Tahial gallery · emotion, authenticity, and credibility'],
            ['#lookbook .section-head p', 'These photos are the strongest social proof on the site. They show walls, competition, awards, and a real process: exactly what helps people buy and share.'],
            ['#redes .section-head .eyebrow', 'SOCIAL AND QR'],
            ['#redes .section-head h2', 'Find Tahial Climbing and share the website instantly'],
            ['#redes .section-head p', 'Follow the brand on social media and use the QR code to open or share the page from any device.'],
            ['.qr-copy h3', 'Scan and share'],
            ['.qr-copy p', 'Open tahialclimbing.com in seconds or share the QR on WhatsApp, stories, or print.'],
            ['.qr-actions .btn-primary', 'Download QR'],
            ['#copy-site-link', 'Copy link'],
            ['#share-site', 'Share'],
            ['#contacto .eyebrow', 'CONTACT'],
            ['#contacto h2', 'Start your Tahial rope-team order'],
            ['#contacto p', 'Personalized help for sizing, availability, direct support, and shipping in Colombia or from abroad.'],
            ['#contact-form button', 'Send message'],
            ['#carrito-modal .modal-header h3', 'Your cart'],
            ['#total-label', 'Total:'],
            ['#checkout-btn', 'Place order'],
            ['footer .container > p', '© 2026 Tahial Climbing · Technical climbing made in Colombia']
        ],
        placeholders: [
            ['#contact-form input[type="text"]', 'Name'],
            ['#contact-form input[type="email"]', 'Email'],
            ['#contact-form textarea', 'Message']
        ],
        attrs: [
            ['.language-switcher', 'aria-label', 'Language selector'],
            ['#menu-toggle', 'aria-label', 'Open menu'],
            ['#open-cart', 'aria-label', 'Open cart'],
            ['#close-cart', 'aria-label', 'Close cart'],
            ['#lightbox-close', 'aria-label', 'Close image'],
            ['#hoodie-size-select', 'aria-label', 'Select hoodie size'],
            ['#tshirt-size-select', 'aria-label', 'Select t-shirt size'],
            ['#cap-size-select', 'aria-label', 'Select cap size'],
            ['.social-instagram', 'aria-label', 'Tahial Climbing Instagram'],
            ['.social-tiktok', 'aria-label', 'Tahial Climbing TikTok'],
            ['.social-facebook', 'aria-label', 'Tahial Climbing Facebook'],
            ['.social-youtube', 'aria-label', 'Tahial Climbing YouTube'],
            ['.qr-image', 'alt', 'QR code for tahialclimbing.com'],
            ['.hero-slide:nth-child(1)', 'alt', 'Rock climbing'],
            ['.hero-slide:nth-child(2)', 'alt', 'Indoor climbing'],
            ['.hero-slide:nth-child(3)', 'alt', 'Real mountain'],
            ['.highlights .highlight-card:nth-child(1) img', 'alt', 'Tahial at climbing competition 01'],
            ['.highlights .highlight-card:nth-child(2) img', 'alt', 'Tahial at climbing competition 02'],
            ['.highlights .highlight-card:nth-child(3) img', 'alt', 'Tahial at climbing competition 03'],
            ['.lookbook-item:nth-child(1) img', 'alt', 'Tahial climbing on natural rock'],
            ['.lookbook-item:nth-child(2) img', 'alt', 'Tahial on the official red wall'],
            ['.lookbook-item:nth-child(3) img', 'alt', 'Tahial at a medal event'],
            ['.lookbook-item:nth-child(4) img', 'alt', 'Tahial on a training wall'],
            ['.lookbook-item:nth-child(5) img', 'alt', 'Tahial at an official award ceremony'],
            ['.lookbook-item:nth-child(6) img', 'alt', 'Tahial on a Colombian cliff'],
            ['.lookbook-item:nth-child(7) img', 'alt', 'Tahial on the official green wall'],
            ['.lookbook-item:nth-child(8) img', 'alt', 'Tahial yellow hoodie at an award event'],
            ['.lookbook-item:nth-child(9) img', 'alt', 'Tahial with a yellow shirt and medal'],
            ['.lookbook-item:nth-child(10) img', 'alt', 'Tahial Climbing t-shirt collection'],
            ['.lookbook-item:nth-child(11) img', 'alt', 'Tahial on training wall 02'],
            ['.lookbook-item:nth-child(12) img', 'alt', 'Tahial on training wall 03']
        ],
        purchaseColor: 'Selected color:',
        sizeLabel: 'Size',
        shippingIncluded: '✈ shipping included',
        emptyCart: 'Your cart is empty.',
        quantityLabel: 'Quantity',
        removeLabel: 'Remove',
        colorSelectedAria: 'Choose color',
        notifications: {
            added: 'This story is now with you',
            emptyCart: 'Your cart is empty',
            orderSent: 'Order sent. We will contact you soon.',
            messageSent: 'Message sent successfully',
            linkCopied: 'Link copied',
            linkCopiedShare: 'Link copied to share',
            copyFailed: 'Could not copy the link',
            shareFailed: 'Could not share'
        },
        share: {
            title: 'Tahial Climbing',
            text: 'Check out the official Tahial Climbing website'
        }
    }
};

let carrito = [];
let currentLanguage = localStorage.getItem('tahial-language') || 'es';

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
const hoodieSelectedColor = document.getElementById('hoodie-selected-color');
const hoodieSizeSelect = document.getElementById('hoodie-size-select');
const hoodieAddBtn = document.getElementById('hoodie-add-btn');
const hoodieColorButtons = document.querySelectorAll('.hoodie-color-btn');
const tshirtPreviewImage = document.getElementById('tshirt-preview-image');
const tshirtPreviewTitle = document.getElementById('tshirt-preview-title');
const tshirtPreviewDesc = document.getElementById('tshirt-preview-desc');
const tshirtPreviewPrice = document.getElementById('tshirt-preview-price');
const tshirtSelectedColor = document.getElementById('tshirt-selected-color');
const tshirtSizeSelect = document.getElementById('tshirt-size-select');
const tshirtAddBtn = document.getElementById('tshirt-add-btn');
const tshirtColorButtons = document.querySelectorAll('.tshirt-color-btn');
const capPreviewImage = document.getElementById('cap-preview-image');
const capPreviewTitle = document.getElementById('cap-preview-title');
const capPreviewDesc = document.getElementById('cap-preview-desc');
const capPreviewPrice = document.getElementById('cap-preview-price');
const capSelectedColor = document.getElementById('cap-selected-color');
const capSizeSelect = document.getElementById('cap-size-select');
const capAddBtn = document.getElementById('cap-add-btn');
const capColorButtons = document.querySelectorAll('.cap-color-btn');
const totalLabel = document.getElementById('total-label');
const languageButtons = {
    es: document.getElementById('lang-es'),
    en: document.getElementById('lang-en')
};

const seleccionActual = {
    hoodie: 'negro',
    tshirt: 'negro',
    cap: 'beige'
};

function getUi() {
    return uiText[currentLanguage] || uiText.es;
}

function formatoCOP(valor) {
    return new Intl.NumberFormat(currentLanguage === 'en' ? 'en-US' : 'es-CO').format(valor);
}

function obtenerTextoProducto(producto, campo) {
    return productTranslations[currentLanguage]?.[producto.id]?.[campo] ?? producto[campo];
}

function traducirColor(color) {
    return colorLabels[color]?.[currentLanguage] || color;
}

function obtenerTipoYColor(button) {
    if (button.dataset.hoodieColor) return { tipo: 'hoodie', color: button.dataset.hoodieColor };
    if (button.dataset.tshirtColor) return { tipo: 'tshirt', color: button.dataset.tshirtColor };
    return { tipo: 'cap', color: button.dataset.capColor };
}

function construirAriaColor(tipo, color) {
    const labelColor = traducirColor(color);
    if (currentLanguage === 'en') {
        const productLabel = { hoodie: 'hoodie', tshirt: 't-shirt', cap: 'cap' }[tipo];
        return `View ${productLabel} ${labelColor}`;
    }

    const productLabel = { hoodie: 'hoodie', tshirt: 'camiseta', cap: 'gorra' }[tipo];
    return `Ver ${productLabel} ${labelColor.toLowerCase()}`;
}

function actualizarBotonesIdioma() {
    Object.entries(languageButtons).forEach(([lang, button]) => {
        if (!button) {
            return;
        }
        button.classList.toggle('is-active', currentLanguage === lang);
        button.setAttribute('aria-pressed', currentLanguage === lang ? 'true' : 'false');
    });
}

function setText(selector, text) {
    const element = document.querySelector(selector);
    if (element) {
        element.textContent = text;
    }
}

function setAttr(selector, attribute, value) {
    const element = document.querySelector(selector);
    if (element) {
        element.setAttribute(attribute, value);
    }
}

function actualizarTextosColor() {
    document.querySelectorAll('.hoodie-color-btn, .tshirt-color-btn, .cap-color-btn').forEach(button => {
        const { tipo, color } = obtenerTipoYColor(button);
        const label = button.querySelector('.color-label');
        if (label) {
            label.textContent = traducirColor(color);
        }
        button.setAttribute('aria-label', construirAriaColor(tipo, color));
    });
}

function aplicarIdioma() {
    const ui = getUi();
    document.documentElement.lang = currentLanguage;
    document.title = ui.title;

    ui.selectors.forEach(([selector, text]) => setText(selector, text));
    ui.placeholders.forEach(([selector, placeholder]) => setAttr(selector, 'placeholder', placeholder));
    ui.attrs.forEach(([selector, attribute, value]) => setAttr(selector, attribute, value));

    document.querySelectorAll('.purchase-color-label').forEach(element => {
        element.textContent = ui.purchaseColor;
    });

    document.querySelectorAll('.purchase-label').forEach(element => {
        element.textContent = ui.sizeLabel;
    });

    document.querySelectorAll('.envio-badge').forEach(element => {
        element.textContent = ui.shippingIncluded;
    });

    actualizarTextosColor();
    actualizarBotonesIdioma();
    actualizarPreviewHoodie(seleccionActual.hoodie);
    actualizarPreviewTshirt(seleccionActual.tshirt);
    actualizarPreviewCap(seleccionActual.cap);
    renderCarrito();
}

function cambiarIdioma(lang) {
    if (!uiText[lang] || currentLanguage === lang) {
        return;
    }
    currentLanguage = lang;
    localStorage.setItem('tahial-language', currentLanguage);
    aplicarIdioma();
}

function obtenerHoodiePorColor(color) {
    return productos.find(item => item.etiqueta?.includes('hoodie') && item.categoria === color);
}

function obtenerCamisetaPorColor(color) {
    return productos.find(item => item.etiqueta?.includes('camiseta') && item.categoria === color);
}

function capitalizar(valor = '') {
    return valor.charAt(0).toUpperCase() + valor.slice(1);
}

function poblarSelectorTallas(select, producto) {
    if (!select || !producto) {
        return;
    }

    const tallas = producto.tallas || [];
    select.innerHTML = tallas.map(talla => `<option value="${talla}">${talla}</option>`).join('');
}

function actualizarPreviewHoodie(color = 'negro') {
    const hoodie = obtenerHoodiePorColor(color) || obtenerHoodiePorColor('negro');

    if (!hoodie || !hoodiePreviewImage) {
        return;
    }

    hoodiePreviewImage.src = hoodie.imagen;
    hoodiePreviewImage.alt = `${obtenerTextoProducto(hoodie, 'nombre')} · Tahial Climbing`;

    if (hoodiePreviewTitle) hoodiePreviewTitle.textContent = obtenerTextoProducto(hoodie, 'nombre');
    if (hoodiePreviewDesc) hoodiePreviewDesc.textContent = obtenerTextoProducto(hoodie, 'descripcion');
    if (hoodiePreviewPrice) hoodiePreviewPrice.textContent = `$${formatoCOP(hoodie.precio)}`;
    if (hoodieSelectedColor) hoodieSelectedColor.textContent = traducirColor(hoodie.categoria);
    poblarSelectorTallas(hoodieSizeSelect, hoodie);
    seleccionActual.hoodie = hoodie.categoria;

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
        });
    });
}

function actualizarPreviewTshirt(color = 'negro') {
    const camiseta = obtenerCamisetaPorColor(color) || obtenerCamisetaPorColor('negro');

    if (!camiseta || !tshirtPreviewImage) {
        return;
    }

    tshirtPreviewImage.src = camiseta.imagen;
    tshirtPreviewImage.alt = `${obtenerTextoProducto(camiseta, 'nombre')} · Tahial Climbing`;

    if (tshirtPreviewTitle) tshirtPreviewTitle.textContent = obtenerTextoProducto(camiseta, 'nombre');
    if (tshirtPreviewDesc) tshirtPreviewDesc.textContent = obtenerTextoProducto(camiseta, 'descripcion');
    if (tshirtPreviewPrice) tshirtPreviewPrice.textContent = `$${formatoCOP(camiseta.precio)}`;
    if (tshirtSelectedColor) tshirtSelectedColor.textContent = traducirColor(camiseta.categoria);
    poblarSelectorTallas(tshirtSizeSelect, camiseta);
    seleccionActual.tshirt = camiseta.categoria;

    tshirtColorButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tshirtColor === camiseta.categoria);
    });
}

function activarPreviewTshirt() {
    if (!tshirtColorButtons.length) {
        return;
    }

    tshirtColorButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const color = btn.dataset.tshirtColor;
            actualizarPreviewTshirt(color);
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
    capPreviewImage.alt = `${obtenerTextoProducto(gorra, 'nombre')} · Tahial Climbing`;

    if (capPreviewTitle) capPreviewTitle.textContent = obtenerTextoProducto(gorra, 'nombre');
    if (capPreviewDesc) capPreviewDesc.textContent = obtenerTextoProducto(gorra, 'descripcion');
    if (capPreviewPrice) capPreviewPrice.textContent = `$${formatoCOP(gorra.precio)}`;
    if (capSelectedColor) capSelectedColor.textContent = traducirColor(gorra.categoria);
    poblarSelectorTallas(capSizeSelect, gorra);
    seleccionActual.cap = gorra.categoria;

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
    if (!productosGrid) {
        return;
    }

    const ui = getUi();

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
                <p class="product-category">${obtenerTextoProducto(producto, 'etiqueta') || traducirColor(producto.categoria)}</p>
                <h3 class="product-title">${obtenerTextoProducto(producto, 'nombre')}</h3>
                <p class="product-desc">${obtenerTextoProducto(producto, 'descripcion')}</p>
                <div class="product-sizes">
                    ${(producto.tallas || []).map(talla => `<span class="size-chip">${talla}</span>`).join('')}
                </div>
                <div class="product-footer">
                    <div class="price-block">
                        <span class="price">$${formatoCOP(producto.precio)}</span>
                        ${producto.envio ? `<span class="envio-badge">${ui.shippingIncluded}</span>` : ''}
                    </div>
                    <button class="add-btn" data-id="${producto.id}">${ui.selectors.find(([selector]) => selector === '#hoodie-add-btn')?.[1] || 'Quiero apoyar este sueño 💛'}</button>
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

function agregarAlCarrito(id, tallaSeleccionada) {
    const producto = productos.find(item => item.id === id);
    if (!producto) {
        return;
    }

    const tallaFinal = tallaSeleccionada || producto.tallas?.[0] || 'Única';
    const existente = carrito.find(item => item.id === id && item.tallaSeleccionada === tallaFinal);
    if (existente) {
        existente.cantidad += 1;
    } else {
        carrito.push({ ...producto, tallaSeleccionada: tallaFinal, cantidad: 1 });
    }

    actualizarCarrito();
    mostrarNotificacion(getUi().notifications.added);
}

function actualizarCarrito() {
    cartCount.textContent = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    localStorage.setItem('tahial-carrito', JSON.stringify(carrito));
}

function renderCarrito() {
    const ui = getUi();

    if (carrito.length === 0) {
        cartItems.innerHTML = `<p class="empty-cart">${ui.emptyCart}</p>`;
        totalPrecio.textContent = '0';
        return;
    }

    cartItems.innerHTML = carrito.map((item, index) => `
        <div class="cart-item">
            <div>
                <strong>${obtenerTextoProducto(item, 'nombre')}</strong>
                <p>${ui.sizeLabel}: ${item.tallaSeleccionada || 'Única'}</p>
                <p>${ui.quantityLabel}: ${item.cantidad}</p>
                <p>$${formatoCOP(item.precio * item.cantidad)}</p>
            </div>
            <button class="remove-btn" data-index="${index}">${ui.removeLabel}</button>
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

function activarCompraDirecta() {
    if (hoodieAddBtn) {
        hoodieAddBtn.addEventListener('click', () => {
            const hoodie = obtenerHoodiePorColor(seleccionActual.hoodie);
            if (!hoodie) {
                return;
            }
            agregarAlCarrito(hoodie.id, hoodieSizeSelect?.value);
        });
    }

    if (tshirtAddBtn) {
        tshirtAddBtn.addEventListener('click', () => {
            const camiseta = obtenerCamisetaPorColor(seleccionActual.tshirt);
            if (!camiseta) {
                return;
            }
            agregarAlCarrito(camiseta.id, tshirtSizeSelect?.value);
        });
    }

    if (capAddBtn) {
        capAddBtn.addEventListener('click', () => {
            const gorra = obtenerGorraPorColor(seleccionActual.cap);
            if (!gorra) {
                return;
            }
            agregarAlCarrito(gorra.id, capSizeSelect?.value);
        });
    }
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
            mostrarNotificacion(getUi().notifications.emptyCart);
            return;
        }
        mostrarNotificacion(getUi().notifications.orderSent);
        carrito = [];
        actualizarCarrito();
        renderCarrito();
    });

    if (contactForm) {
        contactForm.addEventListener('submit', event => {
            event.preventDefault();
            mostrarNotificacion(getUi().notifications.messageSent);
            contactForm.reset();
            aplicarIdioma();
        });
    }

    if (copySiteLinkBtn) {
        copySiteLinkBtn.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(siteUrl);
                mostrarNotificacion(getUi().notifications.linkCopied);
            } catch {
                mostrarNotificacion(getUi().notifications.copyFailed);
            }
        });
    }

    if (shareSiteBtn) {
        if (navigator.share) {
            shareSiteBtn.addEventListener('click', async () => {
                try {
                    await navigator.share({
                        title: getUi().share.title,
                        text: getUi().share.text,
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
                    mostrarNotificacion(getUi().notifications.linkCopiedShare);
                } catch {
                    mostrarNotificacion(getUi().notifications.shareFailed);
                }
            });
        }
    }
}

function activarSelectorIdioma() {
    languageButtons.es?.addEventListener('click', () => cambiarIdioma('es'));
    languageButtons.en?.addEventListener('click', () => cambiarIdioma('en'));
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
    activarSelectorIdioma();
    activarMenuMovil();
    activarFiltros();
    activarPreviewHoodie();
    activarPreviewTshirt();
    activarPreviewCap();
    activarCompraDirecta();
    actualizarPreviewHoodie('negro');
    actualizarPreviewTshirt('negro');
    actualizarPreviewCap('beige');
    activarReveal();
    aplicarFallbackImagenes();
    activarHeroSlider();
    activarVideosVisibles();
    activarLightbox();
    aplicarIdioma();
});
