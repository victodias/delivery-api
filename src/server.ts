import express from 'express'
import 'express-async-errors'
import { routes } from './routes'
import { handleError } from './middlewares/error'

const app = express()

app.use(express.json())

app.use(routes)

app.use(handleError)

const SERVER_PORT = 3333

app.listen(SERVER_PORT, () =>
  console.log(`im listening on port ${SERVER_PORT}`)
)
