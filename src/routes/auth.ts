import { Router } from 'express'
import { AuthenticateController } from '../modules/auth/useCases/authenticateUser/AuthenticateController'

const router = Router()

const authenticateController = new AuthenticateController()

router.post('/', authenticateController.handle)

export { router }
