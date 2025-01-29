# Local-Storage-y-Cookies
Guia de uso y ejemplos

1. Local Storage en JavaScript

1.1. ¿Qué es Local Storage?

Local Storage es una funcionalidad del API Web Storage que permite almacenar datos de manera persistente en el navegador del usuario. A diferencia de las cookies, los datos almacenados en Local Storage no se envían con cada solicitud HTTP.

1.2. Clasificación del Web Storage

El API Web Storage se divide en dos:

Local Storage: Almacena datos sin fecha de expiración, disponibles incluso si se cierra y reabre el navegador.

Session Storage: Almacena datos solo mientras dure la sesión del navegador.

1.3. Métodos de Local Storage

localStorage.setItem(key, value)

Descripción: Guarda un valor asociado a una clave.

Ejemplo:

localStorage.setItem("usuario", "Anabel");

localStorage.getItem(key)

Descripción: Obtiene un valor almacenado.

Ejemplo:

let usuario = localStorage.getItem("usuario");
console.log(usuario); // "Anabel"

localStorage.removeItem(key)

Descripción: Elimina un elemento del almacenamiento.

Ejemplo:

localStorage.removeItem("usuario");

localStorage.clear()

Descripción: Borra todos los datos almacenados.

Ejemplo:

localStorage.clear();

2. Cookies en JavaScript

2.1. ¿Qué son las Cookies?

Las cookies son pequeños fragmentos de datos que se almacenan en el navegador y que se envían con cada solicitud HTTP. Se usan para persistir información entre sesiones y para gestionar autenticaciones.

2.2. Tipos de Cookies

Cookies de sesión

Descripción: Se eliminan cuando el usuario cierra el navegador.

Ejemplo:

document.cookie = "sesionID=12345; path=/";

Cookies persistentes

Descripción: Tienen una fecha de expiración y permanecen en el navegador hasta que se eliminan.

Ejemplo:

let fechaExpiracion = new Date();
fechaExpiracion.setTime(fechaExpiracion.getTime() + (7 * 24 * 60 * 60 * 1000));
document.cookie = "usuario=Anabel; expires=" + fechaExpiracion.toUTCString() + "; path=/";

Cookies de terceros

Descripción: Son creadas por dominios diferentes al que el usuario está visitando.

Ejemplo: Estas cookies son utilizadas por anuncios o rastreadores.

document.cookie = "trackingID=xyz; domain=anunciante.com; path=/";

Cookies seguras

Descripción: Solo se transmiten a través de HTTPS, aumentando la seguridad.

Ejemplo:

document.cookie = "autenticacionToken=abc123; Secure; path=/";

2.3. Métodos de manipulación de Cookies

Crear una cookie

Descripción: Se asigna una cookie con nombre y valor, opcionalmente con una fecha de expiración y un path.

Ejemplo:

document.cookie = "usuario=Anabel; expires=" + new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000).toUTCString() + "; path=/";

Leer cookies

Descripción: Se accede al valor de todas las cookies disponibles en el navegador.

Ejemplo:

console.log(document.cookie);

Eliminar una cookie

Descripción: Para eliminar una cookie, se establece una fecha de expiración en el pasado.

Ejemplo:

document.cookie = "usuario=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

3. Conclusión

Usar Local Storage cuando se necesite almacenar datos grandes y persistentes que no deban enviarse con cada solicitud.

Usar Cookies cuando sea necesario enviar datos al servidor con cada petición, como tokens de autenticación.