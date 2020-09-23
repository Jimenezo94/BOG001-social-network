# Creando una Red Social

## 1\. Preámbulo

## 3\. Objetivos de aprendizaje

El objetivo principal de aprendizaje de este proyecto es construir una
[Single-page Application (SPA)]
(con más de una vista / página) en la que podamos **leer y escribir datos.**

### HTML y CSS

* [x] [Uso de HTML semántico.](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
* [x] Uso de selectores de CSS.
* [x] Construir tu aplicación respetando el diseño realizado (maquetación).
* [ ] [Uso de flexbox en CSS.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### DOM y Web APIs

* [x] Uso de selectores del DOM.
* [x] Manejo de eventos del DOM.
* [x] [Manipulación dinámica del DOM.](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n)
\(appendChild \|createElement \| createTextNode\| innerHTML \| textContent \| etc\.\)
* [ ] [History API.]
* [ ] [localStorage.]

### JavaScript

* [x] Uso de condicionales \(if\-else \| switch \| operador ternario\)
* [x] Uso de funciones \(parámetros \| argumentos \| valor de retorno\)
* [x] Manipular arrays \(filter \| map \| sort \| reduce\)
* [ ] Manipular objects \(key \| value\)
* [x] Uso ES modules ([`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
\| [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export))
* [ ] Diferenciar entre expression y statements.
* [ ] Diferenciar entre tipos de datos primitivos y no primitivos.
* [x] [Uso de callbacks.](https://developer.mozilla.org/es/docs/Glossary/Callback_function)
* [ ] [Consumo de Promesas.](https://scotch.io/tutorials/javascript-promises-for-dummies#toc-consuming-promises)

### Testing

* [ ] [Testeo unitario.](https://jestjs.io/docs/es-ES/getting-started)
* [ ] [Testeo asíncrono.](https://jestjs.io/docs/es-ES/asynchronous)
* [ ] [Uso de librerias de Mock.](https://jestjs.io/docs/es-ES/manual-mocks)

### Estructura del código y guía de estilo

* [x] Organizar y dividir el código en módulos (Modularización)
* [ ] Uso de identificadores descriptivos \(Nomenclatura \| Semántica\)
* [ ] Uso de linter (ESLINT)

### Git y Github

* [x] Uso de comandos de git \(add \| commit \| pull \| status \| push\)
* [x] Manejo de repositorios de GitHub \(clone \| fork \| gh\-pages\)
* [x] Colaboración en Github \(branches \| pull requests \| \|tags\)
* [ ] Organización en Github \(projects \| issues \| labels \| milestones\)

### Firebase

* [ ] [Firestore.](https://firebase.google.com/docs/firestore)
* [x] [Firebase Auth.](https://firebase.google.com/docs/auth/web/start)
* [x] [Firebase security rules.](https://firebase.google.com/docs/rules)
* [x] Observadores. ([onAuthStateChanged](https://firebase.google.com/docs/auth/web/manage-users?hl=es#get_the_currently_signed-in_user)
\| [onSnapshot](https://firebase.google.com/docs/firestore/query-data/listen#listen_to_multiple_documents_in_a_collection))

### UX

* [ ] Diseñar la aplicación pensando y entendiendo al usuario.
* [ ] Crear prototipos para obtener feedback e iterar.
* [ ] Aplicar los principios de diseño visual (contraste, alineación, jerarquía)
* [ ] Planear y ejecutar tests de usabilidad.

## 4\. Consideraciones generales

* Este proyecto se debe trabajar en equipos de tres.
* La lógica del proyecto debe estar implementada completamente en JavaScript
(ES6+), HTML y CSS :smiley:. Para este proyecto **no está permitido** utilizar
*frameworks* o librerías de CSS y JS.
* La división y organización del trabajo debe permitir, sin excepciones, que
**cada integrante** del equipo practique el aprendizaje de todo lo involucrado
en **cada historia**. *No se dividan el trabajo como en una fábrica.*
    * ¿Hasta acá has avanzado en tus proyectos con cierta fluidez y sin mayores
    problemas? Sé generosa con tus compañeras, permíteles aprender y practicar
    sin restricciones, aunque tome un poco más de tiempo. Aproveha de
    *coachearlas*, de hacer *pair programming*, una de las mejores maneras de
    aprender es explicando verbalmente.
    * ¿Se te está haciendo difícil y te cuesta un poco más avanzar? No te quedes
    con las partes "fáciles" del proyecto, conversa, negocia, exige tu oportunidad
    para practicar y aprender lo que se te hace más difícil.
* Solamente pueden trabajar en una única historia por vez, no pueden avanzar a
la siguiente sin haber completado la anterior. La historia se completa cuando
se cumplen **todos** sus Criterios de Aceptación + **toda** su Definición
de Terminado.

Para comenzar tendrás que hacer un *fork* y *clonar* este repositorio.

## 5\. Criterios de aceptación mínimos del proyecto
<br>
Una vez que entiendas las necesidades de tus usuarixs, escribe las Historias de
Usuario que representen todo lo que necesitan hacer/ver en la Red Social. Cada
una de tus Historias de Usuario debe tener:

* **Criterios de Aceptación:** todo lo que debe ocurrir para satisfacer las
necesidades del usuario.
* **Definición de terminado:** todos los aspectos técnicos que deben cumplirse
para que, como equipo, sepan que esa historia está terminada y lista
para publicarse. **Todas** tus Historias de Usuario (salvo excepciones), deben
incluir estos aspectos en su Definición de Terminado (más todo lo que
necesiten agregar):
    * Debe ser una SPA.
    * Debe ser *responsive*.
    * Deben haber recibido *code review* de al menos una compañera de otro equipo.
    * Hicieron los *test* unitarios
    * Testearon manualmente buscando errores e imperfecciones simples.
    * Hicieron *pruebas* de usabilidad e incorporaron el *feedback* de los
    usuarios como mejoras.
    * Desplegaron su aplicación y etiquetaron la versión (git tag).

### 5.4 Diseño de la Interfaz de Usuario (prototipo de baja fidelidad)

Debes definir cuál será el flujo que seguirá el usuario dentro de tu aplicación
y, con eso, diseña la Interfaz de Usuario (UI por sus siglas en inglés) que
siga este flujo.

### 5.5 Responsive

Debe verse bien en dispositivos de pantallas grandes
(computadoras/es, laptops, etc.) y pequeñas (*tablets*, celulares, etc.). Te
sugerimos seguir la técnica de <i>`mobile first`</i> (más detalles sobre esta técnica
al final).

### 5.6 Consideraciones del comportamiento de la interfaz de usuario (UI)

Estas consideraciones te ayudarán a escribir las Definiciones de Terminado de
tus H.U.:

#### Creación de cuenta de usuario e inicio de sesión

* *Login* con Firebase:
    * Para el *login* y las publicaciones en el muro puedes utilizar [Firebase](https://firebase.google.com/products/database/)
    * Creación de cuenta de acceso y autenticación con cuenta de correo y
    contraseña, y también con una cuenta de Google.
* Validaciones:
    * Solamente se permite el acceso a usuarios con cuentas válidas.
    * No pueden haber usuarios repetidos.
    * La cuenta de usuario debe ser un correo electrónico válido.
    * Lo que se escriba en el campo (*input*) de contraseña debe ser secreto.
* Comportamiento:
    * Al enviarse el formulario de registro o inicio de sesión, debe validarse.
    * Si hay errores, se deben mostrar mensajes descriptivos para ayudar al
    usuario a corregirlos.

#### Muro/timeline

* Validaciones:
    * Al publicar, se debe validar que exista contenido en el *input*.
* Comportamiento:
    * Al recargar la aplicación, se debe verificar si el usuario está *logueado*
    antes de mostrar contenido.
    * Poder publicar un *post*.
    * Poder dar y quitar *like* a una publicación. Máximo uno por usuario.
    * Llevar un conteo de los *likes*.
    * Poder eliminar un post específico.
    * Pedir confirmación antes de eliminar un *post*.
    * Al dar *click* para editar un *post*, debe cambiar el texto por un *input*
    que permita editar el texto y luego guardar los cambios.
    * Al guardar los cambios debe cambiar de vuelta a un texto normal pero con la
    información editada.
    * Al recargar la página debo de poder ver los textos editados.

### 5.7 Consideraciones técnicas Front-end

* Separar la manipulación del DOM de la lógica (Separación de responsabilidades).
* Contar con múltiples vistas. Para esto, tu aplicación debe ser una
[Single Page Application (SPA)](https://es.wikipedia.org/wiki/Single-page_application)
* Alterar y persistir datos. Los datos que agregues o modifiques deberán
persistir a lo largo de la aplicación. Te recomendamos que uses
[Firebase](https://firebase.google.com/) para eso también.

#### Pruebas unitarias (unit tests)

* Recuerda que no hay un *setup* de **tests** definido, dependerá de
la estructura de tu proyecto. Algo que no debes de olvidar es pensar en éstas
pruebas, te pueden ayudar a definir la estructura y nomenclatura de tu lógica.
* Los tests unitarios deben cubrir un mínimo del 70% de *statements*, *functions*,
*lines*, y *branches*.

### 5.8 Consideraciones técnicas UX

* Hacer al menos 2 entrevistas con usuarios.
* Hacer un prototipo de baja fidelidad.
* Asegurarte de que la implementación en código siga los lineamientos del
diseño.
* Hacer sesiones de *testing de usabilidad* con el producto en HTML.

<br>
## 7\. Entrega

El proyecto será *entregado* subiendo tu código a GitHub (`commit`/`push`) y la
interfaz será desplegada usando GitHub pages u otro servicio de hosting que
puedas haber encontrado en el camino.

- - -

<br>
<br>
