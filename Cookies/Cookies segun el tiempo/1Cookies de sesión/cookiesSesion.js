// Establecer una cookie de sesión
function establecerCookieSesion() {
document.cookie = "sesionID=12345; path=/";
mostrarMensaje("Cookie de sesión establecida");
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