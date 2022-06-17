import express from 'express'
import { router as clientRoutes } from './clients'
import { router as authRoutes } from './auth'
import { router as deliveryRoutes } from './deliveries'
import { ensureAuthentication } from '../middlewares/authentication'

const app = express()

app.use('/clients', clientRoutes)
app.use('/auth', authRoutes)
app.use('/delivery', ensureAuthentication, deliveryRoutes)

export { app as routes }
