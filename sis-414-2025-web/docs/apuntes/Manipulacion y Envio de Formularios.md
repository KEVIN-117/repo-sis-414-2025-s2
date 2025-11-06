---
layout: doc
title: Manipulación y envío de formularios con HTML y JavaScript
slug: manipulacion-y-envio-de-formularios
tags: [apuntes, javascript, html, formularios, fetch, web]
---

# 🧑‍🏫 Manipulación y envío de formularios con HTML y JavaScript

## 📖 **1. Introducción a los formularios**

Los **formularios HTML** permiten a los usuarios enviar información al sistema, como registros, inicios de sesión, búsquedas o comentarios.

### 📄 Ejemplo básico

```html
<form>
  <label>Nombre:</label>
  <input type="text" name="nombre" />

  <label>Correo:</label>
  <input type="email" name="correo" />

  <button type="submit">Enviar</button>
</form>
```

Los formularios tienen atributos importantes:

- **`action`** → URL a donde se enviarán los datos.
- **`method`** → método de envío (`GET`, `POST`).
- **`name`** → identifica los campos para obtener sus valores.

---

## ⚙️ **2. Ciclo de vida de un formulario**

1. El usuario **rellena los campos**.
2. Ocurre el evento `submit`.
3. Se **captura la información**.
4. Se **valida** (HTML5 o con JS).
5. Se **envía** (al servidor o API).
6. Se **muestra un resultado o mensaje** al usuario.

---

## 🧩 **3. Diferentes formas de manejar un formulario**

### 🧱 **A. Envío tradicional (HTML puro)**

- Usa los atributos `action` y `method`.
- La página se recarga al enviarse.

```html
<form action="/registro" method="POST">
  <input name="nombre" />
  <button>Enviar</button>
</form>
```

**Ventajas:** sencillo, no requiere JS.  
**Desventajas:** recarga la página, poca interactividad.

---

### ⚡ **B. Envío con JavaScript usando eventos**

Capturamos el evento `submit` y evitamos que el formulario se envíe automáticamente.

```html
<form id="form">
  <input name="nombre" placeholder="Tu nombre" />
  <button>Enviar</button>
</form>

<script>
  const form = document.getElementById("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita recargar la página
    const nombre = event.target.nombre.value;
    console.log("Nombre ingresado:", nombre);
  });
</script>
```

**Ventajas:** control total sobre lo que ocurre.  
**Desventajas:** requiere JS habilitado.

---

### 🧠 **C. Usando `FormData` para extraer valores fácilmente**

El objeto `FormData` permite acceder a los valores de un formulario sin escribir `document.getElementById()` repetidamente.

```js
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const datos = new FormData(e.target);
  console.log(datos.get("nombre")); // Extrae el valor del campo "nombre"
});
```

---

### 🌐 **D. Envío asíncrono con Fetch (sin recargar la página)**

Podemos enviar los datos a una API usando `fetch()`.

```js
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const datos = new FormData(e.target);
  const user = Object.fromEntries(datos.entries());

  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });

  const result = await response.json();
  console.log("Usuario guardado:", result);
});
```

**Ventajas:**  
✅ No recarga la página  
✅ Se integra con APIs modernas  
✅ Permite manejar respuestas dinámicas

---

## 🧩 **4. Validación de formularios**

### 📋 **A. Validación con HTML5**

- `required`
- `type="email"`
- `minlength`, `maxlength`
- `pattern`

```html
<input type="email" required placeholder="Correo válido" />
```

### 🧠 **B. Validación personalizada con JavaScript**

```js
if (!email.includes("@")) {
  alert("El correo debe ser válido.");
}
```

---

## 🧩 **5. Organización del código (con Vite)**

Un proyecto organizado con Vite puede tener la siguiente estructura:

```
form-lab/
├── index.html
├── main.js
├── js/
│   ├── formHandler.js
│   └── validation.js
├── css/
│   └── style.css
```

**Ventaja:** separar lógica, presentación y validación mejora la mantenibilidad.

---

## 🧠 **6. Retos guiados**

### 🔹 Reto 1:

Crea una función que verifique si el nombre tiene al menos **3 caracteres** antes de enviarse.

### 🔹 Reto 2:

Agrega un mensaje dinámico debajo del formulario que muestre `"Registro exitoso"` cuando el envío sea correcto.

### 🔹 Reto 3:

Guarda los datos en el **LocalStorage** y muéstralos al recargar la página.

---

## 🧩 **7. Ejemplo completo — “Formulario de registro moderno”**

📁 **Estructura mínima:**

```
index.html
main.js
js/
 ├── formHandler.js
 └── validation.js
```

📄 **index.html**

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Registro de usuario</title>
  </head>
  <body>
    <h1>Registro de Usuario</h1>

    <form id="registerForm">
      <label>Nombre:</label>
      <input type="text" name="name" required minlength="3" />

      <label>Correo electrónico:</label>
      <input type="email" name="email" required />

      <label>Contraseña:</label>
      <input type="password" name="password" required minlength="6" />

      <button type="submit">Registrar</button>
    </form>

    <p id="result"></p>

    <script type="module" src="/main.js"></script>
  </body>
</html>
```

📄 **main.js**

```js
import { handleFormSubmit } from "./js/formHandler.js";
const form = document.querySelector("#registerForm");
form.addEventListener("submit", handleFormSubmit);
```

📄 **js/formHandler.js**

```js
import { validateUser } from "./validation.js";

export async function handleFormSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const user = Object.fromEntries(formData.entries());

  if (!validateUser(user)) {
    document.querySelector("#result").textContent = "Datos inválidos ❌";
    return;
  }

  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });

  const data = await response.json();
  document.querySelector("#result").textContent = `✅ Bienvenido, ${
    data.name || user.name
  }`;
}
```

📄 **js/validation.js**

```js
export function validateUser({ name, email, password }) {
  if (name.length < 3) return false;
  if (!email.includes("@")) return false;
  if (password.length < 6) return false;
  return true;
}
```

---

## 🧩 **8. Cierre y discusión**

> - ¿Por qué es mejor manejar formularios con JavaScript en lugar de depender solo del HTML?
> - ¿Qué ventajas ofrece `FormData` frente a obtener valores manualmente?
> - ¿Cómo podrías reutilizar esta lógica en un framework como React o Vue?

---
