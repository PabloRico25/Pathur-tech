// Validación del formulario de contacto

const form = document.getElementById("form-contacto");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let esValido = true;

  const nombre = document.getElementById("nombre");
  const correo = document.getElementById("correo");
  const mensaje = document.getElementById("mensaje");

  const errorNombre = document.getElementById("error-nombre");
  const errorCorreo = document.getElementById("error-correo");
  const errorMensaje = document.getElementById("error-mensaje");
  const exito = document.getElementById("form-exito");

  errorNombre.textContent = "";
  errorCorreo.textContent = "";
  errorMensaje.textContent = "";
  exito.textContent = "";

  if (nombre.value.trim() === "") {
    errorNombre.textContent = "Debe ingresar su nombre";
    esValido = false;
  }

  const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (correo.value.trim() === "") {
    errorCorreo.textContent = "Este campo es obligatorio";
    esValido = false;
  } else if (!correoRegex.test(correo.value.trim())) {
    errorCorreo.textContent = "El correo no es válido";
    esValido = false;
  }

  if (mensaje.value.trim() === "") {
    errorMensaje.textContent = "Debe escribir un mensaje";
    esValido = false;
  }

  if (esValido) {
    exito.style.color = "green";
    exito.textContent = "¡Mensaje enviado correctamente!";
    form.reset();
  }
});