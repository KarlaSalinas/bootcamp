/* Crear un arreglo con 20 números. 
Mostrar en HTML la suma de dichos números y el promedio. */


let num = [44, 32, 734, 11, 29, 304, 28, 10, 435, 23, 72, 56, 66, 3805, 33, 7356, 237, 284, 107, 7];
let suma = 0;

/* for(let i = 0; i < num.length; i++){
    suma = suma + num[i];
} */

num.forEach(function(elemento){
    suma = suma + elemento;
});


document.write(`Los números que contiene el array son: ${num} <br><br>`);
document.write(`La suma del arreglo es ${suma} y su promedio es ${suma/num.length}`);


