import express from 'express'
import 'express-async-errors'
import formData from 'express-form-data'
import { routes } from './routes'
import { handleError } from './middlewares/error'

const app = express()

app.use(express.json())

app.use(routes)

app.use(formData.parse())

// app.post('/upload/formdata', async (request, response) => {
//   try {
//     const { files } = request

//     console.log('**********', { files })

//     return response.status(200).json({ message: 'success' })
//   } catch (error) {
//     throw new Exception('Não sei o que houve!')
//   }
// })

app.use(handleError)

const SERVER_PORT = 3333

app.listen(SERVER_PORT, () =>
  console.log(`im listening on port ${SERVER_PORT}`)
)
