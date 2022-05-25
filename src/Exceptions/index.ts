export class Exception {
  message: string
  statusCode: number

  constructor(message: string = 'Bad request', statusCode: number = 400) {
    this.message = message
    this.statusCode = statusCode
  }
}
