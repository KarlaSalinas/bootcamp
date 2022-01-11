let title = document.getElementById('title');

console.log(title);

title.textContent = 'Este texto esta escrito desde Javascript';


/*Para acceder a todos los elementos parrafo*/
let parrafos = document.getElementsByTagName('p'); 
console.log(parrafos);


/*Para cambiar unicamente el primer parrafo*/
/* parrafos[0].textContent = 'Parrafo escrito desde Javascript'; 

for(let i = 0; i < parrafos.length; i++){
    parrafos[i].textContent = 'Parrafo ' + i + ' escritos desde Javascript';
}*/

let email = document.getElementsByTagName('email');
let password = document.getElementsByTagName('password');


function getInformation(){
    console.log(email.value);
    console.log(password.value);
}

