document.querySelector("form").addEventListener("submit", calcularIMC);

function calcularIMC(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    const resultadoIMC = document.getElementById("resultadoIMC");
    const classificacao = document.getElementById("classificacao");
    const imgPerfil = document.getElementById("imgPerfil");

    const imc = peso / (altura * altura);

    resultadoIMC.innerHTML = `${nome}, você tem um IMC de ${imc.toFixed(2)}`;

    if (imc < 18.5) {
        classificacao.innerHTML = "Abaixo do peso";
        imgPerfil.src = "img/abaixopeso.png";
    } else if (imc < 25) {
        classificacao.innerHTML = "Peso normal";
        imgPerfil.src = "img/normal.png";
    } else if (imc < 30) {
        classificacao.innerHTML = "Sobrepeso";
        imgPerfil.src = "img/sobrepeso.png";
    } else if(imc < 35) {
        classificacao.innerHTML = "Obesidade grau 1";
        imgPerfil.src = "img/obesidade1.png";
    } else if(imc < 40) {
        classificacao.innerHTML = "Obesidade grau 2";
        imgPerfil.src = "img/obesidade2.png";
    } else {
        classificacao.innerHTML = "Obesidade grau 3";
        imgPerfil.src = "img/obesidade3.png";
    }
}