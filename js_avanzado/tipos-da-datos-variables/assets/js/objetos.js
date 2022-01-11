/* let miObjeto = {
    //pares de clave valor
    nombre: 'Karla'
}
 */

let nombre = 'Karla';
let edad = 21;
let direccion = 'Villahermosa, Tabasco';
let numero = 5511223344;

console.log(nombre);

let persona = {
    nombre: {
        apellidoPaterno: 'Hernández',
        apellidoMaterno: 'Salinas',
        nombre: 'Konstantin'
    },
    edad: 21,
    direccion: {
        ciudad: 'Villahermosa', 
        estado: 'Tabasco'}
        ,
    numero: [
        5511223344,
        5544332211
    ]
};

console.log(persona);
console.log(persona.nombre);

let trajeBaño = {
    marca: 'Under Armour',
    color: [
        'rojo',
        'morado',
        'rosa'
    ],
    talla: [
        'chica',
        'mediana',
        'grande'
    ],
    modelo: 'Paraiso',
    precio: '$1200',
    material: 'Nailon'
}

