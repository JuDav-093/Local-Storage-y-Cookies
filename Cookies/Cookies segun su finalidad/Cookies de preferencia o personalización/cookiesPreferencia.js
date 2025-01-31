// Función para crear una cookie de preferencia
function setCookiePreferencia(nombre, valor, diasExpiracion) {
    const fecha = new Date();
    fecha.setTime(fecha.getTime() + (diasExpiracion * 24 * 60 * 60 * 1000));  // Fecha de expiración en milisegundos
    const expiracion = "expires=" + fecha.toUTCString();
    document.cookie = `${nombre}=${valor}; ${expiracion}; path=/; SameSite=Lax`; // Establece la cookie
}

// Función para obtener el valor de una cookie de preferencia
function getCookiePreferencia(nombre) {
    let value = "; " + document.cookie;
    let partes = value.split("; " + nombre + "=");
    if (partes.length === 2) return partes.pop().split(";").shift();  // Devuelve el valor de la cookie
    return null;
}

// Función para guardar la preferencia de idioma en cookies
function guardarIdioma() {
    let idiomaSeleccionado = document.getElementById("idioma").value;  // Obtener el idioma seleccionado
    setCookiePreferencia("idioma_preferido", idiomaSeleccionado, 7);  // Guardar el idioma como cookie por 7 días
    alert("Idioma guardado como: " + idiomaSeleccionado);
}

// Función para cargar la preferencia de idioma al iniciar la página o al presionar el botón
function cargarIdioma() {
    let idiomaGuardado = getCookiePreferencia("idioma_preferido");  // Obtener el idioma guardado en la cookie

    if (idiomaGuardado) {
        document.getElementById("idioma").value = idiomaGuardado;  // Ajustar el select al idioma guardado
        alert("Idioma preferido cargado: " + idiomaGuardado);
    } else {
        alert("No hay ningún idioma guardado.");
    }
}

// Función para eliminar la preferencia de idioma
function eliminarIdioma() {
    let idiomaGuardado = getCookiePreferencia("idioma_preferido");  // Verificar si hay un idioma guardado en la cookie

    if (idiomaGuardado) {
        setCookiePreferencia("idioma_preferido", "", -1);  // Eliminar la cookie de idioma (establecer una fecha de expiración en el pasado)
        alert("Idioma preferido eliminado.");
    } else {
        alert("No existe ningún idioma a eliminar.");
    }
}
