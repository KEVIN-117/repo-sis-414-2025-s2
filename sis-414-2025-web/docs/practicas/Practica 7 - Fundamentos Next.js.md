---
title: "Práctica 7 - Fundamentos Next.js"
slug: practica-7-fundamentos-nextjs
date: 2025-09-01
draft: false
tags: ["practica", "react", "nextjs"]
description: "Introducción a los fundamentos de Next.js"
categories: ["practicas"]
authors: ["kevin-117"]
---

# **Fundamentos de Next.js**

---

---

## Objetivos específicos

- Comprender los conceptos básicos de Next.js como framework de desarrollo web.
- Introducir el flujo de trabajo con Next.js como evolución natural de React.
- Familiarizarse con las herramientas necesarias para el desarrollo moderno en la web.

!!! tip "💁‍♂️ Uno de los principales objetivos es:"

    - Fomentar la practica del aprendisaje autonomo y el uso de recursos en línea es decir aprender a aprender siguiendo el concepto de aprensizaje autodidacta.

---

## Recursos para la elaboración de la práctica

Debe seguir la siguiente guía paso a paso para completar la práctica:

- [Next.js - Learn Next.js](https://nextjs.org/learn/dashboard-app)

---

El presente ejercicio tiene como objetivo introducir al estudiante en los **fundamentos esenciales de Next.js**, conocimientos indispensables para abordar con éxito el framework **Next.js**. A través de un enfoque progresivo y basado en ejemplos.

---

## Requisitos previos

- Conocimientos básicos de **HTML, CSS y JavaScript**.
- Instalación de **Node.js 20.12.0 o superior** y **npm** versiones LTS.
- Instalación de **Git** para control de versiones.
- Sistema operativo: **macOS, Windows (incluyendo WSL) o Linux** (se recomienda WSL para usuarios de Windows).
- Conocimientos básicos de **React**.
- Editor de texto recomendado: **Visual Studio Code (VSCode)** con extensiones para JavaScript y React.
- Navegador web actualizado (Google Chrome, Firefox, etc.).

## Dinámica de la práctica

1. Construcción de un Dashboard básico en usando **Next.js**.
2. Exploración de las características principales de Next.js, como el enrutamiento, el renderizado del lado del servidor y la generación de sitios estáticos.
3. Implementación de funcionalidades interactivas utilizando componentes de React dentro de Next.js.

## Entregables

- Código fuente del proyecto en un repositorio de GitHub.
- Documentación en formato Markdown explicando los pasos seguidos y los conceptos aprendidos todo esto en un archivo `README.md`.
- Capturas de pantalla o GIFs que ilustren el funcionamiento de la aplicación en cada etapa.
- Realizar la defensa de la práctica en clase, explicando los conceptos y conocimientos adquiridos.
- El enlace será entregado en Classroom.

---

## Criterios de evaluación

| Criterio                              | Puntos  |
| ------------------------------------- | ------- |
| Comprensión de conceptos              | 20      |
| Implementación en código              | 25      |
| Migración progresiva con ramas en Git | 20      |
| Interactividad y manejo de estado     | 15      |
| Buenas prácticas y herramientas       | 10      |
| Participación y documentación         | 10      |
| **Total**                             | **100** |

## 🔑 Notas adicionales

- Se valorará la claridad en la documentación y la organización del código.
- Se recomienda seguir buenas prácticas de desarrollo y control de versiones.
  - Utilizar ramas en Git para cada etapa del proyecto donde cada etapa es un capítulo de la que se proporciona
  - En cada rama debe hacer un readme.md explicando los conceptos aprendidos en esa etapa.
  - Se sugiere usar commits descriptivos en cada capítulo.
- La práctica debe ser realizada de manera individual.
- La práctica debe ser entregada en la fecha establecida, cualquier retraso afectará la calificación final.
- Se fomentará la participación activa durante la defensa en clase, donde se evaluará la capacidad de explicar los conceptos aprendidos.
- Se sugiere revisar recursos adicionales y tutoriales para profundizar en los temas tratados.

## Recursos recomendados

- [Documentación oficial de React](https://react.dev/)
- [Documentación oficial de Next.js](https://nextjs.org/docs)
- [Curso gratuito de React - freeCodeCamp](https://www.freecodecamp.org/news/learn-react-by-building-a-simple-app-e8b3b47edb39/)
- [Tutorial de React - W3Schools](https://www.w3schools.com/react/)
- [Documentación oficial de Next.js](https://nextjs.org/docs)

## Ejemplo de estructura de ramas en Git

```plaintext
main
├── chapter-1
│   └── README.md
├── chapter-2
│   └── README.md
└── chapter-3
    └── README.md
```

### Ejemplo de commits descriptivos

```plaintext
feat: add initial HTML structure
feat: implement basic JavaScript functionality
feat: migrate to React components
feat: add state management with useState
feat: integrate Next.js routing
```

!!! danger "⚡ Tome en cuenta"

    - Los commits deben ser claros y descriptivos.

    - los commits deben estar relacionados con los cambios realizados.

    - La documentación en cada capítulo debe ser detallada y explicar los conceptos aprendidos.

    - Debido a que las ramas son versiones independientes, entonces se sugiere que el readme.md de cada capítulo sea independiente y no dependa de otro capítulo, es decir puede reutilizar el `README.md` del capítulo anterior pero debe explicar los conceptos aprendidos en ese capítulo.

---

### Comando para la elaboracion de la práctica

- antes de iniciar la práctica debe configurar un repositorio local y remoto en GitHub
- Ejecutar los siguientes comandos en la terminal para configurar, conectar y subir el proyecto a GitHub:

```bash
mkdir practica-react                        # Crear el directorio del proyecto
cd practica-react                           # Navegar al directorio del proyecto
git init --initial-branch=main              # Inicializar un repositorio Git con la rama principal llamada 'main'
git remote add origin <url-del-repositorio> # Conectar con el repositorio remoto
git add .                                   # Agregar todos los archivos al área de preparación
git commit -m "Initial commit"              # Realizar el primer commit
git push -u origin main                     # Subir los cambios al repositorio remoto
```

- Crear una nueva rama para cada capítulo, inialmente de la rama `main`, por ejemplo para el capítulo 1:

```bash
git checkout -b chapter-1
```

- Al finalizar cada capítulo, hacer commit y push de los cambios, debe seguir el siguiente formato para el commit de manera obligatoria de lo contrario se le restara puntos:

```bash
git add .
git commit -m "Add chapter X content: <descripción breve>"
git push -u origin chapter-X
```

- Repetir el proceso para los capítulos 2, 3, hasta el capítulo n. pero en en cada capítulo debe partir desde la rama anterior, por ejemplo para el capítulo 2:

```bash
git branch
```

### ⚡ Tome en cuenta

- El comando `git branch` muestra todas las ramas locales en el repositorio actual.
- Ejemplo de salida:

```plaintext
* chapter-1
    main
```

- El asterisco (\*) indica la rama en la que te encuentras actualmente.
- En tu caso debes estar en la rama `chapter-1` para crear la rama `chapter-2` desde ahí y para el capítulo 3 debes estar en la rama `chapter-2` y así sucesivamente hasta el capítulo n.

## Recursos adicionales

En caso de dudas preguntar en el grupo de la materia
En caso de interés en profundizar, se recomienda participar en la comunidad de **Discord de Next.js**, donde se pueden plantear preguntas y compartir experiencias.

---
