
let numeros = [1, 3, 13, 23, 532, 328, 123, 6865, 812, 213, 123];


/*forEach*/
numeros.forEach(function(numero) {
    document.write(numero + ', ' );
});

/*forEach con función de flecha*/
/* numeros.forEach((elemento) => {
    document.write('<br> ' + elemento );
}); */



/*map: Permite hacer un arreglo a partir de otro arreglo */

let numeros2 = numeros.map(function(elemento){
    return elemento * 2;
});

document.write('<br>' + numeros2);

let frutas = ['mango', 'uva', 'piña'];
/*let frutas2 = frutas; ESTO SOLO APUNTA A LA MISMA DIRECCIÓN DE MEMORIA DE FRUTAS, NO CREA UN NUEVO ARREGLO FRUTAS2 */

/* let frutas2 = frutas.map(function(elemento){
    return elemento;
});
document.write('<br>' + frutas + '<br>');
document.write('<br>' + frutas2 + '<br>');


frutas2.push('pera');
document.write('<br>' + frutas + '<br>');
document.write('<br>' + frutas2 + '<br>'); */


/*INCLUDES: Verifica si un elemento estra dentro del array */


document.write('<br>' + numeros.includes('hola') + '<br>');

let numerosPares = numeros.filter((elemento) => {
    if(elemento % 2 == 0){
        return true; /*Es como si preguntará si quiero que lo incluya y le indico que sí*/
    }else{
        return false;
    }
});

document.write('<br>' + numerosPares);

let frutitas = ['mango', 'uva', 'piña', 'mandarina', 'manzana', 'aguacate', 'sandía'];

let frutitasFiltro = frutitas.filter((fruta) => {
    /* if(fruta.includes('m')){
        return true;
    } */

    /* return fruta.includes('m'); */
    return fruta.toUpperCase().includes('M');
});

document.write('<br>' + frutitasFiltro + '<br>');



/*METODO SHORT() recomendación, no usarlo*/
let otrosNumeros = [9, 2, 3, 5, 1, 4, 8, 6, 7];

document.write('<br>' + numeros.sort() + '<br>');
document.write('<br>' + otrosNumeros.sort() + '<br>');

/*METODO REVERSE
invierte el orden de los elementos de un arreglo
*/
document.write('<br>' + numeros.reverse() + '<br>');


/*METODO FIND
    Es parecido a filter, pero devuelve solo un elemento, el primero que encuentre que cumpla con una condición
*/

let frutaEncontrada = frutitas.find((elemento) => {
    return elemento.includes('manz');
});

document.write('<br>' + frutaEncontrada + '<br>');