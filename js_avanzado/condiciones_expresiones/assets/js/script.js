/*
    Operadores aritméticos

    +
    -
    /
    *
    %
    ()
*/

let operacion = 3 * 5 + (10 - 5);
console.log(operacion);

let operacion2 = 3 - 5 / 2 * 4;
console.log(operacion2);


/* Operadores relacionales */
// <, >, >=, <=, ==, ===, !=, !==
// boolean true false

console.log(7 < 7);
console.log(7 <= 7);

console.log(7 == "7"); //Compara el valor, no el tipo de dato

console.log(7 === "7"); //Compara el valor y el tipo de dato

console.log(7 != "7");
console.log(7 !== "7");

/*Incremento y decremento */
// +=, -=, *=, /=

let incremento = 5;
incremento += 5;
console.log(incremento);

incremento -= 5;
console.log(incremento);

incremento *= 5;
console.log(incremento);

incremento /= 5;
console.log(incremento);

/*Operador unario */
// ++, --
//incremento y decremento
// sumar uno, restar uno

let sumar = 0;
sumar++;
console.log(sumar);
sumar++;
console.log(sumar);
sumar--;
sumar--;
console.log(sumar);


/* 
++variable preincremento
variable++ postincremento


preincremento - primero modifica la valor de la variable y luego hace uso de ella

postincremento - primero hace uso de la variable y luego modifica su valor
*/

let num =  5;
//console.log(num++); //imprime num = 5
console.log(++num); //imprime num = 6


for(let i = 0; i< 5; i++){
    //iteración
    console.log("Este es el ciclo padre");
    for(let j; j<5; j++){
        console.log("Este es el ciclo hijo");
    }
}