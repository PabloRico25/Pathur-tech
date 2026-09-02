# Parthur-Tech

Sitio web de un servicio técnico a domicilio: reparación, mantención, restauración de sistema operativo e instalación de software. Incluye un sistema de registro e inicio de sesión con validación de formularios en JavaScript.

## Sobre el proyecto

Evaluación Formativa N°1 — Desarrollo Full Stack II (DSY1104), Duoc UC. Desarrollo individual con HTML5, CSS3 y JavaScript, sin frameworks ni librerías externas.

Indicadores de logro que cubre:
- **IL1.1** — Contenido web con estructura y etiquetado HTML5, estilos con CSS.
- **IL1.2** — Formularios validados en JS (etiquetas asociadas, autocompletar, sugerencias).
- **IL1.3** — Repositorio Git con commits y publicación en GitHub.

## Estructura del proyecto

```
parthur-tech/
├── index.html        Inicio: presentación y selector de los 4 servicios
├── servicios.html     Detalle de cada servicio (reparación, mantención, restauración de SO, instalación de software)
├── nosotros.html       Quiénes somos, protocolo de resguardo de datos, video de presentación
├── contacto.html        Formulario de contacto
├── registro.html         Formulario para crear cuenta
├── ingreso.html           Formulario de inicio de sesión
├── style.css               Hoja de estilos, compartida por las 6 páginas
├── contacto.js             Validación del formulario de contacto
├── registro.js             Validación del formulario de registro
├── ingreso.js               Validación del formulario de ingreso
├── images/                  Fotografías del sitio
│   ├── hero.jpg
│   └── mantencion.jpg
└── videos/
    └── presentacion.mp4     Video embebido en Nosotros
```

## Técnica usada

### HTML

- Etiquetado semántico HTML5 en las 6 páginas: `header`, `nav`, `main`, `section`, `article`, `footer`.
- Páginas interconectadas mediante hipervínculos: el mismo menú de navegación en todas, más enlaces cruzados entre Registro e Ingreso.
- Cada `<label>` está asociada a su `<input>` con `for`/`id`.
- Atributos `autocomplete` según el tipo de campo (`name`, `email`, `new-password`, `current-password`).
- Video embebido con la etiqueta `<video controls>` (archivo local, no un link externo).

### CSS

- Una sola hoja de estilos externa (`style.css`) enlazada igual en las 6 páginas.
- Layout de tarjetas con Flexbox (`display: flex; flex-wrap: wrap`) para el selector de servicios y los formularios.
- Paleta de colores consistente en toda la web (azules y grises).

### JavaScript

- Validación 100% en el cliente, sin librerías.
- Mismo patrón en los tres formularios: el `<form>` lleva `novalidate` para desactivar la validación automática del navegador, y un `addEventListener("submit", ...)` hace la validación manual — así se controlan los mensajes de error.
- Un mensaje de error específico por campo (`<p class="error">`), que se limpia y se vuelve a evaluar en cada envío.
- Regex para el formato de correo (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`) y para la fuerza de la contraseña en el registro (mínimo 8 caracteres, con letras y números).
- El registro además valida que "Confirmar contraseña" coincida con "Contraseña".
- Cada formulario tiene su propio archivo `.js`, cargado solo en su página correspondiente.

### Git

- Historial de commits en español, cada uno describiendo qué se agregó (estructura base, páginas de contenido, formularios, fotos y video).

## Cómo verlo localmente

Como el sitio usa rutas relativas (imágenes y video incluidos), conviene abrirlo con un servidor local en vez de abrir el HTML con doble clic:

```bash
python -m http.server 8000
```

Y entrar a `http://localhost:8000` en el navegador. También funciona con la extensión Live Server de VS Code.
