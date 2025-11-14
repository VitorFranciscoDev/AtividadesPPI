const alertButton = document.getElementById("alertButton");
alertButton.addEventListener("click", function () {
    alert("Você clicou no botão!");
});

const textInput = document.getElementById("textInput");
textInput.addEventListener("keydown", function (event) {
    console.log("Tecla pressionada:", event.key);
});

textInput.addEventListener("focus", function () {
    textInput.style.backgroundColor = "yellow";
});

textInput.addEventListener("blur", function () {
    textInput.style.backgroundColor = "";
});


const hoverDiv = document.getElementById("hoverDiv");
hoverDiv.addEventListener("mouseover", function () {
    hoverDiv.style.backgroundColor = "lightgreen";
});

hoverDiv.addEventListener("mouseout", function () {
    hoverDiv.style.backgroundColor = "";
});

const colorSelect = document.getElementById("colorSelect");

colorSelect.addEventListener("change", function () {
    const cor = colorSelect.value;
    document.body.style.backgroundColor = cor || "";
});