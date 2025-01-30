# Local-Storage
Guia de uso y ejemplos
# Local-Storage
Guia de uso y ejemplos
1.  

2. 

3. 

4. Método clear() en localStorage:

Al invocar el método clear() del objeto localStorage se eliminan todos los registros del almacen local.
Haciendo un enfásis que estos datos se guardarn en archivos internos de nuestro navegador.

metodoClearLocalStorage.HTML: Contiene una estructura muy basica que permite visualizar el valor y una acción para 
eliminar el valor mediante un botón

metodoClearLocalStorage.js: 
- Almacenamos un dato dentro del localStorage
- Sobreescribimos el contenido del div con el valor del dato almacena
- Mediante el uso de una funcion de flecha asociamos un evento de "click" al botón y eliminamos el dato del localStorage
- Impresion con uso de "console.log()" para verificar el estado del dato almacena mediante la consola del navegador

Extra: 
- Tener en cuenta que Quokka no soporta el objeto localStorage es por eso que debemos usar un navegador.
- Si a la hora de imprimir el dato dentro de la consola del navegador muestra un valor de "NULL" es por  que el dato fue borrado 
- El dato vuelve a aparecer aún a pesar de ejecutar clean(), cerrar y abrir el navegador debido a que se esta ejecutando todo el script de modo que vuelve a crearse el dato en localStorage

