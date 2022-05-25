import { Request, Response } from 'express'
import { AuthenticateUserUseCase } from './AuthenticateUseCase'

export class AuthenticateController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body

    const authenticateUseCase = new AuthenticateUserUseCase()
    const result = await authenticateUseCase.execute({ username, password })

    return response.json(result)
  }
}
