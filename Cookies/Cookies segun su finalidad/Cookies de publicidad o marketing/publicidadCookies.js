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

// Crear una cookie de análisis
function createAdCookie() {
    // Crear una cookie con ID de anuncio si no existe
    if (!getCookie('_adId')) {
        setCookie('_adId', 'ad123', 1);  // La cookie expira en 1 día
    }
    // Inicializar el contador de vistas si no existe
    if (!getCookie('ad_views')) {
        setCookie('ad_views', 0, 1);  // La cookie expira en 1 día
    }
}

const userId = getCookie('_adId');
console.log('AD ID:', userId);

function viewAds(adId) {
    const userId = getCookie('_adId'); // Obtener el identificador de la cookie
    if (userId) {
        let adViews = parseInt(getCookie('ad_views')) || 0;
        adViews++;
        setCookie('ad_views', adViews, 1); // Actualiza el contador de vistas de anuncios
        console.log('Ad ID:', adId, 'Ad views:', adViews);
        document.getElementById('vistas').textContent = adViews;
    } else {
        console.log('Ad is not identified.');
    }
}

function aceptarCookies() {
    if (navigator.cookieEnabled) {
        setCookie('cookies_accepted', 'true', 30); // La cookie expira en 30 días
        createAdCookie(); // Crear una cookie de análisis
        document.getElementById("mensaje").textContent = "Has aceptado las cookies. Se ha creado una cookie.";
        document.getElementById("cookies").style.display = "none";
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
        createAdCookie();  // Asegurarse de que las cookies de anuncios están creadas
    } else {
        document.getElementById("mensaje").textContent = "Aún no has aceptado las cookies.";
    }
}

window.onload = function () {
    comprobarCookies();
};

document.getElementById('ver-anuncio1').addEventListener('click', function() {
    viewAds('ad123');
    const button = document.getElementById('ver-anuncio1');
    const imgDiv = document.getElementById('img');
    
    // Mostrar la imagen y deshabilitar el botón
    imgDiv.style.display = 'block';
    button.disabled = true;
    
    // Establecer un temporizador para ocultar la imagen y habilitar el botón después de 5 segundos
    setTimeout(function() {
        imgDiv.style.display = 'none';
        button.disabled = false;
    }, 3000); // 5000 milisegundos = 5 segundos
});