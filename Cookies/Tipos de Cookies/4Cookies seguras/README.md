# Cookies
Guia de uso y ejemplos

¿Qué es una cookie segura?
Es un tipo de cookie que solo se envía al servidor a través de una conexión cifrada (HTTPS). No se transmitirá si la conexión no es segura (HTTP). Ya que estas mismas cookies seguras son útiles para proteger información sensible, como tokens de autenticación, ya que evitan que sean interceptadas por ataques en redes no seguras.

Ejemplo: 

1. Descripción General
Este sistema implementa un manejo seguro de cookies en una aplicación web, utilizando las mejores prácticas de seguridad actuales. El sistema consta de dos archivos principales:
- `cookieSegura.html`: Interfaz de usuario
- `cookie-segura.js`: Lógica de manejo de cookies

2. Características de Seguridad Implementadas
- Secure Flag: Asegura que las cookies solo se transmitan por HTTPS
- SameSite=Strict: Previene ataques CSRF limitando el envío de cookies
- Gestión de expiración: Implementación correcta de eliminación de cookies

3. Estructura del Sistema

3.1 Interfaz HTML (`cookieSegura.html`)
- Creación de los botones que generaran las acciones para la cookie.

3.2 JavaScript (`cookie-segura.js`)
El archivo JavaScript implementa tres funciones principales:
1. Creación de cookies
2. Lectura de cookies
3. Eliminación de cookies

4. Guía de Uso

4.1 Crear una Cookie
- Click en "Crear Cookie"
- Se crea una cookie segura con nombre "usuario" y valor "Juan"
- La cookie incluye automáticamente flags de seguridad
- Verás un mensaje de confirmación

4.2 Leer una Cookie
- Click en "Leer Cookie"
- Se mostrarán todas las cookies existentes
- Si no hay cookies, verás un mensaje indicándolo

4.3 Eliminar una Cookie
- Click en "Eliminar Cookie"
- La cookie se eliminará estableciendo una fecha de expiración pasada
- Verás un mensaje de confirmación

5. Personalizaciones a los valores de la cookie

5.1 Modificar el Valor de la Cookie
`document.cookie = "usuario=NuevoNombre; Secure; SameSite=Strict";`

5.2 Añadir Fecha de Expiración
let fecha = new Date();
fecha.setTime(fecha.getTime() + (dias*24*60*60*1000));
document.cookie = `usuario=Juan; expires=${fecha.toUTCString()}; Secure; SameSite=Strict`;


5.3 Añadir Path Específico
document.cookie = "usuario=Juan; path=/ruta; Secure; SameSite=Strict";

6. Solución de Problemas Comunes

6.1 La Cookie No Se Crea
- Verificar que estés usando HTTPS o localhost
- Comprobar la consola del navegador para errores
- Verificar que no haya bloqueadores de cookies activos

6.2 No Se Puede Leer la Cookie
- Confirmar que la cookie existe en las herramientas de desarrollo del navegador
- Verificar que estés en el mismo dominio donde se creó la cookie
- Comprobar que no haya expirado

6.3 La Cookie No Se Elimina
- Asegurarse de usar el mismo path y dominio que al crearla
- Verificar que los flags de seguridad coincidan

7. Creación de una Cookie sin Banderas de Seguridad

7.1 Sin la bandera `Secure`:
La bandera `Secure` indica que la cookie solo se enviará a través de conexiones HTTPS (es decir, conexiones seguras). Si se trabaja en un entorno local con `http://localhost`, esta bandera impide que la cookie se cree o se acceda, ya que `http://localhost` no es una conexión segura (HTTPS).

¿Por qué funciona sin `Secure`?
Al eliminar la bandera `Secure`, la cookie se puede crear y acceder en cualquier tipo de conexión, incluyendo `http://localhost`. Esto es útil para desarrollo local, donde no siempre se usa HTTPS.

7.2 Sin la bandera `SameSite=Strict`:
La bandera `SameSite=Strict` restringe el envío de la cookie solo a solicitudes que provengan del mismo sitio (es decir, no se envía en solicitudes cruzadas o de terceros). Esto es útil para prevenir ataques CSRF (Cross-Site Request Forgery), pero puede ser demasiado restrictivo en algunos casos.

¿Por qué funciona sin `SameSite=Strict`?
Al eliminar esta bandera, la cookie se envía en todas las solicitudes, independientemente de su origen. Esto simplifica el comportamiento de la cookie y permite que funcione en más escenarios, especialmente durante el desarrollo.

7.3 Comportamiento de la cookie sin restricciones
Creación: La cookie se crea inmediatamente cuando se ejecuta `document.cookie = "usuario=Juan";`. No hay restricciones adicionales, por lo que funciona en cualquier entorno, incluido `http://localhost`.
Acceso: La cookie se puede leer y acceder fácilmente con `document.cookie`, ya que no está restringida por `Secure` o `SameSite`.
EliminaciónPara eliminar la cookie, simplemente se establece una fecha de expiración en el pasado, como se hace en el código:

`document.cookie = "usuario=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";`