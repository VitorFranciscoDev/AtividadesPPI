const saida = document.getElementById("saida");
let texto = "";

document.addEventListener("keydown", function (event) {
    console.log("Tecla pressionada:", event.key, "| Código:", event.code);

    if (event.key === "Backspace") {
        texto = texto.slice(0, -1);
    } else if (event.key.length === 1) {
        texto += event.key;
    }

    saida.textContent = texto + "  [" + event.code + "]";
});