// Crear una cookie segura mediante el use se "secure"
document.getElementById('crearCookie').addEventListener('click', () => {
    //document.cookie = "usuario=Juan"; leerse en el punto de la guía de uso
    document.cookie = "usuario=Juan; Secure; SameSite=Strict";
    document.getElementById('mensaje').textContent = "Cookie creada: usuario = Juan";
});

// Leer la cookie
document.getElementById('leerCookie').addEventListener('click', () => {
    let cookies = document.cookie;
    if (cookies) {
        document.getElementById('mensaje').textContent = "Cookie leída: " + cookies;
    } else {
        document.getElementById('mensaje').textContent = "No hay cookies almacenadas.";
    }
});

// Eliminar la cookie
document.getElementById('eliminarCookie').addEventListener('click', () => {
    document.cookie = "usuario=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; Secure; SameSite=Strict";
    document.getElementById('mensaje').textContent = "Cookie eliminada.";
});