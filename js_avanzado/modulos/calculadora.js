export const sumar = (num1, num2) => {
    return num1 + num2;
}

export const restar = (num1, num2) => {
    return num1 - num2;
}

export const multiplicar = (num1, num2) => {
    return num1 * num2;
}

export const dividir = (num1, num2) => {
    return num1 / num2;
}

export const mostrarResultado = (operacion, num1, num2, resultado) => {
    const respuesta = document.createElement('h3');
    respuesta.textContent = `La ${operacion} del ${num1} y el ${num2} es ${resultado}`;
    document.body.appendChild(respuesta);
}

/* export{
    sumar,
    restar,
    multiplicar,
    dividir,
    mostrarResultado
} 

se puede exportar así o anteponiendo la palabra export en las funciones*/