// Almacenamos un dato en local donde la sintaxis seria: --- localStorage.setItem("clave", "valor"); ---
localStorage.setItem('Mascota', 'Firulais');

//Vamos dentro del div y sobreescribimos el contenido de este con el valor rescata mediante la clave en localStorage
document.getElementById('mostrarElemento').innerHTML = localStorage.getItem('Mascota');
//Verificar el elemento en la consola
console.log(localStorage.getItem('Mascota'));
///Método Clean():
//Localizar el botón del método clean(), asociarlo al evento click y limpiar el almacenamiento local
document.getElementById('btnClean').addEventListener('click', () => {
    // Limpiar el almacenamiento local
        localStorage.clear(); 
    //Limpiar el contenido dentro del div
    document.getElementById('mostrarElemento').innerHTML = '';
    console.log(localStorage.getItem('Mascota'));
});
