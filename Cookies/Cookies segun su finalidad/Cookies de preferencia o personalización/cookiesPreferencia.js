// Función para crear una cookie de preferencia
function setCookiePreferencia(nombre, valor, diasExpiracion) {
    const fecha = new Date();
    fecha.setTime(fecha.getTime() + (diasExpiracion * 24 * 60 * 60 * 1000));
    const expiracion = "expires=" + fecha.toUTCString();
    document.cookie = `${nombre}=${valor}; ${expiracion}; path=/; SameSite=Lax`; // Se establece la cookie
}

// Función para obtener el valor de una cookie de preferencia
function getCookiePreferencia(nombre) {
    let value = "; " + document.cookie;
    let partes = value.split("; " + nombre + "=");
    if (partes.length === 2) return partes.pop().split(";").shift(); // Devuelve el valor de la cookie
    return null;
}

// Función para guardar la preferencia de idioma en localStorage
function guardarIdioma() {
    let idiomaSeleccionado = document.getElementById("idioma").value; // Obtener el idioma seleccionado
    localStorage.setItem("idioma_preferido", idiomaSeleccionado); // Guardar en localStorage
    alert("Idioma guardado como: " + idiomaSeleccionado);
}

// Función para cargar la preferencia de idioma al iniciar la página o al presionar el botón
function cargarIdioma() {
    let idiomaGuardado = localStorage.getItem("idioma_preferido"); // Obtener el idioma guardado

    if (idiomaGuardado) {
        document.getElementById("idioma").value = idiomaGuardado; // Ajustar el select al idioma guardado
        alert("Idioma preferido cargado: " + idiomaGuardado);
    } else {
        alert("No hay ningún idioma guardado.");
    }
}

// Función para eliminar la preferencia de idioma
function eliminarIdioma() {
    let idiomaGuardado = localStorage.getItem("idioma_preferido"); // Verificar si hay un idioma guardado

    if (idiomaGuardado) {
        localStorage.removeItem("idioma_preferido"); // Eliminar el idioma guardado
        alert("Idioma preferido eliminado.");
    } else {
        alert("No existe ningún idioma a eliminar.");
    }
}