/*
    Buenos días 6- 11
    Buenas tardes 12 - 18
    Buenas noches 19 - 23
    Dejame dormir 0 - 5
*/

let title = document.getElementById('title');

let hora = parseInt(prompt("Introduzca la hora actual en formato de 24 hrs:"));

if(hora <= 11 && hora >= 6){
    title.textContent = 'Buenos días';
}else if(hora <= 18 && hora >= 12){
    title.textContent = 'Buenas tardes';
}else if(hora <= 23 && hora >= 19){
    title.textContent = 'Buenas noches';
}else if(hora <= 5 && hora >= 0){
    title.textContent = 'Dejame dormir';
}else{
    title.textContent = 'Introduce una hora válida';
}