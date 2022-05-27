import { Router } from 'express'
import { CreateDeliveryController } from '../modules/deliveries/useCases/createDelivery/CreateDeliveryController'

const router = Router()

const createDeliveryController = new CreateDeliveryController()

router.post('/', createDeliveryController.handle)

export { router }
