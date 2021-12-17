/*
ARREGLOS

Colección de elementos
Tienen métodos o funciones que nos permiten ordenar o manipular
los datos almacenados

Se recomienda usar const con arreglos
*/

//HAY 3 FORMAS DE DECLARARLO

//Primera forma
const arreglo1 = [4, 'galleta', false, [1, 2, 6]];
console.log(arreglo1);


//Segunda forma
const arreglo2 = Array.of(1, "Hola", true);
console.log(arreglo2);


//Tercera forma (la más antigua)
const arreglo3 = new Array(3, true, 'adiós');
console.log(arreglo3);


const frutas = ['manzana', 'naranjas', 'uvas', 'sandías',[1,2,3,4,5,['A', 'B', 'C']]];

//Notación de corchetes
console.log(frutas[1]);
console.log(frutas[3]);
console.log(frutas[4]);
console.log(frutas[4][4]);
console.log(frutas[4][5][1]);
console.log(frutas);

frutas[4][5].push('D');
console.log(frutas);

// METODOS

/* length = Conocer la longitud del arreglo */

const letras = ['A', 'B', 'C', 'D'];
console.log(letras.length);

/* PUSH = añade un elemento al final del arreglo */

letras.push('E');
console.log(letras);

/* POP = elimina el último elemento en el arreglo */

letras.pop();
console.log(letras);

/* UNSHIFT = agrega un elemento al inicio del arreglo */

letras.unshift(100);
console.log(letras);

/*SHIFT = elimina el primer elemento del arreglo */

letras.shift();
console.log(letras);