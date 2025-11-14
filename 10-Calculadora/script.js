let display = document.getElementById("display");
let expressao = "";

function addNum(n) {
    if (display.textContent === "0") display.textContent = "";
    display.textContent += n;
}

function addOp(op) {
    expressao = display.textContent + " " + op + " ";
    display.textContent = "";
}

function calcular() {
    try {
        let resultado = eval(expressao + display.textContent);
        display.textContent = resultado;
    } catch {
        display.textContent = "Erro";
    }
}

function limpar() {
    display.textContent = "0";
    expressao = "";
}