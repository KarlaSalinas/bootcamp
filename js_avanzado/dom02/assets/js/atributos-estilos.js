let $titulo = document.querySelector('#titulo');
let $texto = document.querySelector('.texto');
$texto.id = 'texto';
/* $texto.style = 'color: red; font-size: 24px'; */

$texto.className = 'bg-purple h3'
/* $texto.className = 'h3' */

//Para remover una clase
/* $texto.className = 'h3'; */


//clastName reemplazada todas las clases
//classList la agrega en las clases
//O puede eliminar una en especifica de una lista
$texto.classList.add('text-center');
$texto.classList.remove('bg-purple');