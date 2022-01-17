let palabra = document.getElementById("palabra");




function invertirPalabra(){
    cadena = a;
    let arreglo = cadena.split(""); 
    arreglo.reverse();
    let cadenaInvertida = arreglo.join("");
    return console.log(cadenaInvertida);
}

invertirPalabra(palabra);