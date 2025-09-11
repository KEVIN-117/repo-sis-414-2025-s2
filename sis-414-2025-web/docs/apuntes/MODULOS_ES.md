# Modulos en ES6

## Introducción

Los módulos en ES6 son una forma de organizar y reutilizar código en JavaScript. Los módulos permiten dividir el código en archivos separados y reutilizarlo en diferentes partes de una aplicación.

![Modulos en ES6](https://lenguajejs.com/javascript/modulos/que-es-esm/function-classes-files.png)

Antes de que los modulos fueran parte de js, esto de poder organizar codigo en archivos separados era un poco complicado, ya que la unica forma de lograrlo era haciendo uso de varias importaciones de scripts en el html, lo que podia llegar a ser un poco tedioso y dificil de mantener, e incluso volver lenta la carga de la pagina.

Con el tiempo se desarrolaron sistemas de modulos como CommonJS y AMD, pero no fue hasta la llegada de ES6 que se introdujeron los modulos de forma nativa en el lenguaje.


## COMMONJS (CJS) vs ESM MODULES (ESM)

### COMMONJS (CJS)

Serca del 2009 se creo CommonJS, una serie de pautas no oficales para la creacion de moculos en javascript. CommonJS es una forma de organizar y reutilizar código en JavaScript. Los módulos de CommonJS se utilizan en Node.js y en otros entornos de JavaScript.

Un ejemplo de un módulo CommonJS es el siguiente:

```js

// funcion suma
function sumar(a, b) {
  return a + b;
}
// modulo.js
module.exports = {
  sumar
};

// app.js

const modulo = require('./modulo');
console.log(modulo.sumar(2, 3)); // 5
```

- Explicacion del codigo:
  - En el archivo `modulo.js` se define una función `sumar` y se exporta utilizando `module.exports`.
  - En el archivo `app.js` se importa el módulo `modulo` utilizando `require` y se llama a la función `sumar`.
  - La función `sumar` se llama con los argumentos `2` y `3` y se imprime el resultado `5`.
  - En CommonJS, los módulos se cargan de forma síncrona, lo que significa que el código se ejecuta en el orden en que se importa.

### ES MODULES (ESM)

En 2015 se hace oficial la llegada de los modulos o como se le conoce ECMA Script Modules (ESM) antes conocido como ES6 con ella llegan un conjunto de nuevas caracteristicas al lenguaje, entre ellas los modulos.

Un ejemplo de un módulo ESM es el siguiente:

```js

// modulo.js

// funcion suma

export function sumar(a, b) {
  return a + b;
}

// app.js

import { sumar } from './modulo.js';

console.log(sumar(2, 3)); // 5
```

- Explicacion del codigo:
    - En el archivo `modulo.js` se define una función `sumar` y se exporta utilizando `export`.
    - En el archivo `app.js` se importa la función `sumar` utilizando `import` y se llama a la función `sumar`.
    - La función `sumar` se llama con los argumentos `2` y `3` y se imprime el resultado `5`.
    - En ESM, los módulos se cargan de forma asíncrona, lo que significa que el código se ejecuta en el orden en que se importa.

Al ser una caracteristica nueva en el lenguaje, los modulos ESM no son soportados en todos los navegadores, por lo que es necesario hacer uso de un transpilador como Babel para poder convertir el codigo a una version que sea soportada por los navegadores.

### Veamos una comprativa de su uso y sintaxis:


cons respecto a su sintaxis ambos tienen cierta difere4cnia como ya lo vimos en ejemplos anteriores.

![Comparativa](https://lenguajejs.com/automatizadores/introduccion/commonjs-vs-es-modules/commonjs-vs-esm.png)

| CommonJS (CJS)                                                                                                     | ES Modules (ESM)                                                                                     |
|--------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|
| `module.exports` es la forma de exportar un módulo.                                                                | `export` es la forma de exportar un módulo.                                                          |
| `require` es la forma de importar un módulo.                                                                       | `import` es la forma de importar un módulo.                                                          |
| Los módulos se cargan de forma síncrona.                                                                           | Los módulos se cargan tamto de forma síncrona como asíncrona.                                        |
| Es compatible con Node.js y con los siguientes navegadores: Chrome 58, Firefox 60, Safari 10.1, Edge 16, Opera 48. | Es compatible con los siguientes navegadores: Chrome 61, Firefox 60, Safari 10.1, Edge 16, Opera 48. |


## Importar y Exportar Modulos

Ahora que tienes conocimiento de lo que son een este caso los modulos ESM y CJS, veamos mas a detalle cual es la novedad que trae consigo los modulos ESM.

Como ya lo habiamos mecionado con la legada de los modulos ESM se introdujeron dos nuevas palabras claves `import` y `export` que nos permiten importar y exportar modulos respectivamente.

| Palabra clave | Descripción                                                                                                                                                       |
|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `import`      | Se utiliza para importar un módulo. Nos permite leer a aquellos modulos que se esportan desde otros archivo `.js` y utilizar los elementos que trae               |
| `export`      | Se utiliza para exportar un módulo. Es decir nos permite crear un `modulos de exportacion` que contienen datos siendo estas como `funciones`, `variables`, y mas  |
| `import()`    | Permite importar módulos de forma más flexible, en tiempo real (imports dinámicos).                                                                               |


- Veamos un ejemplo de como importar y exportar modulos en ESM:

```js

// Client.js

export class Client {
  constructor(name) {
    this.name = name;
  }
  
   greet() {
       console.log(`Hello, ${this.name}!`);
   }
   
   get name() {
       return this.name;
   }
}

// app.js

import { Client } from './Client.js';

const client = new Client('John Doe');

client.greet(); // Hello, John Doe!
```

- Explicacion del codigo:
    - En el archivo `Client.js` se define una clase `Client` y se exporta utilizando `export`.
    - En el archivo `app.js` se importa la clase `Client` utilizando `import` y se crea una instancia de la clase `Client`.
    - Se llama al método `greet` de la instancia de la clase `Client` y se imprime el mensaje `Hello, John Doe!`.

- Veamos un ejemplo de como hacer multiples exportaciones en ESM:

```js

// math.js

export function sum(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

// app.js

import { sum, subtract } from './math.js';

console.log(sum(2, 3)); // 5
console.log(subtract(5, 2)); // 3
```


## Hablemos mas acerca de exportaciones de modulos

### Declaracion y exportacion de modulos

Existen varias formar de exportar modulos en ESM, y quisa una de las mas comunes es la añadir la palabra clave `export` antes de la declaracion de una variable, funcion, clase, etc.

- Veamos un ejemplo de como exportar una variable en ESM:

```js
export const PI = 3.14159265359;
```

### Exportacion Post-Declaracion

Esta forma de exportar queisas te paresca un poco familiar si has trabajado con modulos CJS, ya que es similar a la forma en que se exportan modulos en CJS pero con una pequeña diferencia.

- Veamos un ejemplo de como exportar una variable post-declaracion en ESM:

```js

const PI = 3.14159265359;

const E = 2.71828182846;

export { PI, E }; // se crea un modulo con las variables a exportar
// o otra forma de exportar seria
export { PI as PI, E as E }; // se crea un modulo con las variables a exportar, con as se le asigna un alias a la variable exportada.
// o otra forma de exportar seria
export { PI}
export { E }
```


### Exportacion por defecto

Ya te habras dado cuenta de que al momento de exportar modulos en realidad estamos creando un objeto, donde las propiedades son las variables, funciones, clases, etc que estamos exportando, pero que pasa si queremos exportar un solo elemento, en este caso podemos hacer uso de la palabra clave `default`. Esto lo logramos añadiendo la palabra clave `default` antes de la declaracion de la variable, funcion, clase, etc. Pero depues de la palabra clave `export`.

Pero porque usar `default`? Bueno, la razon es que al hacer uso de `default` podemos importar el modulo sin necesidad de usar `{}`.

- Veamos un ejemplo de como exportar un modulo por defecto en ESM:

```js

// Person.js

export default class Person {
  constructor(name) {
    this.name = name;
  }
  
  greet() {
    console.log(`Hello, ${this.name}!`);
  }
}

// app.js

import Person from './Person.js';
// pero en el caso de haber exportado el modulo sin default seria
// import { Person } from './Person.js';
const person = new Person('John Doe');

person.greet(); // Hello, John Doe!
```


## Importar Modulos

Ya hemos visto como exportar modulos, ahora veamos como importar modulos en ESM.

### Importar todo un modulo

Para importar todo un modulo en ESM, simplemente debemos añadir la palabra clave `*` antes de la variable que contendra el modulo a importar.

- Veamos un ejemplo de como importar todo un modulo en ESM:

```js

// math.js

export function sum(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

// app.js

import * as math from './math.js'; // se importa todo el modulo math.js y con `as` se le asigna un alias al modulo importado en este caso `math`

console.log(math.sum(2, 3)); // 5
console.log(math.subtract(5, 2)); // 3
```

### Importar solo lo necesario o importar con nombre

En ESM podemos importar solo lo necesario de un modulo, para ello debemos añadir `{}` y dentro de estas las variables, funciones, clases, etc que queremos importar.

- Veamos un ejemplo de como importar solo lo necesario de un modulo en ESM:

```js

// math.js

export const PI = 3.14159265359;

export const E = 2.71828182846;

// app.js

import { PI } from './math.js'; // se importa solo la variable PI del modulo math.js

console.log(PI); // 3.14159265359
```

### Importar con alias

En ESM podemos importar modulos con alias, para ello debemos añadir `as` despues de la variable que contendra el modulo a importar y despues del nombre del modulo importado.

- Veamos un ejemplo de como importar modulos con alias en ESM:

```js

// math.js

export const PI = 3.14159265359;

export const E = 2.71828182846;

// app.js

import { PI as PIValue, E as EValue } from './math.js'; // se importa solo la variable PI y E del modulo math.js y se le asigna un alias a cada una de las variables importadas

console.log(PIValue); // 3.14159265359
console.log(EValue); // 2.71828182846
```


# Referencias

si quieres saber mas acerca de los modulos en ES6, te recomiendo que visites los siguientes enlaces:

- [Lenguaje JS - Modulos en ES6](https://lenguajejs.com/javascript/modulos/que-es-esm/)
- [MDN Web Docs - ECMAScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

