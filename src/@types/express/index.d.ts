/* eslint-disable @typescript-eslint/no-explicit-any */
declare namespace Express {
  export interface Request {
    user_id: string
    files: Record<string, any>
  }
}
