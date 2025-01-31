// Función para crear una cookie técnica
function setCookieTecnica(nombre, valor, diasExpiracion) {
    const fecha = new Date();
    fecha.setTime(fecha.getTime() + (diasExpiracion * 24 * 60 * 60 * 1000)); 
    const expiracion = "expires=" + fecha.toUTCString();
    document.cookie = `${nombre}=${valor}; ${expiracion}; path=/; SameSite=None; Secure`;
}

// Función para obtener el valor de una cookie técnica
function getCookieTecnica(nombre) {
    let value = "; " + document.cookie;
    let partes = value.split("; " + nombre + "=");
    if (partes.length === 2) return partes.pop().split(";").shift();  // Devuelve el valor de la cookie
    return null;
}

// Función para iniciar sesión y guardar el ID en localStorage
function iniciarSesion(usuario) {
    const sessionId = "session-" + Math.random().toString(36).substr(2, 9);  // Genera un identificador de sesión único usando caracteres aleatorios
    setCookieTecnica("session_id", sessionId, 7); // Guarda el ID de sesión en una cookie por 7 días
    alert("Sesión iniciada para el usuario: " + usuario);
}

// Función para verificar si hay una sesión activa
function verificarSesion() {
    const sessionId = getCookieTecnica("session_id");  // Recupera el ID de sesión almacenado en la cookie
    
    if (sessionId) {
        alert("Sesión activa: " + sessionId); // Si hay un ID de sesión, muestra una alerta con la sesión activa
    } else {
        alert("No hay sesión activa"); // En caso de que no, muestra el mensaje
    }
}   

// Función para cerrar sesión eliminando la sesión almacenada
function cerrarSesion() {
    const sessionId = getCookieTecnica("session_id"); // Verifica si hay sesión activa

    if (!sessionId) {
        alert("No existe ninguna sesión iniciada");
        return; // Sale de la función sin intentar eliminar nada
    }

    document.cookie = "session_id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; //Elimina una sesión en caso de que exista
    alert("Sesión cerrada");
}