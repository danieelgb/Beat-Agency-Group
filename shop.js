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
    const modal = document.getElementById('legalModal');
    const body = document.getElementById('modalBody');
    
    if(modal && body && textosLegales[tipo]) {
        body.innerHTML = textosLegales[tipo];
        modal.style.display = 'flex'; // Usamos flex para que el CSS que te pasé centre el contenido
        document.body.style.overflow = "hidden"; // Bloquea el scroll del fondo
    }
}

function closeModal() {
    const modal = document.getElementById('legalModal');
    if(modal) {
        modal.style.display = 'none';
        document.body.style.overflow = "auto"; // Devuelve el scroll
    }
}

window.onclick = function(event) {
    const modal = document.getElementById('legalModal');
    if (event.target == modal) {
        closeModal();
    }
};

// Carrito
// 1. Inicialización de variables globales
let cart = [];

// 2. La función que faltaba (Abrir/Cerrar)
function toggleCart() {
    const sidebar = document.getElementById('cart-sidebar');
    const overlay = document.getElementById('cart-overlay');
    
    if (!sidebar) {
        console.error("Error: No se encontró el ID 'cart-sidebar'");
        return;
    }

    sidebar.classList.toggle('open');
    if (overlay) overlay.classList.toggle('active');

    // Bloquea el scroll
    if (sidebar.classList.contains('open')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

// 3. Función para añadir productos (La que usamos en el botón de la gorra)
function addToCart(elemento) {
    const productCard = elemento.closest('.product-card');
    if (!productCard) return;

    const id = productCard.getAttribute('data-id');
    const name = productCard.getAttribute('data-name');
    const price = parseFloat(productCard.getAttribute('data-price'));
    const img = productCard.querySelector('img').src;

    const existingProduct = cart.find(item => item.id === id);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ id, name, price, img, quantity: 1 });
    }

    renderCart();
    updateCartCount();
    
    // Forzamos la apertura llamando a la función que antes fallaba
    toggleCart(); 
}

// 4. Funciones de apoyo (Renderizado)
function updateCartCount() {
    const dot = document.getElementById('cart-count');
    if (dot) {
        const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
        dot.innerText = totalItems;
    }
}

function renderCart() {
    const container = document.getElementById('cart-items');
    const totalElement = document.getElementById('cart-total');
    if (!container) return;

    container.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        container.innerHTML += `
            <div class="cart-item">
                <img src="${item.img}" width="50" class="cart-item-img">
                <div class="item-details">
                    <h4>${item.name}</h4>
                    <p class="item-price-info">${item.price.toFixed(2)}€</p>
                    <div class="quantity-controls">
                        <button class="btn-qty" onclick="changeQuantity('${item.id}', -1)">-</button>
                        <span class="qty-num">${item.quantity}</span>
                        <button class="btn-qty" onclick="changeQuantity('${item.id}', 1)">+</button>
                    </div>
                </div>
                <button class="btn-remove" onclick="removeFromCart('${item.id}')">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        `;
    });

    if (totalElement) totalElement.innerText = `${total.toFixed(2)}€`;
}

// Función para sumar o restar
function changeQuantity(id, delta) {
    const product = cart.find(item => item.id === id);
    if (product) {
        product.quantity += delta;
        
        // Si la cantidad llega a 0, lo eliminamos
        if (product.quantity <= 0) {
            removeFromCart(id);
        } else {
            renderCart();
            updateCartCount();
        }
    }
}

// Función para eliminar el producto por completo
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    renderCart();
    updateCartCount();
}