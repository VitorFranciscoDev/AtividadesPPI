function ehPrimo(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function verificarPrimos() {
    let inicio = parseInt(document.getElementById("inicio").value);
    let fim = parseInt(document.getElementById("fim").value);
    const resultado = document.getElementById("resultadoPrimos");

    if (isNaN(inicio) || isNaN(fim)) {
        resultado.innerHTML = "Por favor, insira dois números válidos.";
        return;
    }

    if (inicio > fim) {
        [inicio, fim] = [fim, inicio];
    }

    let primos = [];
    for (let i = inicio; i <= fim; i++) {
        if (ehPrimo(i)) {
            primos.push(i);
        }
    }

    if (primos.length === 0) {
        resultado.innerHTML = `Não há números primos entre ${inicio} e ${fim}.`;
    } else {
        resultado.innerHTML = `Os números primos entre ${inicio} e ${fim} são: <br> ${primos.join(", ")}`;
    }
}