function verificarPalindromo() {
    const palavra = document.getElementById("palavra").value.trim();
    const resultado = document.getElementById("resultadoPalindromo");

    if (palavra === "") {
        resultado.innerHTML = "Por favor, digite uma palavra.";
        return;
    }

    // Normaliza para minúsculas e remove espaços
    const limpa = palavra.toLowerCase().replace(/\s+/g, "");
    const invertida = limpa.split("").reverse().join("");

    if (limpa === invertida) {
        resultado.innerHTML = `"${palavra}" é um palíndromo.`;
    } else {
        resultado.innerHTML = `"${palavra}" não é um palíndromo.`;
    }
}