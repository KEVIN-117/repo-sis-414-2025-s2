# JAVASCRIPT

## ¿Qué es JavaScript?
JavaScript es un lenguaje de programacion que se ejecuta en el navegador. Contituye un a de las tecnologias centyrales de la web junto con html y css.
Nos permite agregar intercatividad a nuestras paginas web, como ser controles, botones, ventanas emergentes, etc. Ademas de usarse en el navegador tambien se usa en otros entornos 
como ser:
- **_Node.js_**: para crear aplicaciones de servidor
- **_Electron_**: para crear aplicaciones de escritorio
- **_React Native_**: para crear aplicaciones moviles

## ¿Como Ejecutar JavaScript?
Hay varias formas de ejecutar JavaScript:
- **_En el navegador_**: se puede ejecutar directamente en el navegador, para esto se debe abrir la consola del navegador y escribir el codigo.
- **_En un archivo HTML_**: se puede escribir el codigo en un archivo HTML dentro de la etiqueta `<script>`.  y abrirlo en el navegador.
- **_En un archivo JS_**: se puede escribir el codigo en un archivo con extension `.js` y luego importarlo en un archivo HTML.
- **_En Node.js_**: se puede ejecutar en la terminal de Node.js.

## Variables
Una aplicacion necesita trabajar con datos. Para almacenar estos datos en el codigo base de una aplicacion, se utilizan variables. Las variables son contenedores para almacenar datos (como texto, numeros, objetos, etc).
En js se pueden declarar variables con la palabra clave `var`, `let` o `const`.
- **_var_**: declara una variable con ambito de funcion o de ambito global. la sintaxis es:
```javascript
var nombre = "Juan";
```
- **_let_**: declara una variable con ambito de bloque. la sintaxis es:
```javascript
let nombre = "Juan";
```
- **_const_**: declara una constante con ambito de bloque, el valor que almacena esta variable no puiede ser modificado. En caso de que su valor sea un objeto, vector o una matriz sus propiedades y elementos pueden eliminarse o actualizarse. la sintaxis es:
```javascript
const nombre = "Juan";
```

## Alcanze de las Variables
El alcanse de la variables se refiere a la visibilidad de las variables en el codigo. En js hay tres tipos de alcanze:
- **_Global_**: las variables declaradas fuera de una funcion o fuera de las llaves `{}` tienen alcance global. Estas variables se pueden acceder desde cualquier lugar del codigo.
- **_Local o de funcion_**: las variables declaradas dentro de una funcion tienen alcance local. Estas variables solo se pueden acceder dentro de la funcion.
- **_Bloque_**: Un bloque es cualquier parte el codigo delimuitado por llaves `{}`. Este alacanse solo lo proporcionan las palabras clave `let` y `const`.


## Tipos de Datos
En js hay varios tipos de datos:
- **_String_**: cadena de texto. Ejemplo: "Hola Mundo"
- **_Number_**: numeros. Ejemplo: 3.14
- **_Boolean_**: valores logicos. Ejemplo: true, false
- **_Object_**: objetos. Ejemplo: {nombre: "Juan", edad: 30}
- **_Array_**: matrices. Ejemplo: [1, 2, 3, 4, 5]
- **_Undefined_**: valor indefinido. Ejemplo: var x;
- **_Null_**: valor nulo. Ejemplo: var x = null;

## Operadores
Los operadores son simbolos que se utilizan para realizar operaciones matematicas o logicas. En js hay varios tipos de operadores:
- **_Aritmeticos_**: se utilizan para realizar operaciones matematicas. Ejemplo: `+`, `-`, `*`, `/`, `%`, `++`, `--`
- **_Asignacion_**: se utilizan para asignar valores a las variables. Ejemplo: `=`, `+=`, `-=`, `*=`, `/=`, `%=`
- **_Comparacion_**: se utilizan para comparar dos valores. Ejemplo: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`
- **_Logicos_**: se utilizan para realizar operaciones logicas. Ejemplo: `&&`, `||`, `!`

## Condicionales
Las estructuras condicionales se utilizan para tomar decisiones en el codigo. En js hay varias estructuras condicionales:
- **_if_**: se utiliza para ejecutar un bloque de codigo si una condicion es verdadera. la sintaxis es:
```javascript
if (condicion) {
    // bloque de codigo
}
```
- **_else_**: se utiliza para ejecutar un bloque de codigo si la condicion es falsa. la sintaxis es:
```javascript
if (condicion) {
    // bloque de codigo
} else {
    // bloque de codigo
}
```
- **_else if_**: se utiliza para especificar una nueva condicion si la primera condicion es falsa. la sintaxis es:
```javascript
if (condicion) {
    // bloque de codigo
} else if (condicion) {
    // bloque de codigo
} else {
    // bloque de codigo
}
```
- **_switch_**: se utiliza para seleccionar uno de los muchos bloques de codigo para ser ejecutado. la sintaxis es:
```javascript
switch (expresion) {
    case valor1:
        // bloque de codigo
        break;
    case valor2:
        // bloque de codigo
        break;
    default:
        // bloque de codigo
}
```

## Bucles
Los bucles se utilizan para repetir una parte del codigo varias veces. En js hay varios tipos de bucles:
- **_for_**: se utiliza para repetir una parte del codigo varias veces. la sintaxis es:
```javascript
for (inicializacion; condicion; incremento) {
    // bloque de codigo
}
```
- **_while_**: se utiliza para repetir una parte del codigo mientras una condicion sea verdadera. la sintaxis es:
```javascript
while (condicion) {
    // bloque de codigo
}
```
- **_do while_**: se utiliza para repetir una parte del codigo mientras una condicion sea verdadera. la sintaxis es:
```javascript
do {
    // bloque de codigo
} while (condicion);
```
- **_for in_**: se utiliza para iterar sobre las propiedades de un objeto. la sintaxis es:
```javascript
for (variable in objeto) {
    // bloque de codigo
}
```
- **_for of_**: se utiliza para iterar sobre los valores de un objeto iterable. la sintaxis es:
```javascript
for (variable of objeto) {
    // bloque de codigo
}
```

## Funciones
Las funciones son bloques de codigo reutilizables que se pueden definir una vez y ejecutar en cualquier momento. En js hay varias formas de definir funciones:
- **_Declaracion de funcion_**: la sintaxis es:
```javascript
function nombreFuncion(parametro1, parametro2, ...) {
    // bloque de codigo
}
```

- **_Expresion de funcion_**: la sintaxis es:
```javascript
var nombreFuncion = function(parametro1, parametro2, ...) {
    // bloque de codigo
}
```

- **_Funcion flecha_**: la sintaxis es:
```javascript
var nombreFuncion = (parametro1, parametro2, ...) => {
    // bloque de codigo
}
```

- IIFE (Immediately Invoked Function Expression): la sintaxis es:
```javascript
(function() {
    // bloque de codigo
})();
```

## Objetos
Los objetos son contenedores para valores en forma de pares clave-valor. En js los objetos se definen con llaves `{}`. la sintaxis es:
```javascript
var persona = {
    nombre: "Juan",
    edad: 30,
    casado: false,
    hijos: ["Ana", "Luis"]
};
```

## Arreglos
Los arreglos son objetos de tipo lista de alto nivel. En js los arreglos se definen con corchetes `[]`. la sintaxis es:
```javascript
var frutas = ["Manzana", "Banana", "Pera"];
```

