/* ----------------------------------------------------------------------
                            RECUPERAR DATOS
------------------------------------------------------------------------- */

/* La API localStorage.getItem(key) obtiene el valor guardado en el localStorage mediante su clave */

//Su sintaxis es:
let valor = localStorage.getItem("clave");

/* Los parámetros que se identifican son:

key(string) => La clave del valor a recuperar */ 

/* ----------------------------------------------------------------------
                                EJEMPLOS
------------------------------------------------------------------------- */

/* Ejemplo para recuperar los datos de un usuario */
let usuario = localStorage.getItem("usuario");
console.log(usuario); //

/* Otro ejemplo para recuperar un valor numérico */
let edad = localStorage.getItem("edad");
console.log(edad); //

/* Del mismo modo que el setItem, esta API se puede aplicar para objetos (JSON) */
let persona = { nombre: "Esteban", edad: 30 };
let personaGet = JSON.parse(localStorage.getItem("persona"));
console.log(personaGet.nombre); //
console.log(personaGet.edad);   //

/* En caso que se intente recuperar una clave inexistente, la API devuelve null */
console.log(localStorage.getItem("estatura")); // null


/* Finalmente, se puede implementar una función la cual recupere varios datos, en este caso,
esta función toma 3 elementos del localStorage y los utiliza para establecer estilos personalizados
en una página */
function setStyles() {
    var currentColor = localStorage.getItem("bgcolor");
    var currentFont = localStorage.getItem("font");
    var currentImage = localStorage.getItem("image");
  
    document.getElementById("bgcolor").value = currentColor;
    document.getElementById("font").value = currentFont;
    document.getElementById("image").value = currentImage;
  
    htmlElem.style.backgroundColor = "#" + currentColor;
    pElem.style.fontFamily = currentFont;
    imgElem.setAttribute("src", currentImage);
}
  