# Ejemplo de uso de get, set y remove
## `localStorage.setItem(key, value)` (Guardar datos)  

### 📖 Descripción  
`localStorage.setItem(key, value)` almacena un valor en el almacenamiento local del navegador.  

📌 **Parámetros:**  
- `key` → Identificador único en formato `string` para acceder al valor almacenado.  
- `value` → Dato que se quiere almacenar (debe ser `string`).  

📌 **Comportamiento:**  
- Si la clave **ya existe**, su valor se sobrescribirá.  
- Si la clave **no existe**, se creará una nueva entrada en `localStorage`.  

📌 **Consideraciones:**  
✔ Si se desea almacenar un objeto o un array, **debe convertirse en string** usando `JSON.stringify()`.  
✔ `localStorage` **no acepta funciones ni estructuras cíclicas** en los objetos almacenados.  
✔ Los datos quedan disponibles en todas las pestañas y ventanas del mismo dominio.  


