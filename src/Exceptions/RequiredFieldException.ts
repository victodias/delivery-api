import { Exception } from './'

export class RequiredFieldException extends Exception {
  fields: string[]

  constructor(fields: string[]) {
    super()

    this.fields = fields
    this.message = this.getMessage(fields)
  }

  private getMessage(fields: string[]) {
    const penultPositionArray = fields.length - 1

    const readableFields = fields.reduce(
      (previousField, currentField, index) => {
        const pontuationSignal = index < penultPositionArray ? ',' : ' e'

        return `${previousField}${pontuationSignal} ${currentField}`
      }
    )

    return fields.length > 1
      ? `Os campos '${readableFields}' são obrigatórios.`
      : `O campo '${readableFields}' é obrigatório.`
  }
}
