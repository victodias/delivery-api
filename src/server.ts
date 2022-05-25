import express from 'express'
import 'express-async-errors'
import { handleError } from './middlewares/error'
import { clientRoutes, authRoutes } from './routes'

const app = express()

app.use(express.json())

app.use('/clients', clientRoutes)
app.use('/auth', authRoutes)

app.use(handleError)

const SERVER_PORT = 3333

app.listen(SERVER_PORT, () =>
  console.log(`im listening on port ${SERVER_PORT}`)
)
