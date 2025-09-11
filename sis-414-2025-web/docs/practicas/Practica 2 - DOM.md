# **PRACTICA 2: Manipulación del DOM + Formularios y Persistencia en Memoria**

**Objetivo:**

- Comprender cómo interactuar con el DOM usando JavaScript.
- Aplicar los conocimientos en un proyecto realista.

---

# **Parte Teórica**

### **1. Preguntas Conceptuales**

**a)** ¿Qué es el DOM y cómo se relaciona con HTML?

**b)** Explica la diferencia entre:

- `document.getElementById()` vs `document.querySelector()`.
- `textContent` vs `innerHTML`.

**c)** ¿Para qué sirve `addEventListener`? Proporciona un ejemplo.

**d)** ¿Qué métodos del DOM se usan para capturar valores de un formulario?

**e)** Explica cómo prevenir el envío por defecto de un formulario con JavaScript.

**f)** ¿Qué es el "almacenamiento en memoria" y en qué se diferencia de `localStorage`?

### **2. Análisis de Código**

Dado el siguiente código:

```html
<button id="btn">Haz clic</button>
<p id="mensaje"></p>

```

```jsx
document.getElementById("btn").addEventListener("click", () => {
  document.getElementById("mensaje").textContent = "¡Botón presionado!";
});

```

**Preguntas:**

- ¿Qué hace el código?
- ¿Qué pasaría si cambiamos `textContent` por `innerHTML`?

---

### **3. Análisis de Código**

Dado el siguiente formulario:

```html
<form id="form-usuario">
  <input type="text" id="nombre" placeholder="Nombre">
  <button type="submit">Guardar</button>
</form>
<ul id="lista-usuarios"></ul>

```

```jsx
const usuarios = []; // Array para simular persistencia

document.getElementById("form-usuario").addEventListener("submit", (e) => {
  e.preventDefault(); // ¿Por qué es importante esta línea?
  const nombre = document.getElementById("nombre").value;
  usuarios.push(nombre); // Almacena en memoria
  actualizarListaUsuarios();
});

function actualizarListaUsuarios() {
  const lista = document.getElementById("lista-usuarios");
  lista.innerHTML = usuarios.map(user => `<li>${user}</li>`).join("");
}

```

**Preguntas:**

- ¿Qué hace el código al enviar el formulario?
- ¿Cómo se simula la "persistencia de datos" aquí?

---

<aside>
⚠️

Es importante que tomes en cuenta que también se tomara en cuenta el dis de la paina

</aside>

# **Parte Práctica**

## **Proyecto: "Editor de Texto Dinámico"**

**Requisitos:**

1. Crea un HTML con:
    - Un `<textarea>` para que el usuario escriba.
    - Un botón "Aplicar".
    - Un `<div>` vacío con ID `"resultado"`.
2. Usa JavaScript para:
    - Capturar el texto del `<textarea>` cuando se haga clic en el botón.
    - Mostrar ese texto en el `<div id="resultado">` (usando `textContent`).
    - **Bonus:**
        - Cambiar el color del texto a azul cuando se muestre en el `div`.
        - Añadir un contador de caracteres debajo del `textarea`.

## **Proyecto: "Registro de Usuarios en Memoria"**

**Requisitos:**

1. Crea un formulario HTML con:
    - Campos: `Nombre`, `Email` y `Edad`.
    - Botón de envío.
2. Usa JavaScript para:
    - Capturar los datos del formulario y guardarlos en un array (simulando una DB en memoria).
    - Mostrar los usuarios registrados en una lista (`<ul>`) en tiempo real.
    - **Validación:** No permitir campos vacíos. Mostrar un mensaje de error si es necesario.
3. **Bonus:**
    - Añadir un botón para eliminar usuarios de la lista.
    - Mostrar el total de usuarios registrados.

### **Estructura HTML Sugerida:**

```html
<form id="formulario-usuario">
  <input type="text" id="nombre" placeholder="Nombre" required>
  <input type="email" id="email" placeholder="Email" required>
  <input type="number" id="edad" placeholder="Edad" required>
  <button type="submit">Registrar</button>
</form>
<div id="error" style="color: red;"></div>
<ul id="lista-usuarios"></ul>
<p id="total-usuarios">Total: 0</p>

```

# **Parte Avanzada**

<aside>
⚠️

Esto es un reto puedes aprovechar en realizar esto para poder mejorar la nota que quieras

</aside>

### **Reto: Búsqueda en Tiempo Real**

- Añade un `<input>` de búsqueda que filtre los usuarios por nombre en tiempo real (usando el evento `input`).
- **Ejemplo:**

```jsx
document.getElementById("buscador").addEventListener("input", (e) => {
  const busqueda = e.target.value.toLowerCase();
  const usuariosFiltrados = usuarios.filter(user =>
    user.nombre.toLowerCase().includes(busqueda)
  );
  // Mostrar solo los filtrados...
});

```

---

# **📌 Criterios de Evaluación**

### Parte 1: Teoría

- Preguntas Conceptuales (10)
- Análisis de Código 2 y 3 (20)

### Parte 2: Parte Practica

- Proyecto Editor de Texto Básico (30)
- Proyecto Registro de Usuarios (40)
- Parte 3: Parte Avanzada 20

---

### **🔗 Recursos Adicionales**

- [Documentación MDN sobre DOM](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction).
- [Eventos de Formularios en MDN](https://developer.mozilla.org/es/docs/Web/API/HTMLFormElement/submit_event).
- [Métodos de Arrays en JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array).
- [Práctica interactiva en CodePen](https://codepen.io/pen/).