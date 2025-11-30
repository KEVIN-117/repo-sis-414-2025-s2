---
title: "Introducción a Next.js - Las Bases"
slug: introduccion-a-nextjs-las-bases
tags:
  - nextjs
  - react
  - frontend
  - spring boot
  - tutorial
summary: "Aprende los conceptos fundamentales de Next.js y cómo integrarlo con un backend en Spring Boot en esta clase introductoria paso a paso."
---

# Introducción a Next.js - Las Bases

**Objetivos de la clase:**

- Entender los conceptos fundamentales de Next.js como framework para React.
- Configurar un entorno de desarrollo básico con Next.js.
- Crear páginas, rutas y componentes simples.
- Explorar estilos y rutas de API en Next.js.
- Integrar un frontend en Next.js con un backend en Spring Boot a través de llamadas API.
- Realizar ejercicios prácticos para reforzar el aprendizaje y hacer la clase dinámica.

**Público objetivo:** Estudiantes de tecnologías emergentes con conocimientos básicos de JavaScript, React y conceptos de backend (como REST APIs).

**Materiales requeridos:**

- Computadora con Node.js (versión 18 o superior) instalado.
- Editor de código (VS Code recomendado).
- Acceso a internet para instalaciones de paquetes.
- Un proyecto de Spring Boot simple preconfigurado (proporcionado como ejemplo o creado en clase; ver sección de integración).
- Git instalado para clonar repositorios de ejemplo.

**Instrucciones generales:**

- Sigue los pasos secuencialmente. Cada sección incluye tiempo estimado, explicaciones teóricas breves, ejemplos de código y ejercicios prácticos.
- En clase, anima a los estudiantes a codificar en tiempo real. Usa un proyector para demostrar y resuelve dudas en grupo para mantener la dinámica.
- Al final de cada sección, dedica 5 minutos a preguntas y depuración colectiva.
- Para la integración con Spring Boot, asume un backend simple que exponga un endpoint REST (ej. GET /api/hello que retorna un mensaje).

---

## Sección 1: Introducción a Next.js

**Objetivo:** Presentar qué es Next.js y por qué usarlo en aplicaciones web modernas.

**Teoría breve:**  
Next.js es un framework basado en React que facilita el desarrollo de aplicaciones web con renderizado del lado del servidor (SSR), generación estática (SSG) y rutas de API integradas. Mejora el rendimiento, SEO y experiencia de usuario comparado con React puro. Es ideal para apps full-stack, y se integra fácilmente con backends como Spring Boot vía APIs.

**Ejemplo práctico:**  
Demuestra un sitio simple en Next.js (usa un demo en vivo o un repositorio de GitHub como https://github.com/vercel/next.js/tree/canary/examples/hello-world). Explica cómo Next.js maneja rutas automáticamente basadas en archivos.

**Ejercicio inicial (dinámico):**

- Pregunta a los estudiantes: "¿Qué problemas resuelve Next.js en comparación con React vanilla?" (Discusión en grupo, 5 minutos).
- Anota respuestas en una pizarra compartida para fomentar interacción.

**Tiempo total:** 15 minutos. Transición: "Ahora, configuremos nuestro entorno para empezar a codificar."

---

## Sección 2: Instalación y Configuración Básica

**Objetivo:** Crear un proyecto Next.js desde cero.

**Pasos paso a paso:**

1. Abre una terminal y ejecuta:

   ```
   npx create-next-app@latest mi-proyecto-next
   ```

   (Elige las opciones predeterminadas: TypeScript sí, ESLint sí, Tailwind no por ahora, App Router sí).

2. Navega al directorio:

   ```
   cd mi-proyecto-next
   ```

3. Inicia el servidor de desarrollo:
   ```
   npm run dev
   ```
   Abre http://localhost:3000 en el navegador. Deberías ver la página de bienvenida de Next.js.

**Ejemplo práctico:**  
Modifica el archivo `app/page.tsx` para mostrar un saludo personalizado:

```tsx
export default function Home() {
  return (
    <div>
      <h1>¡Bienvenidos a Next.js!</h1>
      <p>Esta es la página principal.</p>
    </div>
  );
}
```

Recarga el navegador para ver los cambios en hot-reload.

**Ejercicio práctico (dinámico):**

- Modifica la página para incluir tu nombre y una descripción breve de tu proyecto favorito.
- Comparte pantallas en grupo: "¿Qué cambiaste y por qué?" (10 minutos de codificación + 5 de 分享).

**Tiempo total:** 20 minutos. Transición: "Con el setup listo, exploremos cómo Next.js maneja páginas y rutas."

---

## Sección 3: Páginas, Rutas y Navegación Básica

**Objetivo:** Aprender el sistema de rutas basado en archivos.

**Teoría breve:**  
En Next.js (con App Router), las rutas se crean automáticamente desde la estructura de carpetas en `/app`. Por ejemplo, `/app/about/page.tsx` crea la ruta `/about`. Usa `<Link>` de `next/link` para navegación client-side.

**Ejemplo práctico:**

1. Crea una nueva carpeta `/app/about` y un archivo `page.tsx` dentro:

   ```tsx
   export default function About() {
     return (
       <div>
         <h1>Sobre Nosotros</h1>
         <p>Esta es una página de ejemplo en Next.js.</p>
       </div>
     );
   }
   ```

   Accede a http://localhost:3000/about.

2. Agrega navegación en `app/page.tsx`:

   ```tsx
   import Link from "next/link";

   export default function Home() {
     return (
       <div>
         <h1>¡Bienvenidos a Next.js!</h1>
         <Link href="/about">Ir a Sobre Nosotros</Link>
       </div>
     );
   }
   ```

**Ejercicio práctico (dinámico):**

- Crea una nueva ruta `/contact` con un formulario simple (solo HTML por ahora).
- Agrega links entre páginas para formar un menú básico.
- Desafío grupal: ¿Cómo harías una ruta dinámica (ej. /users/[id])? (Codifiquen en parejas, 15 minutos; discute resultados).

**Tiempo total:** 30 minutos. Transición: "Ahora, profundicemos en componentes reutilizables."

---

## Sección 4: Componentes y Props

**Objetivo:** Construir componentes modulares.

**Teoría breve:**  
Los componentes en Next.js son como en React, pero se benefician de SSR. Usa props para pasar datos.

**Ejemplo práctico:**  
Crea un componente en `/app/components/Header.tsx`:

```tsx
interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return <h1>{title}</h1>;
}
```

Úsalo en `app/page.tsx`:

```tsx
import Header from "./components/Header";

export default function Home() {
  return (
    <div>
      <Header title="Página Principal" />
      {/* ... */}
    </div>
  );
}
```

**Ejercicio práctico (dinámico):**

- Crea un componente `Card` que reciba props como `title` y `description`.
- Úsalo en múltiples páginas para mostrar información (ej. una lista de tecnologías emergentes).
- Interacción: Comparte tu componente con un compañero y úsalo en su proyecto (10 minutos).

**Tiempo total:** 20 minutos. Transición: "Añadamos estilos para hacerla visualmente atractiva."

---

## Sección 5: Estilos Básicos

**Objetivo:** Aplicar CSS simple en Next.js.

**Teoría breve:**  
Next.js soporta CSS modules, global CSS o frameworks como Tailwind. Para basics, usa CSS modules.

**Ejemplo práctico:**  
Crea `app/page.module.css`:

```css
.container {
  background-color: lightblue;
  padding: 20px;
}
```

Importa en `app/page.tsx`:

```tsx
import styles from "./page.module.css";

export default function Home() {
  return <div className={styles.container}>{/* ... */}</div>;
}
```

**Ejercicio práctico (dinámico):**

- Estiliza tu componente `Card` con un CSS module (colores, bordes).
- Experimenta: Cambia estilos dinámicamente basado en props (ej. color rojo si es "urgente"). (10 minutos).

**Tiempo total:** 15 minutos. Transición: "Integramos con un backend real."

---

## Sección 6: Rutas de API y Integración con Spring Boot

**Objetivo:** Conectar frontend con backend.

**Teoría breve:**  
Next.js permite crear rutas API en `/app/api` para manejar solicitudes. Para un backend externo como Spring Boot, usa `fetch` en componentes para llamar a APIs.

**Ejemplo práctico (relacionado con Spring Boot):**  
Asume un backend Spring Boot corriendo en http://localhost:8080 con endpoint GET /api/hello que retorna `{ "message": "Hola desde Spring Boot" }`.

En Next.js, crea `/app/api/proxy/route.ts` (para proxy, pero para basics usa fetch directo):  
En un componente, usa useEffect para fetch:

```tsx
import { useState, useEffect } from "react";

export default function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/hello")
      .then((res) => res.json())
      .then(setData);
  }, []);

  return <p>{data ? data.message : "Cargando..."}</p>;
}
```

Integra en una página. (Nota: Maneja CORS en Spring Boot con @CrossOrigin).

**Ejercicio práctico (dinámico):**

- Configura un Spring Boot simple (proporciona código base: un controlador con @GetMapping("/api/hello")).
- En Next.js, crea una página que muestre datos del backend (ej. lista de items).
- Desafío: Agrega un botón para fetch on-demand. (Codifiquen individualmente, luego debug en grupo, 20 minutos).

**Tiempo total:** 30 minutos. Transición: "Pongamos todo junto en ejercicios finales."

---

## Sección 7: Ejercicios Finales y Cierre

**Objetivo:** Reforzar conceptos con práctica integrada.

**Ejercicios prácticos (dinámicos):**

1. Construye una app simple: Página home con navegación a "about" y "data" (que fetch de Spring Boot).
2. Agrega un componente reutilizable con estilos.
3. Bonus: Implementa una ruta dinámica (ej. /posts/[id]) que simule datos de backend.
   - Tiempo: 15 minutos de codificación libre.
   - Discusión: Comparte tu app en pantalla y explica decisiones (5 minutos).

**Evaluación y cierre:**

- Autoevaluación: ¿Qué aprendiste? ¿Qué mejorarías?
- Asigna tarea: Expande la app con más features para la próxima clase.
- Recursos adicionales: Documentación oficial de Next.js (nextjs.org), tutoriales en Vercel.

**Tiempo total:** 20 minutos.

**Notas para el instructor:** Mantén la clase interactiva con polls rápidos (ej. via Mentimeter) y breaks de 5 minutos si excede 2 horas. Ajusta tiempos basado en el ritmo del grupo. ¡Hazlo divertido con memes de programación o demos en vivo de errores comunes!
