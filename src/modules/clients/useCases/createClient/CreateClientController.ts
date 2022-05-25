import { Request, Response } from 'express'
import { Exceptions } from '../../Exceptions'
import { CreateClientUseCase } from './CreateClientUseCase'
// import { ClientAlreadyExistsException } from '../../Exceptions/ClientAlreadyExistsException'

export class CreateClientController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body

    const createClientUseCase = new CreateClientUseCase()
    const result = await createClientUseCase.execute({ username, password })

    return response.json(result)
  }
}
