# LABORATORIO 1 SIS-414

# 🎯 Objetivo

> comprender los conceptos básicos de la tecnologías básicas que componen el desarrollo web, algunos de los conceptos clave que se ira viendo en el laboratorio son manejo de html, css y manipulación del dom con JavaScript.
> 

---

# 🛠️ Tecnologías que se usan

- [ ]  HTML5
- [ ]  CSS3
- [ ]  JavaScript (Vanilla)

---

# Recomendaciones

Para poder llevar adelante el correcto desarrollo de su laboratorio es muy importante que leer las instrucciones y seguir los pasos que se enumeran a continuación.

En este laboratorio construiremos un sistema de gestión de tareas

El laboratorio se dividirá en 4 partes las cuales consta de lo siguiente:

- Parte 1: La parte uno es lo mas fácil es la configuración del proyecto como tal, esta se calificar sobre (10 puntos)
- Parte 2: La parte dos es poner en marcha todo el proyecto, es decir que todo este funcionando de manera correcta, esta tendrá una valides de (30 putos)
- Parte 3: La parte 3 es darle algo de funcionalidad a la pagina web que se le proporcionara, en esta sección deberá implementar la funcionalidad de crear tareas (40 puntos)
- Parte 4: En esta ultima parte del laboratorio se le presentara una serie de retos, los retos se enumeran en la sección correspondiente (20 puntos)

<aside>
💡

¡Confío en que harás un excelente trabajo! 💪✨

</aside>

# 📋 Pasos a Seguir

## Parte 1:

1. **Configuración del entorno**
    
    Para cumplir con la primera tarea deberá clonar el siguiente repositorio
    
    ```bash
    git clone https://github.com/KEVIN-117/template-lab1-emergentes.git laboratorio1Emergentes
    cd laboratorio1Emergentes
    ```
    
    <aside>
    ⚠️
    
    Dentro de esta carpeta encontraras una carpeta `.git` y `.github`, elimina la carpeta `.git`
    
    </aside>
    
    Abrir la carpeta en el editor de código
    
    Crear archivos: `index.html`, `styles.css`, `main.js`
    
2. Inicializa un repositorio local usa los siguientes comandos
    
    ```bash
    git init --initial-branch=main
    ```
    
    ahora ya podemos subir nuestro proyecto al GitHub, ejecuta los siguientes comandos
    
    ```bash
    git add remote origin <url>
    
    git add .
    
    git commit -m <un mensaje descriptivo ^_^>
    
    git push -u origin main
    ```
    
    Ahora verifica que tu proyecto este en tu repositorio remoto en GitHub
    
    Felicidades Acabas de completar la parte 1
    
    Esta parte trata de una configuración extra para tu repositorio, una vez que tengas todo de la parte uno debemos de configurar algo que se conoce como `Github Actions` , despegaremos tu pagina web para ello asegurate de que estas funciones estén activas en tu repo:
    
    1. Asegúrate de ir a la sección de configuraciones en tu repositorio
    2. Ahora que te encuentras hay veras una vista como este:
        
        ![image.png](attachment:63472be7-301c-457b-8220-0a6359850560:image.png)
        
    3. Ahora dirígete a la sección de `pages`,
        
        ![image.png](attachment:8392c89d-e5d7-4641-ba94-94fd1fbc0a40:image.png)
        
    4. Ahora en la sección de `Build and deployment` asegúrate de que este seleccionado la opción de `Github Actions`

## Parte 2:

1. **Estilos con CSS**
    
    Dentro del repositorio encontraras los archivos de estilos `css` , pero estas aun no se aplican a la pagina web
    
    enlace la hoja de estilos en cascada al documento HTML
    
2. **Interactividad con JavaScript**
    
    para poder utilizar y darle funcionalidad a la pagina web, usted solo trabajar en el archivo `main.js` pero para ello necesita conectarlo al archivo HTML, justo antes de la etiqueta de cierre de `body`
    
3. **Pruebas y ajustes**
    
    Prueba la aplicación en el navegador y esta deberá verse de la siguiente manera
    
    ![image.png](attachment:abb306ee-b117-4cb2-ba75-9a8d7a42f6e5:image.png)
    
    BUEN TRABAJO ACABAS DE COMPLETAR LA SEGUNDA PARTE, SIGAMOS CON LA SIGUIENTE PARTE
    
    ## Parte 3
    
    1. Recuperando los campos del formulario
        
        dentro del archivo `main` ya encontraras las funciones que debes completar para cumplir con las tareas de la parte 3 de nuestro laboratorio
        
        - El primer método que debe completar es `postData` , aquí debes de hacer la lógica necesarios para recuperar los campos de formulario
        - Crea un nueva instancia de la clase `Task`, esta clase ya se encuentra definido en el proyecto
    2. Simulando la persistencia de datos en memoria
        
        Para simular la persistencia de datos usaremos el almacenamiento local, es decir en memoria para ello ya se tienes declarada la función `saveTask` lo que te toca es simplemente implementar la lógica para que se guarde las tareas
        
    3. Cargar las tareas creadas a la pagina web
        
        Si bien en el paso anterior ya guardaste las tareas en memoria el siguiente código debería permitirte cargar todas tus tareas, el siguiente contenido ira dentro de la función `loadData`
        
        ```jsx
        if (tasks.length > 0) {
            // implementar el renderizado de las tareas
            taskConatiner.innerHTML = tasks
              .map((task) =>
                Task.buildTaskCard(task)
              )
              .join("");
          } else {
            taskConatiner.innerHTML = `<div class="text-center text-gray-400 text-2xl">No hay tareas</div>`;
          }
        ```
        
    
    BUEN TRABAJO ACABAS DE COMPLETAR LA TERCERA PARTE, SIGAMOS CON LA SIGUIENTE Y ULTIMA PARTE
    
    ## Parte 4:
    
    Ahora esta es la parte de retos, puedes completar cualquiera de estos retos para obtener los 20 puntos
    
    1. Implementar la barra de búsqueda
    2. Implementar la funcionalidad de borrar tareas
    3. Implementar la vista de tareas, lo que se muestra en la imagen
        
        ![image.png](attachment:d54157ce-d37a-4ec5-aee3-3bcff9e9b16d:image.png)
        
        Los datos de total, pendientes, en progreso, completadas deben ser dinámicos
        

---

## ¡Felicitaciones! 🎉 Has completado exitosamente el Laboratorio 1. Este es solo el comienzo de tu viaje en el desarrollo web. Recuerda que la práctica constante es la clave para mejorar tus habilidades. ¡Sigue así y prepárate para los próximos desafíos! 💪