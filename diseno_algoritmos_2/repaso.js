/*
Arreglos
lista de elementos
*/

const comidas = ['Pozole', 'Quesadillas','Tacos'];

/*Length */
console.log(comidas.length);


/*
push
pop
unshift
shift
*/


comidas.push('Torta');
console.log(comidas);

comidas.unshift('Pancita');
console.log(comidas);

comidas.pop();
console.log(comidas);

comidas.shift();
console.log(comidas);

/*
forEach - no puede servir para realizar una acción por cada
elemento de nuestro arreglo

el metodo no muta el arreglo
*/

/* console.log(comidas[0]);
console.log(comidas[1]);
console.log(comidas[2]); */




comidas.forEach(function(el){
    console.log(el);
});
//funciones anonimas --> función sin nombre


const numeros = [1, 4, 7, 8];
console.log(numeros);

numeros.forEach(function(el){
    //console.log(el + 3);
    let suma = el + 3;
    console.log(suma);
});


/* EJERCICIO */
const arr = [];

function suma(num){
    let sumNum = num + 1;
    return arr.unshift(sumNum);
}

suma(3);
suma(44);
suma(12);
suma(5);
suma(8);
suma(15);

console.log(arr);