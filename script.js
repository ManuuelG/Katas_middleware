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

//AQUI LOS MIDDLE
//1
app.use((req, res, next) => {
  console.log('Middleware de nivel de aplicación')
  next()
})

//2
app.get('/pets', (req, res, next) => {
  if (!req.body) {
    res.send(422)
  }

  next()
})

//3

app.get('/pets', (req, res, next) => {
  if (res.status(200).json(pets)) {
    next()
  } else {
    res.send(400)
  }
})

//TERMINAN LOS MIDDLE

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
