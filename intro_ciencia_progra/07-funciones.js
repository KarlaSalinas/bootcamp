/*
Las funciones nos sirven para escribir bloques de 
código que se puede reutilizar
*/


let num1 = 10;
let num2 = 20;

let suma = num1 + num2;
document.write('<h2>'+ suma + '</h2>')




//FUNCION
function sumar(var1, var2){
    let resultado = var1 + var2;
    return(document.write('<h2>'+ resultado + '</h2>'));
}

sumar(num1, num2);
sumar(25, 25);
sumar(198, 342);

