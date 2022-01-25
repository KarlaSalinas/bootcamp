import{
    sumar,
    multiplicar,
    mostrarResultado
} from "./calculadora.js"

/* ./ indica que están en la misma carpeta */

let resultado = sumar(10, 20);
console.log(resultado);

let resultadoMultiplicar = multiplicar(12, 46);

mostrarResultado('multiplicación', 12, 46, resultadoMultiplicar);

