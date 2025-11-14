const input = document.getElementById("nameInput");
const button = document.getElementById("saveButton");
const greeting = document.getElementById("greeting");

const savedName = localStorage.getItem("nome");
if (savedName) {
    greeting.textContent = "Olá, " + savedName + "!";
}

button.addEventListener("click", function () {
    const name = input.value;

    if (name.trim() === "") {
        alert("Digite um nome antes de salvar!");
        return;
    }

    localStorage.setItem("nome", name);
    greeting.textContent = "Olá, " + name + "!";
});