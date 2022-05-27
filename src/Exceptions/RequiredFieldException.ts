import { Exception } from './'

export class RequiredFieldException extends Exception {
  fields: string[]

  constructor(fields: string[]) {
    super()

    const penultPositionArray = fields.length - 1

    const readableFields = fields.reduce(
      (previousField, currentField, index) => {
        const pontuationSignal = index < penultPositionArray ? ',' : ' e'

        return `${previousField}${pontuationSignal} ${currentField}`
      }
    )

    const message =
      fields.length > 1
        ? `Os campos '${readableFields}' são obrigatórios.`
        : `O campo '${readableFields}' é obrigatório.`

    this.fields = fields
    this.message = message
  }
}
