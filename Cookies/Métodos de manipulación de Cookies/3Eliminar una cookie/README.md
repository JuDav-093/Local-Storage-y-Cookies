# Eliminar Cookies

## Flujo General

### Mostrar cookies:

`showCookies()` obtiene las cookies del navegador, las divide y las muestra en una lista (\<ul>\).

### Eliminar una cookie:

deleteCookie(nombre) elimina una cookie específica estableciendo su fecha de expiración en el pasado.

### Eliminar todas las cookies:

`deleteAllCookies()` recorre todas las cookies, las elimina una por una y actualiza la vista.

## Notas Clave
Eliminación: Se logra estableciendo la fecha de expiración en el pasado.

Seguridad: No funciona con cookies HttpOnly o Secure.
