

function solution(amigoa, amigob) {

    if (amigoa <= 0 || amigob <= 0) {
        throw new Error("Los números deben ser mayores a cero");
    }

    if (Number.isInteger(amigoa) === false || Number.isInteger(amigob) === false) {
        throw new Error("Los números deben ser enteros, no strings");
    }


    let divisoresA = [];
    let divosoresAAcumulado = 0;

    let divisoresB = [];
    let divisoresBAcumulado = 0;

    for (let i = 1; i < amigoa; i++) {
        if (amigoa % i === 0) {
            divisoresA.push(i);
            divosoresAAcumulado = divosoresAAcumulado + i;
        }
    }

    for (let i = 1; i < amigob; i++) {
        if (amigob % i === 0) {
            divisoresB.push(i);
            divisoresBAcumulado = divisoresBAcumulado + i;
        }
    }

    const es_amigo = divosoresAAcumulado === amigob && divisoresBAcumulado === amigoa;

    return {
        divisoresA,
        divisoresB,
        divosoresAAcumulado,
        divisoresBAcumulado,
        es_amigo
    }
}

function mostrarEnPantalla( resultado ) {

    // string
    // numbers 
    // boolean
    // array
    // object

    console.log( resultado );
    const resultadoAmigo = document.getElementById("resultado_amigo");
    resultadoAmigo.innerText = resultado.es_amigo? "Si son amigos" : "No, no son amigos";

    const resultadoDivisoresA = document.getElementById("resultado_divisores_a");
    resultadoDivisoresA.innerText = resultado.divisoresA.join(", ") + " = " + resultado.divosoresAAcumulado;
    const resultadoDivisoresB = document.getElementById("resultado_divisores_b");
    resultadoDivisoresB.innerText = resultado.divisoresB.join(", ") + " = " + resultado.divisoresBAcumulado;
}

function submitForm() {
    const amigoAString = document.getElementById("amigo_a").value;
    const amigoA = parseInt(amigoAString);
    const amigoBString = document.getElementById("amigo_b").value;
    const amigoB = parseInt(amigoBString);

    const resultado = solution(amigoA, amigoB);
    
    mostrarEnPantalla(resultado);
}