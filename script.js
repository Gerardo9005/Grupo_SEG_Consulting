/**
 * Grupo SEG Consulting - Lógica de Interfaz y Ecosistema Web
 * Versión: 2026.1
 */

// ==========================================================================
// Base de Datos de Cursos y Capacitaciones STPS
// ==========================================================================
const cursos = [
    { nombre: "NOM-031-STPS-2011, CONSTRUCCIÓN-CONDICIONES DE SEGURIDAD Y SALUD EN EL TRABAJO.", duracion: "16 HORAS", area: "6000 SEGURIDAD" },
    { nombre: "NORMA OFICIAL MEXICANA NOM-009-STPS-2011, CONDICIONES DE SEGURIDAD PARA REALIZAR TRABAJOS EN ALTURA.", duracion: "8 HORAS", area: "6000 SEGURIDAD" },
    { nombre: "NORMA OFICIAL MEXICANA NOM-027-STPS-2008, ACTIVIDADES DE SOLDADURA Y CORTE-CONDICIONES DE SEGURIDAD E HIGIENE.", duracion: "8 HORAS", area: "6000 SEGURIDAD" },
    { nombre: "NORMA OFICIAL MEXICANA NOM-029-STPS-2011, MANTENIMIENTO DE LAS INSTALACIONES ELÉCTRICAS EN LOS CENTROS DE TRABAJO-CONDICIONES DE SEGURIDAD.", duracion: "8 HORAS", area: "6000 SEGURIDAD" },
    { nombre: "NOM-033-STPS-2015, CONDICIONES DE SEGURIDAD PARA REALIZAR TRABAJOS EN ESPACIOS CONFINADOS.", duracion: "8 HORAS", area: "6000 SEGURIDAD" },
    { nombre: "NORMA OFICIAL MEXICANA NOM-005-STPS-1998, RELATIVA A LAS CONDICIONES DE SEGURIDAD E HIGIENE EN LOS CENTROS DE TRABAJO PARA EL MANEJO, TRANSPORTE Y ALMACENAMIENTO DE SUSTANCIAS QUÍMICAS PELIGROSAS.", duracion: "8 HORAS", area: "6000 SEGURIDAD" },
    { nombre: "NORMA OFICIAL MEXICANA NOM-017-STPS-2008, EQUIPO DE PROTECCIÓN PERSONAL-SELECCIÓN, USO Y MANEJO EN LOS CENTROS DE TRABAJO.", duracion: "8 HORAS", area: "6000 SEGURIDAD" },
    { nombre: "NORMA OFICIAL MEXICANA NOM-018-STPS-2015, SISTEMA ARMONIZADO PARA LA IDENTIFICACIÓN Y COMUNICACIÓN DE PELIGROS Y RIESGOS POR SUSTANCIAS QUÍMICAS PELIGROSAS EN LOS CENTROS DE TRABAJO.", duracion: "8 HORAS", area: "6000 SEGURIDAD" },
    { nombre: "NORMA OFICIAL MEXICANA NOM-019-STPS-2011, CONSTITUCIÓN, INTEGRACIÓN, ORGANIZACIÓN Y FUNCIONAMIENTO DE LAS COMISIONES DE SEGURIDAD E HIGIENE.", duracion: "4 HORAS", area: "6000 SEGURIDAD" },
    { nombre: "NORMA OFICIAL MEXICANA NOM-030-STPS-2009, SERVICIOS PREVENTIVOS DE SEGURIDAD Y SALUD EN EL TRABAJO FUNCIONES Y ACTIVIDADES.", duracion: "16 HORAS", area: "6000 SEGURIDAD" },
    { nombre: "MULTIBRIGADAS DE EMERGENCIAS", duracion: "16 HORAS", area: "6000 SEGURIDAD" },
    { nombre: "OPERACIÓN SEGURA DE MONTACARGAS", duracion: "4 HORAS", area: "6000 SEGURIDAD" },
    { nombre: "NORMA OFICIAL MEXICANA NOM-002-STPS-2010, CONDICIONES DE SEGURIDAD-PREVENCIÓN Y PROTECCIÓN CONTRA INCENDIOS EN LOS CENTROS DE TRABAJO.", duracion: "8 HORAS", area: "6000 SEGURIDAD" },
    { nombre: "MANIOBRAS E IZAJES SIMPLES Y CRÍTICOS", duracion: "16 HORAS", area: "6000 SEGURIDAD" },
    { nombre: "ARMADO DE ANDAMIOS TUBULARES Y MULTIDIRECCIONALES", duracion: "8 HORAS", area: "6000 SEGURIDAD" },
    { nombre: "BRIGADA DE COMBATE CONTRA INCENDIOS", duracion: "8 HORAS", area: "6000 SEGURIDAD" },
    { nombre: "BRIGADA DE EVACUACIÓN", duracion: "8 HORAS", area: "6000 SEGURIDAD" },
    { nombre: "BRIGADA DE BÚSQUEDA Y RESCATE", duracion: "8 HORAS", area: "6000 SEGURIDAD" },
    { nombre: "BRIGADA DE PRIMEROS AUXILIOS", duracion: "8 HORAS", area: "6000 SEGURIDAD" },
    { nombre: "SUPERVISOR DE SEGURIDAD E HIGIENE", duracion: "24 HORAS", area: "6000 SEGURIDAD" },
    { nombre: "TRABAJOS CON HERRAMIENTA DE PODER", duracion: "8 HORAS", area: "6000 SEGURIDAD" },
    { nombre: "OPERACIÓN SEGURA DE PLATAFORMAS DE ELEVACIÓN", duracion: "8 HORAS", area: "6000 SEGURIDAD" },
    { nombre: "SEGURIDAD VIAL Y TRÁNSITO DENTRO DE OBRA", duracion: "4 HORAS", area: "6000 SEGURIDAD" },
    { nombre: "OPERACIÓN SEGURA DE HERRAMIENTAS ROTATORIAS", duracion: "8 HORAS", area: "6000 SEGURIDAD" },
    { nombre: "BLOQUEO CANDADEO Y ETIQUETADO", duracion: "16 HORAS", area: "6000 SEGURIDAD" },
    { nombre: "ENSAMBLE E INSTALACIONES DE RACKS", duracion: "8 HORAS", area: "6000 SEGURIDAD" }
];

// ==========================================================================
// Carga y Filtrado del Catálogo de Capacitaciones
// ==========================================================================
function cargarTabla(datos = cursos) {
    const tableBody = document.getElementById('tableBody');
    if (!tableBody) return;
    
    if (datos.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="3" style="text-align: center; padding: 25px; color: var(--gris-seg);">
                    <i class="fas fa-info-circle" style="margin-right: 8px;"></i>
                    No se encontraron capacitaciones que coincidan con la búsqueda.
                </td>
            </tr>
        `;
        return;
    }

    tableBody.innerHTML = datos.map(curso => `
        <tr>
            <td class="course-name">${curso.nombre}</td>
            <td><span class="badge-time">${curso.duracion}</span></td>
            <td>${curso.area}</td>
        </tr>
    `).join('');
}

function filterTable() {
    const input = document.getElementById("courseSearch");
    if (!input) return;
    
    const query = input.value.trim().toLowerCase();
    
    if (!query) {
        cargarTabla(cursos);
        return;
    }

    const resultados = cursos.filter(curso => 
        curso.nombre.toLowerCase().includes(query) ||
        curso.duracion.toLowerCase().includes(query) ||
        curso.area.toLowerCase().includes(query)
    );

    cargarTabla(resultados);
}

function buscarCurso() {
    filterTable();
}

// ==========================================================================
// Interacción y Navegación Dinámica
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    cargarTabla();

    // Búsqueda en vivo al teclear en el campo de búsqueda
    const courseSearchInput = document.getElementById("courseSearch");
    if (courseSearchInput) {
        courseSearchInput.addEventListener("input", filterTable);
        courseSearchInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                filterTable();
            }
        });
    }

    // Formateo y validación de teléfono (solo números, máximo 10 dígitos)
    const telInput = document.querySelector('input[name="telefono"]');
    if (telInput) {
        telInput.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D/g, '').slice(0, 10);
        });
    }

    // Scroll suave compensando la barra de navegación fija
    const navbar = document.querySelector('.navbar');
    const navbarHeight = navbar ? navbar.offsetHeight : 70;
    const navLinks = document.querySelectorAll('.nav-links li a, .btn-nav');

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || targetId === '#!' || targetId === '') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Cierra el menú móvil al hacer clic en un enlace
                const navLinksContainer = document.querySelector('.nav-links');
                const menuToggle = document.getElementById('mobile-menu');
                if (navLinksContainer && navLinksContainer.classList.contains('active')) {
                    navLinksContainer.classList.remove('active');
                    if (menuToggle) {
                        menuToggle.setAttribute('aria-expanded', 'false');
                        const icon = menuToggle.querySelector('i');
                        if (icon) {
                            icon.classList.remove('fa-times');
                            icon.classList.add('fa-bars');
                        }
                    }
                }
            }
        });
    });

    // Menú móvil hamburguesa
    const menuToggle = document.getElementById('mobile-menu');
    const navLinksContainer = document.querySelector('.nav-links');

    if (menuToggle && navLinksContainer) {
        menuToggle.addEventListener('click', () => {
            const isActive = navLinksContainer.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', isActive ? 'true' : 'false');
            
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars', !isActive);
                icon.classList.toggle('fa-times', isActive);
            }
        });

        // Cerrar menú móvil al hacer clic fuera
        document.addEventListener('click', (e) => {
            if (!navLinksContainer.contains(e.target) && !menuToggle.contains(e.target) && navLinksContainer.classList.contains('active')) {
                navLinksContainer.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }

    // Observer para resaltar la sección activa en el menú
    const observedSections = document.querySelectorAll('section[id], header[id]');
    if ('IntersectionObserver' in window && observedSections.length > 0) {
        const observerOptions = {
            root: null,
            threshold: 0.25,
            rootMargin: `-${navbarHeight}px 0px -40% 0px`
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${id}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, observerOptions);

        observedSections.forEach(section => observer.observe(section));
    }
});

// ==========================================================================
// Envío del Formulario de Contacto (AJAX)
// ==========================================================================
const contactForm = document.getElementById('contact-form');
const overlay = document.getElementById('modal-overlay');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn ? submitBtn.innerHTML : 'Enviar Mensaje';

        // Feedback de envío inmediato en el botón
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        }

        const formData = new FormData(contactForm);
        const actionUrl = contactForm.getAttribute('action') || 'https://formsubmit.co/ajax/administracion@gruposegconsulting.com';

        try {
            const response = await fetch(actionUrl, {
                method: 'POST',
                body: formData,
                headers: { 
                    'Accept': 'application/json' 
                }
            });

            const result = await response.json();

            if (overlay) overlay.style.display = 'flex';

            if (response.ok && (result.success === "true" || result.success === true || result.status === "success")) {
                document.getElementById('modal-success').style.display = 'block';
                document.getElementById('modal-error').style.display = 'none';
                contactForm.reset();
            } else {
                throw new Error(result.message || 'Error en el procesamiento del formulario');
            }
        } catch (error) {
            console.error("Error al enviar formulario:", error);
            if (overlay) overlay.style.display = 'flex';
            document.getElementById('modal-success').style.display = 'none';
            document.getElementById('modal-error').style.display = 'block';
        } finally {
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnText;
            }
        }
    });
}

// ==========================================================================
// Manejo de Modales de Alerta
// ==========================================================================
function cerrarModales() {
    const overlay = document.getElementById('modal-overlay');
    if (overlay) {
        overlay.style.display = 'none';
        const successModal = document.getElementById('modal-success');
        const errorModal = document.getElementById('modal-error');
        if (successModal) successModal.style.display = 'none';
        if (errorModal) errorModal.style.display = 'none';
    }
}

// ==========================================================================
// Banner y Gestión de Cookies
// ==========================================================================
window.addEventListener('load', () => {
    if (!localStorage.getItem('cookiesAceptadas')) {
        const banner = document.getElementById('cookie-banner');
        if (banner) banner.style.display = 'block';
    }
});

function aceptarCookies() {
    localStorage.setItem('cookiesAceptadas', 'true');
    const banner = document.getElementById('cookie-banner');
    if (banner) banner.style.display = 'none';
}

function rechazarCookies() {
    const banner = document.getElementById('cookie-banner');
    if (banner) banner.style.display = 'none';
}

// ==========================================================================
// Documentación Legal y Ventanas Emergentes
// ==========================================================================
const textosLegales = {
    cookies: `<div class="legal-modal-header">
        <div class="izquierda">
            <img src="assets/logo/Logo-horizontal-301x60.png" alt="Logo Grupo SEG Consulting" class="legal-logo">
        </div>
        <div class="derecha">
            <p class="legal-web-page">www.gruposegconsulting.com</p>
            <p class="legal-info">Documentación Legal</p>
        </div>
        <div class="separadores">
            <div class="separador-rojo"></div>
            <div class="separador-gris"></div>
        </div>
    </div>

    <h3>Política de Cookies - Grupo SEG Consulting</h3>
    <p>Última actualización: Enero 2026</p>
    <p>En <strong>Grupo SEG Consulting</strong>, nos comprometemos con la transparencia y el cumplimiento normativo en materia de seguridad, higiene y protección de datos. Esta Política explica qué son las cookies, cómo las utilizamos en nuestro sitio web y cómo puede gestionarlas.</p>
    <h4>1. ¿Qué es una cookie?</h4>
    <p>Una cookie es un pequeño archivo de texto que se almacena en su navegador al visitar nuestro sitio web para garantizar el funcionamiento técnico, la seguridad de las peticiones y recordar decisiones básicas.</p>
    <h4>2. Cookies que utilizamos</h4>
    <p><strong>Cookies Técnicas (Necesarias):</strong> Esenciales para el funcionamiento del portal y el despacho seguro de solicitudes de contacto.</p>
    <p><strong>Cookies de Funcionalidad:</strong> Recuerdan preferencias tales como la aceptación del aviso de privacidad y cookies.</p>
    <p><strong>Cookies de Análisis Estadístico:</strong> Permiten conocer patrones generales de navegación para mejorar la arquitectura del portal de forma anónima.</p>
    <h4>3. Gestión y Configuración</h4>
    <p>Puede permitir, bloquear o eliminar las cookies instaladas directamente en el menú de configuración de su navegador web (Google Chrome, Firefox, Edge, Safari).</p>
    <h4>4. Contacto</h4>
    <p>Para consultas legales sobre cookies y privacidad:</p>
    <ul>
        <li>Correo: <a href="mailto:administracion@gruposegconsulting.com">administracion@gruposegconsulting.com</a></li>
        <li>Teléfono: +52 (56) 36108290</li>
    </ul>`,

    privacidad: `<div class="legal-modal-header">
        <div class="izquierda">
            <img src="assets/logo/Logo-horizontal-301x60.png" alt="Logo Grupo SEG Consulting" class="legal-logo">
        </div>
        <div class="derecha">
            <p class="legal-web-page">www.gruposegconsulting.com</p>
            <p class="legal-info">Documentación Legal</p>
        </div>
        <div class="separadores">
            <div class="separador-rojo"></div>
            <div class="separador-gris"></div>
        </div>
    </div>
    
    <h3>Aviso de Privacidad Integral</h3>
    <p>Última actualización: Enero 2026</p>
    <ul>
        <li><strong>Responsable del tratamiento de sus datos personales: Grupo SEG Consulting</strong>, con domicilio en Av. José López Portillo No. 100, Col. Villa de las Flores, Coacalco, Estado de México, C.P. 55700, es responsable de salvaguardar sus datos conforme a la legislación aplicable.</li>
        <li><strong>Datos personales que se recaban:</strong> Únicamente recabamos datos de contacto profesional (Nombre, Correo Electrónico, Teléfono y requerimiento técnico). <strong>No recabamos datos personales sensibles.</strong></li>
    </ul>
    <p><strong>Finalidades del tratamiento:</strong></p>
    <ul>
        <li>Atención y cotización de consultoría en Seguridad e Higiene y Protección Civil.</li>
        <li>Emisión y programación de cursos normativos con constancias DC-3 ante la STPS.</li>
        <li>Atención técnica personalizada y seguimiento a proyectos industriales.</li>
    </ul>
    <p><strong>Ejercicio de Derechos ARCO:</strong></p>
    <p>Usted puede ejercer sus derechos de Acceso, Rectificación, Cancelación u Oposición enviando un correo a <strong>administracion@gruposegconsulting.com</strong> indicando su nombre completo y el motivo de su solicitud.</p>`,

    terminos: `<div class="legal-modal-header">
        <div class="izquierda">
            <img src="assets/logo/Logo-horizontal-301x60.png" alt="Logo Grupo SEG Consulting" class="legal-logo">
        </div>
        <div class="derecha">
            <p class="legal-web-page">www.gruposegconsulting.com</p>
            <p class="legal-info">Documentación Legal</p>
        </div>
        <div class="separadores">
            <div class="separador-rojo"></div>
            <div class="separador-gris"></div>
        </div>
    </div>

    <h3>Términos y Condiciones de Uso</h3>
    <p>Bienvenido al portal institucional de <strong>Grupo SEG Consulting</strong>. Al navegar en este sitio, usted acepta los siguientes términos:</p>
    <ul>
        <li><strong>1. Propiedad Intelectual:</strong> Todos los contenidos, logotipos, materiales y plataformas vinculadas (incluyendo Actualiza-T y Capacita-T) están protegidos por la Ley Federal del Derecho de Autor. Queda prohibida su reproducción sin consentimiento expreso por escrito.</li>
        <li><strong>2. Uso del Sitio:</strong> El usuario se compromete a hacer uso legítimo de las herramientas y a no enviar contenido malicioso ni utilizar formularios para fines ajenos a los servicios profesionales de consultoría.</li>
        <li><strong>3. Soluciones y Servicios:</strong> Los dictámenes técnicos, constancias DC-3 y planes de protección civil están sujetos a validación técnica en campo y apego estricto a las Normas Oficiales Mexicanas vigentes emitidas por la STPS y Protección Civil.</li>
        <li><strong>4. Jurisdicción:</strong> Para la resolución de cualquier controversia, las partes se someten a los tribunales competentes en el Estado de México, renunciando a cualquier otro fuero correspondiente a su domicilio presente o futuro.</li>
    </ul>`
};

function abrirLegal(tipo) {
    const area = document.getElementById('legal-content-area');
    const modal = document.getElementById('modal-legal');
    
    if (area && textosLegales[tipo]) {
        area.innerHTML = textosLegales[tipo];
        if (modal) {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    }
}

function cerrarLegal() {
    const modal = document.getElementById('modal-legal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Cierre de modales con la tecla Escape y clic en el backdrop
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        cerrarLegal();
        cerrarModales();
    }
});

const modalLegal = document.getElementById('modal-legal');
if (modalLegal) {
    modalLegal.addEventListener('click', (e) => {
        if (e.target === modalLegal) {
            cerrarLegal();
        }
    });
}

const modalOverlay = document.getElementById('modal-overlay');
if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            cerrarModales();
        }
    });
}
