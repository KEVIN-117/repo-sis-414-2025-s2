# 🧪 Laboratorio — Formulario + Fetch + Spring Boot + Neon (PostgreSQL)

**Tema:** Manipulación del DOM con envío de formularios, Fetch API y backend con Spring Boot (Java) + Neon Serverless PostgreSQL.
**Dificultad:** Principiante-intermedio
**Objetivo general:**
Aplicar los conceptos de manipulación del DOM, envío de formularios y asincronismo con `fetch`, integrando un backend real hecho en **Spring Boot (Java)** conectado a una base de datos **PostgreSQL serverless en Neon**.

---

# 1. Objetivos específicos

1. Comprender la comunicación cliente-servidor mediante peticiones HTTP.
2. Manipular el DOM para capturar y validar datos de formularios.
3. Usar `fetch()` para enviar y recibir datos entre frontend y backend.
4. Implementar un backend REST con Spring Boot y conectarlo a Neon (Postgres).
5. Probar operaciones CRUD básicas.
6. Desarrollar pensamiento lógico y fomentar la autonomía en la búsqueda de soluciones.

> 💡 Al finalizar, los estudiantes habrán creado una aplicación web completa que permite registrar y listar clientes, integrando frontend y backend con una base de datos real.

Algo que me gustaria aclarar es que esta guia es el paso a paso de como debemos de contruir cada uno de los componentes de nuestra aplicacion, englobando conocimentos basicos de frontend y backend, no se necesita ningun conocimiento previo avanzado ya que tratremos de explicar cada uno de los pasos de manera sencilla y clara para que puedan hacer de manera exitosa esta practica.

---

# 2. Recursos previos

- Java 21 o superior
- Spring Boot CLI o Spring Initializer
- PostgreSQL (Neon account)
- IDE: IntelliJ IDEA, VS Code o Eclipse
- Node.js + npm (para el frontend con Vite)

---

# 3. Contexto de la práctica

Desarrollaremos un **mini sistema de gestión de clientes**, donde los usuarios podrán:

- Registrar clientes mediante un formulario en el frontend.
- Consultar la lista de clientes registrados.
- Guardar la información en una base de datos PostgreSQL (Neon).

Arquitectura general:

```
[Frontend Vite + JS]  ⇄  [Backend Spring Boot REST API]  ⇄  [PostgreSQL Neon]
```

# 4. Desarrollo paso a paso

## Paso 0: Verificaciones y estructura del proyecto

- Asegúrate de tener Java, Maven, Node.js y npm instalados.
- Crea una carpeta raíz para el proyecto, por ejemplo `lab-clients`.
- Dentro de `lab-clients`, crea dos subcarpetas: `backend` y `frontend`.
- Estructura del proyecto: usaremos `🧅 Arquitectura en Capas (Onion Architecture)`

### La estructura de carpetas debería verse así:

```
lab-clients/
├── backend/   (aquí irá el proyecto Spring Boot)
│   │   .gitattributes
│   │    .gitignore
│   │    mvnw
│   │    mvnw.cmd
│   │    pom.xml
│   │───src
│       ├───main
│       │   ├───java
│       │   │   └───com
│       │   │       └───example
│       │   │           └───labclients
│       │   │               └───lab_clients
│       │   │                   │   BackendApplication.java
│       │   │                   │
│       │   │                   ├───application
│       │   │                   │   ├───dto
│       │   │                   │   │       ClientDTO.java
│       │   │                   │   │
│       │   │                   │   ├───mapper
│       │   │                   │   │       ClientMapper.java
│       │   │                   │   │
│       │   │                   │   └───service
│       │   │                   │           ClientService.java
│       │   │                   │
│       │   │                   ├───domain
│       │   │                   │   ├───exception
│       │   │                   │   │       ClientNotFoundException.java
│       │   │                   │   │
│       │   │                   │   ├───model
│       │   │                   │   │       Client.java
│       │   │                   │   │
│       │   │                   │   └───repository
│       │   │                   │           ClientRepository.java
│       │   │                   │
│       │   │                   └───infrastructure
│       │   │                       ├───config
│       │   │                       │       BeanConfig.java
│       │   │                       │
│       │   │                       ├───persistence
│       │   │                       │   ├───adapter
│       │   │                       │   │       ClientRepositoryAdapter.java
│       │   │                       │   │
│       │   │                       │   ├───entity
│       │   │                       │   │       ClientEntity.java
│       │   │                       │   │
│       │   │                       │   └───jpa
│       │   │                       │           SpringDataClientRepository.java
│       │   │                       │
│       │   │                       └───rest
│       │   │                               ClientController.java
│       │   │
│       │   └───resources
│       │           application.yaml
│
└── frontend/  (aquí irá el proyecto Vite)
    ├── index.html
    ├── package.json
    ├── src/
    │   └── main.js
    └── vite.config.js
```

Ahora si vamos a reflexionar un poco, pongámonos a pensar, ¿por qué es importante tener una estructura de carpetas bien definida en un proyecto de software?

Tener una estructura de carpetas bien definida en un proyecto de software es crucial por varias razones:

1. **Organización:** Una estructura clara ayuda a mantener el código organizado, facilitando la localización de archivos y componentes específicos.
2. **Mantenibilidad:** Facilita la actualización y el mantenimiento del código, ya que los desarrolladores pueden entender rápidamente dónde se encuentran las diferentes partes del proyecto.
3. **Colaboración:** En proyectos con múltiples desarrolladores, una estructura coherente asegura que todos sigan las mismas convenciones, lo que reduce la confusión y mejora la eficiencia del equipo.
4. **Escalabilidad:** A medida que el proyecto crece, una buena estructura permite agregar nuevas funcionalidades sin desordenar el código existente.
5. **Buenas prácticas:** Seguir una estructura estándar (como la arquitectura en capas) promueve buenas prácticas de desarrollo, lo que puede conducir a un código más limpio y robusto.

Ahora si hablemos de cada capa de la arquitectura en capas que usaremos en este proyecto:

1. **`domain/`**

- Es el núcleo de la aplicación, donde viven las entidades, interfaces y reglas de negocio puras.
- model/: clases que representan el dominio (por ejemplo, Client).
- repository/: interfaces abstractas que definen las operaciones (por ejemplo, ClientRepository).
- exception/: excepciones personalizadas del dominio.

> 💡 Esta capa no depende de nada externo. Es pura lógica de negocio.

2. **`application/`**

- Contiene la lógica de aplicación: cómo los casos de uso interactúan con el dominio.

- dto/: objetos que transportan datos entre capas.

- service/: implementa los casos de uso del negocio.

- mapper/: convierte entre entidades, DTOs y modelos.

📦 Aquí vive el “qué hace” tu sistema, pero no “cómo se guarda o muestra”.

3. **`infrastructure/`**

Es la capa más externa. Aquí interactúas con el mundo real:

- persistence/: implementación concreta de los repositorios (por ejemplo, JPA o JDBC).

- adapter/: adapta las interfaces del dominio a tecnologías concretas.

- rest/: controladores que exponen los endpoints HTTP.

- config/: configuración de Spring Boot, beans, seguridad, etc.

> ⚙️ Esta capa depende de las otras, pero nunca al revés.

4. ClientManagerApplication.java

- El punto de entrada (@SpringBootApplication), donde se levanta todo el contexto de Spring.

### Verificaciones de entorno

- **Java:** `java -version` (debe ser 21 o superior)
  ![Java Version](image-2.png)
- **Maven:** `mvn -v`
  ![Maven Version](image-3.png)
- **Node.js:** `node -v` (debe ser 16 o superior)
- **npm:** `npm -v`

  ![All Versions](image-4.png)

En mi caso yo tengo instalado estas versiones, que se observa en las imagenes de arriba

## Paso 1: Crear la base de datos en Neon

Antes de iniciar a trabajar con neon, es necesario saber que es neon, neon es una base de datos postgresql serverless, lo que significa que no necesitamos preocuparnos por la infraestructura o el mantenimiento del servidor, ya que neon se encarga de eso por nosotros, permitiéndonos enfocarnos en el desarrollo de nuestras aplicaciones.
Neon es una de estas plataformas que se conoce como IaaS (Infrastructure as a Service) que nos permite crear y gestionar bases de datos en la nube de manera sencilla y eficiente.

AL decir serverless, nos referimos a que no tenemos que gestionar servidores físicos o virtuales, neon se encarga de escalar automáticamente los recursos según la demanda de nuestra aplicación, lo que nos permite pagar solo por lo que usamos y optimizar costos.

> Ahora si, vamos a crear nuestra base de datos en neon con toda la emoción del mundo 😊.
> Pero si no existe ninguna emoción, pues igual hagámoslo, pues no te queda de otra porque es parte de la práctica 😅 y el aux te reprueba 💁‍♂️ (no tienes opciones).

1. Entra a [https://neon.tech](https://neon.tech) y regístrate.

- Deberia ver lo siguienete pantalla:
  ![Neon Home](image-5.png)

- Ahora da clicl en "Sign Up" y llena el formulario con tus datos o puedes usar tu cuenta de GitHub o Google para registrarte (eso es lo que yo hice 😒).
  ![Registration Neon Form](image-6.png)

- Listo yo ya tengo mi cuenta creada, ahora voy a iniciar sesión, ya solo faltas tú 😜.
  ![Home Dashboard](image-7.png)

2. Crea un **nuevo proyecto** → “Create Project”.

> Al parecer un proyecto en neon es como un contenedor para tus bases de datos, te permite organizar y gestionar múltiples bases de datos bajo un mismo proyecto.
> En este caso ya nos da un proyecto por defecto llamado "sample_db", entoces trabajaremos sobre es proyecto, pero si quieres puedes crear uno nuevo (ya es tu decisión 😒).

3. Copia la **connection string** (por ejemplo):

Dale clic en "Connect" → "Connection String" y copia la URL que aparece (la necesitarás para conectar tu backend).

![Connection String](image-8.png)

La connection string se ve algo así:

```
postgres://user:password@ep-soft-cloud-12345.us-east-1.aws.neon.tech/dbname
```

4. En el panel de `SQL Editor`, ejecuta:

   ```sql
   CREATE TABLE clients (
     id SERIAL PRIMARY KEY,
     name VARCHAR(30) NOT NULL,
     email VARCHAR(30) NOT NULL UNIQUE,
     phone VARCHAR(20),
     created_at TIMESTAMP DEFAULT now()
   );
   ```

   ![Query Execution](image-9.png)

> no te olvide de ejecutar el query para crear la tabla clients, ya que esta tabla sera la que usaremos para guardar los datos de nuestros clientes.

---

## Paso 2: Crear el backend con Spring Boot

### a) Crear el proyecto

Ve a [https://start.spring.io](https://start.spring.io):

- **Project:** Maven
- **Language:** Java
- **Spring Boot:** 3.x
- **Dependencies:**

  - Spring Web
  - Spring Data JPA
  - PostgreSQL Driver
  - Lombok

Genera el proyecto, descomprímelo y ábrelo en tu IDE.

Pero en mi caso yo usare la terminal para crear el proyecto (por que me gusta más 😎), asi que abro mi terminal y me dirijo a la carpeta backend que cree anteriormente y ejecuto el siguiente comando:

```bash
mvn archetype:generate -DgroupId=com.example.labclients -DartifactId=lab-clients -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false
```

![Non Created](image-10.png)

Lamentablemente este comando no crea el proyecto con las dependencias de spring boot, asi que lo que haremos sera lo siguiente, yo creare el proyecto con spring initializer y luego lo abrire en mi IDE, pero si tu quieres puedes agregar las dependencias manualmente en el archivo `pom.xml`, pero eso ya es mucho trabajo para una practica tan sencilla 😅.

![Creacion de Proyecto](image-12.png)

No te olvide de agregar las dependencias que se observan en la imagen de arriba.

Hasta este punto tu proyecto debe de quedar algo asi:

![Project Preview](image-13.png)

> Lo quieres mas facil, clona este repositorio que ya tiene todo listo: [https://github.com/hazelemma703/lab-clients](https://github.com/hazelemma703/lab-clients.git)

---

### b) Configurar conexión a la base de datos (Neon)

Edita el archivo `src/main/resources/application.yml`:

> - Lo correcto seria manejarlo con variables de entorno, pero para simplicidad de la practica lo haremos directamente en el archivo.
> - Pero aqui te dejo un reto extra, investiga como manejar variables de entorno en Spring Boot y aplica eso en lugar de poner los datos directamente en el archivo.
> - Obviamente no es obligatorio, pero si quieres un reto extra para aprender mas cosas nuevas y adema de ello tener un extra en tu calificacion final 😜 (ya sabes, para subir tu promedio, no se piensalo yo solo te lo digo).

```yaml
spring:
  application:
    name: backend
  datasource:
    url: "jdbc:postgresql://ep-soft-frost-a5jrxwwz-pooler.us-east-2.aws.neon.tech/weather_db?sslmode=require&channel_binding=require"
    username: your_username
    password: your_password
    driver-class-name: org.postgresql.Driver

  jpa:
    hibernate:
      ddl-auto: update
    show-sql: true
    properties:
      hibernate:
        format_sql: true
        dialect: org.hibernate.dialect.PostgreSQLDialect
```

En el archiv o de configuración anterior, tratemos de explicar cada una de las propiedades que hemos configurado:

- `spring.datasource.url`: Es la URL de conexión a la base de datos PostgreSQL en Neon. Incluye el host, el nombre de la base de datos y parámetros adicionales como `sslmode` para asegurar la conexión.
- `spring.datasource.username`: El nombre de usuario para autenticar la conexión a la base de datos.
- `spring.datasource.password`: La contraseña correspondiente al usuario de la base de datos.
- `spring.datasource.driver-class-name`: Especifica el controlador JDBC que se utilizará para conectarse a la base de datos PostgreSQL.
- `spring.jpa.hibernate.ddl-auto`: Configura cómo Hibernate maneja el esquema de la base de datos. El valor `update` indica que Hibernate actualizará el esquema según las entidades definidas en el código.
- `spring.jpa.show-sql`: Habilita la impresión de las consultas SQL generadas por Hibernate en la consola, lo que es útil para depuración.
- `spring.jpa.properties.hibernate.format_sql`: Formatea las consultas SQL impresas para que sean más legibles.
- `spring.jpa.properties.hibernate.dialect`: Especifica el dialecto de Hibernate que se utilizará para PostgreSQL, lo que ayuda a Hibernate a generar SQL compatible con esta base de datos.

> ⚠️ Usa los datos reales de tu conexión Neon (puedes copiarlos desde el panel).

En mi caso quedo de esta manera:

![YML Final View](image-14.png)

Ahora ya podemos ejecutar la aplicación para verificar que la conexión a la base de datos funciona correctamente.

```bash
./mvnw spring-boot:run
```

O si usas tu IDE, simplemente ejecuta la clase principal `LabClientsApplication.java`.

Si todo está bien, verás en la consola:

```
Tomcat started on port(s): 8080
```

En especifico algo como esto:

![Running Log](image-15.png)

y en el navegador veremos algo como esto:

![Web View](image-16.png)

> Bien, ahora si vamos a crear las clases necesarias para manejar los clientes.
> Recrearemos la estructura de la arquitectura en capas que mencionamos anteriormente [Estructura de proyecto](#paso-0-verificaciones-y-estructura-del-proyecto)

![Create Estructure](image-17.png)

Deberia de tener esta estructura de carpetas:

![All View](image-18.png)

---

# Detalle y ejemplos de cada capa

> Antes de iniciar a crear las clases, hablemos un poco de los conceptos que usaremos en cada capa y el uso de librerías como Lombok.

- **Lombok:** Es una librería que nos ayuda a reducir el código boilerplate en Java. Con anotaciones como `@Data`, `@Builder`, `@AllArgsConstructor`, y `@NoArgsConstructor`, Lombok genera automáticamente getters, setters, constructores y otros métodos comunes, haciendo nuestro código más limpio y fácil de mantener.

  - Expliquemos cada una de las anotaciones que usaremos:

    - `@Data`: Genera getters, setters, `toString()`, `equals()`, y `hashCode()` para todos los campos de la clase.
    - `@Builder`: Proporciona un **`patrón de diseño Builder`** para crear instancias de la clase de manera más legible.
    - `@AllArgsConstructor`: Genera un constructor con un parámetro para cada campo en la clase.
    - `@NoArgsConstructor`: Genera un constructor sin parámetros.

- Ahora en el punto anterior se mensiono a los patrones de diseño, pero ¿qué es un patrón de diseño?

  - Un patrón de diseño es una solución reutilizable a un problema común en el diseño de software. Son como plantillas que puedes seguir para resolver problemas específicos en tu código, mejorando la calidad y mantenibilidad del mismo.

  - Algunos ejemplos comunes de patrones de diseño incluyen:

    - **Singleton:** Asegura que una clase tenga solo una instancia y proporciona un punto global de acceso a ella.
    - **Factory Method:** Define una interfaz para crear un objeto, pero permite que las subclases decidan qué clase instanciar.
    - **Observer:** Permite que un objeto notifique a otros objetos sobre cambios en su estado.
    - **Builder:** Separa la construcción de un objeto complejo de su representación, permitiendo crear diferentes representaciones del mismo objeto.

  - En nuestro caso, usaremos el patrón Builder para facilitar la creación de objetos `Client` y `ClientDTO`, al usar la anotación `@Builder` de Lombok la clase generará automáticamente un constructor con un patrón de diseño Builder, lo que nos permitirá crear instancias de estas clases de manera más legible y flexible, revisa esta pagina para mas informacion: [Patrón Builder](https://refactoring.guru/es/design-patterns/builder).

- Ahora si, vamos a crear las clases necesarias para manejar los clientes.

## Paso 3: Implementar la lógica del backend capa por capa

### 🧠 1. Dominio (domain/)

- **`Client.java`**

```java
package com.example.labclients.lab_clients.domain.model;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Client {
    private Long id;

    private String name;
    private String email;
    private String phone;
}
```

> En esta clase definimos el modelo de dominio `Client`, que representa a un cliente en nuestro sistema. Usamos las anotaciones de Lombok para generar automáticamente los métodos comunes como getters, setters, constructores y el patrón Builder. Pero en ninguna parte de esta clase usa anotaciones de Spring, ya que esta capa es independiente del framework, es decir esta capa solo contiene la lógica de negocio pura.

- **`ClientRepository.java`**

```java
package com.example.labclients.lab_clients.domain.repository;

import com.example.labclients.lab_clients.domain.model.Client;

import java.util.List;
import java.util.Optional;

public interface ClientRepository {
    Client save(Client client);
    Optional<Client> findById(Long id);
    List<Client> findAll();

    boolean existsByEmail(String email);
}
```

> En esta interfaz (contrato) definimos las operaciones que podemos realizar sobre los clientes en el sistema. Esta interfaz es independiente de cualquier tecnología específica de almacenamiento, lo que nos permite implementar diferentes adaptadores de persistencia en la capa de infraestructura sin afectar el dominio.

- **`ClientNotFoundException.java`**

```java
package com.example.labclients.lab_clients.domain.exception;


public class ClientNotFoundException extends Exception{
    public ClientNotFoundException(Long id, String message) {
        super("Client with id " + id + " not found." + message);
    }
}

```

> En esta clase definimos una excepción personalizada `ClientNotFoundException` que se lanzará cuando un cliente no sea encontrado en el sistema. Esta excepción extiende de la clase base `Exception` y proporciona un mensaje detallado que incluye el ID del cliente que no se encontró.

### ⚙️ 2. Aplicación (application/)

Define los casos de uso del sistema.
Depende solo del dominio, y trabaja con DTOs y Mappers.

---

- **`ClientDTO.java`**

```java
package com.example.labclients.lab_clients.application.dto;

import lombok.*;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ClientDTO {
    String name;
    String email;
    String phone;
}

```

> A esto se le conoce como DTO (Data Transfer Object), y su función principal es transportar datos entre diferentes capas o componentes de una aplicación, en este caso entre el frontend y el backend. Los DTOs son útiles para encapsular los datos que se van a transferir, permitiendo una comunicación más eficiente y segura.

- **`ClientMapper.java`**

```java
package com.example.labclients.lab_clients.application.mapper;

import com.example.labclients.lab_clients.application.dto.ClientDTO;
import com.example.labclients.lab_clients.domain.model.Client;

public class ClientMapper {
    public static ClientDTO toDto(Client client){
        return ClientDTO.builder()
                .name(client.getName())
                .email(client.getEmail())
                .phone(client.getPhone())
                .build();
    }


    public static Client toModel(ClientDTO clientDTO){
        return Client.builder()
                .name(clientDTO.getName())
                .email(clientDTO.getEmail())
                .phone(clientDTO.getPhone())
                .build();
    }
}

```

> En esta clase definimos un mapeador `ClientMapper` que se encarga de convertir entre el modelo de dominio `Client` y el DTO `ClientDTO`. Esto es útil para separar la lógica de negocio del formato de los datos que se envían o reciben a través de la API, facilitando la comunicación entre diferentes capas de la aplicación.

- **`ClientService.java`**

```java
package com.example.labclients.lab_clients.application.service;

import com.example.labclients.lab_clients.application.dto.ClientDTO;
import com.example.labclients.lab_clients.application.mapper.ClientMapper;
import com.example.labclients.lab_clients.domain.model.Client;
import com.example.labclients.lab_clients.domain.repository.ClientRepository;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

public class ClientService {
    private final ClientRepository clientRepository;

    public ClientService(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    public ClientDTO save(ClientDTO client){
        if (this.clientRepository.existsByEmail(client.getEmail())){
            throw new RuntimeException("Email already exists");
        }
        Client clientModel = ClientMapper.toModel(client);
        return ClientMapper.toDto(this.clientRepository.save(clientModel));
    }


    public List<ClientDTO> findAll(){
        return this.clientRepository
                .findAll()
                .stream()
                .map(ClientMapper::toDto)
                .collect(Collectors.toList());
    }

    public ClientDTO getClientById(Long id){
        return this.clientRepository.findById(id)
                .map(ClientMapper::toDto)
                .orElseThrow(() -> new RuntimeException("Client not found"));
    }
}

```

> En esta clase definimos el servicio `ClientService` que contiene la lógica de negocio relacionada con los clientes. Este servicio interactúa con el repositorio de clientes para realizar operaciones como guardar un nuevo cliente y obtener la lista de todos los clientes. Utiliza el `ClientMapper` para convertir entre el modelo de dominio `Client` y el DTO `ClientDTO`, facilitando la comunicación entre las capas de la aplicación.

> 🧩 Nota: Esta capa no usa anotaciones de Spring. Es completamente independiente del framework.

### 🏗️ 3. Infraestructura (infrastructure/)

En esta capa hablaremos de la implementación concreta de los repositorios, controladores REST y configuración de Spring Boot, pero definamos algunos conceptos primero con respecto a la arquitectura en la que se basa spring boot.

Spring inicia en el nivel de infraestructura, donde se configuran los beans y componentes necesarios para que la aplicación funcione. Desde allí, Spring Boot gestiona el ciclo de vida de los beans y permite la inyección de dependencias en las capas superiores (aplicación y dominio).

- Pero qie son los beans?

  - En Spring, un bean es un objeto que es instanciado, ensamblado y gestionado por el contenedor de Spring. Los beans son los componentes fundamentales de una aplicación Spring y representan los objetos que componen la lógica de negocio, servicios, controladores, repositorios, etc.

  - Los beans se definen en la configuración de Spring (ya sea mediante anotaciones o archivos XML) y pueden ser inyectados en otras clases mediante la inyección de dependencias. Esto permite una mayor modularidad y facilita la gestión del ciclo de vida de los objetos en la aplicación.

  - En resumen, los beans son los bloques de construcción de una aplicación Spring, y el contenedor de Spring se encarga de crear, configurar y gestionar estos objetos para que puedan ser utilizados en toda la aplicación.

El siguiente paso en el flujo es la capa de los controladores REST, que exponen los endpoints HTTP para que los clientes puedan interactuar con la aplicación. Los controladores reciben las solicitudes HTTP, delegan la lógica de negocio a los servicios de la capa de aplicación y devuelven las respuestas adecuadas. Son considerados como el cerebro de la comunicación entre el cliente y el servidor.

Los controladores REST en Spring Boot se implementan como clases anotadas con `@RestController`, que combinan la funcionalidad de `@Controller` y `@ResponseBody`. Esto significa que los métodos de los controladores pueden manejar solicitudes HTTP y devolver respuestas directamente en el cuerpo de la respuesta.

Luego tenemos la capa de los serivicios, que contiene la lógica de negocio de la aplicación. Los servicios son responsables de procesar las solicitudes recibidas por los controladores, interactuar con los repositorios para acceder a los datos y aplicar las reglas de negocio necesarias. Los servicios actúan como intermediarios entre los controladores y los repositorios, asegurando que la lógica de negocio esté separada de la capa de presentación y la capa de persistencia.

Finalmente, llegamos a la capa de persistencia, que se encarga de interactuar con la base de datos para almacenar y recuperar los datos de la aplicación. En esta capa, se implementan los repositorios que definen las operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para las entidades del dominio. Los repositorios utilizan tecnologías específicas de persistencia, como JPA (Java Persistence API) o JDBC (Java Database Connectivity), para realizar las operaciones en la base de datos.

Implementa detalles técnicos y depende de las otras capas.

- **`ClientEntity.java`**

```java
package com.example.labclients.lab_clients.infrastructure.persistence.entity;

import jakarta.persistence.*;
import lombok.*;


@Entity
@Table(name = "clients")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class ClientEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private String phone;
}

```

> En esta clase definimos la entidad `ClientEntity` que representa la tabla `clients` en la base de datos. Usamos anotaciones de JPA para mapear los campos de la clase a las columnas de la tabla, y las anotaciones de Lombok para generar automáticamente los métodos comunes como getters, setters, constructores y el patrón Builder.

- **`SpringDataClientRepository.java`**

```java
package com.example.labclients.lab_clients.infrastructure.persistence.jpa;

import com.example.labclients.lab_clients.infrastructure.persistence.entity.ClientEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface SpringDataClientRepository extends JpaRepository<ClientEntity, Long> {
    Boolean existsByEmail(String email);
}
```

> En esta interfaz definimos el repositorio JPA `SpringDataClientRepository` que extiende de `JpaRepository`, proporcionando métodos CRUD predefinidos para la entidad `ClientEntity`. También definimos un método personalizado `existsByEmail` para verificar si un cliente con un correo electrónico específico ya existe en la base de datos.

Existen dos formas de poder definir consultas personalizadas en Spring Data JPA:

1. **Query Methods:** Puedes definir métodos en la interfaz del repositorio siguiendo una convención de nomenclatura específica. Spring Data JPA generará automáticamente la consulta basada en el nombre del método. Por ejemplo, `findByEmail(String email)` generará una consulta para buscar un cliente por su correo electrónico, esya internamemente se traduce a una consulta SQL como `SELECT * FROM clients WHERE email = ?`.
2. **JPQL (Java Persistence Query Language):** Puedes usar la anotación `@Query` para definir consultas JPQL personalizadas directamente en la interfaz del repositorio. JPQL es un lenguaje de consulta orientado a objetos que se basa en las entidades del dominio en lugar de las tablas de la base de datos. Por ejemplo:

```java
@Query("SELECT c FROM ClientEntity c WHERE c.email = :email")
Optional<ClientEntity> findByEmail(@Param("email") String email);
```

> que te parece la forma en como spring boot maneja las consultas a la base de datos, no es genial? 😎

- **`ClientRepositoryAdapter.java`**

```java
package com.example.labclients.lab_clients.infrastructure.persistence.adapter;

import com.example.labclients.lab_clients.domain.model.Client;
import com.example.labclients.lab_clients.domain.repository.ClientRepository;
import com.example.labclients.lab_clients.infrastructure.persistence.entity.ClientEntity;
import com.example.labclients.lab_clients.infrastructure.persistence.jpa.SpringDataClientRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public class ClientRepositoryAdapter implements ClientRepository {

    private final SpringDataClientRepository jpaRepository;
    public ClientRepositoryAdapter(SpringDataClientRepository jpaRepository) {
        this.jpaRepository = jpaRepository;
    }

    @Override
    public Client save(Client client) {
        ClientEntity clientEntity = ClientEntity.builder()
                .name(client.getName())
                .email(client.getEmail())
                .phone(client.getPhone())
                .build();
        ClientEntity savedEntity = jpaRepository.save(clientEntity);
        return Client.builder()
                .id(savedEntity.getId())
                .name(savedEntity.getName())
                .email(savedEntity.getEmail())
                .phone(savedEntity.getPhone())
                .build();
    }

    @Override
    public Optional<Client> findById(Long id) {
        return this.jpaRepository.findById(id).map(e -> Client.builder()
                .id(e.getId())
                .name(e.getName())
                .email(e.getEmail())
                .phone(e.getPhone())
                .build());
    }

    @Override
    public List<Client> findAll() {
        return this.jpaRepository.findAll().stream().map(e -> Client.builder()
                .id(e.getId())
                .name(e.getName())
                .email(e.getEmail())
                .phone(e.getPhone())
                .build()).toList();
    }

    @Override
    public boolean existsByEmail(String email) {
        return this.jpaRepository.existsByEmail(email);
    }
}

```

> En esta clase definimos el adaptador `ClientRepositoryAdapter` que implementa la interfaz `ClientRepository` del dominio. Este adaptador utiliza el repositorio JPA `SpringDataClientRepository` para interactuar con la base de datos y realizar las operaciones CRUD para los clientes. El adaptador convierte entre el modelo de dominio `Client` y la entidad de persistencia `ClientEntity`, facilitando la comunicación entre la capa de dominio y la capa de infraestructura.

- **`BeanConfig.java`**

```java
package com.example.labclients.lab_clients.infrastructure.config;


import com.example.labclients.lab_clients.application.service.ClientService;
import com.example.labclients.lab_clients.domain.repository.ClientRepository;
import com.example.labclients.lab_clients.infrastructure.persistence.jpa.SpringDataClientRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class BeanConfig {

    @Bean
    public ClientService clientService(ClientRepository clientRepository){
        return new ClientService(clientRepository);
    }
}

```

> En esta clase definimos la configuración de beans de Spring Boot. Aquí declaramos un bean para el servicio `ClientService`, que depende del repositorio `ClientRepository`. Spring Boot se encargará de inyectar automáticamente la implementación adecuada del repositorio cuando se cree el bean del servicio.

- **`ClientController.java`**

```java
package com.example.clientmanager.infrastructure.rest;

import com.example.clientmanager.application.dto.ClientDTO;
import com.example.clientmanager.application.service.ClientService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/clients")
public class ClientController {

    private final ClientService clientService;

    public ClientController(ClientService clientService) {
        this.clientService = clientService;
    }

    @GetMapping
    public List<ClientDTO> getAll() {
        return clientService.getAllClients();
    }

    @PostMapping
    public ClientDTO create(@RequestBody ClientDTO client) {
        return clientService.createClient(client);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        clientService.deleteClient(id);
    }
}

```

> Finalmente, en esta clase definimos el controlador REST `ClientController` que expone los endpoints HTTP para manejar las operaciones relacionadas con los clientes. El controlador utiliza el servicio `ClientService` para procesar las solicitudes y devolver las respuestas adecuadas. Los endpoints definidos incluyen:

---

# 5. Ejecutar backend

Ejecuta la aplicación (desde el IDE o en consola):

```bash
./mvnw spring-boot:run
```

Si todo está bien, verás:

```
Tomcat started on port(s): 8080
```

Prueba la API en el navegador o con `curl`:

```bash
curl http://localhost:8080/api/clients
```

Deberías obtener una respuesta vacía `[]` (aún no hay clientes).

- Trata de hacer un POST con `curl`:

```bash
curl -X POST http://localhost:8080/api/clients -H "Content-Type: application/json" -d '{"name":"Juan Perez","email":"juan.perez@example.com","phone":"123456789"}'
```

Deberías obtener la respuesta con el cliente creado:

```json
{
  "name": "Juan Perez",
  "email": "juan.perez@example.com",
  "phone": "123456789"
}
```

- Ahora prueba el GET nuevamente:

```bash
curl http://localhost:8080/api/clients
```

Deberías ver el cliente que acabas de crear:

```json
[
  {
    "name": "Juan Perez",
    "email": "juan.perez@example.com",
    "phone": "123456789"
  }
]
```

# 6. Evaluación Backend:

Hasta este punto ya deberia de ser capaz de comprender como funciona el backend con spring boot y neon, como funcionan los endpoints y como se comunican con la base de datos, y el porque de cada capa en la arquitectura en capas.

- Crea una rama nueva en tu repositorio llamada `feature/products`.
- Implementa la funcionalidad para manejar productos (Product) similar a como se hizo con clientes (Client).
- Replica todo lo aprndido y trata de implementar la misma logica pero en este caso para manejar productos en lugar de clientes, crea los endpoints necesarios para crear, listar y eliminar productos.
- Usa la misma estructura de carpetas y las mismas clases, pero adaptalas para manejar productos (Product.java, ProductDTO.java, ProductService.java, etc).
- Al finalizar, deberias de tener un backend funcional que maneje productos y clientes.

---

# 7. Crear el frontend con Vite

```bash
npm create vite@latest frontend -- --template vanilla
cd frontend
npm install
npm run dev
```

---

## Estructura de carpetas

```bash
client:
│   .gitignore
│   index.html
│   package-lock.json
│   package.json
│   tsconfig.json
│
├───node_modules
├───public
│       vite.svg
│
└───src
    │   main.ts
    │   style.css
    │   typescript.svg
    │
    ├───modules
    │   └───clients
    │           Clients.ts
    │           types.ts
    │
    └───utils
            HttpClient.ts

```

---

- **`index.html`**

Modifícalo el html existente para que quede así:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Gestión de Clientes</title>
  </head>
  <body>
    <h1>Registro de Clientes</h1>
    <form id="form">
      <input id="name" placeholder="Nombre" required />
      <input id="email" type="email" placeholder="Correo" required />
      <input id="phone" placeholder="Teléfono" />
      <button type="submit">Guardar</button>
    </form>

    <h2>Clientes registrados</h2>
    <div id="list"></div>

    <script type="module" src="/src/main.js"></script>
  </body>
</html>
```

---

- Crea el cliente HTTP con Fetch en:

**`src/utils/HttpClient.ts`**

```ts
export interface HttpClient {
  get<T>(url: string): Promise<T>;
  post<T, U>(url: string, data: U): Promise<T>;
}

export class FetchHttpClient implements HttpClient {
  private readonly baseUrl: string;
  constructor(baseUrl: string = "http://localhost:8080/api") {
    this.baseUrl = baseUrl;
  }
  async get<T>(url: string): Promise<T> {
    const response = await fetch(this.baseUrl + url);
    return response.json();
  }
  async post<T, U>(url: string, data: U): Promise<T> {
    const response = await fetch(this.baseUrl + url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return response.json();
  }
}
```

> Pero ahora antes de explicarte el codigo, nos asombraremos un poco con el codigo 😲, mira que clase tan bonita y bien estructurada, parece que la hizo un profesional 😎, pero no te preocupes, fui yo quien la hizo, asi que no te asustes 😅, solo soy alguien tratando de demotrar sus conocimientos.

> Ahora si, hablemos un poco del codigo, en este archivo definimos una interfaz `HttpClient` que especifica los métodos `get` y `post` para realizar solicitudes HTTP. Luego, implementamos esta interfaz en la clase `FetchHttpClient`, que utiliza la API Fetch de JavaScript para realizar las solicitudes. La clase acepta una URL base en el constructor, lo que permite configurar fácilmente la URL del backend.

> Notaras los parametros genericos `<T>` y `<U>`, estos permiten que los métodos `get` y `post` sean flexibles en cuanto a los tipos de datos que manejan. El parámetro `<T>` representa el tipo de dato que se espera recibir en la respuesta, mientras que `<U>` representa el tipo de dato que se envía en la solicitud POST. Esto permite que la clase `FetchHttpClient` pueda trabajar con diferentes tipos de datos sin necesidad de definir métodos específicos para cada tipo, a lo que se le conoce como programación genérica.

## Desarrollo de modulos

- **`src/modules/clients/types.ts`**

```ts
export interface Client {
  id?: number;
  name: string;
  email: string;
  phone: string;
}

export type PostClientType = Omit<Client, "id">;
```

> En este archivo definimos las interfaces `Client` y `PostClientType` que representan la estructura de los datos de un cliente. La interfaz `Client` incluye todos los campos, mientras que `PostClientType` omite el campo `id`, ya que este no es necesario al crear un nuevo cliente, es un dato que sera generado por el backend.

- **`src/modules/clients/clients.ts`**

```ts
import type { Client, PostClientType } from "./types";
import type { HttpClient } from "../../utils/HttpClient";

export class Clients {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  async getClients() {
    return this.httpClient.get<Client[]>("/clients");
  }
  async saveClient(client: PostClientType) {
    return this.httpClient.post<Client, PostClientType>("/clients", client);
  }
}
```

> En este archivo definimos la clase `Clients` que actúa como un módulo para manejar las operaciones relacionadas con los clientes. La clase utiliza una instancia de `HttpClient` para realizar las solicitudes HTTP al backend. Proporciona dos métodos: `getClients`, que obtiene la lista de clientes, y `saveClient`, que guarda un nuevo cliente. Ambos métodos utilizan los tipos definidos en `types.ts` para asegurar que los datos manejados sean del tipo correcto.

> Notaras que en el contructor de la clase `Clients` estamos inyectando una instancia de `HttpClient`, esto es un ejemplo de inyección de dependencias, que nos permite desacoplar la clase `Clients` de una implementación específica de `HttpClient`, facilitando la prueba y el mantenimiento del código.

> Ahora si, vamos a usar todo lo que hemos creado en el archivo principal.

## Integración

**`src/main.js`**

```js
import "./style.css";
import { FetchHttpClient } from "./utils/HttpClient";
import { Clients } from "./modules/clients/Clients";
const httpClient = new FetchHttpClient();

const clientsModule = new Clients(httpClient);

async function getAllClients() {
  const clients = await clientsModule.getClients();
  list.innerHTML = clients
    .map(
      (c) => `
    <div>
      <b>${c.name}</b> (${c.email}) - ${c.phone || ""}
    </div>
  `
    )
    .join("");
}
getAllClients();

const form = document.getElementById("form") as HTMLFormElement;
const list = document.getElementById("list") as HTMLDivElement;

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (!e.target) return;
  const target = e.target as typeof e.target & {
    name: { value: string };
    email: { value: string };
    phone: { value: string };
  };
  const newClient = {
    name: target.name!.value as string,
    email: target.email!.value as string,
    phone: target.phone!.value as string,
  };
  console.log(newClient);

  await clientsModule.saveClient(newClient);
  form.reset();
  getAllClients();
});

```

> En este archivo principal, integramos todos los componentes que hemos creado para manejar la interfaz de usuario y la interacción con el backend. Primero, importamos los estilos y las clases necesarias. Luego, creamos una instancia de `FetchHttpClient` y la usamos para instanciar el módulo `Clients`.
> Definimos la función `getAllClients`, que obtiene la lista de clientes desde el backend y actualiza el contenido del elemento `list` en el DOM para mostrar los clientes registrados. Esta función se llama inicialmente para cargar los clientes al iniciar la aplicación.
> También configuramos un manejador de eventos para el formulario de registro de clientes. Cuando se envía el formulario, evitamos el comportamiento predeterminado, extraemos los valores ingresados por el usuario, creamos un nuevo objeto cliente y lo enviamos al backend utilizando el método `saveClient` del módulo `Clients`. Después de guardar el cliente, reseteamos el formulario y volvemos a cargar la lista de clientes para reflejar los cambios.

---

## Evaluación frontend

Ahora que tienes el frontend y el backend funcionando y considerando que conoces como esta funciona todo, realiza una evaluación similar a la del backend, pero en este caso enfocado en el frontend.

- Crea una rama nueva en tu repositorio llamada `feature/frontend-eval`.
- Implementa todo lo necesario para que el frontend pueda manejar productos (Product) similar a como se hizo con clientes (Client), respeta la estructura de carpetas y crea los archivos necesarios (Products.ts, types.ts, etc).
- Agrega un formulario para registrar productos con los campos necearios, toma como referencia el modelos de producto que usaste en el backend.
- Muestra la lista de productos registrados en la misma página.
- Al finalizar, deberias de tener un frontend funcional que maneje productos y clientes.

# 8. Retos de la tarea (opcionales)

> Como bien sabes son opcionales, pero te recomiendo que los intentes hacer para reforzar tus conocimientos, tu ya sabes por que 😎. Existen recompensas, ahora te dire una de ellas lo cual es que se garantizan puntos extra en la evaluación pero la cantidad de los puntos extra se revelara al finalizar el tiempo de entrega de la tarea. (existen recompensas)

1. Validar que los campos “nombre” y “email” no estén vacíos antes de enviar.
2. Agregar un botón “Eliminar cliente” (requiere crear endpoint DELETE en backend).
3. Mostrar mensajes de error y éxito directamente en la página (no con `alert`).
4. Agregar un campo “edad” y actualizar la tabla en la base de datos.
5. Investigar: ¿qué diferencia hay entre `fetch` y `axios`?

---

# 9. Sección de investigación (para entregar)

> Dentro del README.md de tu proyecto, crea una sección llamada “Investigación” y responde brevemente las siguientes preguntas:

> porfavor no uses respuestas muy largas, solo un par de lineas por cada pregunta, no seas una maquina que escribe ensayos 😅 o que copia y pega, se tu mismo repondiendo.

- ¿Qué es Spring Boot y por qué simplifica el desarrollo web con Java?
- ¿Qué diferencia hay entre `@RestController` y `@Controller`?
- ¿Qué es JPA y cómo ayuda a mapear objetos en una base de datos relacional?
- ¿Por qué Neon se considera una base “serverless”?
- ¿Cómo funciona el CORS y por qué fue necesario configurarlo?

---

# 10. Evaluación sugerida

| Criterio                                   | Puntaje |
| ------------------------------------------ | ------: |
| Configuración de Neon y conexión funcional |      20 |
| Backend Spring Boot con endpoints REST     |      25 |
| Backend Evaluación                         |      50 |
| Frontend con formulario y Fetch            |      25 |
| Correcta manipulación del DOM              |      10 |
| Retos e investigación                      |      20 |
| Evaluacion Frontend                        |      40 |
| Estilos y presentación                     |      10 |
| Documentación en el README.md              |      10 |
| **Total**                                  | **200** |

# Fin de la práctica

¡Felicidades! Has completado la práctica sobre manipulación de formularios con Spring Boot y Neon. Ahora tienes una comprensión sólida de cómo construir un backend robusto y un frontend interactivo para gestionar clientes y productos. Sigue practicando y explorando nuevas tecnologías para seguir mejorando tus habilidades de desarrollo web. ¡Buen trabajo! 👏🚀
