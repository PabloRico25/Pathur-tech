// Validación del formulario de ingreso

const form = document.getElementById("form-ingreso");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let esValido = true;

  const correo = document.getElementById("correo");
  const contrasena = document.getElementById("contrasena");

  const errorCorreo = document.getElementById("error-correo");
  const errorContrasena = document.getElementById("error-contrasena");
  const exito = document.getElementById("form-exito");

  errorCorreo.textContent = "";
  errorContrasena.textContent = "";
  exito.textContent = "";

  const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (correo.value.trim() === "") {
    errorCorreo.textContent = "Este campo es obligatorio";
    esValido = false;
  } else if (!correoRegex.test(correo.value.trim())) {
    errorCorreo.textContent = "El correo no es válido";
    esValido = false;
  }

  if (contrasena.value === "") {
    errorContrasena.textContent = "Debe ingresar su contraseña";
    esValido = false;
  }

  if (esValido) {
    exito.style.color = "green";
    exito.textContent = "¡Sesión iniciada correctamente!";
    form.reset();
  }
});