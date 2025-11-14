const canvas = document.getElementById("meuCanvas");

const ctx = canvas.getContext("2d");

ctx.fillStyle = "blue";
ctx.fillRect(50, 50, 100, 50);

ctx.beginPath();
ctx.arc(200, 150, 30, 0, Math.PI * 2);
ctx.fillStyle = "red";
ctx.fill();

ctx.fillStyle = "black";
ctx.font = "20px Arial";
ctx.fillText("Canvas!", 120, 250);