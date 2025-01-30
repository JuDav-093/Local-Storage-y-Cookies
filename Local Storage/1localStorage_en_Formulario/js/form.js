// Se aplica la API setItem, en este caso, para guardar el nombre
function guardarNombre() {
    let nombre = document.getElementById("nombre").value;
    localStorage.setItem("nombreUsuario", nombre);
    alert("Nombre guardado");
}

// Se aplica getItem, para recuperar el dato guardado anteriormente
function mostrarNombre() {
    let nombreGuardado = localStorage.getItem("nombreUsuario");
    if (nombreGuardado) {
        alert("Nombre almacenado: " + nombreGuardado);
    } else {
        alert("No hay datos almacenados");
    }
}

// Se remueve el dato guardado con removeItem del localStorage
function eliminarNombre() {
    localStorage.removeItem("nombreUsuario");
    alert("Nombre eliminado");
}