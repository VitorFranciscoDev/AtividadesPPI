function gerarCorAleatoria() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return "#" +
        r.toString(16).padStart(2, "0") +
        g.toString(16).padStart(2, "0") +
        b.toString(16).padStart(2, "0");
}

function mudarCores() {
    const blocos = document.querySelectorAll(".bloco");
    blocos.forEach(bloco => {
        const novaCor = gerarCorAleatoria();
        bloco.style.backgroundColor = novaCor;
        bloco.textContent = novaCor.replace("#", "").toUpperCase();
        bloco.style.color = getContrasteCor(novaCor);
    });
}

function getContrasteCor(corHex) {
    const r = parseInt(corHex.substr(1, 2), 16);
    const g = parseInt(corHex.substr(3, 2), 16);
    const b = parseInt(corHex.substr(5, 2), 16);
    const brilho = (r * 0.299 + g * 0.587 + b * 0.114);
    return brilho > 150 ? "#000000" : "#FFFFFF";
}

document.addEventListener("keydown", function (event) {
    if (event.code === "Space") {
        event.preventDefault();
        mudarCores();
    }
});

window.onload = mudarCores;