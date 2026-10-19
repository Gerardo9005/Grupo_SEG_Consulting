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
    { nombre: "ENSAMBLE E INSTALACIONES DE RACKS", duracion: "8 HORAS", area: "6000 SEGURIDAD" },
];

function cargarTabla() {
    const tableBody = document.getElementById('tableBody');
    if (!tableBody) return;
    
    tableBody.innerHTML = cursos.map(curso => `
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
    
    const filter = input.value.toUpperCase();
    const table = document.getElementById("coursesTable");
    if (!table) return;
    
    const tr = table.getElementsByTagName("tr");

    for (let i = 1; i < tr.length; i++) {
        const td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            const txtValue = td.textContent || td.innerText;
            tr[i].style.display = txtValue.toUpperCase().indexOf(filter) > -1 ? "" : "none";
        }
    }
}

function buscarCurso() {
    filterTable();
}

const courseSearchInput = document.getElementById("courseSearch");
if (courseSearchInput) {
    courseSearchInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            filterTable();
        }
    });
}

const telInput = document.querySelector('input[name="telefono"]');
if (telInput) {
    telInput.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D/g, '').slice(0, 10);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    cargarTabla();
    
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    const sections = document.querySelectorAll('section, header');
    const navLinks = document.querySelectorAll('.nav-links li a, .btn-nav');

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                const navLinksContainer = document.querySelector('.nav-links');
                if (navLinksContainer && navLinksContainer.classList.contains('active')) {
                    navLinksContainer.classList.remove('active');
                    const menuToggle = document.getElementById('mobile-menu');
                    if (menuToggle) {
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

    const observerOptions = {
        root: null,
        threshold: 0.3,
        rootMargin: `-${navbarHeight}px 0px -60% 0px`
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    const href = link.getAttribute('href');
                    if (href === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
});

const contactForm = document.getElementById('contact-form');
const overlay = document.getElementById('modal-overlay');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        if (overlay) overlay.style.display = 'flex';

        const formData = new FormData(contactForm);
        
        try {
            // IMPORTANTE: Aquí va tu correo real
            const response = await fetch('https://formsubmit.co/ajax/gyaconsultores.servicios@gmail.com', {
                method: 'POST',
                body: formData,
                headers: { 
                    'Accept': 'application/json' 
                }
            });

            const result = await response.json();

            // Verificamos si FormSubmit devolvió éxito
            if (response.ok && (result.success === "true" || result.success === true)) {
                document.getElementById('modal-success').style.display = 'block';
                document.getElementById('modal-error').style.display = 'none';
                contactForm.reset();
            } else {
                throw new Error('Error en el servidor');
            }
        } catch (error) {
            console.error("Error al enviar:", error);
            document.getElementById('modal-success').style.display = 'none';
            document.getElementById('modal-error').style.display = 'block';
        } finally {
            // El overlay de carga se puede ocultar aquí si los modales no lo cubren
        }
    });
}

window.onload = function() {
    if (!localStorage.getItem('cookiesAceptadas')) {
        const banner = document.getElementById('cookie-banner');
        if (banner) banner.style.display = 'block';
    }
}

function aceptarCookies() {
    localStorage.setItem('cookiesAceptadas', 'true');
    const banner = document.getElementById('cookie-banner');
    if (banner) banner.style.display = 'none';
}

function rechazarCookies() {
    const banner = document.getElementById('cookie-banner');
    if (banner) banner.style.display = 'none';
}

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
    <p>Última actualización: 13 de mayo de 2023</p>
    <p>En <strong>Grupo SEG Consulting</strong>, nos comprometemos con la transparencia y el cumplimiento normativo en materia de seguridad, higiene y protección de datos. Esta Política explica qué son las cookies, cómo las utilizamos en nuestro sitio web y cómo puedes gestionarlas.</p>
    <h4>1. ¿Qué es una cookie?</h4>
    <p>Una cookie es un pequeño archivo de texto que se almacena en tu navegador cuando visitas casi cualquier página web. Su utilidad es que la web sea capaz de recordar tu visita cuando vuelvas a navegar por esa página, facilitando la navegación y, en el caso de nuestro formulario de contacto, asegurando que tus datos se envíen correctamente.</p>
    <h4>2. Cookies que utilizamos</h4>
    <p>Dado que nuestro sitio es informativo y cuenta con un formulario de contacto, utilizamos las siguientes categorías:</p>
    <p><strong>Cookies Técnicas (Necesarias):</strong> Son esenciales para que el sitio funcione. Permiten la comunicación de datos y el uso de elementos de seguridad durante la navegación. Sin estas, el formulario de contacto podría presentar fallas.</p>
    <p><strong>Cookies de Análisis (Estadísticas):</strong> Google Analytics o herramientas similares nos ayudan a entender cómo interactúan los usuarios con nuestra web (secciones más visitadas, tiempo de permanencia). Estos datos son anónimos.</p>
    <p><strong>Cookies de Funcionalidad:</strong> Permiten recordar decisiones básicas del usuario para ofrecer una mejor experiencia (como el idioma o haber aceptado ya este aviso).</p>
    <h4>3. Detalle de Cookies en este sitio</h4>
    <table>
        <tr>
           <th>Cookie</th>
            <th>Origen</th>
            <th>Propósito</th>
            <th>Duración</th>
        </tr>
        <tr>
            <td>_ga</td>
            <td>Google Analytics</td>
            <td>Utilizadas por Google Analytics para distinguir a los usuarios.</td>
            <td>2 años</td>
        </tr>
        <tr>
            <td>_gid</td>
            <td>Google Analytics</td>
            <td>Utilizadas por Google Analytics para distinguir a los usuarios.</td>
            <td>24 horas</td>
        </tr>
        <tr>
            <td>PHPSESSID</td>
            <td>Grupo SEG Consulting</td>
            <td>Gestiona la sesión del usuario en el formulario de contacto.</td>
            <td>Sesión (se elimina al cerrar el navegador)</td>
        </tr>
    </table>
    <h4>4. Gestión de cookies</h4>
    <p>Tú tienes el control total. Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de las opciones del navegador que utilices:</p>
    <p><strong>Google Chrome:</strong> Configuración > Privacidad y seguridad > Cookies y otros datos de sitios.</p>
    <p><strong>Mozilla Firefox:</strong> Opciones > Privacidad y seguridad > Cookies y datos del sitio.</p>
    <p><strong>Microsoft Edge:</strong> Configuración > Cookies y permisos del sitio > Administrar y eliminar cookies y datos del sitio.</p>
    <p><strong>Safari:</strong> Preferencias > Privacidad > Gestionar datos de sitios web.</p>
    <p>Ten en cuenta que bloquear ciertas cookies puede afectar la funcionalidad de nuestro sitio, especialmente el formulario de contacto.</p>
    <h4>5. Cambios en la Política de Cookies</h4>
    <p>Estamos comprometidos con la transparencia y el cumplimiento normativo. Por ello, esta Política de Cookies puede ser actualizada ocasionalmente para reflejar cambios en nuestras prácticas o en la legislación aplicable.</p>
    <h4>6. Contacto</h4>
    <p>Si tienes preguntas sobre nuestra Política de Cookies, contáctanos en:
    <ul>
        <li><a href="mailto:info@gruposegconsulting.com">Correo: info@gruposegconsulting.com</a></li>
        <li><a href="https://wa.me/525636108298">Teléfono: +52 563 610 8290</a></li>
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
    <p>Última actualización: 13 de mayo de 2023</p>
    <ul>
        <li><strong>Responsable del tratamiento de sus datos personales Grupo SEG Consulting</strong> (en adelante "El Responsable"), con domicilio en Av. José López Portillo No. 100, Col. Villa de las Flores, Coacalco, Estado de México, es responsable de recabar sus datos personales, del uso que se le dé a los mismos y de su protección.</li>
        <li><strong>Datos personales que se recaban</strong> Para las finalidades señaladas en el presente aviso, recabamos sus datos de identificación y contacto (Nombre, Empresa, Correo Electrónico y Teléfono) a través de nuestro formulario de contacto web. <strong>No recabamos datos personales sensibles.</strong></li>
    </ul>
    <p><strong>Finalidades del tratamiento</strong> Sus datos serán utilizados para:</p>
    <ul>
        <li>Proveer los servicios de consultoría en Seguridad e Higiene solicitados.</li>
        <li>Responder a sus dudas y comentarios.</li>
        <li>Enviar cotizaciones de servicios y capacitaciones (DC-3).</li>
        <li>Informar sobre cambios en la normatividad de la STPS o Protección Civil.</li>
    </ul>
    <ul>
        <li><strong>Derechos ARCO</strong> Usted tiene derecho a <strong>Acceder, Rectificar y Cancelar</strong> sus datos personales, así como a <strong>Oponerse</strong> al tratamiento de los mismos o revocar el consentimiento que para tal fin nos haya otorgado. Para ello, deberá enviar una solicitud por escrito al correo: <strong>info@segconsulting.com</strong> indicando su nombre completo y el derecho que desea ejercer.</li>
        <li><strong>Transferencia de datos</strong> Le informamos que sus datos personales no serán compartidos con terceros, salvo por requerimientos legales de las autoridades competentes (STPS, Protección Civil o autoridades judiciales).</li>
    </ul>`,
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
    <p>Bienvenido al sitio web de <strong>Grupo SEG Consulting</strong>. Al acceder y utilizar este sitio, usted acepta los siguientes términos:</p>
    <ul>
        <li><strong>1. Propiedad Intelectual</strong> Todo el contenido de este sitio (textos, logotipos, herramientas digitales como Capacita-T, Actualiza-T, códigos y diseños) son propiedad de <strong>Grupo SEG Consulting</strong> o de sus respectivos autores bajo licencia. Queda prohibida la reproducción parcial o total sin autorización previa.</li>
        <li><strong>2. Uso del Sitio</strong> El usuario se compromete a utilizar el sitio de manera lícita. Queda prohibido el uso de los formularios de contacto para enviar "spam", contenido ofensivo o software malicioso.</li>
        <li><strong>3. Deslinde de Responsabilidad</strong> La información publicada en este sitio es de carácter informativo. Aunque nos esforzamos por mantener la información técnica y normativa actualizada, <strong>Grupo SEG Consulting</strong> no se hace responsable por decisiones tomadas por terceros basadas exclusivamente en el contenido de este sitio sin haber recibido una consultoría formal y personalizada.</li>
        <li><strong>4. Herramientas Digitales y Recursos</strong> El acceso a demos o herramientas como "Actualiza-T" o "Capacita-T" está sujeto a disponibilidad y puede requerir credenciales específicas proporcionadas tras la contratación de servicios.</li>
        <li><strong>5. Jurisdicción</strong> Para la interpretación y cumplimiento de estos términos, las partes se someten a la legislación aplicable en el <strong>Estado de México, México,</strong> renunciando a cualquier otro fuero que pudiera corresponderles por razón de sus domicilios presentes o futuros.</li>
    </ul>`
}

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

const menuToggle = document.getElementById('mobile-menu');
const navLinksContainer = document.querySelector('.nav-links');

if (menuToggle && navLinksContainer) {
    menuToggle.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        }
    });

    document.addEventListener('click', (e) => {
        if (!navLinksContainer.contains(e.target) && !menuToggle.contains(e.target)) {
            navLinksContainer.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    });
}