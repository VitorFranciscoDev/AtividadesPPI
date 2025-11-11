console.log("Bem Vindo ao Site!");
alert("Bem Vindo ao Site!");

function atualizarHora() {
    const horario = document.getElementById("horario");
    horario.innerHTML = new Date().toLocaleTimeString();
}

atualizarHora();

setInterval(atualizarHora, 1000);