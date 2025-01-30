/* ----------------------------------------------------------------------
                            ELIMINAR DATOS
------------------------------------------------------------------------- */

//La API localStorage.removeItem(key) elimina una clave y su valor del localStorage

//Su sintaxis es:
localStorage.removeItem("clave");

/* Los parámetros que se identifican son:

key(string) => La clave del dato a eliminar */ 

/* ----------------------------------------------------------------------
                                EJEMPLOS
------------------------------------------------------------------------- */

// Ejemplo para eliminar un usuario, el mismo puede ser aplicado para otros tipos de datos 
localStorage.removeItem("usuario"); //Una vez eliminado el usuario, con console.log verificamos y nos devolverá null
console.log(localStorage.getItem("usuario")); // Dato no encontrado, ya que fue eliminado anteriormente

// Ejemplo con una variable tipo JSON
let persona = { nombre: "Esteban", edad: 30 };
let personaRemoved = JSON.parse(localStorage.removeItem("persona"));
console.log(localStorage.getItem("persona")); // null
