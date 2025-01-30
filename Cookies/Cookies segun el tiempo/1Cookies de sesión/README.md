# Guía de Uso para Cookies de Sesión

## 1. ¿Qué es una Cookie de Sesión?

Las *cookies de sesión* son cookies temporales que solo permanecen activas mientras el usuario mantiene abierta la página web. Se eliminan automáticamente cuando el usuario cierra el navegador.

### Ejemplo de uso
- *Autenticación temporal*: Permiten identificar a un usuario durante una sesión sin necesidad de almacenamiento persistente.
- *Carritos de compra*: Se utilizan para mantener los productos seleccionados hasta que el usuario finaliza la compra.
- *Preferencias temporales*: Guardan configuraciones durante la navegación sin almacenar información a largo plazo.

---

## 2. Funciones Principales

### 2.1 Establecer una Cookie de Sesión
Permite crear una cookie con un identificador de sesión. Esta cookie estará disponible mientras el navegador permanezca abierto.

### 2.2 Mostrar las Cookies Actuales
Se proporciona una función para visualizar las cookies almacenadas en el navegador en el momento de la consulta.

### 2.3 Mostrar Mensajes en la Pantalla
Cada acción realizada con las cookies genera un mensaje de confirmación visible en la interfaz de usuario.

---

## 3. Estructura del Sistema

### 3.1 Interfaz HTML
El archivo HTML contiene una interfaz simple con botones que permiten establecer cookies de sesión y visualizar las cookies almacenadas.

### 3.2 Archivo CSS
Se incluye un archivo CSS para mejorar el diseño de la interfaz y hacerla más intuitiva.

---

## 4. Guía de Uso

### 4.1 Crear una Cookie de Sesión
1. Haz clic en el botón **"Establecer Cookie de Sesión"**.
2. Se generará una cookie con un identificador de sesión.
3. Se mostrará un mensaje confirmando que la cookie ha sido creada.

### 4.2 Ver Cookies Almacenadas
1. Haz clic en el botón **"Mostrar Cookies"**.
2. Se desplegará una lista con todas las cookies activas en la sesión actual.

### 4.3 Solución de Problemas
- **Si la cookie no se establece**: Verifica que no haya restricciones en el navegador para el uso de cookies.
- **Si las cookies no aparecen al mostrarlas**: Asegúrate de no haber cerrado el navegador, ya que las cookies de sesión se eliminan al hacerlo.

---

## 5. Consideraciones de Seguridad

- **Las cookies de sesión no deben contener información sensible**: Al no estar cifradas ni almacenadas a largo plazo, podrían ser vulnerables en conexiones no seguras.
- **HTTPS recomendado**: Aunque las cookies de sesión no se guardan después del cierre del navegador, se recomienda usarlas en conexiones seguras para evitar riesgos de interceptación.

---

Con esta guía, puedes implementar y gestionar cookies de sesión en tu aplicación web de manera eficiente y segura.
