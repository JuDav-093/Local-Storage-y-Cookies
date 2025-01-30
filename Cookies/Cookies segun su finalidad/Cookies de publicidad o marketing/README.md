# Cookies de publicidad o marketing

## Documentación para el seguimiento de vistas de anuncios con Cookies

Este documento describe la funcionalidad del código proporcionado para el seguimiento de vistas de anuncios mediante el uso de cookies. Se centra en la función `viewAds` y su interacción con las cookies para registrar y mostrar el número de veces que un usuario ha visto un anuncio específico.

### Funcionalidad

El objetivo principal es registrar cuántas veces un usuario ve un anuncio específico y mostrar este conteo. Para lograr esto, se utilizan cookies para almacenar y recuperar la información del usuario y el conteo de vistas.

#### `viewAds(adId)`

Esta función realiza las siguientes acciones:

1. **Obtiene el identificador del usuario:** Intenta obtener un identificador único del usuario almacenado en una cookie llamada `_adId` usando la función `getCookie('_adId')`. Este identificador es crucial para asociar las vistas del anuncio con un usuario específico.

2. **Verifica la existencia del identificador:** Si se encuentra el identificador del usuario (`userId`), significa que el usuario ya ha interactuado con el sitio y se ha registrado su actividad.

3. **Incrementa el contador de vistas:** Si el usuario está identificado, la función intenta obtener el contador actual de vistas del anuncio desde una cookie llamada `ad_views` usando `getCookie('ad_views')`. Si la cookie no existe, se asume que es la primera vista y el contador se inicializa a 0. Luego, se incrementa este contador.

4. **Actualiza la cookie:** El nuevo valor del contador de vistas se guarda en la cookie `ad_views` usando `setCookie('ad_views', adViews, 1)`. El valor `1` indica que la cookie debe expirar después de 1 día.

5. **Muestra el conteo:** Se imprime en la consola el identificador del anuncio (`adId`) y el número actual de vistas (`adViews`). Además, se actualiza el elemento HTML con el id `vistas` para mostrar el conteo de vistas actual al usuario.

6. **Manejo de usuarios no identificados:** Si no se encuentra el identificador del usuario (`userId`), se imprime un mensaje en la consola indicando que el usuario no está identificado. Esto significa que no se registrarán las vistas del anuncio para este usuario hasta que interactúe con el sitio de manera que se cree la cookie `_adId`.

#### Ejemplo de uso

El código incluye un ejemplo de cómo se utiliza la función `viewAds` con un botón:

```javascript
document.getElementById('ver-anuncio1').addEventListener('click', function() {
    viewAds('ad123');
});
