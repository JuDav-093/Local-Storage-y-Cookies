## Cookies Técnicas u Obligatorias  

### Descripción

Las **Cookies Técnicas u Obligatorias** son esenciales para el correcto funcionamiento del sitio web.  
Se utilizan para garantizar funcionalidades básicas como la navegación, la autenticación de usuarios y la seguridad.  

### Características

- No requieren el consentimiento del usuario, ya que son necesarias para el servicio.  
- Permiten el acceso a áreas restringidas o protegidas con autenticación.  
- Se utilizan para mantener sesiones de usuario activas.  
- Pueden ser propias (del dominio) o de terceros (proveedores de seguridad, autenticación, etc.).  

### ¿Qué son?

Las **cookies técnicas** son esenciales para el correcto funcionamiento de una página web. Permiten la gestión de sesiones, la autenticación del usuario y otras funciones básicas del sitio.

### Conceptos utilizados

- **`document.cookie`**: API utilizada para crear, leer y eliminar cookies.
- **Fecha de expiración**: Controla la duración de la cookie en el navegador.
- **`path=/`**: Hace que la cookie esté disponible en todas las páginas del sitio web.
- **Sesión del usuario**: Se utiliza para mantener la autenticación del usuario.

### Consideraciones

- Las cookies técnicas **no requieren consentimiento** del usuario.
- Son necesarias para funciones como el inicio de sesión o el carrito de compras.
- Se recomienda establecer una fecha de expiración adecuada.

### Funcionamiento del ejemplo práctico

### Parámetros

- `nombre` → Nombre de la cookie.
- `valor` → Valor de la cookie.
- `diasExpiracion` → Días en los que la cookie será válida.

### Secuencia

1. Se verifica si el usuario tiene una cookie de sesión activa.
2. Si no la tiene, se genera una nueva cookie con un identificador único.
3. Se almacena la cookie con una fecha de expiración definida.
4. En cada visita, la cookie es leída y permite mantener la sesión del usuario sin necesidad de volver a iniciar sesión.
5. Si el usuario cierra sesión, la cookie se elimina.

