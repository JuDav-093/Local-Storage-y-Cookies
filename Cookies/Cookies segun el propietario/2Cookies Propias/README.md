# Guía de Uso para Cookies Propias  

## 1. ¿Qué es una Cookie Propia?  
Las *cookies propias* son aquellas que son creadas y gestionadas por el mismo dominio que el usuario está visitando. Se utilizan para almacenar información como preferencias de usuario, datos de sesión y configuraciones personalizadas.  

### Ejemplo de Uso  
- **Preferencias del usuario**: Guardar el tema (claro u oscuro) seleccionado.  
- **Configuración personalizada**: Recordar idioma o ajustes de accesibilidad.  
- **Mantenimiento de sesión**: Conservar la autenticación del usuario sin necesidad de iniciar sesión repetidamente.  

---

## 2. Funciones Principales  

### 2.1 Guardar una Preferencia de Usuario  
Esta funcionalidad permite almacenar en una cookie propia la configuración de tema seleccionada por el usuario. La cookie tiene una duración de **30 días**.  

### 2.2 Mostrar la Preferencia Guardada  
Al recargar la página, se recupera automáticamente el valor guardado en la cookie y se muestra en pantalla.  

### 2.3 Interfaz Sencilla e Intuitiva  
El usuario puede seleccionar entre **tema claro u oscuro**, guardar su elección y visualizar su preferencia actual.  

---

## 3. Estructura del Sistema  

### 3.1 Interfaz HTML  
El archivo HTML proporciona una interfaz con un menú desplegable para elegir el tema, botones para guardar y mostrar la preferencia, y una sección para mostrar el mensaje de confirmación.  

### 3.2 Archivo JavaScript  
El script maneja la creación y lectura de cookies propias, asegurando que la preferencia del usuario se mantenga incluso después de cerrar el navegador.  

### 3.3 Hoja de Estilos CSS  
El archivo CSS mejora la presentación de la página con un diseño simple y ordenado.  

---

## 4. Guía de Uso  

### 4.1 Guardar una Preferencia de Tema  
1. Selecciona un tema en el menú desplegable (**claro u oscuro**).  
2. Haz clic en el botón **"Guardar Preferencia"**.  
3. La preferencia se almacenará en una cookie y se confirmará con un mensaje en pantalla.  

### 4.2 Mostrar la Preferencia Guardada  
1. Haz clic en el botón **"Mostrar Preferencia"**.  
2. Se mostrará el tema guardado previamente.  

### 4.3 Carga Automática de Preferencias  
Cada vez que se recarga la página, la preferencia guardada se recupera y se muestra automáticamente.  

---

## 5. Consideraciones de Seguridad  

- **Uso responsable**: No almacenar información sensible en cookies propias.  
- **Caducidad**: Las cookies deben tener un tiempo de expiración definido para evitar almacenamiento innecesario.  
- **Protección contra ataques**: Implementar medidas de seguridad como `HttpOnly` y `Secure` en cookies cuando sea necesario.  

---

Con esta guía, puedes implementar, gestionar y solucionar problemas comunes relacionados con las **cookies propias** en tu aplicación web. 🚀
