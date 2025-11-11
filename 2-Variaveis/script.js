document.getElementById("btn").addEventListener("click", () => {
    const texto = "Hello";
    const numero = 42;
    const booleano = true;
    let indefinido;
    const nulo = null;
    const objeto = { nome: "Vitor", idade: 20 };
    const array = [1, 2, 3];

    document.getElementById("pstring").innerText = "String: " + typeof texto;
    document.getElementById("pnumero").innerText = "Number: " + typeof numero;
    document.getElementById("pboolean").innerText = "Boolean: " + typeof booleano;
    document.getElementById("pundefined").innerText = "Undefined: " + typeof indefinido;
    document.getElementById("pnull").innerText = "Null: " + typeof nulo;
    document.getElementById("pobjeto").innerText = "Object: " + typeof objeto;
    document.getElementById("parray").innerText = "Array: " + typeof array;

    const op1 = texto + numero;
    const op2 = booleano * numero;
    const op3 = numero + null;
    const op4 = numero + undefined;

    console.log("string + number:", op1);
    console.log("boolean * number:", op2);
    console.log("number + null:", op3);
    console.log("number + undefined:", op4);

    document.getElementById("op1").innerText = `"Hello" + 42 = ${op1}`;
    document.getElementById("op2").innerText = `true * 42 = ${op2}`;
    document.getElementById("op3").innerText = `42 + null = ${op3}`;
    document.getElementById("op4").innerText = `42 + undefined = ${op4}`;
});