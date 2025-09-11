# React

React es una de las bibliotecas de JavaScript mas populares a dia de hoy, orientado a la creacion de interfaces graficas de usuario. React fue desarrollado por Facebook y lanzado en 2013. 

## Generadores de aplicaciones o herramientas CLI para React

- [Create React App](https://create-react-app.dev/): Es una herramienta CLI que permite crear aplicaciones de React con un solo comando.
- [Next.js](https://nextjs.org/): Es un framework de React que permite renderizar aplicaciones de React en el servidor.
- [Vite](https://vitejs.dev/): Es un generador de aplicaciones de React que permite crear aplicaciones de React con un solo comando.

## JSX

JSX es una extensión de JavaScript que permite escribir HTML en JavaScript. JSX produce elementos de React. JSX hace que sea más fácil escribir y leer código de React.


## Componentes

Los componentes son bloques de construcción de una aplicación de React. Un componente es una pieza reutilizable de código que se puede utilizar para construir elementos de interfaz de usuario. Los componentes pueden ser de dos tipos: funcionales y de clase.

### Componentes Funcionales

Los componentes funcionales son funciones de JavaScript que devuelven un elemento de React. Los componentes funcionales son más simples y fáciles de entender que los componentes de clase.

```jsx
import React from 'react';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

export default Welcome;
```

### Componentes de Clase

Los componentes de clase son clases de JavaScript que extienden la clase `React.Component`. Los componentes de clase tienen un método `render()` que devuelve un elemento de React.

```jsx
import React from 'react';

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

export default Welcome;
```

- Estaremos usando componentes funcionales en nuetras aplicaciones de React.

## Props

Los props son argumentos que se pasan a un componente de React. Los props son inmutables, lo que significa que no se pueden modificar en el componente.

```jsx
import React from 'react';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

export default Welcome;
```

## State

El estado es un objeto que contiene datos que se utilizan en un componente de React. El estado se puede modificar en un componente utilizando el método `setState()`.

```jsx
import React from 'react';

export function Clock() {
  const [date, setDate] = React.useState(new Date());

  React.useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}

export default Clock;
```

## Ciclo de Vida

El ciclo de vida de un componente de React consta de tres fases: montaje, actualización y desmontaje. Cada fase tiene métodos de ciclo de vida que se ejecutan en un componente de React.


## Rederizado Condicional

El renderizado condicional en React se utiliza para mostrar u ocultar elementos de la interfaz de usuario en función de una condición.

### Retorno de elementos JSX condicionales 
```jsx
import React from 'react';

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;

  if (isLoggedIn) {
    return <UserGreeting />;
  }

  return <GuestGreeting />;
}

function UserGreeting() {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting() {
  return <h1>Please sign up.</h1>;
}

export default Greeting;
```

### Operador Ternario
```jsx
import React from 'react';

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;

  return isLoggedIn ? <UserGreeting /> : <GuestGreeting />;
}

function UserGreeting() {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting() {
  return <h1>Please sign up.</h1>;
}

export default Greeting;
```

### Operador Lógico `&&` AND
```jsx

import React from 'react';

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;

  return isLoggedIn && <UserGreeting />;
}

function UserGreeting() {
  return <h1>Welcome back!</h1>;
}

export default Greeting;
```


## Composisión de Componentes

La composición de componentes en React se utiliza para crear componentes más complejos a partir de componentes más simples. Es decir la composisión de componnetes es la foma en como podemos abstraer al la logica interna de un componente dividiendolo por componentes mas pequeños 

```jsx
import React from 'react';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

export default App;
```


Para nusras clases llegaremos a utilizar vite js como generador de proyectos para react