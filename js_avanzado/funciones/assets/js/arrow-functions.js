/*
    Arrow function
    Función de flecha

    Es un bloque de código reutilizable.
    Puede tener o no parametros de entrada.
    Puede devolver o no un valor.
*/

/* function suma(num1, num2){
    return num1 + num2;
} */


const suma = (num1, num2) => {
    return num1 + num2;
} //se usan mucho en frameworks

let numero1 = parseInt(prompt('Número 1'));
let numero2 = parseInt(prompt('Número 2'));
let sumaNumeros = suma(numero1, numero2);

document.write(`La suma de ${numero1} y ${numero2} es ${sumaNumeros} <br>`);