
// Establecer una cookie de terceros
function establecerCookieTerceros() {
    document.cookie = "trackingID=xyz; domain=anunciante.com; path=/";
    mostrarMensaje("Cookie de terceros establecida");
}

// Mostrar cookies en pantalla
function mostrarCookies() {
    let cookies = document.cookie ? document.cookie : "No hay cookies establecidas.";
    mostrarMensaje("Cookies almacenadas: " + cookies);
}

// Mostrar un mensaje en el div con id "resultado"
function mostrarMensaje(mensaje) {
    document.getElementById("resultado").innerHTML = mensaje;
}