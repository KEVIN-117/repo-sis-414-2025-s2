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
8. Fomentar la práctica del aprendizaje autónomo y el uso de recursos en línea, es decir `aprender` a `aprender`, siguiendo el concepto de aprendizaje `autodidacta`.

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

   - para crear el proyecto puedes usar `yarn` o `pnpm` si lo prefieres, en este caso usamos `npm`, pero que es npm?

   npm (Node Package Manager) es un gestor de paquetes para JavaScript que te permite instalar, compartir y gestionar dependencias en tus proyectos.

   - usamos Vite como herramienta de construcción y desarrollo rápido para proyectos web modernos. Vite ofrece una configuración mínima y un entorno de desarrollo optimizado con recarga en caliente, lo que facilita el desarrollo de aplicaciones web.

   ahora dentro de la carpeta del proyecto, `practica-dom`, puedes encontrar la estructura básica del proyecto con Vite y TypeScript ya configurados, la estructura típica incluye:

   ```
   practica-dom/
   |
   │   .gitignore
   │   index.html
   │   package-lock.json
   │   package.json
   │   tsconfig.json
   │
   ├───public
   │       vite.svg
   │
   └───src
           counter.ts
           main.ts
           style.css
           typescript.svg
   ```

   Donde:

   - `index.html`: es el archivo HTML principal donde se carga la aplicación.
   - `src/`: carpeta que contiene los archivos fuente de TypeScript y CSS.
   - `package.json`: archivo de configuración del proyecto que incluye las dependencias y scripts.
   - `tsconfig.json`: archivo de configuración de TypeScript.
   - `public/`: carpeta para archivos estáticos que se sirven directamente.
   - `node_modules/`: carpeta donde se instalan las dependencias del proyecto.

2. Abre el proyecto en tu editor y verifica que funcione correctamente.

3. Dentro del archivo `index.html`, limpia el contenido inicial y deja esta estructura base:

   ```html
   <body>
     <div class="finder-container">
       <h1>Pokémon Finder</h1>
       <div class="search-box">
         <input
           type="text"
           id="pokemonName"
           placeholder="Write Pokémon name..."
         />
         <button id="searchBtn">SEARCH</button>
       </div>
       <div id="result"></div>
     </div>
     <script type="module" src="/src/main.ts"></script>
   </body>
   ```

   ⚠️ _Nota:_ Asegúrate de que los IDs en el HTML coincidan con los que usarás en TypeScript y ademas de ello asegurate de importar el archivo CSS en `index.html` si decides usar estilos personalizados.

   ```html
    <link rel="stylesheet" href="/src/style.css" />
  ```

  Usa este CSS básico para mejorar la apariencia:
  
  ```css
    :root {
      --primary: #00f3ff;
      --secondary: #ff00e5;
      --dark: #0a0a1a;
      --light: #e0e0ff;
      --glass: rgba(10, 10, 26, 0.7);
    }

    body {
      margin: 0;
      padding: 0;
      background-color: var(--dark);
      color: var(--light);
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background: linear-gradient(135deg, #0a0a1a 0%, #1a1a3a 100%);
      gap: 20px;
    }

    .finder-container {
      width: 90%;
      max-width: 900px;
      background: var(--glass);
      border-radius: 20px;
      padding: 30px;
      box-shadow: 0 0 20px rgba(0, 243, 255, 0.3), 0 0 40px rgba(255, 0, 229, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      position: relative;
      overflow: hidden;
    }

    .finder-container::before {
      content: "";
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: linear-gradient(
        45deg,
        transparent 0%,
        rgba(0, 243, 255, 0.1) 50%,
        transparent 100%
      );
      transform: rotate(45deg);
      animation: shine 6s infinite linear;
      z-index: -1;
    }

    @keyframes shine {
      0% {
        transform: translateX(-100%) rotate(45deg);
      }
      100% {
        transform: translateX(100%) rotate(45deg);
      }
    }

    h1 {
      text-align: center;
      font-size: 2.5rem;
      margin-top: 0;
      margin-bottom: 30px;
      background: linear-gradient(90deg, var(--primary), var(--secondary));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-shadow: 0 0 10px rgba(0, 243, 255, 0.5);
      letter-spacing: 2px;
      position: relative;
      display: inline-block;
      left: 50%;
      transform: translateX(-50%);
    }

    h1::after {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 100%;
      height: 2px;
      background: linear-gradient(
        90deg,
        var(--primary),
        var(--secondary),
        var(--primary)
      );
      border-radius: 2px;
    }

    .search-box {
      display: flex;
      gap: 15px;
      margin-bottom: 30px;
    }

    input {
      flex: 1;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(0, 243, 255, 0.3);
      border-radius: 30px;
      padding: 12px 20px;
      color: var(--light);
      font-size: 1rem;
      outline: none;
      transition: all 0.3s ease;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    input:focus {
      border-color: var(--primary);
      box-shadow: 0 0 15px rgba(0, 243, 255, 0.5);
      background: rgba(255, 255, 255, 0.1);
    }

    input::placeholder {
      color: rgba(224, 224, 255, 0.5);
    }

    #searchBtn {
      background: linear-gradient(135deg, var(--primary), var(--secondary));
      border: none;
      border-radius: 30px;
      padding: 12px 25px;
      color: var(--dark);
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 0 15px rgba(0, 243, 255, 0.3);
      text-transform: uppercase;
      letter-spacing: 1px;
      position: relative;
      overflow: hidden;
    }

    #searchBtn::before {
      content: "";
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.3),
        transparent
      );
      transition: all 0.5s ease;
    }

    #searchBtn:hover {
      transform: translateY(-3px);
      box-shadow: 0 5px 20px rgba(0, 243, 255, 0.5);
    }

    #searchBtn:hover::before {
      left: 100%;
    }

    #searchBtn:active {
      transform: translateY(0);
    }

    #result {
      min-height: 200px;
      background: rgba(255, 255, 255, 0.03);
      border-radius: 15px;
      padding: 20px;
      border: 1px solid rgba(0, 243, 255, 0.1);
      transition: all 0.3s ease;
      position: relative;
    }

    #result.loading::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 50px;
      height: 50px;
      border: 3px solid rgba(0, 243, 255, 0.3);
      border-top: 3px solid var(--primary);
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      0% {
        transform: translate(-50%, -50%) rotate(0deg);
      }
      100% {
        transform: translate(-50%, -50%) rotate(360deg);
      }
    }

    /* Pulsating glow effect for empty result */
    #result:empty::before {
      content: "Search for a Pokémon to see results";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: rgba(224, 224, 255, 0.3);
      text-align: center;
      font-style: italic;
      animation: pulse 2s infinite;
    }

    @keyframes pulse {
      0% {
        opacity: 0.3;
      }
      50% {
        opacity: 0.7;
      }
      100% {
        opacity: 0.3;
      }
    }

    .pokemon-card {
      width: 90%;
      margin: auto;
      background: var(--glass);
      border-radius: 20px;
      padding: 30px;
      box-shadow: 0 0 20px rgba(0, 243, 255, 0.3), 0 0 40px rgba(255, 0, 229, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      position: relative;
      overflow: hidden;
    }

    .pokemon-card::before {
      content: "";
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: linear-gradient(
        45deg,
        transparent 0%,
        rgba(0, 243, 255, 0.1) 50%,
        transparent 100%
      );
      transform: rotate(45deg);
      animation: shine 6s infinite linear;
      z-index: -1;
    }

    @keyframes shine {
      0% {
        transform: translateX(-100%) rotate(45deg);
      }
      100% {
        transform: translateX(100%) rotate(45deg);
      }
    }

    .pokemon-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      border-bottom: 1px solid rgba(0, 243, 255, 0.3);
      padding-bottom: 15px;
    }

    .pokemon-name {
      font-size: 2.5rem;
      font-weight: 700;
      margin: 0;
      background: linear-gradient(90deg, var(--primary), var(--secondary));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-shadow: 0 0 10px rgba(0, 243, 255, 0.5);
      letter-spacing: 2px;
    }

    .pokemon-id {
      font-size: 1.2rem;
      color: var(--primary);
      background: rgba(0, 243, 255, 0.1);
      padding: 5px 15px;
      border-radius: 30px;
      border: 1px solid var(--primary);
      box-shadow: 0 0 10px rgba(0, 243, 255, 0.3);
    }

    .pokemon-details-key {
      font-size: 1em;
      font-weight: 700;
      margin: 0;
      background: linear-gradient(90deg, var(--primary), var(--secondary));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-shadow: 0 0 10px rgba(0, 243, 255, 0.5);
      letter-spacing: 2px;
    }

    .pokemon-details-value {
      font-size: 0.9rem;
      color: var(--primary);
      background: rgba(0, 243, 255, 0.1);
      padding: 5px 15px;
      border-radius: 30px;
      border: 1px solid var(--primary);
      box-shadow: 0 0 10px rgba(0, 243, 255, 0.3);
    }

    .sprites-container {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
    }

    .sprite-box {
      background: rgba(255, 255, 255, 0.05);
      border-radius: 10px;
      padding: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.3s ease;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .sprite-box:hover {
      transform: translateY(-5px);
      box-shadow: 0 5px 15px rgba(0, 243, 255, 0.3);
      background: rgba(255, 255, 255, 0.1);
    }

    .sprite-box img {
      max-width: 100%;
      height: auto;
      filter: drop-shadow(0 0 5px rgba(0, 243, 255, 0.5));
    }

    .pokemon-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 1px solid rgba(0, 243, 255, 0.3);
      padding: 15px;
      border-radius: 0 0 20px 20px;
      margin-top: 20px;
    }

    button {
      background: linear-gradient(
        135deg,
        rgba(255, 0, 229, 0.1),
        rgba(0, 243, 255, 0.1)
      );
      padding: 10px 15px;
      border-radius: 30px;
      text-align: center;
      text-transform: capitalize;
      font-weight: 500;
      letter-spacing: 1px;
      border: 1px solid rgba(255, 0, 229, 0.3);
      transition: all 0.3s ease;
      color: #00f3ff;
    }

    button:hover {
      background: linear-gradient(
        135deg,
        rgba(255, 0, 229, 0.2),
        rgba(0, 243, 255, 0.2)
      );
      transform: scale(1.05);
      box-shadow: 0 0 15px rgba(255, 0, 229, 0.4);
    }
  ```

---

## 🧩 Paso 2: Manipulación básica del DOM

1. En `main.ts`, selecciona los elementos del DOM:

   ```ts
   const input = document.querySelector<HTMLInputElement>("#pokemonName")!;
   const searchBtn = document.querySelector<HTMLButtonElement>("#searchBtn")!;
   const result = document.querySelector<HTMLDivElement>("#result")!;
   ```

2. Prueba cambiar dinámicamente el contenido:

   ```ts
   searchBtn.addEventListener("click", () => {
     result.textContent = `Searching for ${input.value}...`;
   });
   ```

📍 _Objetivo:_ comprender cómo acceder a los elementos y modificarlos desde TypeScript.

---

## 🧱 Paso 3: Creación dinámica de elementos

Agreguemos un pequeño mensaje dinámico:

```ts
const message = document.createElement("p");
message.textContent = "Welcome to the Pokédex DOM";
message.style.color = "purple";
message.style.fontWeight = "bold";
message.style.textAlign = "center";
document.getElementsByClassName("finder-container")[0].appendChild(message);
```

🧠 _Observa:_ hemos creado un nuevo nodo, definido su texto y lo agregamos al DOM.

---

## 🧭 Paso 4: Manejo de eventos

Agreguemos interactividad con eventos:

```ts
input.addEventListener("focus", () => {
  input.style.border = "2px solid purple";
  message.textContent = "Start searching for your Pokémon!";
});

input.addEventListener("blur", () => {
  input.style.border = "";
  message.textContent = "Welcome to the Pokédex DOM";
});
```

💡 _Tip:_ Prueba otros eventos como `keydown`, `mouseover` o `submit`.

---

## 🌍 Paso 5: Consumiendo datos con Fetch API

Ahora usaremos la **PokéAPI** para obtener información real de un Pokémon.

```ts
async function searchPokemon(name: string) {
  try {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
    );
    if (!res.ok) throw new Error("Pokémon not found");

    const data = await res.json();
    result.classList.add("pokemon-card");
    result.innerHTML = `
      <h2>${data.name.toUpperCase()}</h2>
      <img src="${data.sprites.front_default}" alt="${data.name}">
      <p>Altura: ${data.height}</p>
      <p>Peso: ${data.weight}</p>
    `;
  } catch (error) {
    result.innerHTML = `<p style="color:red;">❌ No se encontró el Pokémon</p>`;
  }
}

searchBtn.addEventListener("click", () => {
  if (input.value.trim() !== "") searchPokemon(input.value);
});
```

🎯 _Objetivo:_ comprender cómo trabajar con promesas y actualizar el DOM con datos externos.

---

## 🎨 Paso 6: Estilos dinámicos

Podemos añadir efectos visuales en tiempo real:

```ts
result.addEventListener("mouseover", () => {
  result.style.backgroundColor = "rgba(10, 10, 26, 0.7)";
});
result.addEventListener("mouseout", () => {
  result.style.backgroundColor = "transparent";
});
```

---

## 🧪 Paso 7: Reto final — Mini Pokédex interactiva

🧩 **Reto:**
Agrega las siguientes características a tu Pokédex:

- Mostrar un mensaje de carga mientras se busca el Pokémon.
- Aplicar estilos dinámicos según el tipo del Pokémon (por ejemplo: `fire`, `water`, `grass`).
- Bonus: Permitir buscar varios Pokémon seguidos y listarlos en tarjetas.

💡 _Consejo:_ Usa `createElement` y `appendChild` en lugar de `innerHTML` para practicar creación de nodos.

---

## 📘 Recursos recomendados

- [Documentación de MDN sobre el DOM](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model)
- [Guía de JavaScript en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide)
- [Curso de JavaScript en freeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/)
- [Tutorial de Manipulación del DOM en W3Schools](https://www.w3schools.com/js/js_htmldom.asp)
- [Ejemplos de Manipulación del DOM en JavaScript](https://www.javascript.info/dom-nodes)
- [Documentación de Fetch API en MDN](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)
- [Tutorial de Eventos en JavaScript en W3Schools](https://www.w3schools.com/js/js_events.asp)
- [Documentación de Eventos en MDN](https://developer.mozilla.org/es/docs/Web/Events)
- [Tutorial de Estilos en JavaScript en W3Schools](https://www.w3schools.com/jsref/prop_style_background.asp)

---

## ✅ Evaluación sugerida

| Criterio                    | Descripción                                     | Puntos |
| --------------------------- | ----------------------------------------------- | ------ |
| Interacción con el DOM      | Selección y manipulación correcta de elementos  | 10 pts |
| Uso de eventos              | Implementa eventos y reacciones dinámicas       | 10 pts |
| Uso de Fetch API            | Consume y muestra datos correctamente           | 30 pts |
| Estilos dinámicos           | Aplicación de estilos según eventos o datos     | 15 pts |
| Creatividad y mejora propia | Incluye detalles adicionales o mejoras visuales | 15 pts |
| Reto final                  | Completa el reto propuesto                      | 20 pts |

**Total: 100 pts**

---
