// Función para guardar una cookie
function setCookie(nombre, valor, diasExpiracion) {
    const fecha = new Date();
    fecha.setTime(fecha.getTime() + (diasExpiracion * 24 * 60 * 60 * 1000));
    const expiracion = "expires=" + fecha.toUTCString();
    document.cookie = nombre + "=" + valor + ";" + expiracion + ";path=/";
}

// Función para obtener el valor de una cookie
function getCookie(nombre) {
    const nombreEQ = nombre + "=";
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nombreEQ) === 0) {
            return cookie.substring(nombreEQ.length, cookie.length);
        }
    }
    return null;
}

// Función para aplicar el tema guardado
function aplicarTemaGuardado() {
    const tema = getCookie("tema");
    if (tema === "oscuro") {
        document.body.classList.add("tema-oscuro");
    } else {
        document.body.classList.add("tema-claro");
    }
}

// Eventos para cambiar el tema
document.getElementById("tema-claro").addEventListener("click", () => {
    document.body.classList.remove("tema-oscuro");
    document.body.classList.add("tema-claro");
    setCookie("tema", "claro", 7); // Guardar preferencia por 7 días
});

document.getElementById("tema-oscuro").addEventListener("click", () => {
    document.body.classList.remove("tema-claro");
    document.body.classList.add("tema-oscuro");
    setCookie("tema", "oscuro", 7); // Guardar preferencia por 7 días
});

