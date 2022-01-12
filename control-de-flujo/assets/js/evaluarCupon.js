
/**
 * Escribir un programa que detecte el cupón que tiene el usuario

Bronce se le hará un descuento del 5 %
Plata se le hará un descuento del 10%
Oro se le hará un descuento del 20%
Platino se le hará el descuento del 25%

-El usuario introduce el precio primero y después el cupón
-El programa debe mostrar el precio original y el precio con el descuento aplicado
-También debe mostrar el mensaje "El cupón no es válido" en caso de que sea un 
 cupón equivocado

 */

let precio = parseInt(prompt('Introduce el precio: '));
let cuponDescuento = prompt('Introduce el cupón: ');


switch(cuponDescuento){
    case 'Bronce':
        console.log('El precio del producto es $' + precio + ' , precio con descuento $' + (precio -precio*.05));
        break;
    case 'Plata':
        console.log('El precio del producto es $' + precio + ' , precio con descuento $' + (precio -precio*.1));
        break;
    case 'Oro':
        console.log('El precio del producto es $' + precio + ' , precio con descuento $' + (precio -precio*.2));
        break;
    case 'Platino':
        console.log(`El precio del producto es ${precio}, precio con descuento $ ${(precio -precio*.25)}`);
        break;
    default:
        console.log('Cupón no válido');
        break;
}




/* let precio = document.getElementById('precio');
let cupon = document.getElementById('cupon');
let title = document.getElementById('title');

function descuento(){
    switch(cupon.value){
        case 'Bronce':
            title.textContent = ('El precio del producto es $' + parseInt(precio.value) + ' , precio con descuento $' + (parseInt(precio.value) -parseInt(precio.value)*.05));
            break;
        case 'Plata':
            title.textContent = ('El precio del producto es $' + parseInt(precio.value) + ' , precio con descuento $' + (parseInt(precio.value) -parseInt(precio.value)*.1));
            break;
        case 'Oro':
            title.textContent = ('El precio del producto es $' + parseInt(precio.value) + ' , precio con descuento $' + (parseInt(precio.value) -parseInt(precio.value)*.2));
            break;
        case 'Platino':
            title.textContent = ('El precio del producto es $' + parseInt(precio.value) + ' , precio con descuento $' + (parseInt(precio.value) -parseInt(precio.value)*.25));
            break;
        default:
            console.log('Cupón no válido');
            break;
    }
} */


