let contador;
const body = document.getElementById("body");
const btnNegro = document.getElementById("modoBtn");

function solicitarServicio() {
  contador++;

  alert("Servicios solicitados: " + contador);
}

btnNegro.addEventListener("click", function () {
  if (body.style.backgroundColor === "black") {
    body.style.backgroundColor = "White";
    btnNegro.textContent = "Modo Oscuro";
  } else {
    body.style.backgroundColor = "black";
    btnNegro.style.backgroundColor = "White";
    btnNegro.style.color = "black";
    btnNegro.textContent = "Modo Claro";
  }
});
