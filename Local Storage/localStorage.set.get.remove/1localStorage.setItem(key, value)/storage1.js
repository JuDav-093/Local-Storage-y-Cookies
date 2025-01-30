/* ----------------------------------------------------------------------
                            GUARDAR O CREAR DATOS
------------------------------------------------------------------------- */

/* La API setItem(key, value) permitea almacenar datos en el cliente de forma persistente.
Estos datos se almacenan en el localStorage del navegador, y no se eliminan cuando se cierra el mismo. */

//Esta API posee la siguiente sintaxis:
localStorage.setItem("clave", "valor")

/* Los parámetros que se identifican son: 

key(string) => La clave única que identifica el valor almacenado
value(string) => El valor que se quiere guardar */

/* ----------------------------------------------------------------------
                                EJEMPLOS
------------------------------------------------------------------------- */

/* Como primer ejemplo, se requiere guardar un usuario, en este caso clave, 
y un valor el cual hace referencia a un nombre */
localStorage.setItem("usuario", "José");

/* Otro ejemplo pero con valores numéricos */
localStorage.setItem("edad", "23");

/* Usando una variable de tipo JSON y convirtiendola en string con stringfy */
let persona = { nombre: "Esteban", edad: 30 };
localStorage.setItem("persona", JSON.stringify(persona)); //Se guarda el string teniendo como clave "persona"

/* Este tipo de API también puede ejecutarse mediante una función para guardar múltiples items */
function animalStorage() {
    localStorage.setItem("animal", "perro");
    localStorage.setItem("color", "verde");
    localStorage.setItem("género", "macho");
}
  
