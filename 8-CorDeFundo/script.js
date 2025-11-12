function gerarCorAleatoria() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const corHex = "#" +
        r.toString(16).padStart(2, "0") +
        g.toString(16).padStart(2, "0") +
        b.toString(16).padStart(2, "0");

    return corHex;
}

function mudarCor() {
    const novaCor = gerarCorAleatoria();
    document.body.style.backgroundColor = novaCor;
    const textoCor = document.getElementById("corAtual");
    textoCor.textContent = `Cor atual: ${novaCor}`;
}

function copiarCor() {
    const texto = document.getElementById("corAtual").textContent.replace("Cor atual: ", "");
    navigator.clipboard.writeText(texto)
        .then(() => alert(`Cor ${texto} copiada para a área de transferência!`))
        .catch(() => alert("Falha ao copiar cor."));
}