type ObjectToValidate = Record<string, string | number>

export const getEmptyRequiredField = (
  object: ObjectToValidate,
  nonRequiredFields?: string[]
) => {
  const fieldNames = Object.keys(object)

  const requiredFields = fieldNames.filter(
    (item) => !nonRequiredFields?.includes(item)
  )

  const emptyRequiredFieldsList = requiredFields.filter(
    (objectKey) => !object[objectKey]
  )

  return emptyRequiredFieldsList
}
