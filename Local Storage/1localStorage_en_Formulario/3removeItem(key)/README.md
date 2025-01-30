# Ejemplo de uso de remove  
## `localStorage.removeItem(key)` (Eliminar datos)  

### Descripción  
`localStorage.removeItem(key)` permite eliminar una clave y su valor asociado en `localStorage`.  

**Parámetros:**  
- `key` → Identificador único en formato `string` de la clave a eliminar.  

**Funcionamiento:**  
- Si la clave **existe**, se eliminará del almacenamiento.  
- Si la clave **no existe**, no ocurre ningún error ni efecto secundario.  

**Consideraciones:**  
- No es necesario verificar si la clave existe antes de eliminarla.  
- `localStorage.removeItem()` **no afecta otras claves almacenadas**.  
- Si se necesita eliminar **todas** las claves almacenadas, se debe usar `localStorage.clear()`.