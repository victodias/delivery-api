import { Exception } from '../Exceptions'

export class UnauthorizedException extends Exception {
  constructor() {
    super()

    this.message = 'Token is missing.'
    this.statusCode = 401
  }
}
