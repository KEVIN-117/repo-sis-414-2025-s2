# 🧑‍🏫 Introducción a React.js y Next.js

---

## 🎯 **Objetivo general**

Comprender los fundamentos de React.js como biblioteca para construir interfaces de usuario basadas en componentes, e introducir los conceptos iniciales de Next.js como framework que extiende React con funcionalidades de enrutamiento, renderizado del lado del servidor y optimización.

## 🧠 **1. Introducción: ¿Por qué React?**

React fue creado por **Facebook (Meta)** para resolver el problema de manejar interfaces dinámicas en la web.  
Es una **biblioteca declarativa y basada en componentes**.

### 🟦 Ventajas principales

- Componentes reutilizables.
- Actualizaciones eficientes mediante el **Virtual DOM**.
- Ecosistema enorme y moderno.
- Compatible con frameworks como **Next.js**.

---

## ⚙️ **2. Conceptos fundamentales**

### 🧩 a) Componentes

Un **componente** es una función o clase que devuelve una parte de la interfaz (HTML representado con JSX).

```jsx
function Saludo() {
  return <h1>¡Hola, mundo!</h1>;
}
```

> **JSX** = extensión de JavaScript que permite escribir HTML dentro del código JS.  
> Se compila a `React.createElement(...)`.

---

### 🧮 b) Props (propiedades)

Sirven para **pasar datos** de un componente padre a uno hijo.

```jsx
function Saludo({ nombre }) {
  return <h2>Hola, {nombre} 👋</h2>;
}

// Uso:
<Saludo nombre="Kevin" />;
```

---

### ⚡ c) Estado (`useState`)

El **estado** permite manejar datos que cambian con el tiempo dentro de un componente.

```jsx
import { useState } from "react";

function Contador() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Has hecho clic {count} veces</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}
```

---

### 🔁 d) Eventos

React maneja los eventos como en JS, pero con sintaxis camelCase:

```jsx
<button onClick={handleClick}>Haz clic</button>
```

---

### 🌎 e) Estructura de un proyecto (con Vite)

```
mi-app/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── components/
│       └── Saludo.jsx
├── index.html
├── package.json
```

**Ejecutar el entorno:**

```bash
npm create vite@latest mi-app -- --template react
cd mi-app
npm install
npm run dev
```

---

## 🧪 **Mini práctica 1 (15 min)**

🧩 **Objetivo:** Crear una pequeña aplicación React que muestre una lista de tareas (sin backend).

**Instrucciones:**

1. Crea un componente `Tarea` que reciba una prop `texto`.
2. Crea un componente `ListaTareas` que muestre varias tareas.
3. Agrega un input y un botón para añadir nuevas tareas usando `useState`.

> 💡 _Tip:_ Usa `map()` para renderizar listas.

---

## 🚀 **3. Introducción a Next.js**

### 🧭 ¿Qué es Next.js?

Next.js es un **framework basado en React** que agrega herramientas para:

- Enrutamiento automático por carpetas.
- Renderizado del lado del servidor (SSR).
- Generación estática (SSG).
- API Routes (endpoints con Node.js).
- Optimizaciones de imágenes y fuentes.

---

### 📦 **Instalación**

```bash
npx create-next-app@latest mi-next
cd mi-next
npm run dev
```

Abre en [http://localhost:3000](http://localhost:3000/)

---

### 📁 **Estructura de proyecto**

```
mi-next/
├── app/
│   ├── page.jsx
│   ├── layout.jsx
│   └── about/
│       └── page.jsx
├── public/
├── package.json
```

---

### 🧭 **Rutas automáticas**

Cada carpeta dentro de `app/` representa una ruta.

| Archivo              | URL resultante |
| -------------------- | -------------- |
| `app/page.jsx`       | `/`            |
| `app/about/page.jsx` | `/about`       |

Ejemplo:

```jsx
export default function About() {
  return <h1>Acerca de nosotros</h1>;
}
```

---

### 🧠 **Uso de componentes y props**

```jsx
function Card({ titulo, descripcion }) {
  return (
    <div>
      <h2>{titulo}</h2>
      <p>{descripcion}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <Card titulo="React" descripcion="Biblioteca para interfaces" />
      <Card titulo="Next.js" descripcion="Framework para producción" />
    </div>
  );
}
```

---

## 🧪 **Mini práctica 2 (25 min)**

🧩 **Objetivo:** Crear una página simple con Next.js con dos rutas:

- `/` → muestra tu nombre y un contador con `useState`.
- `/about` → muestra una breve descripción de ti y un botón para regresar al inicio.

---

## 💡 **4. Conceptos clave a reforzar**

| Concepto              | Descripción                                                      |
| --------------------- | ---------------------------------------------------------------- |
| **JSX**               | Sintaxis que mezcla HTML con JS.                                 |
| **Componente**        | Unidad reutilizable de interfaz.                                 |
| **Props**             | Parámetros de entrada para los componentes.                      |
| **Estado (useState)** | Datos internos que cambian.                                      |
| **Virtual DOM**       | Copia en memoria que mejora el rendimiento.                      |
| **Next.js**           | Framework basado en React con renderizado del lado del servidor. |

---

## 🧩 **5. Cierre y preguntas para reflexionar**

- ¿Por qué React usa componentes en lugar de plantillas HTML?
- ¿Qué diferencia hay entre React y Next.js?
- ¿Cómo ayuda el estado (`useState`) a manejar interactividad?

---

## 📘 **Ejemplo final: Mini “Contador de visitas” con Next.js**

📄 `app/page.jsx`

```jsx
"use client";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Contador de visitas 🧮</h1>
      <p>Visitas: {count}</p>
      <button onClick={() => setCount(count + 1)}>Aumentar</button>
      <button onClick={() => setCount(0)}>Reiniciar</button>
    </main>
  );
}
```

---

## 📚 **Recursos adicionales**

- [Documentación oficial de React](https://es.reactjs.org/docs/getting-started.html)
- [Documentación oficial de Next.js](https://nextjs.org/docs)
- [Curso de React en Platzi](https://platzi.com/cursos/react/)
- [Curso de Next.js en Platzi](https://platzi.com/cursos/nextjs/)
