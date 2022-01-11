let fecha = document.getElementById('fecha');
let resultado = document.getElementById('resultado');
let actual = 2022;


function edad(){
    let dato = (actual - parseInt(fecha.value));
    resultado.textContent = 'Tu edad es: ' + dato;
}