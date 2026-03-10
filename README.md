# parcial1-juanDavid-fierro

# Catálogo de Servicios Digitales

## Descripción del proyecto

Este proyecto consiste en una página web que muestra un **catálogo de servicios digitales** y permite a los usuarios **registrarse para solicitar uno o varios servicios** mediante un formulario interactivo.

La página fue desarrollada utilizando **HTML, CSS, JavaScript y Bootstrap**, permitiendo una interfaz visual moderna, responsiva y fácil de usar.

El sistema incluye:

- Visualización de servicios mediante **tarjetas (cards)**.
- Botón para **cambiar entre modo claro y modo oscuro**.
- Un **formulario de registro con validación de datos**.
- Selección de **múltiples servicios solicitados** mediante checkboxes.

---

# Tecnologías utilizadas

- **HTML5** – estructura de la página.
- **CSS3** – estilos personalizados.
- **Bootstrap 5** – diseño responsivo y componentes visuales.
- **JavaScript** – lógica de interacción y validación del formulario.

---

# Funcionalidades principales

## Catálogo de servicios

La página muestra un catálogo de servicios digitales presentados mediante tarjetas de Bootstrap. Cada tarjeta incluye:

- Nombre del servicio
- Descripción
- Imagen representativa
- Botón para solicitar el servicio

Los servicios disponibles son:

- Desarrollo Web
- Hosting
- Diseño UX/UI
- Marketing Digital
- SEO
- Desarrollo Móvil
- Soporte Técnico
- Consultoría Tecnológica

---

## Modo oscuro

El sistema incluye un botón **"Modo oscuro"** que permite cambiar el estilo visual de la página para mejorar la experiencia del usuario en entornos con poca iluminación.

---

## Formulario de registro

El formulario permite a los usuarios ingresar su información personal para registrarse y solicitar servicios.

### Datos solicitados

El formulario incluye los siguientes campos:

- Nombres
- Apellidos
- Ciudad
- Email
- Teléfono
- Edad

Cada campo cuenta con **validación mediante JavaScript y expresiones regulares**.

---

## Selección de servicios

Los usuarios pueden seleccionar uno o varios servicios mediante **checkboxes**, lo que permite solicitar múltiples servicios al mismo tiempo.

---

# Estructura del proyecto

El proyecto está organizado de la siguiente manera:

```
/proyecto
│
├── index.html
├── styles.css
│
├── /js
│   ├── script.js
│   ├── regexFormulario.js
│   └── mostrarFormulario.js
│
├── /imagenes
│   ├── desarrolloWeb.jpg
│   ├── Hosting.jpg.png
│   ├── UX-UI.jpg
│   ├── digital-marketing.jpg
│   ├── SEO.png
│   ├── desarrolloMovil.jpg
│   ├── soporte.jpg
│   └── Consultoria.jpg
```

---

# Validaciones del formulario

El sistema utiliza **expresiones regulares (Regex)** para validar:

- Nombres y apellidos
- Correo electrónico
- Número telefónico

Bootstrap muestra visualmente si un campo es:

- **Válido**
- **Inválido**

Esto mejora la experiencia del usuario y evita datos incorrectos.

---

# Cómo ejecutar el proyecto

1. Descargar o clonar el repositorio.
2. Abrir la carpeta del proyecto.
3. Ejecutar el archivo:

```
index.html
```

en cualquier navegador web.

No se requiere instalación adicional.

---

# Autor

Proyecto desarrollado como parte de una actividad académica sobre **desarrollo web utilizando HTML, Bootstrap y JavaScript**.
