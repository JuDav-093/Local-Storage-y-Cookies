# Local-Storage
Guía de uso y ejemplos
El método `clear()` del objeto `localStorage` elimina **todos los registros** del almacenamiento local. Es importante destacar que estos datos se guardan en archivos internos del navegador y persisten incluso después de cerrar y volver a abrir el navegador.

Ejemplo práctico:

`metodoClearLocalStorage.html` contiene: 
- Visualizar un valor almacenado en `localStorage`.
- Eliminar el valor mediante un botón que invoca el método `clear()`.

`metodoClearLocalStorage.js`:
En este archivo se realiza lo siguiente:
  Almacenar un dato en `localStorage`:
   localStorage.setItem('Mascota', 'Firulais');
   Mostrar el valor por consola con ayuda de la consola del navegador
   
   Se sobreescribe el contenido de un div con el valor almacenado en localStorage:
   document.getElementById('mostrarElemento').innerHTML = localStorage.getItem('Mascota');
   
  Eliminar el dato con clear(), se asocia un evento de click a un botón para limpiar el localStorage y borrar el contenido del div:
  document.getElementById('btnClean').addEventListener('click', () => {
      localStorage.clear();
      document.getElementById('mostrarElemento').innerHTML = '';
  });
  
  Verificación en consola:
  Se usa console.log() para verificar el estado del dato almacenado.
  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Notas importantes:
- Persistencia de datos:
Los datos en localStorage persisten incluso después de cerrar el navegador. Solo se eliminan si:
Se invoca localStorage.clear() o localStorage.removeItem('clave').
El usuario borra manualmente los datos del sitio en la configuración del navegador.

- Reinicio del entorno de desarrollo:
Si estás usando un servidor de desarrollo (como Live Server en VS Code), tomar en cuenta que al recargar la página o reiniciar el servidor, el código se ejecutará nuevamente. Esto puede hacer que los datos se guarden automáticamente en localStorage si no verificamos si ya existieron.

- Uso de null:
Si al imprimir el dato en la consola se obtiene null, significa que el dato ha sido eliminado correctamente y no existe en localStorage.

- Compatibilidad:
localStorage no está disponible en todos los entornos. Por ejemplo, Quokka no soporta localStorage, por lo que debes probar tu código en un navegador.
