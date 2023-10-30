CREAR un repo con:

### ITERACIÓN 1: Destructuring arrays

Archivo: iteracion1.js dentro del repo para ejecutar directamente con `node iteracion1.js` (no hace falta serveidor de express para estos ejercicios)

- [ ] 1.- Dado el objeto **empleados**, extrae la empleada Ana completa.

```
const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];
```

- [ ] 2.- Dado el objeto **empleados**, extrae el email del empleado Luis --> Luis@gmail.com

- [ ] 3.- Usa destructuración para cambiar los valores de a y b;

```
// Inicialmente
let a = 5;
let b = 3;

// Al final
let a = 3;
let b = 5;
```

- [ ] 4.- Dado el objeto **HIGH_TEMPERATURES**

```
const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
};

```

Cambiar las siguientes líneas para guardar mediante destructuración los valores de temperaturas en las variables maximaHoy y maximaManana

```
const maximaHoy = HIGH_TEMPERATURES.today;
const maximaManana = HIGH_TEMPERATURES.tomorrow;
console.log(maximaHoy);
console.log(maximaManana);

```

## ITERACIÓN 2: Promises

Crear server de express dentro del repo con las definiciones de rutas que se piden en los 2 ejercicios.

#### Ejercicio 1:

En este ejercicio utilizaremos la API de [https://dog.ceo/dog-api/](https://dog.ceo/dog-api/). Leyendo su documentación, deberás hacer lo siguiente:

Crea tres definiciones de ruta para hacer fetching a la api y devolver un response con :

- la lista de razas de todos los perros.
- la url de una imagen random de una raza.
- Una lista con todas las imágenes de una raza concreta enviada vía req.params.

Recuerda que para estos ejercicios deberás utilizar node-fetch

### Ejercicio 2:

Para este ejercicio vamos a utilizar la API de usuarios de GitHub, la cual tiene esta URL: [https://api.github.com/users/{username}](https://api.github.com/users/%7Busername%7D). {username} es el nombre del usuario en GitHub, por lo que si quieres buscar a cualquier usuario, solo tienes que ponerlo en la url. Por ejemplo, [https://api.github.com/users/Guille-Rubio](https://api.github.com/users/Guille-Rubio). Si ponéis esta URL en una nueva pestaña del navegador podréis observar qué datos nos devuelve el API.

Lo primero que haremos será crear una definición de ruta en express que admita un input por (req.params) con el nombre de usuario. El usuario escribirá en el input el nombre de usuario de GitHub que quiera buscar. El servidor debe responder con la información siguiente del usuario:

- nombre
- número de repositorios
- avatar (imagen)

## ITERACIÓN 3: middlewares

Crea otro repositorio con un nuevo server de express con el siguiente boilerplate:

## Ejercicio 1:

```javascript
const express = require('express')

const app = express()

const port = 3000

app.use(express.json())

const pets = [
  { name: 'Lassie', type: 'dog' },
  { name: 'Felix', type: 'cat' },
  { name: 'Garfield', type: 'cat' },
  { name: 'Peter', type: 'rabbit' },
]

// Crear middlewares

//1. Primer middleware
// Este primer middleware se encarga de registrar información sobre la solicitud, como el verbo HTTP, el path del endpoint, los datos en el cuerpo de la solicitud y cualquier otra información relevante.

// Es un middleware general que se aplica a todos los endpoint de la aplicación.

// 2. Segundo middleware:

// Este segundo middleware se aplica solo al punto final `POST /pets`. Su función es verificar si se ha enviado información en el cuerpo de la solicitud. Si se encuentra body, se permite continuar con el controlador de la solicitud POST. Si no se encuentra ningún dato en el cuerpo de la solicitud, se corta el ciclo response-response enviando una respuesta con el código de estado 422.

// 3 Tercer middleware:

// El tercer middleware también se aplica solo al punto final `POST /pets`. Su tarea es verificar que el tipo de contenido de la solicitud sea `application/json`. Si el tipo de contenido es correcto, la solicitud continúa al siguiente middleware. Si el tipo de contenido es incorrecto, se detiene enviando una respuesta con el código de estado 400.

app.post('/pets', (req, res) => {
  const pet = req.body

  for (let requiredParameter of ['name', 'type']) {
    if (!pet[requiredParameter]) {
      return res.status(422).send({
        error: `Expected format: { name: <String>, type: <String> }. You're missing a "${requiredParameter}" property.`,
      })
    }
  }

  const { name, type } = pet

  pets.push({ name, type })

  response.status(201).json({ name, type })
})

app.get('/pets', (req, res) => {
  response.status(200).json(pets)
})

app.listen(port, () => {
  console.log(`Middleware exercise server running on http://localhost:${port}`)
})
```

### Ejercicio 2

Extrae los 3 middleware en un custom module e importarlos desde otro archivo en el archivo principal para setearlos en la aplicación con `app.use`.
