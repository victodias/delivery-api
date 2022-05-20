import express from 'express'

const app = express()

app.get('/', (request, response) => {
   response.json({ message: 'Hello world! Aeho!' })
})

const SERVER_PORT = 3333

app.listen(SERVER_PORT, () => console.log(`im listening on port ${SERVER_PORT}`))