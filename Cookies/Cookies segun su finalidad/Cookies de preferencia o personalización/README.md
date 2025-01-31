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

## **Uso de XAMPP para el correcto funcionamiento de las Cookies**

### **¿Por qué XAMPP?**

Las cookies **no funcionarán de manera local** si se accede al archivo HTML mediante el protocolo `file://`.  
Esto se debe a restricciones de seguridad del navegador. Sin embargo, si usas un servidor local como **XAMPP**, podrás ejecutar el sitio web bajo el protocolo `http://`, que **sí soporta cookies correctamente**.

### **Pasos para usar XAMPP y garantizar el funcionamiento de las Cookies**

1. **Instalar XAMPP**: Desde el propio navegador buscar el sitio oficial y descargar el instalador.

2. **Mover el proyecto a la carpeta `htdocs` de XAMPP**:
   - Localiza la carpeta `htdocs` dentro de la instalación de XAMPP, usualmente en `C:\xampp\htdocs`.
   - Mover todo el proyecto (la carpeta que contiene los archivos HTML y JS) a `htdocs`.

3. **Iniciar Apache en XAMPP**:
   - Abre el panel de control de XAMPP.
   - Hacer clic en "Start" Apache, para iniciar el servidor web local.

4. **Acceder al proyecto en el navegador**:
   - En el navegador, acceder a la URL del proyecto como `http://localhost/carpeta-del-proyecto/`.
   - Esto asegurará que el navegador use el protocolo `http://` y que las cookies se gestionen correctamente.

### Funcionamiento del Ejemplo práctico

### Parámetros

- `nombre` → Nombre de la cookie.
- `valor` → Preferencia del usuario que se almacena.
- `diasExpiracion` → Tiempo de validez de la preferencia guardada.

### Secuencia

1. Una vez en la interfaz de la página, el usuario podrá seleccionar entre 3 idiomas.
2. El usuario podrá guardar, cargar o eliminar el idioma que desea.
3. En caso de que el usuario elimine el idioma guardado, la cookie se actualizará y estará lista para almacenar otro idioma.
4. Si el usuario cambia su preferencia, la cookie se actualiza con el nuevo valor.
5. En caso de que el usuario elimine las cookies, las configuraciones personalizadas se restablecen a los valores predeterminados.