
// Función para establecer una cookie persistente con el nombre del usuario
function guardarNombre() {
    var nombre = document.getElementById("nombreUsuario").value;
    if (nombre) {
        let fechaExpiracion = new Date();
        fechaExpiracion.setTime(fechaExpiracion.getTime() + (30 * 24 * 60 * 60 * 1000)); // 30 días
        document.cookie = "nombreUsuario=" + nombre + "; expires=" + fechaExpiracion.toUTCString() + "; path=/";
        alert("Nombre guardado correctamente");
    } else {
        alert("Por favor, ingresa tu nombre");
    }
}

// Función para mostrar el nombre guardado desde la cookie
function mostrarNombre() {
    let cookies = document.cookie.split(';');
    let nombreGuardado = "";

    cookies.forEach(function(cookie) {
        if (cookie.trim().startsWith("nombreUsuario=")) {
            nombreGuardado = cookie.trim().substring("nombreUsuario=".length);
        }
    });

    if (nombreGuardado) {
        document.getElementById("saludo").innerHTML = "¡Hola, " + nombreGuardado + "!";
    } else {
        document.getElementById("saludo").innerHTML = "¡Hola, visitante!";
    }
}

// Mostrar el saludo si ya hay un nombre guardado
mostrarNombre();