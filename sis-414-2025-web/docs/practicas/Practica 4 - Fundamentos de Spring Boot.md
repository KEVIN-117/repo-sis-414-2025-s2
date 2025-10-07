---
title: "Práctica 4 - Fundamentos de Spring Boot"
slug: practica-4-fundamentos-spring-boot
date: 2025-10-01
draft: false
tags: ["practica", "spring", "springboot", "java"]
description: "Introducción a los fundamentos de Spring Boot"
categories: ["practicas"]
authors: ["kevin-117"]
---

# **Fundamentos de Spring Boot**

---

## Objetivos específicos

- Comprender los conceptos básicos de Spring Boot como framework para aplicaciones Java.
- Configurar un entorno de desarrollo para proyectos Spring Boot.
- Desarrollar una aplicación sencilla utilizando las características principales de Spring Boot.
- Familiarizarse con las herramientas necesarias para el desarrollo moderno en Java.
  
!!! TIP "💁‍♂️ Uno de los principales objetivos es:" 
    - Fomentar la practica del aprendisaje autonomo y el uso de recursos en línea es decir `aprender` a `aprender` siguiendo el concepto de aprendizaje `autodidacta`.

---

## Recursos para la elaboración de la práctica

- [Documentación oficial de Spring Boot](https://spring.io/projects/spring-boot)
- [Guía de inicio rápido de Spring Boot](https://spring.io/guides/gs/spring-boot/)
- [Tutoriales de Spring Boot en Baeldung](https://www.baeldung.com/spring-boot)
- [Videos de Spring Boot en YouTube](https://www.youtube.com/results?search_query=spring+boot)

## Requisitos previos

- Conocimientos básicos de Java y programación orientada a objetos.
- Instalación de Java Development Kit (JDK) de java 21 o superior.
- Instalación de un IDE compatible con Java (Eclipse, IntelliJ IDEA, VSCode).
- Instalación de Maven o Gradle para la gestión de dependencias.
- Instalación de Git para control de versiones.
- Sistema operativo: macOS, Windows (incluyendo WSL) o Linux (se recomienda WSL para usuarios de Windows).

## Dinámica de la práctica

1. Configuración del entorno de desarrollo para Spring Boot.
2. Creación de un proyecto Spring Boot utilizando Spring Initializr.
3. Desarrollo de una aplicación sencilla que incluya controladores, servicios y repositorios.

## Entregables

- Esta tarea debe ser realizada de forma individual.
- La práctica debe ser entregada en un repositorio de GitHub.
- La practica consta de dos ejercicios:
  - Ejercicio 1: Mini-ORM en Java (sin Spring Boot)
  - Ejercicio 2: Mini-ORM con Spring Boot
- Código fuente del proyecto en un repositorio de GitHub, para ello se recomienda trabajar en 2 ramas diferentes, una para cada parte de la practica.
  - Rama `main` para es donde debe ir un README.md indicando como le parecio la practica y los conceptos aprendidos.
  - Rama `ejercicio-1` para el Ejercicio 1: Mini-ORM en Java (sin Spring Boot) es decir la primera parte de la practica.
  - Rama `ejercicio-2` para el Ejercicio 2: Mini-ORM con Spring Boot es decir la segunda parte de la practica.

## Criterios de evaluación
- Primer ejercicio (Mini-ORM en Java sin Spring Boot): 60%
  - Estructura del proyecto: 5%
  - Implementación de las anotaciones personalizadas: 5%
  - Toda la implementación: 10%
  - Evaluación primera parte del servicio: 40% 
- Segundo ejercicio (Mini-ORM con Spring Boot): 40%

!!! warning "💁‍♂️ Tome en cuneta lo siguiente:"  
    POR CADA VEZ QUE NO CUPLE LAS INTRUCCIONES DE LA PRACTICA, SE LE RESTARAN PUNTOS EXACTAMENTE 5 PUNTOS.

## Ejercicios

Para esta practica, iniciaremos desde los conceptos basicos es decir un antes de Spring Boot y luego avanzaremos a Spring Boot.
Para ello estaremos creando una seria de aplicaciones sencillas que nos permitiran entender los conceptos basicos de Spring Boot.

### Parte 1: Aplicación Java Simple

En esta seccion crearemos una aplicacion Java simple en la cual estaremos revisando los siguientes conceptos:

- Estructura de un proyecto Java
- Clases y objetos
- Métodos y atributos
- Manejo de excepciones
- Programacion orientada a objetos
- Programacion funcional en Java
- Uso de librerias externas: `Lombok`
- Uso de `Maven` para la gestion de dependencias

---

# Ejercicio 1: 🧭 Mini‑ORM en Java

## Guía de laboratorio orientada a arquitectura

**Objetivo:** Construir un _mini‑ORM_ en Java siguiendo una arquitectura en capas que favorezca orden, testabilidad y evite código espagueti. El proyecto usa Maven, Lombok y reflección para mapear entidades con anotaciones.

**Duración sugerida:** 4–6 horas (puede dividirse en 2 sesiones)

## Revisemos los conceptos clave

- **ORM (Object-Relational Mapping):** Técnica para mapear objetos en código a tablas en bases de datos relacionales, son usados para abstraer la interacción con una base de datos.
- **Arquitectura en capas:** Esta arquitetura separa responsabilidades en capas distintas (por ejemplo, presentación, negocio, datos) para mejorar la organización y mantenibilidad del código.
- **Maven:** Herramienta de gestión y construcción de proyectos Java que maneja dependencias y ciclos de vida del proyecto.
- **Lombok:** Biblioteca que reduce el código boilerplate (constructores, getters/setters) mediante anotaciones.
- **Reflección:** Capacidad de un programa para inspeccionar y modificar su propia estructura en tiempo de ejecución.

## Resumen del enfoque arquitectónico

Usaremos una **arquitectura en capas** (similar a la típica en backend):

- `model` (entidades anotadas) — responsabilidad: representar datos.
- `repository` (repositorios genéricos) — responsabilidad: abstracción de persistencia (In‑Memory en este laboratorio).
- `service` (lógica de negocio) — responsabilidad: orquestar operaciones y reglas.
- `core` / `orm` (EntityManager / mapeador) — responsabilidad: coordinar mapeo entre objetos y repositorios.
- `app` (interfaz CLI / demostración) — responsabilidad: punto de entrada, interacción con el usuario.

Principios aplicados: **Separación de responsabilidades (SRP)**, **Inversión de dependencias (usar interfaces)**, **pequeñas clases/métodos**, evitar estado global mutable.

Definamos algunnos conceptos clave, se menciono de los principios aplicados, estos principios son parte de aquellos principios SOLID, los cuales son:

- **S** de Principio de responsabilidad única (Single Responsibility Principle): una clase debe tener una, y solo una, razón para cambiar esto es **separación de responsabilidades (SRP)**.
- **O** de Principio de abierto/cerrado (Open/Closed Principle): las entidades deben estar abiertas para la extensión, pero cerradas para la modificación esto es **Inversión de dependencias (usar interfaces)**.
- **L** de Principio de sustitución de Liskov (Liskov Substitution Principle): los objetos de una clase derivada deben poder reemplazar a los objetos de la clase base sin alterar el comportamiento del programa esto es **pequeñas clases/métodos**.
- **I** de Principio de segregación de interfaces (Interface Segregation Principle): es mejor tener muchas interfaces específicas en lugar de una interfaz única y general esto es **evitar estado global mutable**.
- **D** de Principio de inversión de dependencias (Dependency Inversion Principle): las dependencias deben ser abstraídas, y no depender de implementaciones concretas.

## Paso 0: Organización de archivos / proyecto (sistema de archivos)

Crearemos la siguiente estructura de carpetas y archivos:

```plaintext
mini-orm/
├─ pom.xml
├─ README.md
└─ src/
   └─ main/
      └─ java/
         └─ com/miniorm/
            ├─ annotations/      # @Entity, @Column, @Id
            ├─ exceptions/       # Excepciones custom
            ├─ models/           # Clases de dominio (User, Product...) + Lombok
            ├─ repository/       # Interfaces y repositorios InMemory
            ├─ core/             # EntityManager, util reflection
            ├─ service/          # Servicios que usan repositorios
            └─ app/              # Main / CLI demo
   └─ test/
      └─ java/
         └─ com/miniorm/
            └─ ... (tests unitarios)
```

> Nota: usar paquete raíz `com.miniorm` como convención del laboratorio.

# Implementación paso a paso

## Paso 1: Crear proyecto Maven

- Inicie **IntelliJ IDEA** (o su IDE favorito).
- Cree un nuevo proyecto seleccionando **Maven**.
- Configure el `GroupId` como `com.miniorm` y el `ArtifactId` como `mini-orm`.
- Haga clic en **Finish** para crear el proyecto.
- Abra el archivo `pom.xml` y agregue las siguientes dependencias:

```xml

<dependencies>
    <!-- https://mvnrepository.com/artifact/org.projectlombok/lombok -->
    <dependency>
        <groupId>org.projectlombok</groupId>
        <artifactId>lombok</artifactId>
        <version>1.18.36</version>
    </dependency>
</dependencies>
```

- Debe crear la estructura de carpetas mencionada en el paso 0 dentro de `src/main/java/com/miniorm/`.

---

## Paso 2: Definir anotaciones personalizadas

Que son las anotaciones?
Es una forma de agregar metadatos a nuestro código, que luego pueden ser procesados en tiempo de compilación o en tiempo de ejecución. En este caso, usaremos anotaciones para marcar nuestras clases y campos con información relevante para el mapeo ORM.

En esta seccion estaremos creando las anotaciones personalizadas que usaremos para mapear nuestras entidades.
- Cree la carpeta `annotations` dentro de `com.miniorm` si no existe.
- Dentro de `annotations`, cree los siguientes archivos:

1. `Entity.java`
```java
package com.miniorm.annotations;

import java.lang.annotation.*;

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
public @interface Entity {
    String tableName();
}
```

    Donde:

    - `@Retention(RetentionPolicy.RUNTIME)`: Indica que la anotación estará disponible en tiempo de ejecución mediante reflexión.
    - `@Target(ElementType.TYPE)`: Especifica que esta anotación se puede aplicar a clases, interfaces o enumeraciones.
    - `public @interface Entity`: Define una nueva anotación llamada `Entity`.
    - `String tableName()`: Declara un elemento obligatorio `tableName` que debe proporcionarse al usar la anotación.


2. `Column.java`
```java
package com.miniorm.annotations;

import java.lang.annotation.*;

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.FIELD) // Indica que esta anotación se aplica a campos (atributos)
public @interface Column {
    String name();
}
```

3. `Id.java`

    Ahora es tu turno, crea el archivo `Id.java` dentro de la carpeta `annotations` siguiendo el mismo formato que las anteriores. Recuerda que esta anotación se aplicará a campos (atributos) y no a clases.

4. `GeneratedValue.java`
```java
package com.miniorm.annotations;

import com.miniorm.enums.GenerationType;

import  java.lang.annotation.*;

@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.FIELD, ElementType.METHOD})
public @interface GeneratedValue {
    GenerationType strategy() default GenerationType.AUTO_INCREMENT;
}

```

    Crea la carpeta `enums` dentro de `com.miniorm` si no existe.
    Dentro de `enums`, cree el siguiente archivo:

5. `GenerationType.java`
```java
package com.miniorm.enums;

public enum GenerationType {
    TABLE,
    SEQUENCE,
    IDENTITY,
    UUID,
    AUTO_INCREMENT
}
```

---

## Paso 3: Definamos las entidades del dominio (modelos)

Que son las entidades del dominio (modelos)?
Son las clases que representan los datos que manejaremos en nuestra aplicación. Cada entidad corresponde a una tabla en la base de datos y sus atributos corresponden a las columnas de esa tabla.

En esta seccion estaremos creando las entidades del dominio que usaremos en nuestra aplicacion.
- Cree la carpeta `models` dentro de `com.miniorm` si no existe.
- Dentro de `models`, cree los siguientes archivos:
1. `User.java`
```java
package com.miniorm.models;

import com.miniorm.annotations.*;
import com.miniorm.enums.GenerationType;
import lombok.*;
import java.time.LocalDateTime;
import java.util.UUID;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity(tableName = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "id")
    public UUID id;
    @Column(name = "name")
    private String name;
    @Column(name = "email")
    private String email;
    @Column(name = "password")
    private String password;
    @Column(name = "created_at")
    private LocalDateTime createdAt;
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @Override
    public String toString() {
        return
                """
                User {
                    id='%s',
                    name='%s',
                    email='%s',
                    password='%s',
                    createdAt='%s',
                    updatedAt='%s'
                }""".formatted(id, name, email, password, createdAt, updatedAt);
    }
}

```

!!! warning "⚠️ Investigue como funcionan las relaciones entre entidades en JPA y como se implementan en Spring Data JPA"
    - Trata de implementar una relación entre dos entidades, por ejemplo, un `Estudiante` puede estar inscrito en muchos `Course` y un `Course` puede tener muchos `Estudiante` (relación muchos a muchos).
    - Investiga las anotaciones `@OneToMany`, `@ManyToOne`, `@ManyToMany` y `@OneToOne` y trata de replicarlas e implementarlas en el proyecto.

Me gustaria que investiguee acerca de como funciona esta clase, para ello le dejo las siguientes preguntas que le ayudaran a entender el codigo:

1. ¿Qué hace la anotación `@Entity` y qué significa el atributo `tableName`?
2. ¿Cuál es el propósito de la anotación `@Id` y cómo se usa en esta clase?
3. ¿Qué hace la anotación `@GeneratedValue` y qué significa el atributo `strategy`?
4. ¿Cómo se usan las anotaciones `@Column` y qué información proporcionan?
5. ¿Qué papel juegan las anotaciones de Lombok (`@NoArgsConstructor`, `@AllArgsConstructor`, `@Getter`, `@Setter`) en esta clase?
6. ¿Qué tipo de datos se utilizan para los atributos `id`, `createdAt` y `updatedAt`, y por qué son apropiados para esos campos?
7. ¿Cómo funciona el método `toString` y qué información devuelve sobre la instancia de `User`, y qué ventajas tiene usar `String.format` en este contexto?



## Paso 4: Creamos el repositorio base genérico

Que es un repositorio?

Es una capa de abstracción que maneja la persistencia de datos. Proporciona métodos para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre las entidades sin exponer los detalles de cómo se almacenan los datos.

Que es un generico (generic)?

Es una característica de Java que permite definir clases, interfaces y métodos con tipos de datos parametrizados. Esto permite crear código más flexible y reutilizable, ya que se puede trabajar con diferentes tipos de datos sin necesidad de duplicar código.

En esta seccion estaremos creando el repositorio base generico que usaremos en nuestra aplicacion.

    - Cree la carpeta `repository` dentro de `com.miniorm` si no existe.
    - Dentro de `repository`, cree los siguientes archivos:

1. `GenericRepository.java`
```java
package com.miniorm.core;

import java.util.List;
import java.util.Map;
import java.util.Optional;

public interface GenericRepository<ID, T> {
    T save(ID id, T entity);
    Optional<T> findById(ID id, Object o);
    T update(ID id, T entity);
    Boolean delete(ID id, T entity);
    List<Map<ID, T>> findAll();
}
```

Que esta haciendo este codigo?

- `public interface GenericRepository<T, ID>`: Define una interfaz genérica llamada `GenericRepository` con dos parámetros de tipo: `T` (tipo de entidad) e `ID` (tipo de identificador).
- `T save(T entity)`: Declara un método para guardar una entidad del tipo `T`.
- `Optional<T> findById(ID id)`: Declara un método para buscar una entidad por su identificador del tipo `ID`, devolviendo un `Optional` que puede contener la entidad o estar vacío si no se encuentra.
- `T update(T entity)`: Declara un método para actualizar una entidad del tipo `T`.
- `Boolean delete(T entity)`: Declara un método para eliminar una entidad del tipo `T`, devolviendo un booleano que indica si la eliminación fue exitosa.
- `List<T> findAll()`: Declara un método para obtener una lista de todas las entidades del tipo `T`.

Este repositorio es una interfaz genérica que define operaciones CRUD básicas para cualquier tipo de entidad y su identificador, permitiendo la reutilización del código para diferentes entidades en la aplicación.

## 5: Implementamos el repositorio In-Memory

Que es un repositorio In-Memory?
Es una implementación de un repositorio que almacena los datos en la memoria del programa en lugar de una base de datos persistente. Esto es útil para pruebas, desarrollo rápido o aplicaciones simples donde no se requiere almacenamiento a largo plazo. Es decir, esta clase servira como una base de datos en memoria para almacenar nuestras entidades.

En esta seccion estaremos creando el repositorio In-Memory que usaremos en nuestra aplicacion.
- Dentro de la carpeta `core`, cree el siguiente archivo:
1. `InMemoryRepository.java` y copie el siguiente codigo:
```java
package com.miniorm.core;

import com.miniorm.annotations.Id;
import java.lang.reflect.Field;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicInteger;

public class InMemoryRepository <ID, T> implements GenericRepository<ID, T> {

    private final Class<T> entityClass;
    private final Map<Object, List<Map<ID, T>>> storage = new ConcurrentHashMap<>(); // Thread-safe map for in-memory storage
    private final AtomicInteger sequence = new AtomicInteger(1); // For generating unique IDs if needed
    private Field idField;

    public InMemoryRepository(Class<T> entityClass) {
        this.entityClass = entityClass;
        for (Field field : this.entityClass.getDeclaredFields()) {
            if (field.isAnnotationPresent(Id.class)) {
                field.setAccessible(true);
                this.idField = field;
                break;
            }
        }
        if (this.idField == null) {
            throw new IllegalArgumentException("No @Id field found in class " + entityClass.getName());
        }
    }

    private Object getId(T entity) {
        try {
            return idField.get(entity);
        } catch (IllegalAccessException e) {
            throw new RuntimeException("Failed to access ID field", e);
        }
    }

    private void setIdValue(T entity, Object id) {
        try {
            idField.set(entity, id);
        } catch (IllegalAccessException e) {
            throw new RuntimeException("Failed to set ID field", e);
        }
    }

    @Override
    public T save(ID id,T entity) {
        Object entityClassId = getId(entity);
        if (id == null || (id instanceof Integer && ((Integer) id) == 0)) {
            setIdValue(entity, sequence.getAndIncrement());
        }
        if (!storage.containsKey(entityClassId)) {
            storage.put(entityClassId, new ArrayList<>());
        }
        assert id != null;
        storage.get(entityClassId).add(Map.of(id, entity));
        return entity;
    }

    @Override
    public Optional<T> findById(ID id, Object o) {
        return storage.get(o).stream()
                .map(m -> m.get(id))
                .filter(Objects::nonNull)
                .findFirst();
    }

    @Override
    public List<Map<ID, T>> findAll() {
        List<Map<ID, T>> all = new ArrayList<>();
        for (List<Map<ID, T>> maps : storage.values()) {
            all.addAll(maps);
        }
        return all;
    }

    @Override
    public Boolean delete(ID id, T entity) {
        return storage.remove(entity) != null;
    }

    @Override
    public T update(ID id, T entity) {
        return storage.put(getId(entity), List.of(Map.of(id, entity))) != null ? entity : null;
    }
}
```

**Notas importantes:**

- Aquí usamos reflexión para encontrar el campo anotado con `@Id` y asignar ids automáticos (secuencia simple).
    
- `ConcurrentHashMap` ofrece seguridad básica en concurrencia.

**Preguntas para entender el código:**

Ahora tu tarea es entender que es lo que hace este codigo, para ello te dejo una una serie de preguntas que te ayudaran a entender el codigo:

1. ¿Qué hace la clase `InMemoryRepository` y qué interfaces implementa?
2. ¿Cuál es el propósito del mapa `storage` y cómo se utiliza?
3. ¿Cómo se genera un ID único para las entidades si no se proporciona uno?
4. ¿Qué hace el método `getId` y cómo accede al campo ID de una entidad?
5. ¿Cómo funciona el método `save` y qué hace si el ID es nulo o cero?
6. ¿Qué hace el método `findById` y cómo busca una entidad por su ID?
7. ¿Cómo funciona el método `findAll` y qué devuelve?
8. ¿Qué hace el método `delete` y cómo elimina una entidad del almacenamiento?
9. ¿Cómo funciona el método `update` y qué hace si la entidad no existe en el almacenamiento?

## 6: Implementamos el `EntityManager` (capa de orquestación)

Dentro del paquete `com.miniorm.core` es decir dentro de la carpeta `core`, cree el siguiente archivo:
1. `EntityManager.java` y copie el siguiente codigo:
```java
package com.miniorm.core;

public class EntityManager {
    public <ID, T> GenericRepository<ID, T> getRepository(Class<T> clazz) {
        return new InMemoryRepository<>(clazz);
    }
}
```

**Responsabilidad:** ofrecer repositorios a la capa de servicio; punto único para cambiar la estrategia de persistencia.

**Preguntas para entender el código:**

1. ¿Qué hace el método `getRepository` y qué parámetros recibe?
2. ¿Qué tipo de repositorio devuelve y cómo se instancia?
3. ¿Cómo se utiliza el `EntityManager` en la arquitectura general del proyecto?
4. ¿Qué ventajas ofrece tener un `EntityManager` en lugar de instanciar repositorios directamente en los servicios?

## 7: Implementamos la capa de servicio (lógica de negocio)

Dentro de la carpeta `service`, cree el siguiente archivo:
1. `UserService.java` y copie el siguiente codigo:
```java
package com.miniorm.service;

import com.miniorm.core.GenericRepository;
import com.miniorm.dto.RegisterUserDto;
import com.miniorm.models.User;

import java.sql.Timestamp;
import java.util.UUID;

public class UserService {
    private final GenericRepository<UUID, User> userRepository;

    public UserService(GenericRepository<UUID, User> userRepository) {
        this.userRepository = userRepository;
    }

    public User createUser(RegisterUserDto userDto) {
        User user = new User();
        user.setName(userDto.name());
        user.setEmail(userDto.email());
        user.setPassword(userDto.password());

        UUID uuid = UUID.randomUUID();
        user.setId(uuid);
        user.setCreatedAt(new Timestamp(System.currentTimeMillis()).toLocalDateTime());
        user.setUpdatedAt(new Timestamp(System.currentTimeMillis()).toLocalDateTime());
        return userRepository.save(uuid, user);
    }

    public User getUserById(UUID id) {
        return userRepository.findById(id, null).orElse(null);
    }

    public User updateUser(UUID id, User user) {
        return userRepository.update(id, user);
    }

    public Boolean deleteUser(UUID id, User user) {
        return userRepository.delete(id, user);
    }

    public void listAllUsers() {
        userRepository.findAll().forEach(System.out::println);
    }
}
```

**Por qué esta separación:** la `service` no conoce la implementación concreta del repositorio — se inyecta mediante el constructor (Dependency Injection manual).

**Preguntas para entender el código:**

1. ¿Cuál es la responsabilidad principal de la clase `UserService`?
2. ¿Cómo se inyecta el repositorio en el servicio y por qué es importante?
3. ¿Qué hace el método `createUser` y cómo utiliza el DTO `RegisterUserDto`?
4. ¿Cómo funcionan los métodos `getUserById`, `updateUser`, `deleteUser` y `listAllUsers`?
5. ¿Qué ventajas ofrece tener una capa de servicio separada de la capa de repositorio?
6. ¿Cómo maneja el servicio la creación de IDs y las marcas de tiempo para los usuarios?
7. ¿Qué tipo de objeto devuelve el método `getUserById` si no encuentra un usuario con el ID proporcionado?
8. ¿Cómo se asegura el servicio de que los datos del usuario estén completos antes de guardarlos en el repositorio?
9. ¿Qué patrón de diseño se está utilizando al inyectar el repositorio en el servicio a través del constructor?


Bien hasta este punto de seguro tendra algunos errores que, en especidifco en la funcion `createUser`, esto se debe a que estamos usando un DTO que aun no hemos creado, para ello cree la carpeta `dto` dentro de `com.miniorm` si no existe.

Pero ahora que demonios, que es un DTO?

DTO significa "Data Transfer Object" (Objeto de Transferencia de Datos). Es un patrón de diseño utilizado para transferir datos entre diferentes capas o componentes de una aplicación, especialmente en aplicaciones distribuidas o basadas en servicios.

Entonces cree el siguiente archivo dentro de la carpeta `dto`:
1. `RegisterUserDto.java` y copie el siguiente codigo:
```java
package com.miniorm.dto;

public record RegisterUserDto(String name, String email, String password) {}
```

- Aquí usamos un `record` de Java (disponible desde Java 14) para definir un DTO inmutable y conciso.
- Un `record` es una clase especial en Java que está diseñada para ser una simple portadora de datos. Proporciona automáticamente implementaciones para métodos comunes como `equals()`, `hashCode()`, y `toString()`, así como constructores y getters para sus componentes.
- `public record RegisterUserDto(String name, String email, String password) {}`: Define un `record` llamado `RegisterUserDto` con tres componentes: `name`, `email` y `password`. Estos componentes son inmutables y se inicializan a través del constructor generado automáticamente.

## 8: Implementamos la capa de presentación (CLI demo)
Dentro de la carpeta `app`, cree el siguiente archivo:
1. `Main.java` y copie el siguiente codigo:
```java
package com.miniorm.app;

import com.miniorm.core.EntityManager;
import com.miniorm.dto.RegisterUserDto;
import com.miniorm.models.Product;
import com.miniorm.models.User;
import com.miniorm.service.ProductService;
import com.miniorm.service.UserService;

public class Main {
    public static void main(String[] args) {
        EntityManager entityManager = new EntityManager();
        UserService userService = new UserService(entityManager.getRepository(User.class));

        userService.createUser(new RegisterUserDto("John Doe", "john.doe@example.com", "password123"));
        userService.createUser(new RegisterUserDto("Jane Smith", "jane.smith@gmail.com", "securepass"));

        userService.listAllUsers();
        System.out.println("--- Products ---");

    }
}
```

Al ejecutar este código, debería ver en la consola la lista de usuarios creados, similar a la siguiente salida:
```java
ID: c40b46d2-3436-407b-baa7-c0b25d61e3fb,
User: User {
    id='c40b46d2-3436-407b-baa7-c0b25d61e3fb',
    name='Jane Smith',
    email='jane.smith@gmail.com',
    password='securepass',
    createdAt='2025-10-06T23:52:40.112',
    updatedAt='2025-10-06T23:52:40.112'
}
ID: d94a73fb-1048-4270-a31c-ee2b19e72ec7,
User: User {
    id='d94a73fb-1048-4270-a31c-ee2b19e72ec7',
    name='John Doe',
    email='john.doe@example.com',
    password='password123',
    createdAt='2025-10-06T23:52:40.100',
    updatedAt='2025-10-06T23:52:40.109'
}
--- Products ---
```

- Aquí usamos el `EntityManager` para obtener un repositorio de `User` y lo inyectamos en el `UserService`.
- Luego, creamos algunos usuarios y listamos todos los usuarios almacenados.
- Puede expandir esta demo agregando más funcionalidades, como actualizar o eliminar usuarios, o creando y gestionando productos usando un `ProductService` similar.

## 10: Evaluación final

En esta sección usted deberá hacer lo siguiente:

1. Extender el proyecto para soportar otra entidad, por ejemplo, `Product` con atributos como `id`, `name`, `price`, `createdAt`, `updatedAt`.
2. Implementar un `ProductService` similar a `UserService` para manejar operaciones CRUD sobre productos.
3. Crear un DTO para registrar productos, similar a `RegisterUserDto`.
4. Modificar la clase `Main` para demostrar la creación, actualización, eliminación y listado de productos además de usuarios, se recomienda que lo hagas debajo de la línea `System.out.println("--- Products ---");`.
5. Documentar el proyecto en el archivo `README.md`, explicando la arquitectura, cómo ejecutar la aplicación y cualquier otro detalle relevante.


# Ejercicio 2: 🧭 Mini‑ORM con Spring Boot

En este ejercicio usted debera replicar el ejercicio anterior pero usando Spring Boot, para ello le dejo los siguientes pasos a seguir:
    
1. Cree un nuevo proyecto Spring Boot usando Spring Initializr (https://start.spring.io/) con las siguientes dependencias:
   - Spring Web
   - Spring Data JPA
   - Simule una base de datos en memoria usando (Map, List, etc.) segun su criterio
   - Lombok

2. Replicar la estructura de carpetas y archivos del ejercicio anterior.
3. Implementar las mismas funcionalidades (entidades, repositorios, servicios, controladores)
4. Probar la aplicación usando Postman o cualquier otra herramienta para hacer peticiones HTTP.
5. Documentar el proyecto en el archivo `README.md`, explicando la arquitectura, cómo ejecutar la aplicación y cualquier otro detalle relevante.
6. Subir el proyecto a un repositorio de GitHub y compartir el enlace en classroom.

# Conclusión
En esta práctica, hemos explorado los fundamentos de Spring Boot y cómo construir una aplicación sencilla utilizando sus características principales. Hemos aprendido a configurar un entorno de desarrollo, crear un proyecto Spring Boot, y desarrollar una aplicación que incluye controladores, servicios y repositorios. Además, hemos visto cómo utilizar herramientas modernas como Lombok y Maven para mejorar nuestra productividad y gestionar dependencias de manera eficiente.
