// Función para crear una cookie
function setCookie(nombre, valor, diasExpiracion) {
    const fecha = new Date();
    fecha.setTime(fecha.getTime() + (diasExpiracion * 24 * 60 * 60 * 1000));
    const expiracion = "expires=" + fecha.toUTCString();
    document.cookie = nombre + "=" + valor + "; " + expiracion + "; path=/";
}

// Función para aceptar cookies
function aceptarCookies() {
    navigator.coockieEnabled = true;
    if (navigator.cookieEnabled) {
        setCookie("usuario", "Daniel", 7); // Crear una cookie que expire en 7 días
        document.getElementById("mensaje").textContent = "Has aceptado las cookies. Se ha creado una cookie.";
        document.getElementById("cookies").style.display = "none"; // Ocultar el banner de cookies
    } else {
        document.getElementById("mensaje").textContent = "Las cookies no están habilitadas. No se puede crear una cookie.";
    }
}

// Función para rechazar cookies
function rechazarCookies() {
    navigator.coockieEnabled = false;
    document.getElementById("mensaje").textContent = "Has rechazado las cookies. No se creará ninguna cookie.";
    document.getElementById("cookies").style.display = "none"; // Ocultar el banner de cookies
}
