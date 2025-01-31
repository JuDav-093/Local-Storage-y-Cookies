// Función para crear una cookie técnica
function setCookieTecnica(nombre, valor, diasExpiracion) {
    const fecha = new Date();
    fecha.setTime(fecha.getTime() + (diasExpiracion * 24 * 60 * 60 * 1000)); // Expiración en milisegundos
    const expiracion = "expires=" + fecha.toUTCString();
    document.cookie = `${nombre}=${valor}; ${expiracion}; path=/; SameSite=None; Secure`; // Forzar almacenamiento
}

// Función para obtener el valor de una cookie técnica
function getCookieTecnica(nombre) {
    let value = "; " + document.cookie;
    let partes = value.split("; " + nombre + "=");
    if (partes.length === 2) return partes.pop().split(";").shift(); // Devuelve el valor de la cookie
    return null;
}

// Función para verificar si la cookie de sesión existe
function verificarSesion() {
    const sessionId = getCookieTecnica("session_id"); // Obtener el ID de sesión de la cookie
    if (sessionId) {
        alert("Sesión activa: " + sessionId); // Mostrar la sesión activa en una alerta
    } else {
        alert("No hay sesión activa"); // Si no existe la cookie, muestra el mensaje
    }
}

// Función para iniciar sesión y guardar el ID en localStorage
function iniciarSesion(usuario) {
    const sessionId = "session-" + Math.random().toString(36).substr(2, 9);  // Genera un identificador de sesión único usando caracteres aleatorios
    localStorage.setItem("session_id", sessionId); // Guarda el ID de sesión en localStorage con la clave "session_id"
    alert("Sesión iniciada para el usuario: " + usuario); // Muestra una alerta indicando que la sesión se ha iniciado
}

// Función para verificar si hay una sesión activa
function verificarSesion() {
    const sessionId = localStorage.getItem("session_id");  // Recupera el ID de sesión almacenado en localStorage
    
    if (sessionId) {
        alert("Sesión activa: " + sessionId); // Si hay un ID de sesión, muestra una alerta con la sesión activa
    } else {
        alert("No hay sesión activa"); // En caso de que no, muestra el mensaje
    }
}

// Función para cerrar sesión eliminando la sesión almacenada
function cerrarSesion() {
    localStorage.removeItem("session_id"); // Elimina el ID de sesión del localStorage
    alert("Sesión cerrada"); //Muestra que la sesión ha cerrado
}

