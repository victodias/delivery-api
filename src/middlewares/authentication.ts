import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'
import { Exception } from '../Exceptions'
import { UnauthorizedException } from '../Exceptions/UnauthorizedException'

interface IPayload {
  sub: string
}

export const ensureAuthentication = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const headerAuthorization = request.headers.authorization

  if (!headerAuthorization) {
    throw new UnauthorizedException()
  }

  const JWT_SECRET = process.env.JWT_SECRET as string

  const [, token] = headerAuthorization.split(' ')

  try {
    const { sub } = verify(token, JWT_SECRET) as IPayload

    request.user_id = sub

    return next()
  } catch (error) {
    throw new Exception('Invalid token!', 401)
  }
}
