import { router as clientRoutes } from './clients'
import { router as authRoutes } from './auth'
import express from 'express'

const app = express()

app.use('/clients', clientRoutes)
app.use('/auth', authRoutes)

export { app as routes }
