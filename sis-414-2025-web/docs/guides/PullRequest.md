
---

# 📘 Guía: Crear un Pull Request en tu propio repositorio

**Objetivo:** Crear un repositorio en GitHub, hacer un cambio en una rama y abrir un Pull Request dentro de tu propio repo (de una rama hacia `main`).

**Requisitos previos:** cuenta en GitHub, Git instalado (o GitHub Desktop), conocimientos básicos de terminal.

---

## 0) Crear el repositorio en GitHub

1. Entra a [GitHub](https://github.com).
2. Haz clic en **New repository**.
3. Ponle un nombre, por ejemplo: `repo-practica`.
4. Marca la opción **Add a README file** (opcional).
5. Haz clic en **Create repository**.

Ahora tienes `github.com/tu-usuario/repo-practica`.

---

## 1) Clonar el repositorio a tu computadora

En tu terminal:

```bash
# clona tu repositorio
git clone https://github.com/tu-usuario/repo-practica.git
cd repo-practica

# verifica los remotos
git remote -v
# origin -> tu repositorio en GitHub
```

---

## 2) Crear una nueva rama para tu cambio

Nunca trabajes directo en `main`. Crea una rama con un nombre claro:

```bash
git checkout -b feat/agregar-mi-nombre
```

Ejemplos de prefijos:

* `feat/` para nueva funcionalidad.
* `fix/` para corrección de errores.
* `docs/` para cambios en documentación.

---

## 3) Realizar un cambio sencillo

* Abre `README.md` o crea un archivo nuevo, por ejemplo `colaboradores.txt`.
* Agrega tu nombre y guarda el archivo.

Ejemplo de contenido en `colaboradores.txt`:

```
Juan Pérez - Ingeniería de Software
```

---

## 4) Agregar y hacer commit de los cambios

```bash
git add colaboradores.txt
git commit -m "docs: agregar nombre de Juan Pérez a colaboradores.txt"
```

Consejo: el mensaje debe empezar con tipo (`feat`, `fix`, `docs`) y una descripción breve.

---

## 5) Subir tu rama a GitHub

```bash
git push -u origin feat/agregar-mi-nombre
```

---

## 6) Crear el Pull Request (PR) en GitHub

1. Ve a tu repositorio en GitHub (`github.com/tu-usuario/repo-practica`).
2. Verás el botón **Compare & pull request** → haz clic.

   * *Si no aparece:* ve a la pestaña **Pull requests** → **New pull request**.
   * Elige como **base branch**: `main`.
   * Elige como **compare branch**: `feat/agregar-mi-nombre`.
3. Completa el título y descripción.

Ejemplo:

**Título:**

```
docs: agregar nombre de Juan Pérez a colaboradores.txt
```

**Descripción:**

```
Agrego mi nombre al archivo colaboradores.txt

- Archivo modificado: colaboradores.txt
- Cambio: añadí "Juan Pérez - Ingeniería de Software"
- ¿Cómo probar?: revisar el archivo en la pestaña "Files changed"
```

4. Haz clic en **Create pull request**. 🎉

---

## 7) Si aparece un conflicto

Si GitHub muestra “This branch has conflicts”, significa que tu rama está desactualizada respecto a `main`.

Pasos:

```bash
# estando en tu repo local
git checkout main
git pull origin main

# regresar a tu rama
git checkout feat/agregar-mi-nombre
git merge main
```

* Si hay conflictos, Git los marcará en los archivos.
* Resuélvelos en tu editor, guarda y luego:

```bash
git add <archivo-resuelto>
git commit -m "chore: resolver conflictos con main"
git push origin feat/agregar-mi-nombre
```

El PR se actualizará automáticamente.

---

## 8) Checklist de entrega

* Enlace a tu **Pull Request** en GitHub.
* (Opcional) captura de pantalla mostrando el archivo modificado.
* Verifica que tu PR tenga:

  * título claro,
  * descripción breve,
  * al menos un commit.

---

## 9) Errores comunes y soluciones

* **Olvidé crear una rama y trabajé en `main`:**

  ```bash
  git checkout -b feat/mi-cambio
  git push -u origin feat/mi-cambio
  ```

  Luego abre el PR con esa rama.

* **Mi push no aparece en el PR:**
  Asegúrate de haber hecho `push` a la **misma rama** que usaste en el PR.

---

## Rubrica sugerida (20 pts)

* Repo creado y clonado — **3 pts**
* Rama creada con nombre apropiado — **3 pts**
* Commit(s) con mensaje claro — **4 pts**
* Rama subida y PR creado — **6 pts**
* Enlace al PR entregado y PR con descripción adecuada — **2 pts**
* Manejo básico de conflictos (si aplica) — **2 pts**
