/**
 * Tomar los números de un arreglo llamado 'numeros', 
 * [1, 4, 7, 9, 19, 15, 46, 27, 40, 123]
- multiplicar cada numero por dos
-guardar los resultados en un arreglo llamado 'resultado'
-imprimir en consola o en el body cada elemento del 
arreglo 'resultado' 

equipo 6
 */


const numeros = [1, 4, 7, 9, 19, 15, 46, 27, 40, 123];
const resultado = [];

for(let i = 0; i < numeros.length; i++){
    let  valor = numeros[i]*2;
    resultado.push(valor);
    console.log(resultado[i]);
}

console.log(resultado); 


//FOREACH
/* numeros.forEach(function(el){
    resultado.push(el * 2);
    console.log(el);
}); */


//WHILE
/* let i = 0;
while(i < numeros.length){
    let valor = numeros[i] * 2;
    resultado.push(valor);
    console.log(resultado[i]);
    i++;
} */


//DO WHILE
/* let i = 0; 
do{
    let valor = numeros[i] * 2;
    resultado.push(valor);
    console.log(resultado[i]);
    i++;
}while(i < numeros.length); */