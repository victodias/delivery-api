import { Exception } from '../Exceptions'
import { Request, Response } from 'express'

export const handleError = async (
  error: Error,
  _request: Request,
  response: Response
) => {
  if (error instanceof Exception) {
    return response
      .status(error.statusCode)
      .json({ message: error.message, status: 'error', code: error.statusCode })
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error'
  })
}
