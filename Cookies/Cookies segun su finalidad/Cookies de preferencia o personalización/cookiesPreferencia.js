function guardarIdioma() {
    let idiomaSeleccionado = document.getElementById("idioma").value;
    document.cookie = "idioma=" + idiomaSeleccionado + "; path=/; max-age=" + (365 * 24 * 60 * 60);
    document.getElementById("mensaje").innerText = "Idioma guardado: " + idiomaSeleccionado;
}

function cargarIdioma() {
    let cookies = document.cookie.split("; ");
    let cookieIdioma = cookies.find(row => row.startsWith("idioma="));
    if (cookieIdioma) {
        let idioma = cookieIdioma.split("=")[1];
        document.getElementById("idioma").value = idioma;
        document.getElementById("mensaje").innerText = "Idioma preferido: " + idioma;
    }
}

window.onload = cargarIdioma;