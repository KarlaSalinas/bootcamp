/*
Crea una función que calcule el descuento que se le va a hacer a 
un cliente según el valor de su compra.

Si es una compra de menos de 100, se le hara un descuento
del 10% (0-99)
Si es una compra de 100 y hasta de 200 se le hará un descuento
del 20% (100 - 199)
y si es una compra de más de 200 se le hará un descuento del 30% 
(200 =>)


Utiliza prompt, funcionem condicionales y operadores
de comparación

La función debe pedir el precio al cliente, e imprimir el
resultado del precio menos el descuento, ya sea en pantalla
o en consola

*/

let precio = parseInt(prompt("Ingresa el valor de tu compra para conocer su precio con descuento"));

function calcularDescuento(precio){
    let descuento;
    if(precio <= 99 || precio == 0){
        descuento = precio - (precio*0.10);
    }else if(precio <= 199 || precio == 100){
        descuento = precio - (precio*0.20);
    }else if(precio >= 200){
        descuento = precio - (precio * 0.30);
    }
    return descuento;
}

let precioFinal = calcularDescuento(precio);
document.write("<h2>El precio con descuento de tu compra es " + precioFinal + "<h2>");