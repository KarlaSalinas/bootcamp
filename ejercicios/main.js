//alert("Hola mundo soy Karla Salinas"); 
//este en un comentario de una línea

/* este es un
comentario
multilinea */

/*String cadena de texto, guarda texto, se pueden usar
comillas dobles o simples
JS puede funcionar sin usar punto y coma ;*/

let miNombre = "Karla";

console.log(miNombre);


/*
number guarda números enteros, decimal o negativo
*/

let numero1 = 12;
let numero2 = 12.564;
let numero3 = -50;

console.log(numero1, numero2, numero3);
console.log("El valor del número 1 es: " + numero1); //Esto se muestra como un string
console.log("El valor del número 1 es: " + numero2);
console.log("El valor del número 1 es: " + numero3);

/*
Boolean
true => verdadero
false => falso

se usan dentro de algunas funciones y nos permiten tomar desiciones
*/

let miBoolean1 = true;
let miBoolean2 = false;

console.log("El valor de la variable 1 es: " + miBoolean1);
console.log("El valor de la variable 1 es: " + miBoolean2);

/* 
null
la varible esta vacía
*/

let variableVacia = null;

console.log(variableVacia);

/*
Undefined
Indica que una variable esta vacía o simplemente no tiene ningun valor
*/

let variable;
console.log(variable);

//Para mostrar que js es de tipado debil

variable = "hola";
console.log(variable);