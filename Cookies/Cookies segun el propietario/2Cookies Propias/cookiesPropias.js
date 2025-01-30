// Función para guardar la preferencia del usuario en una cookie propia
function guardarPreferencia() {
    let temaSeleccionado = document.getElementById("tema").value;
    
    // Definir la fecha de expiración (30 días)
    let fechaExpiracion = new Date();
    fechaExpiracion.setTime(fechaExpiracion.getTime() + (30 * 24 * 60 * 60 * 1000));

    // Establecer la cookie con la preferencia de tema
    document.cookie = "tema=" + temaSeleccionado + "; expires=" + fechaExpiracion.toUTCString() + "; path=/";

    alert("Preferencia guardada correctamente");
}

// Función para mostrar la preferencia guardada
function mostrarPreferencia() {
    let cookies = document.cookie.split(';');
    let temaGuardado = "";

    cookies.forEach(function(cookie) {
        if (cookie.trim().startsWith("tema=")) {
            temaGuardado = cookie.trim().substring("tema=".length);
        }
    });

    if (temaGuardado) {
        document.getElementById("mensaje").innerHTML = "Tu tema guardado es: " + temaGuardado;
    } else {
        document.getElementById("mensaje").innerHTML = "No hay preferencia guardada.";
    }
}

// Mostrar la preferencia automáticamente si ya está guardada
mostrarPreferencia();
