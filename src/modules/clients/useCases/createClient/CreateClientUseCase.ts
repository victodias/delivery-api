import { prisma } from '../../../../database/prismaClient'
import { hash } from 'bcrypt'
import { ClientAlreadyExistsException } from '../../Exceptions/ClientAlreadyExistsException'

interface ICreateClient {
  username: string
  password: string
}

export class CreateClientUseCase {
  async execute({ username, password }: ICreateClient) {
    const clientExists = await prisma.clients.findFirst({
      where: {
        username
      }
    })

    if (clientExists) {
      console.log("im here!!!!!!!!!!!!!!!!!")
      throw new ClientAlreadyExistsException()
    }

    const hashPassword = await hash(password, 10)

    const client = await prisma.clients.create({
      data: {
        username,
        password: hashPassword
      }
    })
    return client
  }
}
