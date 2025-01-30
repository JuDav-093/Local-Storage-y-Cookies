# Creación de Cookies

## Flujo

### Verificación de cookies:

Al cargar la página, se verifica si las cookies están habilitadas usando `navigator.cookieEnabled`. Si las cookies no están habilitadas, el flujo de creación de cookies no se ejecutará.

### Interacción del usuario:

1. **Aceptar Cookies**: 
    - Cuando el usuario hace clic en "Aceptar", se llama a la función `createAnalysisCookie()`, que genera un identificador único para el usuario (`userId`), y se crean dos cookies:
        - Una cookie llamada `_gid`, que almacena el `userId` generado, con una duración de 1 día.
        - Una cookie llamada `page_views`, que lleva el conteo de vistas de página, también con una duración de 1 día.
    - Después de aceptar, el banner que solicita la aceptación de cookies se oculta.
   
2. **Rechazar Cookies**:
    - Si el usuario hace clic en "Rechazar", no se crean cookies, y el banner de aceptación se oculta sin que se registre ninguna información relacionada con el usuario o sus visitas.

### Mensajes:

- Se muestra un mensaje en la página que indica si las cookies fueron aceptadas o rechazadas. Este mensaje puede ser actualizado de acuerdo con las acciones del usuario para reflejar el estado actual de las cookies.
  
---

### Funcionalidad del Código

#### `createAnalysisCookie()`
- Genera un identificador único para el usuario.
- Crea dos cookies:
  - `_gid`: Guarda el identificador único generado.
  - `page_views`: Guarda el número de vistas de página, comenzando en 0.

#### `trackPageVisit(pageUrl)`
- Obtiene el identificador único del usuario desde la cookie `_gid`.
- Si el usuario está identificado (tiene la cookie `_gid`), incrementa el contador de vistas de página (`page_views`), lo guarda en la cookie y actualiza la visualización en la página.
- Si el usuario no está identificado, muestra un mensaje de error en la consola.

#### Ejemplo de uso:
```javascript
// Crear cookies y realizar seguimiento de la visita
createAnalysisCookie();
trackPageVisit('https://mi-pagina.com');

