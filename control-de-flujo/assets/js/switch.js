/**
    SWITCH

    switch(variable a evaluar){
        case valor:
            -código a ejecutar-
        break;
        case valor:
            -código a ejecutar-
        break;
        default:
            -código a ejecutar si sale de las opciones-
        break;
    }


 */
let dia = 4;
    
switch(dia){
    case 0:
        console.log('Día domingo');
        break;
    case 1:
        console.log('Día Lunes');
        break;
    case 2:
        console.log('Día Martes');
        break;
    case 3:
        console.log('Día Miércoles');
        break;
    case 4:
        console.log('Día Jueves');
        break;
    case 5:
        console.log('Día Viernes');
        break;
    case 6:
        console.log('Día Sábado');
        break;
    default:
        console.log('Elige un día válido');
        break;
}

let cuponDescuento = 'Oro';
let descuento;

switch(cuponDescuento){
    case 'Bronce':
        descuento = 5;
        break;
    case 'Platino':
        descuento = 10;
        break;
    case 'Oro':
        descuento = 15;
        break;
    default:
        console.log('Cupón no válido');
        break;
}


console.log(descuento);