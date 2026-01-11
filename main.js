/**
 * DOGGA - Archivo JavaScript Principal
 * Maneja el toggle del menú de navegación, las animaciones AOS y la integración con API
 * Especializado en Yoga con Perros
 */

// Datos mock de programas de yoga con perros (simulando una API)
const cursosAPI = [
    {
        id: 1,
        titulo: "Yoga con Perros para Principiantes",
        categoria: "Yoga con Perros",
        descripcion: "Aprende las bases del yoga junto a tu compañero canino. Posturas adaptadas para practicar en armonía.",
        descripcionCompleta: "Este curso está diseñado para principiantes que desean iniciarse en el yoga con perros. Aprenderás posturas fundamentales adaptadas para practicar junto a tu compañero canino, técnicas de respiración sincronizadas, y cómo crear un vínculo armonioso durante la práctica. Combinamos técnicas tradicionales de yoga con métodos específicos para el bienestar canino, creando una experiencia única que beneficia tanto a humanos como a perros.",
        duracion: "8 semanas",
        nivel: "Principiante",
        precio: "€89",
        incluye: [
            "12 sesiones presenciales con tu perro",
            "Material de estudio digital",
            "Guía de posturas adaptadas para perros",
            "Acceso a comunidad online",
            "Técnicas de relajación canina"
        ],
        icono: "yoga"
    },
    {
        id: 2,
        titulo: "Experiencia Completa de Yoga con Perros",
        categoria: "Yoga con Perros",
        descripcion: "Programa intensivo que combina yoga avanzado y bienestar canino en espacios naturales.",
        descripcionCompleta: "Nuestro programa más completo de yoga con perros combina retiros en la naturaleza con sesiones online. Aprenderás técnicas avanzadas de yoga sincronizado con tu perro, ejercicios de equilibrio conjunto, y meditación guiada para humanos y caninos. Incluye prácticas en espacios abiertos, técnicas de conexión profunda entre guía y perro, y métodos para mejorar la concentración y calma de ambos. Ideal para fortalecer el vínculo mientras practicas yoga.",
        duracion: "12 semanas",
        nivel: "Intermedio-Avanzado",
        precio: "€199",
        incluye: [
            "Retiro de fin de semana en la naturaleza con perros",
            "20 sesiones online interactivas",
            "Kit de materiales para yoga con perros",
            "Acceso premium a la comunidad",
            "Sesiones individuales de seguimiento",
            "Certificado de finalización"
        ],
        icono: "dogga"
    },
    {
        id: 3,
        titulo: "Meditación y Mindfulness con Perros",
        categoria: "Meditación",
        descripcion: "Descubre la calma y conexión profunda a través de la meditación junto a tu compañero canino.",
        descripcionCompleta: "Este curso combina técnicas milenarias de meditación con métodos específicos para crear un ambiente de calma y conexión entre humano y perro. Aprenderás meditación guiada, técnicas de respiración sincronizada, y cómo crear un espacio de paz que beneficie tanto a ti como a tu perro. Ideal para reducir el estrés, mejorar la concentración, y fortalecer el vínculo emocional con tu compañero canino a través de la práctica del mindfulness.",
        duracion: "6 semanas",
        nivel: "Todos los niveles",
        precio: "€69",
        incluye: [
            "10 sesiones de meditación guiada",
            "Audios de relajación para humanos y perros",
            "Técnicas de creación de ambiente tranquilo",
            "Diario de práctica digital",
            "Grupo de apoyo en WhatsApp",
            "Recursos sobre bienestar canino"
        ],
        icono: "meditacion"
    },
    
];

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // Toggle del Menú de Navegación (Menú Hamburguesa)
    // ============================================
    
    const toggleNav = document.querySelector('.nav-toggle');
    const menuNav = document.querySelector('.nav-menu');
    const enlacesNav = document.querySelectorAll('.nav-link');
    
    /**
     * Alternar el menú de navegación móvil
     */
    function alternarMenu() {
        menuNav.classList.toggle('active');
        toggleNav.classList.toggle('active');
    }
    
    // Añadir evento de click al botón hamburguesa
    if (toggleNav) {
        toggleNav.addEventListener('click', alternarMenu);
    }
    
    // Cerrar el menú al hacer click en un enlace de navegación
    enlacesNav.forEach(enlace => {
        enlace.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                menuNav.classList.remove('active');
                toggleNav.classList.remove('active');
            }
        });
    });
    
    // Cerrar el menú al hacer click fuera de él
    document.addEventListener('click', function(evento) {
        const clickDentroNav = menuNav.contains(evento.target);
        const clickEnToggle = toggleNav.contains(evento.target);
        
        if (!clickDentroNav && !clickEnToggle && menuNav.classList.contains('active')) {
            menuNav.classList.remove('active');
            toggleNav.classList.remove('active');
        }
    });
    
    // Cerrar el menú al redimensionar la ventana si está abierto y la ventana es más grande que móvil
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && menuNav.classList.contains('active')) {
            menuNav.classList.remove('active');
            toggleNav.classList.remove('active');
        }
    });
    
    // ============================================
    // Desplazamiento Suave para Enlaces de Anclaje
    // ============================================
    
    document.querySelectorAll('a[href^="#"]').forEach(ancla => {
        ancla.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Saltar si es solo "#"
            if (href === '#') return;
            
            const objetivo = document.querySelector(href);
            
            if (objetivo) {
                e.preventDefault();
                const offsetEncabezado = 80;
                const posicionElemento = objetivo.getBoundingClientRect().top;
                const posicionOffset = posicionElemento + window.pageYOffset - offsetEncabezado;
                
                window.scrollTo({
                    top: posicionOffset,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ============================================
    // Inicializar Librería AOS (Animate On Scroll)
    // ============================================
    
    // Inicializar AOS con configuración personalizada
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,           // Duración de la animación en milisegundos
            easing: 'ease-in-out',   // Función de easing
            once: true,              // Si la animación debe ocurrir solo una vez
            offset: 100,             // Offset (en px) desde el punto de activación original
            delay: 0,                // Retraso (en ms) antes de que comience la animación
            disable: false,          // Deshabilitar AOS en dispositivos móviles (poner 'mobile' si es necesario)
            startEvent: 'DOMContentLoaded'
        });
    }
    
    // ============================================
    // Efecto de Scroll en el Encabezado (Mejora Opcional)
    // ============================================
    
    let ultimoScroll = 0;
    const encabezado = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        const scrollActual = window.pageYOffset;
        
        // Añadir sombra al hacer scroll hacia abajo
        if (scrollActual > 50) {
            encabezado.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
        } else {
            encabezado.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        }
        
        ultimoScroll = scrollActual;
    });
    
    // ============================================
    // Manejador de Click del Botón CTA
    // ============================================
    
    const botonCta = document.querySelector('.cta-button');
    
    if (botonCta) {
        botonCta.addEventListener('click', function() {
            // Desplazarse a la sección de servicios
            const seccionServicios = document.querySelector('#services');
            if (seccionServicios) {
                const offsetEncabezado = 80;
                const posicionElemento = seccionServicios.getBoundingClientRect().top;
                const posicionOffset = posicionElemento + window.pageYOffset - offsetEncabezado;
                
                window.scrollTo({
                    top: posicionOffset,
                    behavior: 'smooth'
                });
            }
        });
    }
    
    // ============================================
    // INTEGRACIÓN CON API - Vista de Listado
    // ============================================
    
    /**
     * Función para obtener todos los programas de yoga con perros (simula llamada a API)
     * Usa jQuery para la petición AJAX
     */
    function obtenerCursos() {
        const spinner = document.getElementById('loading-spinner');
        const listado = document.getElementById('cursos-listado');
        
        // Mostrar spinner de carga
        if (spinner) spinner.classList.remove('hidden');
        if (listado) listado.innerHTML = '';
        
        // Simular delay de API usando jQuery
        $.ajax({
            url: '#', // Simulamos una API local
            method: 'GET',
            timeout: 1500,
            error: function() {
                // En caso de error, usar datos mock directamente
                setTimeout(() => {
                    mostrarCursos(cursosAPI);
                }, 800);
            },
            success: function() {
                // Si fuera una API real, procesaríamos la respuesta aquí
                setTimeout(() => {
                    mostrarCursos(cursosAPI);
                }, 800);
            }
        });
    }
    
    /**
     * Función para mostrar los cursos en la vista de listado
     * @param {Array} cursos - Array de objetos curso
     */
    function mostrarCursos(cursos) {
        const spinner = document.getElementById('loading-spinner');
        const listado = document.getElementById('cursos-listado');
        
        // Ocultar spinner
        if (spinner) spinner.classList.add('hidden');
        
        if (!listado) return;
        
        // Limpiar contenido anterior
        listado.innerHTML = '';
        
        // Crear tarjetas para cada curso
        cursos.forEach((curso, index) => {
            const tarjeta = crearTarjetaCurso(curso, index);
            listado.appendChild(tarjeta);
        });
        
        // Reinicializar AOS para las nuevas tarjetas
        if (typeof AOS !== 'undefined') {
            AOS.refresh();
        }
    }
    
    /**
     * Función para crear una tarjeta de curso
     * @param {Object} curso - Objeto curso
     * @param {Number} index - Índice para el delay de animación
     * @returns {HTMLElement} Elemento de tarjeta
     */
    function crearTarjetaCurso(curso, index) {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'service-card';
        tarjeta.setAttribute('data-aos', 'fade-up');
        tarjeta.setAttribute('data-aos-delay', (index * 200).toString());
        tarjeta.setAttribute('data-curso-id', curso.id);
        
        // Icono según el tipo
        const iconoSVG = obtenerIcono(curso.icono);
        
        tarjeta.innerHTML = `
            <div class="service-icon">
                ${iconoSVG}
            </div>
            <h3 class="service-title">${curso.titulo}</h3>
            <p class="service-description">${curso.descripcion}</p>
            <button class="ver-detalles" data-curso-id="${curso.id}">Ver detalles</button>
        `;
        
        // Agregar evento click usando jQuery
        $(tarjeta).find('.ver-detalles').on('click', function(e) {
            e.stopPropagation();
            const cursoId = parseInt($(this).data('curso-id'));
            mostrarDetalleCurso(cursoId);
        });
        
        return tarjeta;
    }
    
    /**
     * Función para obtener el SVG del icono según el tipo
     * @param {String} tipo - Tipo de curso
     * @returns {String} SVG como string
     */
    function obtenerIcono(tipo) {
        const iconos = {
            yoga: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="8" r="2"/>
                <circle cx="12" cy="16" r="2"/>
                <line x1="6" y1="12" x2="18" y2="12"/>
            </svg>`,
            dogga: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <ellipse cx="12" cy="6" rx="4" ry="2"/>
                <ellipse cx="12" cy="12" rx="4" ry="2"/>
                <ellipse cx="12" cy="18" rx="4" ry="2"/>
            </svg>`,
            meditacion: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="6" r="2"/>
                <circle cx="12" cy="18" r="2"/>
                <line x1="6" y1="12" x2="18" y2="12"/>
            </svg>`
        };
        return iconos[tipo] || iconos.yoga;
    }
    
    // ============================================
    // INTEGRACIÓN CON API - Vista de Detalle
    // ============================================
    
    /**
     * Función para obtener un programa por ID (simula llamada a API)
     * @param {Number} cursoId - ID del programa
     * @returns {Promise} Promise con los datos del programa
     */
    function obtenerCursoPorId(cursoId) {
        return new Promise((resolve) => {
            // Simular delay de API
            setTimeout(() => {
                const curso = cursosAPI.find(c => c.id === cursoId);
                resolve(curso);
            }, 300);
        });
    }
    
    /**
     * Función para mostrar el detalle de un programa de yoga con perros
     * @param {Number} cursoId - ID del programa
     */
    async function mostrarDetalleCurso(cursoId) {
        const modal = document.getElementById('curso-detalle-modal');
        const contenido = document.getElementById('curso-detalle-content');
        
        if (!modal || !contenido) return;
        
        // Mostrar modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Mostrar loading en el contenido
        contenido.innerHTML = '<div class="loading-spinner"><div class="spinner"></div><p>Cargando detalles del programa...</p></div>';
        
        try {
            // Obtener datos del programa (simulando API)
            const curso = await obtenerCursoPorId(cursoId);
            
            if (!curso) {
                contenido.innerHTML = '<p>Programa no encontrado.</p>';
                return;
            }
            
            // Renderizar contenido del detalle
            contenido.innerHTML = `
                <h2 class="curso-detalle-titulo">${curso.titulo}</h2>
                <span class="curso-detalle-categoria">${curso.categoria}</span>
                <p class="curso-detalle-descripcion">${curso.descripcionCompleta}</p>
                
                <div class="curso-detalle-info">
                    <div class="curso-info-item">
                        <strong>Duración</strong>
                        <span>${curso.duracion}</span>
                    </div>
                    <div class="curso-info-item">
                        <strong>Nivel</strong>
                        <span>${curso.nivel}</span>
                    </div>
                    <div class="curso-info-item">
                        <strong>Precio</strong>
                        <span>${curso.precio}</span>
                    </div>
                    <div class="curso-info-item">
                        <strong>Categoría</strong>
                        <span>${curso.categoria}</span>
                    </div>
                </div>
                
                <div class="curso-detalle-incluye">
                    <h4>Este programa incluye:</h4>
                    <ul>
                        ${curso.incluye.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
                
                <button class="curso-boton-inscribirse">Inscribirse ahora</button>
            `;
            
            // Agregar evento al botón de inscripción usando jQuery
            $('.curso-boton-inscribirse').on('click', function() {
                alert(`¡Gracias por tu interés en "${curso.titulo}"! Te contactaremos pronto para que tú y tu perro puedan comenzar esta experiencia única.`);
            });
            
        } catch (error) {
            contenido.innerHTML = '<p>Error al cargar los detalles del programa.</p>';
            console.error('Error:', error);
        }
    }
    
    // ============================================
    // Manejo del Modal
    // ============================================
    
    // Cerrar modal al hacer click en la X
    const cerrarModal = document.querySelector('.modal-close');
    if (cerrarModal) {
        cerrarModal.addEventListener('click', function() {
            const modal = document.getElementById('curso-detalle-modal');
            if (modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    
    // Cerrar modal al hacer click fuera del contenido
    const modal = document.getElementById('curso-detalle-modal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    
    // Cerrar modal con tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const modal = document.getElementById('curso-detalle-modal');
            if (modal && modal.classList.contains('active')) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    });
    
    // ============================================
    // Inicializar carga de programas de yoga con perros al cargar la página
    // ============================================
    
    // Cargar programas cuando se hace scroll a la sección o al cargar
    function inicializarCursos() {
        const seccionServicios = document.querySelector('#services');
        if (seccionServicios) {
            // Verificar si la sección está visible
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const listado = document.getElementById('cursos-listado');
                        if (listado && listado.children.length === 0) {
                            obtenerCursos();
                        }
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            
            observer.observe(seccionServicios);
        }
    }
    
    // Inicializar
    inicializarCursos();
    
    // También cargar si el usuario ya está en la sección
    if (window.location.hash === '#services') {
        setTimeout(() => {
            obtenerCursos();
        }, 500);
    }
    
    // ============================================
    // Generador de Compañero de Yoga Canino (API de Perros y Nombres)
    // ============================================
    
    // Esperar a que jQuery esté disponible
    if (typeof $ !== 'undefined') {
        $(document).ready(function() {
            const btnGenerarEquipo = $('#btn-generar-equipo');
            const fotoMiembro = $('#foto-miembro');
            const nombreMiembro = $('#nombre-miembro');
            
            // Verificar que los elementos existan
            if (btnGenerarEquipo.length && fotoMiembro.length && nombreMiembro.length) {
                
                // Event listener para el botón de generar compañero de yoga
                btnGenerarEquipo.on('click', function() {
                    const teamContainer = $('#team-member-container');
                    
                    // Mostrar contenedor cuando se hace click
                    teamContainer.addClass('has-content');
                    
                    // Llamada a la API de perros para obtener imagen
                    $.ajax({
                        url: 'https://dog.ceo/api/breeds/image/random',
                        dataType: 'json',
                        success: function(data) {
                            if (data && data.message) {
                                fotoMiembro.attr('src', data.message);
                                // Agregar clase cuando la imagen se carga
                                fotoMiembro.on('load', function() {
                                    $(this).addClass('loaded');
                                });
                            }
                        },
                        error: function(xhr, status, error) {
                            console.error('Error al obtener imagen de perro:', error);
                            fotoMiembro.attr('src', 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 200 200\'%3E%3Crect fill=\'%23a8c090\' width=\'200\' height=\'200\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' text-anchor=\'middle\' dy=\'.3em\' fill=\'white\' font-size=\'20\'%3EImagen no disponible%3C/text%3E%3C/svg%3E');
                            fotoMiembro.addClass('loaded');
                        }
                    });
                    
                    // Llamada a la API de nombres para obtener nombre aleatorio del guía humano
                    $.ajax({
                        url: 'https://randomuser.me/api/',
                        dataType: 'json',
                        success: function(data) {
                            if (data && data.results && data.results[0] && data.results[0].name) {
                                const nombre = data.results[0].name.first;
                                nombreMiembro.text(nombre + ' - Guía de Yoga con Perros');
                            }
                        },
                        error: function(xhr, status, error) {
                            console.error('Error al obtener nombre:', error);
                            nombreMiembro.text('Nombre no disponible');
                        }
                    });
                });
            }
        });
    }
    
    // ============================================
    // Log de Consola (Desarrollo)
    // ============================================
    
    console.log('¡Sitio web DOGGA - Yoga con Perros inicializado correctamente!');
    console.log('Librería AOS:', typeof AOS !== 'undefined' ? 'Cargada' : 'No cargada');
    console.log('jQuery:', typeof $ !== 'undefined' ? 'Cargado' : 'No cargado');
    console.log('Programas de yoga con perros disponibles:', cursosAPI.length);
    
});
