
// const numberToReview = prompt("Introduce un número para saber si es compuesto o no:");

function submit() {
    const numberToReview = document.getElementById("numero").value;
    solution(numberToReview);
}

function solution(numberToReview) {
    let divisors = [];

    for (let i = 1; i <= numberToReview; i++) {
        if (numberToReview % i === 0) {
            divisors.push(i);
        }
    }

    const es_compuesto = divisors.length > 2;
    console.log(divisors);
    console.log(es_compuesto);

    let resultadoCompuesto = document.getElementById("resultado_compuesto");
    resultadoCompuesto.innerHTML = es_compuesto ? "Es compuesto" : "No es compuesto";

    let resultadoDivisoresElement = document.getElementById("resultado_divisores");
    resultadoDivisoresElement.innerHTML = "Los divisores son: " + divisors.join(", ");

}
