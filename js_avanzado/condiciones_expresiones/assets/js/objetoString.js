let cadena1 = "hola";
console.log(cadena1);

let cadena2 = new String("Adios");//Objeto string
console.log(cadena2);

//includes() Busca una cadena en otra y regresa true o false
console.log(cadena2.toLowerCase().includes("a"));

//convierte a minuscilas a mayuculas
console.log(cadena2.toLowerCase());
console.log(cadena2.toUpperCase());

//COHERSIÓN Y CONVERSIÓN

//cohersión - JavaScript convierte en automatico un tipo de dato en otro

console.log(cadena1.toLowerCase());



/*Función que recibe una palabra y la regresa invertida */

let palabra = document.getElementById("palabra");

/* let palabra = "Hola Mundo"; */
/* let arreglo = palabra.split("o"); */
let arreglo = palabra.split("");
/* console.log(arreglo.reverse().join()); */


function invertirPalabra(cadena){
    let arreglo = cadena.split(""); //Separa en un array cada letra
    arreglo.reverse();
    let cadenaInvertida = arreglo.join("");//Uner los elementos de un arreglo y regresa un string
    return console.log(cadenaInvertida);
}

invertirPalabra(palabra);