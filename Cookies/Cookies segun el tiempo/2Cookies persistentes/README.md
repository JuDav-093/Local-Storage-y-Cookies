# Guía de Uso para Cookies Persistentes

## 1. ¿Qué es una Cookie Persistente?

Las *cookies persistentes* son aquellas que permanecen almacenadas en el navegador incluso después de cerrar la página o el navegador. Se utilizan para recordar información del usuario y mejorar su experiencia en futuras visitas.

### Ejemplo de uso
- *Recordar el nombre del usuario*: Permite personalizar el saludo cuando el usuario regresa a la página.
- *Preferencias del usuario*: Almacenar configuraciones como idioma o tema elegido.
- *Inicio de sesión automático*: Evita que el usuario tenga que ingresar sus credenciales en cada visita.

---

## 2. Funciones Principales

### 2.1 Guardar el Nombre del Usuario
Se almacena el nombre ingresado en un campo de texto dentro de una cookie persistente con una duración de 30 días.

### 2.2 Mostrar el Nombre Guardado
Si la cookie ya existe, la página muestra automáticamente un saludo personalizado al usuario.

### 2.3 Mostrar Mensajes de Confirmación
Cada acción (guardar o mostrar el nombre) genera un mensaje que confirma la operación.

---

## 3. Estructura del Sistema

### 3.1 Interfaz HTML
La página web contiene:
- Un campo de texto para ingresar el nombre del usuario.
- Botones para guardar el nombre y mostrarlo si está almacenado.
- Un área donde se muestra el saludo personalizado.

### 3.2 Archivo CSS
Un archivo CSS mejora la apariencia de la interfaz, haciéndola más agradable e intuitiva.

---

## 4. Guía de Uso

### 4.1 Guardar un Nombre en la Cookie
1. Escribe tu nombre en el campo de texto.
2. Haz clic en el botón **"Guardar Nombre"**.
3. Se guardará la cookie y aparecerá una alerta confirmando el guardado.

### 4.2 Mostrar el Nombre Guardado
1. Si has guardado un nombre anteriormente, este se mostrará automáticamente en la página.
2. También puedes hacer clic en **"Mostrar Nombre Guardado"** para visualizarlo manualmente.

### 4.3 Solución de Problemas
- **Si el nombre no se guarda**: Asegúrate de haber ingresado un nombre antes de hacer clic en el botón.
- **Si la cookie se borra**: Revisa la configuración del navegador, ya que algunos pueden eliminar cookies automáticamente.
- **Si el nombre no se muestra**: Puede que la cookie haya expirado después de 30 días.

---

## 5. Consideraciones de Seguridad

- **No almacenar información sensible**: Las cookies pueden ser accesibles por scripts y no son seguras para datos confidenciales.
- **Configurar el atributo `HttpOnly` cuando sea posible**: Esto evita que las cookies sean accesibles por JavaScript y reduce el riesgo de ataques XSS.
- **Usar HTTPS**: Para proteger la integridad de las cookies y prevenir ataques de interceptación.

---
