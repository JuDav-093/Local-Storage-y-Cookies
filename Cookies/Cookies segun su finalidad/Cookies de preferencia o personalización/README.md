# Cookies de Preferencia o Personalización  

Las **Cookies de Preferencia o Personalización** permiten que un sitio web recuerde configuraciones y preferencias del usuario, como el idioma o el modo oscuro.  
Este tipo de cookies **no son esenciales** para el funcionamiento del sitio, pero mejoran la experiencia de navegación.  

## Descripción

Las cookies de preferencia almacenan información que **personaliza la experiencia del usuario** en la web.  
Se utilizan para recordar configuraciones establecidas por el usuario, evitando que tenga que configurarlas en cada visita.  

## Características  

- **Personalizan la experiencia del usuario** (ejemplo: idioma, tema, moneda).  
- **Requieren el consentimiento del usuario** antes de almacenarse.  
- **No afectan la funcionalidad del sitio** si se rechazan.  
- **Se pueden configurar con una fecha de expiración prolongada** para recordar preferencias a largo plazo. 

### Conceptos utilizados

- **`document.cookie`**: Permite gestionar las cookies de personalización.
- **Preferencias del usuario**: Se almacenan en cookies para recordar configuraciones.
- **Conversión de datos a texto**: Se almacena información en formato `string`.
- **Persistencia de datos**: Se usa para recordar configuraciones entre sesiones.

### Consideraciones

- Estas cookies **requieren consentimiento** del usuario.
- Son utilizadas para mejorar la experiencia de navegación.
- Se recomienda cifrar información sensible si se almacena en cookies.

### Funcionamiento del Ejemplo práctico

### Parámetros

- `nombre` → Nombre de la cookie.
- `valor` → Preferencia del usuario que se almacena.
- `diasExpiracion` → Tiempo de validez de la preferencia guardada.

### Secuencia

1. Se muestra un mensaje al usuario solicitando su consentimiento para almacenar cookies de personalización.
2. Si el usuario acepta, se crea una cookie con la configuración seleccionada (ej. idioma, tema oscuro, etc.).
3. En visitas posteriores, la página lee la cookie y aplica automáticamente la preferencia guardada.
4. Si el usuario cambia su preferencia, la cookie se actualiza con el nuevo valor.
5. En caso de que el usuario elimine las cookies, las configuraciones personalizadas se restablecen a los valores predeterminados.