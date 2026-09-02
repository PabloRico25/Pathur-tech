// Validación del formulario de registro

const form = document.getElementById("form-registro");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let esValido = true;

  const nombre = document.getElementById("nombre");
  const correo = document.getElementById("correo");
  const contrasena = document.getElementById("contrasena");
  const confirmar = document.getElementById("confirmar");

  const errorNombre = document.getElementById("error-nombre");
  const errorCorreo = document.getElementById("error-correo");
  const errorContrasena = document.getElementById("error-contrasena");
  const errorConfirmar = document.getElementById("error-confirmar");
  const exito = document.getElementById("form-exito");

  errorNombre.textContent = "";
  errorCorreo.textContent = "";
  errorContrasena.textContent = "";
  errorConfirmar.textContent = "";
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

  const contrasenaRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
  if (contrasena.value === "") {
    errorContrasena.textContent = "Debe ingresar una contraseña";
    esValido = false;
  } else if (!contrasenaRegex.test(contrasena.value)) {
    errorContrasena.textContent = "Debe tener 8 caracteres o más, con letras y números";
    esValido = false;
  }

  if (confirmar.value === "") {
    errorConfirmar.textContent = "Debe confirmar la contraseña";
    esValido = false;
  } else if (confirmar.value !== contrasena.value) {
    errorConfirmar.textContent = "Las contraseñas no coinciden";
    esValido = false;
  }

  if (esValido) {
    exito.style.color = "green";
    exito.textContent = "¡Cuenta creada correctamente!";
    form.reset();
  }
});
