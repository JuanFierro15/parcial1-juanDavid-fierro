let contador;

function solicitarServicio() {
  contador++;

  alert("Servicios solicitados: " + contador);
}

document.getElementById("modoBtn").addEventListener("click", function () {
  document.body.classList.toggle("dark");
});
