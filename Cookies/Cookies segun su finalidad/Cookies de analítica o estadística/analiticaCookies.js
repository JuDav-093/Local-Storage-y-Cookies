// Función para crear una cookie
function setCookie(nombre, valor, diasExpiracion) {
    const fecha = new Date();
    fecha.setTime(fecha.getTime() + (diasExpiracion * 24 * 60 * 60 * 1000));
    const expiracion = "expires=" + fecha.toUTCString();
    document.cookie = nombre + "=" + valor + "; " + expiracion + "; path=/";
}

// Función para obtener el valor de una cookie
function getCookie(name) {
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
    return null;
}

function createUserId() {
    return 'user-' + Math.random().toString(36).substr(2, 9); // Genera un ID único aleatorio
}

// Crear una cookie de análisis
function createAnalysisCookie() {
    const userId = createUserId();  // Genera un identificador único
    setCookie('_gid', userId, 1);   // La cookie expira en 1 día
    setCookie('page_views', 0, 1);  // La cookie expira en 1 día
}

const userId = getCookie('_gid');
console.log('User ID:', userId);  // Muestra el ID único del usuario en la consola


function trackPageVisit(pageUrl) {
    const userId = getCookie('_gid'); // Obtener el identificador de la cookie
    if (userId) {
        let pageViews = parseInt(getCookie('page_views')) || 0;
        pageViews++;
        setCookie('page_views', pageViews, 1); // Actualiza el contador de vistas de página
        console.log('User ID:', userId, 'visited:', pageUrl, 'Page views:', pageViews);
        document.getElementById('vistas').textContent = pageViews;
    } else {
        console.log('User is not identified.');
    }
}

function aceptarCookies() {
    if (navigator.cookieEnabled) {
        setCookie('cookies_accepted', 'true', 30); // La cookie expira en 30 días
        createAnalysisCookie(); // Crear una cookie de análisis
        document.getElementById("mensaje").textContent = "Has aceptado las cookies. Se ha creado una cookie.";
        document.getElementById("cookies").style.display = "none";
        document.getElementById("pag-muestra").style.display = "block";
    } else {
        document.getElementById("mensaje").textContent = "Las cookies no están habilitadas. No se puede crear una cookie.";
    }
}

// Función para rechazar cookies
function rechazarCookies() {
    document.getElementById("mensaje").textContent = "Has rechazado las cookies. No se creará ninguna cookie.";
    document.getElementById("cookies").style.display = "none"; // Ocultar el banner de cookies
}

function comprobarCookies() {
    const cookiesAccepted = getCookie('cookies_accepted');
    if (cookiesAccepted) {
        document.getElementById("mensaje").textContent = "Ya has aceptado las cookies.";
        document.getElementById("cookies").style.display = "none";
        document.getElementById("pag-muestra").style.display = "block";
    } else {
        document.getElementById("mensaje").textContent = "Aún no has aceptado las cookies.";
    }
}

window.onload = function() {
    comprobarCookies();
    trackPageVisit(window.location.href);
};