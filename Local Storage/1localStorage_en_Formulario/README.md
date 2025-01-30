# Ejemplo de uso de `localStorage` en un formulario  

Este formulario nos muestra de que manera se trabaja con `localStorage` para **guardar**, **recuperar** y **eliminar** un nombre ingresado por el usuario en un formulario.  

## Descripción del caso de uso  

Se utilizan tres métodos de la API `localStorage`:  
- **`setItem`** para almacenar el nombre ingresado.  
- **`getItem`** para recuperar y mostrar el nombre almacenado.  
- **`removeItem`** para eliminar el nombre del almacenamiento.  

El código se divide en dos partes:  
- Un archivo HTML con un formulario de entrada y botones para realizar cada acción.  
- Un archivo JavaScript (`form.js`) que maneja la lógica de almacenamiento con `localStorage`.  

## Funcionamiento del código  

### Guardar el nombre con `setItem`  
Cuando el usuario ingresa un nombre en el campo de texto y hace clic en "Guardar", la función `guardarNombre()` almacena el valor en `localStorage`.

### Recuperar el nombre con `getItem`  
Luego de que el usuario ingresó el nombre y hace clic en "mostrar", la función `mostrarNombre()` recupera el valor en `localStorage` y lo muestra como alerta.  

### Eliminar el nombre con `removeItem`  
Una vez el usuario guardó el nombre con el botón "guardar" y hace clic en "Eliminar", la función `eliminarNombre()` elimina el nombre del `localStorage`, y en caso de que se de click en mostrar nuevamente, no mostrará ningún nombre guardado.  