import { NextFunction, Request, Response } from "express"

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  res
    .status(err.status)
    .json({ error: { message: err.message } })
}
