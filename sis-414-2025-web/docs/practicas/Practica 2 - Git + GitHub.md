---

# 📑 Tarea de Investigación: Git y GitHub (Nivel Intermedio)

**Objetivo:**  
Profundizar en el uso de Git y GitHub comprendiendo conceptos como ramas, fusiones y colaboración básica, aplicando buenas prácticas de control de versiones.

**Duración estimada:** 1 semana

!!! warning "⚠️ Requerimientos Previos para la practica"
    - Debe tener instalado la CLI de [git](https://git-scm.com/downloads)
    - Debe tener una cuenta creada en [GitHub](https://github.com/)


---

## 📦 Entregable

- Documento en MD (`investigacion.md`).
- Enlace al repositorio de GitHub.
- EL enlace sera entregado en Clasroom

---

!!! danger "⚡ Tome en cuenta" - Se tomara mucho en cuenta respuestas claras. - Las preguntas deben ser respondidas puntualmente.

!!! tip "💁‍♂️ Para realizar la parctica puede usar los siguientes recursos" - [Documentacion oficial de Git](https://git-scm.com/doc) - [Git guia](https://kevin-117.github.io/repo-sis-414-2025-s2/apuntes/GitGitHub/) - [Git Tutorial](https://www.w3schools.com/git/default.asp) - [Git Guide GitHub](https://github.com/git-guides) - [GIT CHEAT SHEET](https://education.github.com/git-cheat-sheet-education.pdf) - [Guia para Crear un Pull Request (PR)](https://kevin-117.github.io/repo-sis-414-2025-s2/guides/PullRequest/)

---

## 📊 Criterios de Evaluación

| Criterio                                      | Puntos  |
| --------------------------------------------- | ------- |
| Respuestas claras y completas (investigación) | 40      |
| Creación y uso correcto de ramas              | 15      |
| Fusión de ramas (merge)                       | 10      |
| Pull request funcional                        | 20      |
| README.md y .gitignore bien aplicados         | 15      |
| Organización y entrega puntual                | 10      |
| **Total**                                     | **100** |

---

## 📝 Parte I – Investigación (40%)

1. ¿Qué es una **rama (branch)** en Git y para qué se utiliza?

- Una **rama (branch)** en Git es una línea independiente de desarrollo dentro de un repositorio. Permite a los desarrolladores trabajar en diferentes características, correcciones de errores o experimentos sin afectar la rama principal (generalmente llamada `main` o `master`). Las ramas facilitan la colaboración y el manejo de múltiples versiones del código simultáneamente, permitiendo que los cambios se integren (fusionen) cuando estén listos y probados.

2. Explica con tus palabras qué significa hacer un **merge**.

- Hacer un **merge** en Git significa combinar los cambios realizados en una rama con otra. Por lo general, se utiliza para integrar las modificaciones de una rama de desarrollo (por ejemplo, una nueva característica) en la rama principal del proyecto. Durante el proceso de fusión, Git intenta automáticamente combinar los cambios, pero si hay modificaciones conflictivas en los mismos archivos, puede generar un conflicto que debe resolverse manualmente antes de completar la fusión.

3. ¿Qué es un **conflicto de fusión (merge conflict)** y cómo se puede resolver?

- Un **conflicto de fusión (merge conflict)** ocurre cuando Git no puede combinar automáticamente los cambios de dos ramas debido a modificaciones contradictorias en los mismos archivos o líneas de código. Esto suele suceder cuando dos desarrolladores editan la misma parte del código en diferentes ramas.

  Para resolver un conflicto de fusión, se deben seguir estos pasos:

  1. Identificar los archivos en conflicto, que Git marcará durante el intento de fusión.
  2. Abrir los archivos afectados y buscar las secciones marcadas por Git, que indican las diferencias entre las ramas.
  3. Editar manualmente el archivo para decidir qué cambios conservar, eliminando las marcas de conflicto.
  4. Una vez resueltos todos los conflictos, guardar los archivos y hacer un commit para completar la fusión.

4. Diferencia entre **fork** y **clone** en GitHub.

- Un **fork** es una copia completa de un repositorio existente en GitHub que se crea bajo la cuenta de un usuario diferente. Permite a los usuarios experimentar con cambios sin afectar el proyecto original, facilitando la colaboración en proyectos de código abierto.
- Un **clone**, por otro lado, es una copia local de un repositorio (ya sea el original o un fork) que se descarga en la computadora del usuario. Clonar un repositorio permite trabajar en él de manera local, realizar cambios y luego sincronizarlos con el repositorio remoto en GitHub.

5. ¿Qué es un **pull request** y para qué se usa en proyectos colaborativos?

- Un **pull request** es una solicitud que un desarrollador hace para que sus cambios en una rama (generalmente en un fork o una rama de características) sean revisados e integrados en otra rama, típicamente la rama principal del proyecto. Se utiliza en proyectos colaborativos para facilitar la revisión de código, discusión y aprobación de cambios antes de que se fusionen en el repositorio principal. Los pull requests permiten a los mantenedores del proyecto evaluar las contribuciones, realizar comentarios y sugerir mejoras antes de aceptar los cambios.

6. Investiga y explica **3 buenas prácticas** para colaborar en equipo usando GitHub.

- **Usar ramas para cada característica o corrección:** Cada nueva característica o corrección de errores debe desarrollarse en una rama separada. Esto permite a los desarrolladores trabajar de manera independiente sin afectar la rama principal, facilitando la revisión y fusión de cambios.
- **Escribir mensajes de commit claros y descriptivos:** Los mensajes de commit deben ser concisos pero informativos, describiendo claramente qué cambios se realizaron y por qué. Esto facilita la comprensión del historial del proyecto y ayuda a otros colaboradores a seguir el progreso del desarrollo.
- **Realizar revisiones de código mediante pull requests:** Antes de fusionar cambios en la rama principal, es importante crear pull requests para que otros miembros del equipo puedan revisar el código. Esto ayuda a identificar errores, mejorar la calidad del código y fomentar la colaboración y el aprendizaje entre los desarrolladores.

---

## 🛠️ Parte II – Práctica (60%)

### **Ejercicio 1 – Ramas y fusión (25 pts)**

1. Crea un repositorio en GitHub con el nombre `git-intermedio`.
2. En tu computadora, clónalo y agrega un archivo `main.txt` con un mensaje inicial.
3. Haz un commit y súbelo a GitHub.
4. Crea una rama llamada `nueva-funcionalidad`.
5. En esa rama, agrega un archivo `extra.txt` con algún contenido.
6. Fusiona (merge) la rama `nueva-funcionalidad` en `main`.

---

### **Ejercicio 2 – Pull request (20 pts)**

1. Haz un fork de un repositorio público sencillo en GitHub (puede ser un compañero o uno que tú crees).
2. Realiza un cambio pequeño (ejemplo: agregar tu nombre en un archivo `colaboradores.txt`).
3. Crea un **pull request** para proponer tu cambio en el repositorio original.

---

### **Ejercicio 3 – Buenas prácticas (15 pts)**

1. En tu repositorio `git-intermedio`, crea un archivo `README.md` que contenga:

   - Título del proyecto.
   - Breve descripción.
   - Tu nombre y fecha.

2. Crea un archivo `.gitignore` que ignore al menos un archivo de prueba (ejemplo: `notas.txt`).
