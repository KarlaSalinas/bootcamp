/*

Operadores aritmeticos nos sirven para hacer operaciones

    + Sirve para sumar o concatenar
    - Sirve para restar números
    * sirve para multiplicar 2 números
    / división nos sirve para dividir 2 números
    % modulo nos sirve para obtener el residuo de una división


*/

//Todo lo que viene por prompt se devuelve como texto
//Parseo o converción de datos
//ParseInt convierte en formato de número

const num1 = parseInt(prompt('Ingresa el número 1'));
const num2 = parseInt(prompt('Ingresa el número 2'));
const suma = num1 + num2;
const resta = num1 - num2;
const multi = num1 * num2;
const division = num1 / num2;
const modulo = num1 % num2;


console.log('Número 1: ' + num1);
console.log('Número 2: ' + num2);
console.log('Suma: ' + suma);
console.log('Multiplicación: ' + multi);
console.log('Resta: ' + resta);
console.log('División: ' + division);
console.log('Modulo: ' + modulo);

/*

    OPERADORES LOGICOS

    && AND o y
    || OR u o
    !  NOT o no

*/