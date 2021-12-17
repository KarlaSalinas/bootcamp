/*
Ciclos, bucles , loops

    while 
    do while
    for
*/

/*
    ---- WHILE ----
    let condicion = 1; - valor inicial, donde comenzará el ciclo while
    while(condicion){
        código
        modificación a nuestro valor inicial
    }    

*/

//imprimir todos los números del 1 - 10

/* let condicion = 1;

while(condicion <= 10){
    console.log(condicion);
    condicion++;
    //condicion += 1;
} */




/*
    ---- do while ----

    let numero = 1; - condición

    Este ciclo se va a ejecutar al menos una vez
*/

//Imprimir los números del 1 - 10

/* let num = 1;

do{
    console.log(num);
    num++;
}while(num <= 10); */



/*
  for
  utiliza un contador
 */

  for (let control = 1; control <= 10; control++) {
      console.log(control);
  }


  const comidas = ['Pozole', 'Tacos', 'Tamales', 'Tortas'];

  for(let i = 0 ; i <= comidas.length; i++){
    console.log(comidas[i]);
  }