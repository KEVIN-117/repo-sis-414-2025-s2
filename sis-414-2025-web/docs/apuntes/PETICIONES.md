# Peticiones HTTP

## ¿Qué es una petición HTTP?

- HTTP (Hypertext Transfer Protocol) es un protocolo de comunicación que se utiliza para transferir información en la web. Cuando un cliente (navegador) quiere acceder a una página web, envía una petición HTTP al servidor donde se aloja la página. El servidor recibe la petición y envía una respuesta HTTP al cliente con la información solicitada.
- Una peticion es aquella accion que realiza el cliente (navegador) para solicitar informacion al servidor web, siendo la informacion un archivo, una .html, una imagen, etc.

## ¿Qué es una petición AJAX?

- AJAX (Asynchronous JavaScript And XML) es una técnica de desarrollo web que permite a las páginas web actualizarse de forma asíncrona, es decir, sin necesidad de recargar la página. Esto se logra mediante peticiones HTTP asíncronas al servidor, que permiten enviar y recibir datos en segundo plano.
- Una peticion AJAX es aquella que se realiza mediante el objeto `XMLHttpRequest` o `fetch`, y que permite enviar y recibir datos en segundo plano, sin necesidad de recargar la pagina.
- La principal ventaja de las peticiones AJAX es que permiten actualizar partes específicas de la página sin recargarla por completo, lo que mejora la experiencia del usuario y reduce el consumo de ancho de banda.

## ¿Qué XML y JSON?

- XML (Extensible Markup Language) y JSON (JavaScript Object Notation) son dos formatos de intercambio de datos que se utilizan en las peticiones HTTP para enviar y recibir información entre el cliente y el servidor.
- XML es un lenguaje de marcado que permite definir etiquetas personalizadas para estructurar la información de forma jerárquica. JSON, por otro lado, es un formato de intercambio de datos basado en JavaScript que utiliza una sintaxis de pares clave-valor para representar la información, de esta forma JSON es mas ligero y facil de leer que XML.

## ¿Que es HTTP ?

- HTTP (Hypertext Transfer Protocol) es un protocolo de comunicación que se utiliza para transferir información en la web. Cuando un cliente (navegador) quiere acceder a una página web, envía una petición HTTP al servidor donde se aloja la página. El servidor recibe la petición y envía una respuesta HTTP al cliente con la información solicitada.
- HTTP tiene varios métodos de petición que se utilizan para indicar la acción que se desea realizar en el servidor. Algunos de los métodos más comunes son:
  - GET: Se utiliza para solicitar información del servidor.
  - POST: Se utiliza para enviar información al servidor.
  - PUT: Se utiliza para actualizar información en el servidor.
  - DELETE: Se utiliza para eliminar información del servidor.
  - OPTIONS: Se utiliza para obtener información sobre los métodos de petición permitidos en el servidor.
  - HEAD: Se utiliza para obtener información sobre el recurso solicitado sin recibir el cuerpo de la respuesta.
  - PATCH: Se utiliza para realizar modificaciones parciales en el servidor.

## ¿Meotdos de peticiones AJAX?

- Existen varios metodos para hacer peticiones `AJAX` siendo los 2 mas comunes `XMLHttpRequest` y `fetch`, estas son nativas del navegador y nos permiten enviar y recibir datos en segundo plano sin necesidad de recargar la pagina.
- Por otro lado tambein existen librerias de terceros que nos permiten hacer peticiones `AJAX` como `axios` o `superagent`.
- A continuacion se muestra un ejemplo de como hacer una peticion `AJAX` con `XMLHttpRequest`:


## XMLHttpRequest

- El objeto `XMLHttpRequest` es un objeto nativo de JavaScript que nos permite realizar peticiones HTTP asíncronas al servidor. Este objeto nos permite enviar y recibir datos en segundo plano sin necesidad de recargar la página. orignalmente fue creado para hacer peticiones a archivos XML, pero actualmente se utiliza para enviar y recibir datos en otros formatos como JSON.

```js
// Crear una instancia de XMLHttpRequest
const xhr = new XMLHttpRequest();

// Configurar la peticion
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

// Enviar la peticion
xhr.send();

// Escuchar el evento load
xhr.addEventListener('load', () => {
  if (xhr.status === 200) {
    console.log(xhr.responseText);
  } else {
    console.error('Error:', xhr.status);
  }
});
```

- En el ejemplo anterior, creamos una instancia de `XMLHttpRequest` y configuramos una petición GET al servidor `https://jsonplaceholder.typicode.com/posts`. Luego, enviamos la petición y escuchamos el evento `load` para obtener la respuesta del servidor. Si la petición es exitosa, imprimimos la respuesta en la consola; de lo contrario, mostramos un mensaje de error.

- El objeto `XMLHttpRequest` tiene varios métodos y propiedades que nos permiten configurar y gestionar las peticiones HTTP. Algunos de los métodos más comunes son:
  - `open()`: Configura la petición HTTP.
  - `send()`: Envía la petición al servidor.
  - `setRequestHeader()`: Establece una cabecera HTTP en la petición.
  - `abort()`: Cancela la petición.
  - `getAllResponseHeaders()`: Devuelve todas las cabeceras de la respuesta.
  - `getResponseHeader()`: Devuelve el valor de una cabecera específica de la respuesta.
- Algunas de las propiedades más comunes son:
  - `readyState`: Indica el estado de la petición.
  - `status`: Indica el código de estado de la respuesta.
  - `responseText`: Devuelve la respuesta como texto.
  - `responseXML`: Devuelve la respuesta como XML.
  - `onload`: Evento que se dispara cuando la petición se completa con éxito

## Fetch

- El método `fetch` es una API moderna de JavaScript que nos permite realizar peticiones HTTP de forma asíncrona al servidor. `fetch` es más fácil de usar y más potente que `XMLHttpRequest`, ya que utiliza promesas para manejar las respuestas del servidor.
- 

