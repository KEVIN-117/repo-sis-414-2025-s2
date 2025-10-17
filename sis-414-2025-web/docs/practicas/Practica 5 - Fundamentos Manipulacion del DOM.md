---
title: "Práctica 5 - Fundamentos Manipulación del DOM"
slug: "practica-5-fundamentos-manipulacion-del-dom"
date: 2023-10-01
tags: ["practicas", "javascript", "dom"]
description: "En esta práctica, exploraremos los fundamentos de la manipulación del DOM utilizando JavaScript. Aprenderemos a seleccionar, crear, modificar y eliminar elementos del DOM para construir una página web dinámica e interactiva."
categories: ["practicas"]
---

# 🧩 Práctica 5 - Fundamentos de Manipulación del DOM

## 🎯 Objetivos específicos

1. Comprender la estructura del DOM y cómo interactuar con ella mediante JavaScript.
2. Aprender a seleccionar elementos del DOM utilizando diferentes métodos.
3. Practicar la creación, modificación y eliminación de elementos del DOM.
4. Implementar eventos para hacer la página web más interactiva.
5. Desarrollar una pequeña aplicación web que utilice la manipulación del DOM para mejorar la experiencia del usuario.
6. Hacer uso de la API Fetch para obtener datos de un servidor y mostrarlos en la página web.
7. Aplicar estilos dinámicos a los elementos del DOM mediante JavaScript.

!!! TIP "💁‍♂️ Uno de los principales objetivos es:" - Fomentar la práctica del aprendizaje autónomo y el uso de recursos en línea, es decir `aprender` a `aprender`, siguiendo el concepto de aprendizaje `autodidacta`.

---

## 🧠 Conceptos clave previos

Antes de comenzar asegúrate de comprender los siguientes conceptos:

- ¿Qué es el DOM y cómo lo representa el navegador?
- Diferencia entre `innerHTML`, `textContent` y `value`.
- Métodos de selección: `getElementById`, `querySelector`, `querySelectorAll`.
- Eventos comunes: `click`, `input`, `submit`.
- Promesas y uso básico de `fetch`.

---

## 🧰 Herramientas y tecnologías

- **HTML5** para la estructura base.
- **TypeScript** (compilado con **Vite**) para mayor control y tipado.
- **Fetch API** para comunicación con el servidor.
- **PokéAPI**: <https://pokeapi.co/>
- **CSS básico** o inline styles (opcional para estilos dinámicos).

---

## 🪄 Paso 1: Crear el entorno de trabajo

1. Crea un nuevo proyecto con Vite:
   ```bash
   npm create vite@latest practica-dom -- --template vanilla-ts
   cd practica-dom
   npm install
   npm run dev
   ```

2. Abre el proyecto en tu editor y verifica que funcione correctamente.

3. Dentro del archivo `index.html`, limpia el contenido inicial y deja esta estructura base:

   ```html
   <body>
     <h1>Pokédex DOM</h1>
     <input type="text" id="pokemonName" placeholder="Escribe un nombre de Pokémon..." />
     <button id="buscarBtn">Buscar</button>
     <div id="resultado"></div>
     <script type="module" src="/src/main.ts"></script>
   </body>
   ```

---

## 🧩 Paso 2: Manipulación básica del DOM

1. En `main.ts`, selecciona los elementos del DOM:

   ```ts
   const input = document.querySelector<HTMLInputElement>("#pokemonName")!;
   const boton = document.querySelector<HTMLButtonElement>("#buscarBtn")!;
   const resultado = document.querySelector<HTMLDivElement>("#resultado")!;
   ```

2. Prueba cambiar dinámicamente el contenido:

   ```ts
   boton.addEventListener("click", () => {
     resultado.textContent = `Buscando a ${input.value}...`;
   });
   ```

📍 *Objetivo:* comprender cómo acceder a los elementos y modificarlos desde TypeScript.

---

## 🧱 Paso 3: Creación dinámica de elementos

Agreguemos un pequeño mensaje dinámico:

```ts
const mensaje = document.createElement("p");
mensaje.textContent = "Bienvenido a la Pokédex DOM";
mensaje.style.color = "purple";
document.body.appendChild(mensaje);
```

🧠 *Observa:* hemos creado un nuevo nodo, definido su texto y lo agregamos al DOM.

---

## 🧭 Paso 4: Manejo de eventos

Agreguemos interactividad con eventos:

```ts
input.addEventListener("focus", () => {
  input.style.borderColor = "skyblue";
});

input.addEventListener("blur", () => {
  input.style.borderColor = "";
});
```

💡 *Tip:* Prueba otros eventos como `keydown`, `mouseover` o `submit`.

---

## 🌍 Paso 5: Consumiendo datos con Fetch API

Ahora usaremos la **PokéAPI** para obtener información real de un Pokémon.

```ts
async function buscarPokemon(nombre: string) {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase()}`);
    if (!res.ok) throw new Error("Pokémon no encontrado");

    const data = await res.json();

    resultado.innerHTML = `
      <h2>${data.name.toUpperCase()}</h2>
      <img src="${data.sprites.front_default}" alt="${data.name}">
      <p>Altura: ${data.height}</p>
      <p>Peso: ${data.weight}</p>
    `;
  } catch (error) {
    resultado.innerHTML = `<p style="color:red;">❌ No se encontró el Pokémon</p>`;
  }
}

boton.addEventListener("click", () => {
  if (input.value.trim() !== "") buscarPokemon(input.value);
});
```

🎯 *Objetivo:* comprender cómo trabajar con promesas y actualizar el DOM con datos externos.

---

## 🎨 Paso 6: Estilos dinámicos

Podemos añadir efectos visuales en tiempo real:

```ts
resultado.addEventListener("mouseover", () => {
  resultado.style.backgroundColor = "#f0f0f0";
});
resultado.addEventListener("mouseout", () => {
  resultado.style.backgroundColor = "transparent";
});
```

---

## 🧪 Paso 7: Reto final — Mini Pokédex interactiva

🧩 **Reto:**
Agrega las siguientes características a tu Pokédex:

1. Un botón para limpiar los resultados (`Limpiar`).
2. Mostrar un mensaje de carga mientras se busca el Pokémon.
3. Aplicar estilos dinámicos según el tipo del Pokémon (por ejemplo: `fire`, `water`, `grass`).
4. Bonus: Permitir buscar varios Pokémon seguidos y listarlos en tarjetas.

💡 *Consejo:* Usa `createElement` y `appendChild` en lugar de `innerHTML` para practicar creación de nodos.

---

## 📘 Recursos recomendados

* [Documentación de MDN sobre el DOM](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model)
* [Guía de JavaScript en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide)
* [Curso de JavaScript en freeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/)
* [Tutorial de Manipulación del DOM en W3Schools](https://www.w3schools.com/js/js_htmldom.asp)
* [Ejemplos de Manipulación del DOM en JavaScript](https://www.javascript.info/dom-nodes)
* [Documentación de Fetch API en MDN](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)
* [Tutorial de Eventos en JavaScript en W3Schools](https://www.w3schools.com/js/js_events.asp)
* [Documentación de Eventos en MDN](https://developer.mozilla.org/es/docs/Web/Events)
* [Tutorial de Estilos en JavaScript en W3Schools](https://www.w3schools.com/jsref/prop_style_background.asp)

---

## ✅ Evaluación sugerida

| Criterio                    | Descripción                                     | Puntos |
| --------------------------- | ----------------------------------------------- | ------ |
| Interacción con el DOM      | Selección y manipulación correcta de elementos  | 20 pts |
| Uso de eventos              | Implementa eventos y reacciones dinámicas       | 20 pts |
| Uso de Fetch API            | Consume y muestra datos correctamente           | 30 pts |
| Estilos dinámicos           | Aplicación de estilos según eventos o datos     | 15 pts |
| Creatividad y mejora propia | Incluye detalles adicionales o mejoras visuales | 15 pts |

**Total: 100 pts**

---
