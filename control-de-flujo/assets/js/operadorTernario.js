/*Operador ternario */

/*
    (condición a evaluar) ? se ejecuta  si es verdadero : se ejecuta si es falso;
*/ 


let edad = 17;

/* (edad >= 18) 
? console.log("Mayor de edad") 
: console.log("Menor de edad"); */


/* let pregunta = (edad >= 18) 
? "Mayor de edad"
: "Menor de edad";  */

/* console.log(pregunta); */


//También se puede usar en templates strings

let preguntaEdad = `Tengo ${edad} años y soy ${(edad >= 18)? "mayor de edad": "menor de edad" }`;

console.log(preguntaEdad);

let dia = 3;

if(dia === 0){
    console.log("Domingo");
}else if(dia === 1){
    console.log("Lunes");
}else if(dia === 2){
    console.log("Martes");
}else if(dia === 3){
    console.log("Miercoles");
}else if(dia === 4){
    console.log("Jueves");
}else if(dia === 5){
    console.log("Viernes");
}else if(dia === 6){
    console.log("Sábado");
}else{
    console.log("Elige un día válido");
}


