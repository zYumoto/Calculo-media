const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const btnCalcular = document.getElementById("btnCalcular");
const saida = document.getElementById("saida");

function obterP1() {
    return +p1.value;
}

function obterP2() {
    return +p2.value;
}

function calcMedia(notap1, notap2) {
    let media = (notap1 + 2 * notap2) / 3;
    return media;
}

function onClick() {
    let notap1 = obterP1();
    let notap2 = obterP2();

    if (notap1 <= 10 && notap2 <= 10) {
        let mediaCalc = calcMedia(notap1, notap2);
        saida.textContent = mediaCalc.toFixed(1);
    } else {
        saida.textContent = "Por favor, insira notas menores ou iguais a 10";
    }
}

btnCalcular.addEventListener("click", onClick);