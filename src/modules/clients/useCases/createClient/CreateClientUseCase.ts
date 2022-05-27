import { prisma } from '../../../../database/prismaClient'
import { hash } from 'bcrypt'
import { ClientAlreadyExistsException } from '../../Exceptions/ClientAlreadyExistsException'
import { RequiredFieldException } from '../../../../Exceptions/RequiredFieldException'
import { getEmptyRequiredField } from '../../../../helpers/validations'

interface ICreateClient {
  username: string
  password: string
  role: 'user' | 'deliveryman'
}

export class CreateClientUseCase {
  async execute({ username, password, role }: ICreateClient) {
    const clientExists = await prisma.clients.findFirst({
      where: {
        username
      }
    })

    const requestBody: { [key: string]: string } = { username, password, role }

    const emptyField = getEmptyRequiredField(requestBody)

    if (emptyField.length > 0) {
      throw new RequiredFieldException(emptyField)
    }

    if (clientExists) {
      throw new ClientAlreadyExistsException()
    }

    const hashPassword = await hash(password, 10)

    const client = await prisma.clients.create({
      data: {
        username,
        password: hashPassword,
        role
      }
    })
    return client
  }
}
