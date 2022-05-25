export class Exception {
  message: string
  statusCode: number

  constructor(message = 'Bad request', statusCode = 400) {
    this.message = message
    this.statusCode = statusCode
  }
}
