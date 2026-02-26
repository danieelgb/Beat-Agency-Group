const track = document.querySelector('.carousel-track');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

const originalCards = Array.from(track.children);
originalCards.forEach(card => {
    const clone = card.cloneNode(true);
    track.appendChild(clone); 
});

const getStepWidth = () => {
    const card = track.querySelector('.artist-card');
    const style = window.getComputedStyle(track);
    const gap = parseInt(style.gap) || 20; 
    return card.offsetWidth + gap;
};

next.addEventListener('click', () => {
    const step = getStepWidth();
    track.style.scrollBehavior = 'smooth';
    track.scrollLeft += step;

    setTimeout(() => {
        if (track.scrollLeft >= (track.scrollWidth / 2)) {
            track.style.scrollBehavior = 'auto';
            track.scrollLeft = 0;
        }
    }, 500); 
});

prev.addEventListener('click', () => {
    const step = getStepWidth();
    
    if (track.scrollLeft <= 1) {
        track.style.scrollBehavior = 'auto';
        track.scrollLeft = track.scrollWidth / 2;
    }
    
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            track.style.scrollBehavior = 'smooth';
            track.scrollLeft -= step;
        });
    });
});

const textosLegales = {
  privacidad: `
    <h2>Política de Privacidad</h2>
    <br>
    <p>En <strong>Beat Agency Group</strong>, valoramos la privacidad de nuestros artistas, colaboradores y clientes. Esta política detalla cómo tratamos la información que recibimos a través de nuestra plataforma.</p>
    <br>
    <h3>1. Información que recopilamos</h3>
    <p>Recogemos datos personales únicamente cuando se nos facilitan de forma voluntaria a través de nuestros canales de contacto o formularios de contratación (Booking):</p>
    <ul style="list-style-type: disc; margin-left: 30px;">
        <li>Nombre y apellidos.</li>
        <li>Correo electrónico y teléfono de contacto.</li>
        <li>Empresa o promotora de eventos.</li>
        <li>Demos o material artístico enviado para evaluación.</li>
    </ul>
    <br>
    <h3>2. Uso de la información</h3>
    <p>Utilizamos tus datos exclusivamente para:</p>
    <ul style="list-style-type: disc; margin-left: 30px;">
        <li>Gestionar las solicitudes de contratación (Booking) de nuestro roster.</li>
        <li>Evaluar nuevas propuestas artísticas enviadas a la agencia.</li>
        <li>Mantener una relación comercial profesional.</li>
    </ul>
    <br>
    <h3>3. Protección de datos</h3>
    <p>Nos comprometemos a no vender, alquilar ni compartir tus datos personales con terceros con fines comerciales. Solo podrán ser compartidos con los artistas o sus equipos de management directos para la ejecución del servicio solicitado.</p>
    <br>
    <h3>4. Tus derechos</h3>
    <p>Puedes solicitar en cualquier momento el acceso, rectificación o eliminación de tus datos personales enviando un correo a nuestro equipo de soporte.</p>
    
    <p>Al navegar por nuestra web, aceptas el tratamiento de tus datos bajo estos términos.</p>`,
  terminos: `
    <h2>Términos y Condiciones</h2>
    <br>
    <p>El acceso y uso de la plataforma de <strong>Beat Agency Group</strong> implica la aceptación de los siguientes términos:</p>
    <br>
    <h3>1. Propiedad Intelectual</h3>
    <p>Todo el contenido alojado en este sitio web es propiedad exclusiva de la agencia o de sus artistas representados, incluyendo de forma enunciativa pero no limitativa:</p>
    <ul style="margin-left: 30px;">
        <li>Nombres artísticos y logotipos.</li>
        <li>Fotografías, artes visuales y material videográfico.</li>
        <li>Fragmentos de audio y producciones musicales.</li>
    </ul>
    <br>
    <h3>2. Uso de Imagen de Artistas</h3>
    <p>Queda estrictamente prohibida la descarga, reproducción o distribución del material gráfico de nuestros artistas para fines comerciales, publicitarios o de promoción de eventos sin un contrato de booking previo o autorización escrita.</p>
    <br>
    <h3>3. Reservas y Contratación (Booking)</h3>
    <p>La disponibilidad de los artistas mostrada en la web es orientativa. Toda contratación se formalizará mediante:</p>
    <ul style="margin-left: 30px;">
        <li>Emisión de un contrato de actuación profesional.</li>
        <li>Aceptación de las cláusulas técnicas (Riders) específicas de cada artista.</li>
        <li>Pago del depósito de reserva en los plazos establecidos.</li>
    </ul>
    <br>
    <h3>4. Limitación de Responsabilidad</h3>
    <p>Beat Agency Group no se hace responsable de las cancelaciones de eventos por causas de fuerza mayor ajenas a la agencia o por incumplimiento de los requisitos técnicos por parte del promotor.</p>`,
  cookies: `
    <h2>Política de Cookies</h2>
    <br>
    <p><strong>Beat Agency Group</strong> utiliza cookies propias y de terceros para asegurar que tu experiencia en nuestro roster sea fluida y profesional.</p>
    <br>
    <h3>¿Qué son las cookies?</h3>
    <p>Son pequeños archivos que se almacenan en tu navegador para recordar tus preferencias y entender cómo interactúas con nuestra web.</p>
    <br>    
    <h3>Tipos de cookies que utilizamos:</h3>
    <ul style="margin-left: 30px;">
        <li><strong>Técnicas (Necesarias):</strong> Permiten que el carrusel de artistas funcione correctamente y que el menú flotante se abra sin errores.</li>
        <li><strong>De Personalización:</strong> Recuerdan tus ajustes de navegación para que no tengas que configurarlos cada vez.</li>
        <li><strong>Analíticas:</strong> Nos ayudan a saber qué artistas generan más interés para optimizar nuestras campañas de promoción.</li>
    </ul>
    <br>
    <h3>Control de Cookies</h3>
    <p>Puedes bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de las opciones de tu navegador:</p>
    <ul style="margin-left: 30px;">
        <li>Configuración de cookies en Chrome.</li>
        <li>Configuración de cookies en Firefox.</li>
        <li>Configuración de cookies en Safari.</li>
    </ul>
    <br>
    <p>Ten en cuenta que si bloqueas las cookies técnicas, es posible que algunas funciones visuales de la web (como los efectos de los artistas) no funcionen correctamente.</p>`
};

function openModal(tipo) {
  document.getElementById("modalBody").innerHTML = textosLegales[tipo];
  document.getElementById("legalModal").style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("legalModal").style.display = "none";
  document.body.style.overflow = "auto";
}

// Cerrar al hacer clic fuera
window.onclick = function(event) {
  const modal = document.getElementById("legalModal");
  if (event.target == modal) {
    closeModal();
  }
};

document.addEventListener("DOMContentLoaded", () => {
    const banner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("accept-cookies");
    const rejectBtn = document.getElementById("reject-cookies");

    // Verificar si el usuario ya tomó una decisión antes
    if (!localStorage.getItem("cookiesAccepted")) {
        // Mostrar el banner tras 1 segundo
        setTimeout(() => {
            banner.classList.add("show");
        }, 1000);
    }

    // Acción al Aceptar
    acceptBtn.addEventListener("click", () => {
        localStorage.setItem("cookiesAccepted", "true");
        banner.classList.remove("show");
        console.log("Cookies aceptadas");
    });

    // Acción al Rechazar
    rejectBtn.addEventListener("click", () => {
        localStorage.setItem("cookiesAccepted", "false");
        banner.classList.remove("show");
        console.log("Cookies rechazadas");
    });
});