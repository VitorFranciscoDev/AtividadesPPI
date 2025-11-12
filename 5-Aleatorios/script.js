const sorteios = [];

function sortear() {
  const min = parseInt(document.getElementById("min").value);
  const max = parseInt(document.getElementById("max").value);
  const lista = document.getElementById("lista");

  if (isNaN(min) || isNaN(max) || min >= max) {
    alert("Informe um intervalo válido");
    return;
  }

  const numero = Math.floor(Math.random() * (max - min + 1)) + min;

  let encontrado = sorteios.find(obj => obj.valor === numero);

  if (encontrado) {
    encontrado.qtd++;
  } else {
    sorteios.push({ valor: numero, qtd: 1 });
  }

  lista.innerHTML = "";
  sorteios.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.valor} (${item.qtd}x)`;
    lista.appendChild(li);
  });
}