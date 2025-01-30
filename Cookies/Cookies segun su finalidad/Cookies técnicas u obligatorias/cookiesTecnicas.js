function verificarSesion() {
    let cookies = document.cookie.split("; ");
    let sesionActiva = cookies.find(row => row.startsWith("sessionToken="));

    if (sesionActiva) {
        document.getElementById("mensaje").innerText = "Sesión activa.";
    } else {
        document.getElementById("mensaje").innerText = "No hay sesión activa.";
    }
}