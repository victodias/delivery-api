import { Exception } from '../../../Exceptions'

export class ClientAlreadyExistsException extends Exception {
  constructor() {
    super()

    this.message = 'Client already exists.'
    this.statusCode = 400
  }
}
