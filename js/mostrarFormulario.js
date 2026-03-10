form.addEventListener("submit", function (event) {
  if (!todoValido()) {
    event.preventDefault();
    alert("Hay campos inválidos");
    return;
  }

  event.preventDefault();

  alert("===== INFORMACIÓN DEL USUARIO =====");

  const datos = new FormData(form);

  for (let [campo, valor] of datos.entries()) {
    alert(campo + ": " + valor);
  }
});
