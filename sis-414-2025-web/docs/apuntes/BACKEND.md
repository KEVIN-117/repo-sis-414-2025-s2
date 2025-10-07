
---
# BACKEND

# Introduccion

### Roles del desarrollo backend

1. **Programador**: Un rol principal es el de programador en el que se dedican a escribir código, código que es el núcleo de la aplicación y este se encarga del procesamiento de datos, define la lógica del negocio, interacción con la base de datos, y la comunicación con el frontend, que se pondrá en un servidor y se expondrá a millones de usuarios mediante la web. Los programadores backend utilizan lenguajes de programacion tales como java, python, Nodejs y trabajan en la implementacion de funcionalidades y servicios que reponderan a las solicitudes del cliente
2. **DB admin (administrador de base de datod)**: es un rol especializado en administración de bases de datos. Se encarga de diseñar, implementar y mantener la estructura de la base de datos que respalda la aplicación. Esto incluye definir las tablas, índices, relaciones y reglas de integridad necesarias para almacenar y organizar los datos de manera eficiente y segura. También se preocupa por la seguridad de los datos y establece los permisos adecuados para garantizar que solo usuarios autorizados tengan acceso a la información sensible.
3. **Server Admin (Administrador de servidor)**: es responsable de administrar y mantener el servidor en el que se aloja la aplicación. Esto implica tareas como la configuración del servidor, la instalación de software, la gestión de recursos del servidor, el monitoreo del rendimiento, la implementación de medidas de seguridad y la solución de problemas relacionados con el servidor. El objetivo es asegurarse de que el servidor esté funcionando de manera eficiente, segura y disponible para atender las solicitudes de los usuarios de la aplicación.

### **Frontend (Clientes)**:

El frontend es la parte de una aplicación o sitio web donde los usuarios interactúan directamente. Los elementos con los que los usuarios pueden interactuar incluyen navegadores web, dispositivos móviles (como teléfonos y tabletas) y dispositivos IoT (Internet of Things).

Dentro del frontend, se utilizan varias tecnologías para crear la interfaz de usuario y permitir la interacción:

1. Navegadores: Los navegadores web son aplicaciones que interpretan y muestran contenido web. Utilizan tres tecnologías principales:
    - HTML (HyperText Markup Language): Se utiliza para estructurar el contenido de la página web, como texto, imágenes, formularios, etc.
    - CSS (Cascading Style Sheets): Se encarga de aplicar estilos visuales al contenido HTML, como diseño, colores, fuentes, etc. Se mencionan algunas librerías CSS como `Tailwind`, `Bootstrap` y `Foundation` que facilitan el proceso de diseño.
    - JavaScript: Es un lenguaje de programación que permite agregar interactividad y dinamismo a las páginas web. Se mencionan algunos frameworks populares como `Angular`, `React` y `Vue`, que facilitan el desarrollo de aplicaciones web complejas.
2. Móvil: En el contexto móvil, hay tres ecosistemas principales:
    - iOS: Para crear aplicaciones para dispositivos Apple (iPhone, iPad), se utilizan principalmente los lenguajes de programación `Swift` y `Objective-C`.
    - Android: Para crear aplicaciones para dispositivos Android, los lenguajes de programación más comunes son `Kotlin` y `Java`.
    - Cross-platform (plataformas cruzadas): En este enfoque, se desarrolla una base de código única que se puede utilizar para crear aplicaciones para múltiples plataformas, como iOS y Android. Algunas tecnologías populares para esto son `React Native`, `Flutter` y `.NET MAUI`.

### **Backend (Servidor)**:

El backend es la parte de una aplicación que se encarga de la lógica y el procesamiento de datos. Contiene la lógica de negocio, la interacción con la base de datos y se encarga de proporcionar datos y funcionalidades al frontend. Algunas tecnologías comunes utilizadas para el desarrollo del backend incluyen:

1. Python:
    - Django: Es un framework web de alto nivel y de propósito general que utiliza Python. Es conocido por su enfoque en la simplicidad y la rapidez de desarrollo.
    - Flask: Es un microframework ligero que facilita la creación rápida de aplicaciones web con Python.
    - FastAPI: Es un framework moderno y de alto rendimiento para construir APIs con Python, conocido por su velocidad y facilidad de uso.
2. JavaScript/TypeScript:
    - Express: Es un framework de JavaScript que se utiliza para construir aplicaciones web y APIs. Es simple y flexible, lo que permite a los desarrolladores tener más control sobre su código.
    - NestJS: Es un framework de TypeScript para la creación de aplicaciones escalables y eficientes, basado en los principios de Angular.
3. Ruby:
    - Ruby on Rails: Es un framework web escrito en Ruby que sigue la convención sobre configuración. Es conocido por su enfoque en la productividad y la facilidad de uso.
4. PHP:
    - Laravel: Es un framework web de código abierto escrito en PHP que sigue el patrón de diseño MVC (Modelo-Vista-Controlador). Es conocido por su elegancia y su gran comunidad.
    - Symfony: Es otro framework PHP de alto rendimiento que se centra en la modularidad y la reutilización de componentes.
5. Java:
    - Spring: Es un framework de Java ampliamente utilizado que proporciona una amplia gama de funcionalidades y herramientas para el desarrollo web.
6. Go:
    - Gin: Es un framework web escrito en Go que se destaca por su velocidad y eficiencia.
7. C#:
    - .NET Core: Es un framework de código abierto desarrollado por Microsoft que se puede utilizar con C# para crear aplicaciones web y servicios.

La conexión entre el frontend y el backend se realiza a través de APIs (Application Programming Interfaces) que utilizan el protocolo HTTP para comunicarse. El frontend realiza solicitudes a estas APIs para obtener datos o realizar acciones, y el backend procesa esas solicitudes y proporciona las respuestas adecuadas.

### **Como se construye el backend**: para ejemplificar tomaremos como referencia un restaurante

- Los `Clientes` representan a los usuarios de la aplicación que interactúan con el frontend. Envían solicitudes y órdenes al restaurante (backend) a través del frontend.
- El `Mesero` actúa como una API que recibe las solicitudes de los clientes (mediante el frontend) y toma las órdenes. El mesero representa los puntos de acceso (endpoints/APIs) en el backend que reciben las peticiones del cliente.
- La `Cocina` es donde se prepara la comida, es decir, donde ocurre la lógica del backend. Aquí se encuentran los `Chefs` que son los desarrolladores que construyen la lógica para procesar las solicitudes y generar respuestas. Los `Implementos` son las librerías y herramientas que los desarrolladores utilizan para facilitar el desarrollo (por ejemplo, bases de datos, herramientas de manejo de archivos, etc.). Y las `Recetas` son los frameworks que proporcionan patrones de trabajo y soluciones predefinidas para ciertos problemas comunes en el desarrollo backend.

### **HTTP**:

- El protocolo HTTP (Hypertext Transfer Protocol) es un protocolo de aplicación utilizado para la transferencia de datos entre un cliente (como un navegador web) y un servidor web.
- El protocolo HTTPS (HTTP Secure) es una versión segura del protocolo HTTP que utiliza cifrado SSL/TLS para proteger los datos en tránsito.
- Codigos de estado: El protocolo HTTP (Hypertext Transfer Protocol) utiliza códigos de estado de tres dígitos para indicar el resultado de una solicitud realizada por un cliente al servidor web. Estos códigos de estado se incluyen en la respuesta del servidor y proporcionan información sobre si la solicitud se ha realizado correctamente o si ha ocurrido algún error. A continuación, se definen los principales códigos de estado del protocolo HTTP junto con sus descripciones:
1. **1XX (Informacional)**: Indica que la solicitud fue recibida y está siendo procesada.
    - 100: Continuar
    - 102: Procesando
2. **2XX (Éxito)**: Indica que la solicitud fue recibida, entendida y aceptada correctamente.
    - 200: OK
    - 201: Creado
    - 204: Sin contenido (la solicitud fue exitosa, pero no hay contenido para devolver)
3. **3XX (Redirecciones)**: Indica que se requiere una acción adicional para completar la solicitud.
    - 300: Múltiples opciones
    - 301: Movido permanentemente
    - 307: Redirección temporal
    - 308: Redirección permanente
4. **4XX (Errores del cliente)**: Indica que la solicitud contiene errores y no puede ser procesada.
    - 400: Solicitud incorrecta
    - 401: No autorizado (se requiere autenticación)
    - 404: No encontrado (el recurso solicitado no existe)
    - 409: Conflicto (la solicitud entra en conflicto con el estado actual del servidor)
5. **5XX (Errores del servidor)**: Indica que el servidor no pudo procesar la solicitud debido a un error interno del servidor.
    - 500: Error interno del servidor
    - 502: Bad Gateway (la puerta de enlace o servidor intermedio recibió una respuesta inválida del servidor final)
    - 504: Gateway Timeout (el servidor final no respondió a tiempo)

Es importante mencionar que existen muchos más códigos de estado en HTTP que cubren diferentes situaciones y escenarios, pero estos son algunos ejemplos clave. Los códigos de estado permiten que el cliente y el servidor se comuniquen y entiendan el resultado de una solicitud, lo que ayuda a diagnosticar y solucionar problemas durante las interacciones entre el cliente y el servidor web.

- Esto no son todos los codigos de estado puedes revisar la pagina para poder entender los codigos de estado de una manera muy divertida y la pagina es: [HTTP Cats](https://www.notion.so/http.cat)

### Aprendiendo el concepto de **APIs**:

Las APIs (Interfaces de Programación de Aplicaciones) son conjuntos de reglas y protocolos que permiten que diferentes componentes de software se comuniquen entre sí. Actúan como puntos de acceso que permiten que una aplicación o sistema interactúe con otro para acceder a sus servicios, funcionalidades y datos.

El funcionamiento de las APIs implica dos roles principales:

1. **Clientes**: Son las aplicaciones o sistemas que envían solicitudes a través de la API para acceder a los servicios o datos proporcionados por otro sistema o servidor.
2. **Servidores**: Son los sistemas o aplicaciones que reciben las solicitudes realizadas por los clientes a través de la API y responden proporcionando los datos o ejecutando las operaciones solicitadas.

Las `APIs` exponen puntos de acceso conocidos como `endpoints` o rutas, que definen qué operaciones y recursos están disponibles para ser utilizados por los clientes. Cada `endpoint` corresponde a una funcionalidad específica que se puede solicitar a través de la API. Por ejemplo, en una API de un servicio de usuarios, podrían existir `endpoints` como `/users` para obtener la lista de usuarios, `/users/create` para crear un nuevo usuario y `/users/:id` para obtener la información de un usuario específico, donde `:id` representa el identificador único del usuario a esto se le conoce como `endpoint`  dinámico.

Para intercambiar datos entre los clientes y los servidores a través de la API, es común utilizar formatos de empaquetado como `JSON` o `XML`. Estos formatos permiten estructurar y codificar la información para que pueda ser enviada y recibida correctamente.

Un tipo de API muy conocido y ampliamente utilizado es `REST API` (`Representational State Transfer`), una arquitectura que se basa en el protocolo HTTP y que utiliza verbos HTTP (GET, POST, PUT, DELETE, etc.) para realizar operaciones en los recursos expuestos mediante los `endpoints`.

### **`Rest API`**:

- Correcto, el concepto de API REST (`Representational State Transfer`) está estrechamente relacionado con el concepto CRUD ($Create$, $Read$, $Update$, $Delete$). A continuación, se explica el significado y relación entre ambos:

**CRUD** es un acrónimo que representa las operaciones básicas que se pueden realizar en cualquier sistema de gestión de bases de datos o servicio web:

- **C**: `Create` (Crear) - Representa la operación de crear nuevos datos o recursos en el sistema.
- **R**: `Read` (Leer) - Representa la operación de leer o recuperar datos o recursos existentes del sistema.
- **U**: `Update` (Actualizar) - Representa la operación de actualizar o modificar datos o recursos existentes en el sistema.
- **D**: `Delete` (Eliminar) - Representa la operación de eliminar datos o recursos existentes en el sistema.

Estas operaciones CRUD son las funciones fundamentales que se realizan en una base de datos o en una API para administrar los datos. Cada una de ellas corresponde a un verbo o método HTTP específico:

- **CREATE** se corresponde con el verbo HTTP `POST`. Se utiliza para enviar datos nuevos al servidor para que sean almacenados.
- **READ** se corresponde con el verbo HTTP `GET`. Se utiliza para obtener datos del servidor, ya sea una lista de recursos o un recurso individual.
- **UPDATE** se corresponde con los verbos HTTP `PUT` o `PATCH`. Se utilizan para actualizar los datos de un recurso existente en el servidor.
- **DELETE** se corresponde con el verbo HTTP `DELETE`. Se utiliza para eliminar un recurso existente en el servidor.

**API REST** es un estilo de arquitectura para sistemas distribuidos que utiliza el protocolo HTTP para definir cómo se deben acceder y manipular los recursos. En una API REST, los `endpoints` representan los recursos y las operaciones CRUD se realizan utilizando los verbos HTTP correspondientes:

- Para crear un nuevo recurso, se realiza una solicitud `POST` al `endpoint` correspondiente.
- Para leer un recurso, se realiza una solicitud `GET` al `endpoint` específico del recurso.
- Para actualizar un recurso, se realiza una solicitud `PUT` o `PATCH` al `endpoint` del recurso que se quiere actualizar.
- Para eliminar un recurso, se realiza una solicitud `DELETE` al `endpoint` específico del recurso que se quiere eliminar.

### La nube

- La nube es un entorno informático remoto donde se alojan y entregan servicios y código a través de Internet. Es un conjunto de servidores y recursos ubicados en centros de datos en diferentes ubicaciones geográficas. Los servicios en la nube permiten a los clientes acceder a recursos informáticos de manera flexible y escalable, sin necesidad de gestionar infraestructura localmente. Algunos de los proveedores de servicios en la nube más conocidos son AWS (`Amazon Web Services`), Azure (Microsoft Azure) y Google Cloud, que ofrecen una amplia gama de servicios y soluciones para diversas necesidades empresariales.

### Devops

- busca la `integración` y `colaboración` entre los equipos de desarrollo de software y los equipos de operaciones, con el objetivo de `mejorar` la `entrega`, `calidad` y `eficiencia del software`. Se basa en la automatización, la integración continua, la entrega continua y la cultura ágil, promoviendo una colaboración cercana entre los desarrolladores y los administradores de sistemas. El enfoque de DevOps abarca desde la concepción de la idea hasta la entrega y operación en producción, y busca una mejora continua en todo el ciclo de vida del desarrollo de software.

### Servidores

- Un servidor se compone de algunos elementos básicos, como la `CPU`, `RAM`, `SSD` (dispositivo de almacenamiento) y otros componentes que permiten su funcionamiento. Los servidores, o granjas de servidores, son utilizados para alojar aplicaciones y servicios, y pueden estar organizados bajo diferentes arquitecturas.

En la nube, existen tres tipos principales de arquitecturas de servicios:

1. `IaaS` (Infraestructura como Servicio): Proporciona recursos de infraestructura, como máquinas virtuales, redes y almacenamiento, que los usuarios pueden configurar y gestionar según sus necesidades. Es decir, ofrece una infraestructura completa y flexible en la que los usuarios pueden implementar y ejecutar sus aplicaciones.
    
    Slack → SaaS
    
    Digital Ocean → IaaS 
    
2. `PaaS` (Plataforma como Servicio): Ofrece una plataforma completa para el desarrollo, pruebas y despliegue de aplicaciones. Los desarrolladores pueden concentrarse en el desarrollo de la aplicación, mientras que la plataforma se encarga de la infraestructura subyacente y de proporcionar herramientas para facilitar el proceso de desarrollo.
    
    Firebase → PaaS
    
3. `SaaS` (Software como Servicio): Proporciona aplicaciones de software listas para usar que se entregan a los usuarios a través de Internet. Los usuarios pueden acceder a estas aplicaciones mediante un navegador web sin necesidad de instalar o mantener software en sus dispositivos.

Estas arquitecturas permiten a las organizaciones y desarrolladores aprovechar los servicios en la nube de manera flexible y escalable, liberándolos de la responsabilidad de administrar y mantener infraestructura física.

### Cookies y sesiones

**Cookies**:
Las cookies son pequeños archivos de texto que se almacenan en el navegador del usuario cuando esta visita un sitio web. Estos archivos contienen información específica que el servidor puede utilizar para identificar al usuario o realizar un seguimiento de ciertas acciones y preferencias. Las cookies son útiles para mantener el inicio de sesión del usuario en una aplicación o sitio web, ya que pueden almacenar información de autenticación y sesión. Además, las cookies pueden tener una fecha de expiración, lo que les permite persistir en el navegador del usuario durante un período de tiempo específico, incluso después de que el usuario cierre el navegador. Adicional a eso cabe recalcar que las cookies solo están disponibles en el navegador y no para el ecosistema móvil y como alternativa a ello se presenta la tecnología `JWT` que esta está disponible en ambos ecosistemas

**Sesiones**:
Las sesiones son una forma de mantener el estado de la aplicación para un usuario específico durante su interacción con el sitio web o aplicación. A diferencia de las cookies que se almacenan en el navegador del usuario, las sesiones se mantienen en el servidor. Cuando un usuario inicia sesión o interactúa con la aplicación, se crea una sesión en el servidor que se asocia con un identificador único (como un ID de sesión o un token). Este identificador se envía al cliente (generalmente en forma de cookie) y se utiliza para identificar al usuario en cada solicitud posterior. La información relevante sobre el usuario se almacena en el servidor y se asocia con la sesión activa, lo que permite que la aplicación recuerde el estado del usuario entre diferentes páginas o solicitudes.

**JWT (JSON Web Token)**:
Los JSON Web Tokens (JWT) son una alternativa a las cookies para mantener la autenticación y el estado del usuario en una aplicación. Un JWT es un token compacto y seguro que se emite por el servidor y se envía al cliente (navegador o aplicación móvil) como una cadena de caracteres. Los JWT contienen información codificada en formato JSON, como el ID del usuario y los roles, y están firmados digitalmente para garantizar su autenticidad. Al estar basados en JSON, los JWT son legibles y fáciles de transmitir entre diferentes plataformas, incluidos navegadores y aplicaciones móviles. Al igual que las cookies, los JWT pueden tener una fecha de expiración, lo que les permite ser utilizados para mantener el inicio de sesión y la autorización durante un período específico.

### Bases de datos

- Una base de datos es un servicio que permite persistir y gestionar información de una aplicación o sistema. Existen bases de datos relacionales y no relacionales, cada una adecuada para diferentes necesidades. El ORM es una herramienta que permite abstraer las consultas SQL y trabajar con los datos de la base de datos utilizando objetos en el lenguaje de programación utilizado.

**Base de Datos**:
Una base de datos es un servicio que se ejecuta en un servidor y tiene la capacidad de almacenar y persistir información de una aplicación o sistema. Funciona como un repositorio centralizado donde se almacenan y organizan datos de manera estructurada y segura. Las bases de datos permiten que los datos sean almacenados de forma permanente y accesible para su posterior consulta y manipulación.

Existen dos tipos principales de bases de datos:

1. **Bases de Datos Relacionales**: En esta categoría se encuentran sistemas de gestión de bases de datos como MySQL, PostgreSQL y Oracle, entre otros. Estos sistemas están basados en el modelo relacional y utilizan el lenguaje SQL (Structured Query Language) para interactuar con los datos. Los datos se organizan en tablas con filas y columnas, y las relaciones entre las tablas se definen mediante claves primarias y claves foráneas. Las bases de datos relacionales son ideales para aplicaciones donde la integridad de los datos y las relaciones entre ellos son críticas.
2. **Bases de Datos No Relacionales (NoSQL)**: En esta categoría se encuentran sistemas de bases de datos como MongoDB y Cassandra. Estos sistemas utilizan modelos de datos diferentes al modelo relacional, y no requieren el uso de SQL para interactuar con los datos. Algunas bases de datos NoSQL son orientadas a documentos, columnas, clave-valor o grafos, lo que les permite adaptarse a diferentes tipos de datos y escenarios de aplicación. Las bases de datos NoSQL son especialmente útiles cuando se necesita una escalabilidad y flexibilidad alta, y cuando la estructura de los datos es variable o no se ajusta bien a un esquema fijo.

**ORM (Mapeo Objeto-Relacional)**:
El ORM es una tecnología que permite abstraer las consultas que se realizan a la base de datos utilizando el paradigma orientado a objetos. Con un ORM, los objetos de la aplicación se mapean directamente a las tablas de la base de datos, lo que facilita el trabajo con los datos sin tener que escribir directamente consultas SQL. Esto mejora la productividad del desarrollo y permite una mayor portabilidad entre diferentes sistemas de bases de datos. Los ORM son comúnmente utilizados en aplicaciones que utilizan bases de datos relacionales, ya que facilitan la interacción con los datos de una manera más natural para los programadores que trabajan con objetos en el lenguaje de programación que utilizan.

### Escalamiento

- El escalado (escalamiento) es una estrategia que se utiliza en el ámbito de la computación y la infraestructura para manejar el crecimiento y la demanda creciente de recursos y servicios. Existen dos enfoques principales de escalado:
- `Escalado vertical`: Este enfoque implica aumentar los recursos de una máquina o servidor existente para satisfacer una mayor carga de trabajo. Esto podría implicar, por ejemplo, agregar más CPU, RAM o disco a la misma máquina. El escalado vertical puede ser útil cuando se necesita aumentar rápidamente la capacidad de una máquina en particular, pero tiene limitaciones en términos de costo y capacidad de expansión. Además, puede generar períodos de inactividad al detener y reiniciar la máquina con los nuevos recursos.
- `Escalado horizontal`: En este enfoque, en lugar de aumentar los recursos de una única máquina, se agregan más máquinas a la infraestructura para distribuir la carga de trabajo. Es decir, se crea un conjunto de servidores (Cluster) idénticos que trabajan juntos para atender las solicitudes y compartir la carga. Esto permite una mayor escalabilidad y flexibilidad, ya que se pueden agregar o eliminar servidores según las necesidades sin detener el servicio. El escalado horizontal es especialmente útil cuando la demanda de recursos es impredecible o cuando se espera un crecimiento continuo de usuarios o tráfico.

Para asegurar que la carga se distribuya de manera equitativa entre los servidores en el escalado horizontal, se utiliza un balanceador de carga (Load Balancer). El balanceador de carga monitorea el tráfico entrante y distribuye las solicitudes a los diferentes servidores del conjunto (Cluster) en función de ciertos algoritmos de balanceo de carga. Esto garantiza que ningún servidor esté sobrecargado y que la carga se distribuya de manera eficiente para lograr una mayor disponibilidad y rendimiento del servicio.

En resumen, el escalado vertical implica aumentar los recursos de una máquina existente, mientras que el escalado horizontal agrega más máquinas para distribuir la carga. El balanceador de carga asegura que las solicitudes se distribuyan de manera equitativa entre los servidores para mejorar el rendimiento y la disponibilidad del servicio. La elección entre el escalado vertical y horizontal dependerá de los requisitos específicos y las necesidades de escalabilidad de la aplicación o servicio.

### **Replicación**:

La replicación es un proceso en el cual los datos almacenados en una base de datos se copian y sincronizan en múltiples servidores o nodos, de modo que los mismos datos estén disponibles y actualizados en todos ellos. El objetivo principal de la replicación es mejorar la disponibilidad, la redundancia y la escalabilidad del sistema de base de datos.

Cuando se realiza la replicación, uno de los servidores se designa como el servidor maestro o primario, y los demás servidores se denominan servidores esclavos o secundarios. Cualquier cambio en los datos realizados en el servidor maestro se replica automáticamente en los servidores esclavos, lo que garantiza que todos los nodos tengan la misma información actualizada en tiempo real.

La replicación puede brindar varios beneficios:

1. **Mejora de la disponibilidad**: Si uno de los servidores experimenta un fallo, los demás servidores aún pueden atender las solicitudes y proporcionar acceso a los datos.
2. **Mayor rendimiento**: Los servidores esclavos pueden utilizarse para distribuir la carga de lectura y consultar datos, lo que mejora el rendimiento global del sistema.
3. **Mayor redundancia**: Al tener múltiples copias de los datos, se aumenta la redundancia y se reduce el riesgo de pérdida de datos.
4. **Escalabilidad**: La replicación permite agregar más servidores para manejar un mayor número de usuarios y una carga de trabajo creciente.

Es importante tener en cuenta que, aunque la replicación mejora la disponibilidad y la redundancia, no es una solución completa para la recuperación ante desastres o errores catastróficos. Para una recuperación completa y confiable, se pueden implementar estrategias adicionales, como la copia de seguridad y la recuperación ante desastres (DR, por sus siglas en inglés).

### **Cache**:

La caché en el backend es una técnica que consiste en almacenar temporalmente datos o resultados de operaciones costosas en memoria o en un almacenamiento rápido, con el propósito de acelerar el acceso y mejorar el rendimiento de una aplicación web o servicio. Cuando una tarea o solicitud es realizada, el resultado se guarda en la caché, y si la misma tarea o solicitud es solicitada nuevamente, se puede servir directamente desde la caché en lugar de realizar nuevamente el cálculo o consulta. Es decir la caché es una técnica valiosa para mejorar el rendimiento y la eficiencia de una aplicación web al almacenar temporalmente datos o resultados en memoria. Sin embargo, su implementación debe ser cuidadosamente diseñada para adaptarse a las características y requisitos específicos de cada aplicación.

Algunos puntos importantes a considerar sobre la caché en el backend:

1. **Mejora del rendimiento**: Al almacenar resultados previamente calculados, la aplicación puede responder más rápido a las solicitudes posteriores, reduciendo el tiempo de procesamiento y mejorando la experiencia del usuario.
2. **Ejemplos de uso**: La caché es especialmente útil en aplicaciones donde los datos cambian con poca frecuencia, como sitios de comercio electrónico, blogs, sitios de noticias y otros contenidos estáticos. No es tan adecuada para aplicaciones en tiempo real, donde la información cambia constantemente y debe ser actualizada en cada solicitud.
3. **Evitar carga innecesaria**: Al evitar la repetición de tareas costosas o consultas a la base de datos, la caché puede reducir la carga del servidor y mejorar la escalabilidad del sistema.
4. **Consideraciones**: Es importante diseñar la estrategia de caché de acuerdo a las necesidades específicas de la aplicación. Se deben tener en cuenta el tiempo de expiración de los datos en la caché, las políticas de invalidación para asegurar la coherencia de los datos, y el tamaño de la caché para evitar el consumo excesivo de memoria.
5. **Seguridad**: La caché también puede ser utilizada para mitigar ataques de denegación de servicio (DDoS) al almacenar temporalmente copias de las páginas web y servir a los usuarios desde la caché, en lugar de generar nuevas páginas cada vez.

### **Colas de tareas**:

- Las colas de tareas en el backend son una técnica común utilizada para gestionar tareas asíncronas y procesamiento en segundo plano. Consisten en encolar tareas o trabajos en una estructura de datos, como una cola, para que puedan ser procesadas de manera ordenada y controlada por uno o más trabajadores o consumidores. Es decir las colas de tareas en el backend son una herramienta valiosa para mejorar la eficiencia y escalabilidad de una aplicación al permitir la ejecución asíncrona y en segundo plano de tareas costosas, liberando recursos y mejorando la experiencia del usuario.

En el contexto del backend, las colas de tareas son particularmente útiles para tareas que requieren tiempo y recursos significativos, como procesamiento de datos, generación de informes, envío de correos electrónicos, notificaciones o cualquier operación que pueda ralentizar la respuesta inmediata del servidor a una solicitud.

El flujo típico de trabajo con colas de tareas en el backend es el siguiente:

1. **Productor de Tareas**: Un componente del backend, como una API, recibe una solicitud para realizar una tarea que puede llevar tiempo o ser costosa en recursos. En lugar de procesar la tarea de inmediato, el backend encola la tarea en la cola de tareas.
2. **Cola de Tareas**: La cola de tareas es una estructura de datos donde las tareas se almacenan en orden de llegada. Puede implementarse utilizando sistemas de colas como RabbitMQ, Redis, Kafka o servicios de colas administradas en la nube como AWS SQS o Google Cloud Pub/Sub.
3. **Trabajadores o Consumidores**: En el backend, uno o varios trabajadores o consumidores están constantemente escuchando la cola de tareas en busca de nuevas tareas encoladas. Cuando un trabajador obtiene una tarea de la cola, la procesa en segundo plano, liberando al productor y permitiendo que responda rápidamente a otras solicitudes.
4. **Procesamiento en Segundo Plano**: El trabajador puede realizar la tarea en segundo plano sin bloquear el hilo principal del servidor. Una vez que ha completado la tarea, puede actualizar la base de datos, enviar notificaciones o realizar cualquier acción requerida por la tarea.

Las colas de tareas en el backend ofrecen varias ventajas:

- **Mejora de la Escalabilidad**: Permite manejar grandes volúmenes de tareas sin sobrecargar el servidor principal.
- **Tiempo de Respuesta Rápido**: Permite que el servidor responda rápidamente a las solicitudes del cliente, ya que la tarea en segundo plano se procesa después.
- **Tolerancia a Fallos**: Si un trabajador falla durante la ejecución de una tarea, la tarea permanece en la cola y puede ser recogida por otro trabajador para procesarla.
- **Priorización de Tareas**: Las colas de tareas pueden priorizar tareas para garantizar que las tareas importantes se procesen antes.
- **Reducción de Bloqueos**: Ayuda a evitar bloqueos en el servidor al liberar al hilo principal de tareas costosas.

### **Server Side Rendering**:

El Server Side Rendering es una técnica utilizada en desarrollo web donde el contenido HTML de una página web se genera en el servidor y luego se envía al cliente para su visualización. En contraste con el tradicional Client Side Rendering (CSR), donde el contenido HTML se genera en el navegador del cliente utilizando JavaScript, el SSR realiza el renderizado directamente en el servidor antes de entregar la página al navegador. Es decir el `Server Side Rendering` (SSR) es una técnica que genera el contenido HTML de una página en el servidor antes de enviarlo al cliente. Tiene ventajas como una carga inicial más rápida y una mejor indexación por parte de los motores de búsqueda. Sin embargo, el  `Client Side Rendering` (CSR) brinda una mayor interactividad y una experiencia de usuario más dinámica. La combinación de ambas técnicas en el `renderizado híbrido` (SSR + CSR) ofrece una experiencia óptima y equilibrada para el usuario.

**Beneficios desde el lado del servidor (SSR)**:

- **Rapidez**: Al generar el contenido en el servidor, la página se carga más rápidamente en el navegador, lo que mejora la experiencia del usuario, especialmente en conexiones de internet lentas o en dispositivos con recursos limitados.
- **SEO (Search Engine Optimization)**: Los motores de búsqueda pueden rastrear y entender mejor el contenido de la página, lo que puede mejorar el posicionamiento y visibilidad en los resultados de búsqueda.
- **Representación inicial más completa**: El contenido de la página está disponible desde el primer momento, lo que permite una mejor representación inicial y evita el efecto de "flash" o "blink" que ocurre a menudo en CSR mientras se espera a que se cargue y renderice el contenido.

**Beneficios desde el lado del cliente (CSR)**:

- **Interactividad**: El SSR inicial puede ser estático y no interactivo, mientras que el CSR permite que la aplicación se vuelva altamente interactiva, ya que JavaScript se encarga de manejar las interacciones en el navegador sin necesidad de recargar la página completa.
- **Mejora de la experiencia de usuario**: La interactividad proporcionada por el CSR crea una experiencia de usuario más fluida y dinámica, ya que las actualizaciones de la interfaz se realizan de manera instantánea, sin la necesidad de cargar nuevas páginas.
- **Menor carga inicial**: En el CSR, solo se carga el "skeleton" o estructura básica de la página en HTML desde el servidor, y luego el cliente solicita los datos y componentes adicionales a medida que los necesita, lo que puede reducir la carga inicial.

**Renderizado Híbrido (SSR + CSR)**:
Al combinar el SSR y el CSR, se puede lograr una experiencia aún mejor. Esto se conoce como renderizado híbrido o universal. En esta técnica, el SSR se utiliza para generar la representación inicial de la página, y luego el cliente asume el control y se encarga de la interacción y actualizaciones posteriores. Esto combina los beneficios de ambas técnicas, permitiendo una carga inicial rápida, una mejor experiencia de usuario y una mayor interactividad.