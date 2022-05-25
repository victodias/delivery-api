import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { prisma } from '../../../../database/prismaClient'

interface IAuthenticateUser {
  username: string
  password: string
}

export class AuthenticateUserUseCase {
  async execute({ username, password }: IAuthenticateUser) {
    const clientByUsername = await prisma.clients.findFirst({
      where: {
        username: { equals: username }
      }
    })

    if (!clientByUsername) {
      throw new Error('Username or password invalid!')
    }

    const passwordMatch = await compare(password, clientByUsername.password)

    if (!passwordMatch) {
      throw new Error('Username or password invalid!')
    }

    const JWT_SECRET = 'c1f097af789bdb8d3f23c636a7cf3fdb'

    const token = sign({ username }, JWT_SECRET, {
      subject: clientByUsername.id,
      expiresIn: '1d'
    })

    return token
  }
}
