const {sumar} = require("./calculadora");
const {restar} = require("./calculadora");
const {multiplicar} = require("./calculadora");
const {dividir} = require("./calculadora");

describe("Pruebas en el componente calculadora", () =>{

    test('Pruebas en la función sumar', () =>{

        expect(sumar(3,5)).toBe(8);
    });

    test('Pruebas en la función restar', () =>{

        expect(restar(5,3)).toBe(2);
    });

    test ("Pruebas de la funcion multiplicar", () =>{
        expect(multiplicar(5, 2)).toBe(10);
    });

    test("Pruebas en la funcion dividir", () =>{
        expect(dividir(2, 2)).toBe(1);
    }); 
});