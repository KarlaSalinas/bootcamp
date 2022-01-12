/*
    Función
    Es un bloque de código reutilizable.
    Puede tener o no parametros de entrada.
    Puede devolver o no un valor.
*/

function suma(num1, num2){
    return num1 + num2;
    console.log('Hola desde la función');
}

function restar(num1, num2){
    document.write(`La resta de ${num1} y ${num2} es ${num1 - num2}`);
}

/* document.write(suma(4,7)); */

let numero1 = parseInt(prompt('Número 1'));
let numero2 = parseInt(prompt('Número 2'));
let sumaNumeros = suma(numero1, numero2);


//template string
document.write(`La suma de ${numero1} y ${numero2} es ${sumaNumeros} <br>`);


restar(5,3);