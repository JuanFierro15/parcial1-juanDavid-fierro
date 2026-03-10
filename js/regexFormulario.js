const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regexEdad = /^[1-9][0-9]?$/;
const regexTelefono = /^3+[0-9]{9}$/;

const nombresInput = document.querySelectorAll(".nombre");
const email = document.getElementById("email-sign");
const telefono = document.getElementById("telefono");
const form = document.getElementById("form");
const edad = document.getElementById("edad");

const btnRegistrar = document.getElementById("btnRegistrar");

function todoValido() {
  let enviar = false;
  let arreglo = true;
  nombresInput.forEach((element) => {
    if (!element.classList.contains("is-valid")) arreglo = false;
    else arreglo = true;
  });
  if (
    arreglo &&
    email.classList.contains("is-valid") &&
    telefono.classList.contains("is-valid") &&
    edad.classList.contains("is-valid")
  ) {
    enviar = true;
  }

  return enviar;
}

nombresInput.forEach((element) => {
  element.addEventListener("input", (event) => {
    let elemento = event.target;
    if (elemento.value === "") {
      elemento.classList.remove("is-valid", "is-invalid");
    } else if (!regexNombre.test(elemento.value)) {
      elemento.classList.remove("is-valid");
      elemento.classList.add("is-invalid");
    } else {
      elemento.classList.remove("is-invalid");
      elemento.classList.add("is-valid");
    }
    btnRegistrar.disabled = false;
  });
});

email.addEventListener("input", (event) => {
  if (email.value === "") {
    email.classList.remove("is-valid", "is-invalid");
  } else if (!regexEmail.test(email.value)) {
    email.classList.remove("is-valid");
    email.classList.add("is-invalid");
  } else {
    email.classList.remove("is-invalid");
    email.classList.add("is-valid");
  }
  btnRegistrar.disabled = false;
});

telefono.addEventListener("input", (event) => {
  if (telefono.value === "") {
    telefono.classList.remove("is-valid", "is-invalid");
  } else if (!regexTelefono.test(telefono.value)) {
    telefono.classList.remove("is-valid");
    telefono.classList.add("is-invalid");
  } else {
    telefono.classList.remove("is-invalid");
    telefono.classList.add("is-valid");
  }
  btnRegistrar.disabled = false;
});

edad.addEventListener("input", (event) => {
  if (edad.value === "") {
    edad.classList.remove("is-valid", "is-invalid");
  } else if (!regexEdad.test(edad.value)) {
    edad.classList.remove("is-valid");
    edad.classList.add("is-invalid");
  } else {
    edad.classList.remove("is-invalid");
    edad.classList.add("is-valid");
  }
  btnRegistrar.disabled = false;
});
