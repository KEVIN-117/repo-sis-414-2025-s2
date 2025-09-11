## Parte 1: JavaScript

### 1. Variables y Tipos de Datos
**Pregunta 1:**  
Declara una variable `nombre` con tu nombre y otra `edad` con tu edad. Luego, muestra en consola:  
`"Hola, mi nombre es [nombre] y tengo [edad] años."`  

**Solución:**  
```javascript
let name = "Your name";
let age = 50;

console.log(`"Hola, mi nombre es ${name} y tengo ${age} años."`)
```

---

### 2. Operadores
**Pregunta 2:**  
Calcula el área de un rectángulo (base = 5, altura = 3) y muestra el resultado.  

**Solución:**  
```javascript
let base = 5;
let altura = 3;
let area = base * altura;
console.log(`El área del rectángulo es: ${area}`);

```

---

### 3. Condicionales
**Pregunta 3:**  
Crea una condición que verifique si un número es par o impar.  
```javascript
let numero = 4;
// Completa el código...
```

**Solución:**  
```javascript
// pasado el tiempo de entrega se pubicara la solucion de la practica aqui
if (numero % 2 === 0) {
    console.log(`${numero} es par`);
} else {
    console.log(`${numero} es impar`);
}
```
---

### 4. Bucles
**Pregunta 4:**  
Usa un bucle `for` para imprimir los números del 1 al 5.  

**Solución:**  

```javascript

for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

---

### 5. Funciones
**Pregunta 5:**  
Crea una función `sumar` que reciba dos números y devuelva su suma.  

**Solución:**  
```javascript
// pasado el tiempo de entrega se pubicara la solucion de la practica aqui
function sumar(a, b) {
    return a + b;
}
console.log(sumar(3, 4)); // 7
```

---

### 6. Arrays
**Pregunta 6:**  
Dado el array `let frutas = ["manzana", "banana", "pera"];`, agrega "uva" al final y muestra el array.  

**Solución:**  
```javascript
// pasado el tiempo de entrega se pubicara la solucion de la practica aqui
let frutas = ["manzana", "banana", "pera"];
frutas.push("uva");

```

---

### 7. Objetos
**Pregunta 7:**  
Crea un objeto `usuario` con las propiedades `nombre` (string) y `edad` (number), posteriormente muestra la llave y el valor de ese objeto con el bucle correcto, usar el bucle incorrecto anulara la pregunta

**Solución:**  
```javascript
// pasado el tiempo de entrega se pubicara la solucion de la practica aqui
let usuario = {
    nombre: "Juan",
    edad: 30
};
for (let key in usuario) {
    console.log(`${key}: ${usuario[key]}`);
}
```

---

### 8. Métodos de Arrays
**Pregunta 8:**  
Dado `let numeros = [1, 2, 3, 4];`, usa un método para obtener un nuevo array con cada número multiplicado por 2.  

Pista: para hacer esta pregunta te recomiendo que investigues sobre lo métodos de los arrays, algunos de sus métodos seria `map`, `filter`, `find`. Averigua cual seria la función correcta de `Arrays` para poder completar este ejercicio

**Solución:**  
```javascript
// pasado el tiempo de entrega se pubicara la solucion de la practica aqui
let numeros = [1, 2, 3, 4];
let numerosMultiplicados = numeros.map(function(numero) {
    return numero * 2;
});
console.log(numerosMultiplicados); // [2, 4, 6, 8]
```

---

### 9. Funciones Flecha
**Pregunta 9:**  
Convierte esta función a una función flecha:  
```javascript
function restar(a, b) {
  return a - b;
}
```

**Solución:**  
```javascript
// pasado el tiempo de entrega se pubicara la solucion de la practica aqui
const restar = (a, b) => a - b;
console.log(restar(5, 3)); // 2
```

---

### 10. Ejercicio Integrador
**Pregunta 10:**  
Crea una función `filtrarPares` que reciba un array de números y devuelva solo los pares.

Pista: puedes lograrlo con una sola `linea` de Código

Ejemplo:  
```javascript
filtrarPares([1, 2, 3, 4]); // [2, 4]
```

**Solución:**  
```javascript
// pasado el tiempo de entrega se pubicara la solucion de la practica aqui
const filtrarPares = (numeros) => numeros.filter(numero => numero % 2 === 0);
console.log(filtrarPares([1, 2, 3, 4])); // [2, 4]
```

---

## Parte 2: Git (5 preguntas)

### 1. Inicializar un repositorio
**Pregunta 1:**  
¿Qué comando se usa para iniciar un nuevo repositorio de Git en un proyecto local?  

**Respuesta:**  
```bash
// pasado el tiempo de entrega se pubicara la solucion de la practica aqui
git init
```

---

### 2. Clonar un repositorio
**Pregunta 2:**  
¿Cómo clonarías un repositorio remoto desde GitHub si tuvieras la siguiente URL? (Ejemplo: `https://github.com/user/repo.git`).  

**Respuesta:**  
```bash
// pasado el tiempo de entrega se pubicara la solucion de la practica aqui
git clone <url_del_repositorio>
```

---

### 3. Hacer commit
**Pregunta 3:**  
Explica los pasos para hacer un commit de los cambios en un archivo `index.js`.  

**Respuesta:**  
```bash
// pasado el tiempo de entrega se pubicara la solucion de la practica aqui

git add index.js
git commit -m "Descripción del commit"
git push origin main
```

---

### 4. Ramas (branches)
**Pregunta 4:**  
¿Qué comando se usa para inicializar un repositorio local con una rama llamada `feature-login` ?  
**Respuesta:**  
```bash
// pasado el tiempo de entrega se pubicara la solucion de la practica aqui
git init --initial-branch=feature-login
```

---

### 5. Subir cambios a GitHub
**Pregunta 5:**  
¿Qué comando envía los commits locales a la rama `main` del repositorio remoto?  

**Respuesta:**  
```bash
// pasado el tiempo de entrega se pubicara la solucion de la practica aqui
git push origin main
```
