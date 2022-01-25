const sumar = (num1, num2) => {
    return num1 + num2;
}

const restar = (num1, num2) => {
    return num1 - num2;
}

const multiplicar = (num1, num2) => {
    return num1 * num2;
}

const dividir = (num1, num2) => {
    return num1 / num2;
}

const mostrarResultado = (operacion, num1, num2, resultado) => {
    const respuesta = document.createElement('h3');
    respuesta.textContent = `La ${operacion} del ${num1} y el ${num2} es ${resultado}`;
    document.body.appendChild(respuesta);
}

module.exports = {
    sumar, restar, multiplicar, dividir
}

