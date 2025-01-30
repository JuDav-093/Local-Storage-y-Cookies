# Ejemplo de uso de get  
## `localStorage.getItem(key)` (Obtener datos)  

### Descripción  
`localStorage.getItem(key)` permite recuperar un valor previamente almacenado en `localStorage`.  

**Parámetros:**  
- `key` → Identificador único en formato `string` de la clave a recuperar.  

**Funcionamiento:**  
- Si la clave **existe**, devuelve su valor almacenado en formato `string`.  
- Si la clave **no existe**, devuelve `null`.  

**Consideraciones:**  
- Si el valor almacenado es un objeto o un array, **debe convertirse nuevamente a su formato original** usando `JSON.parse()`.  
- `localStorage` **no lanza errores si la clave no existe**, simplemente devuelve `null`.  
- No es posible obtener una lista de todos los valores almacenados directamente, pero se puede recorrer con `localStorage.key(index)`.  
