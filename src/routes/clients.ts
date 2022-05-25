import { Router } from 'express'
import { CreateClientController } from '../modules/clients/useCases/createClient/CreateClientController'

const router = Router()

const createClientController = new CreateClientController()

router.post('/', createClientController.handle)

export { router }
