import {
  Application,
  NextFunction,
  Request,
  Response,
} from "express"
import { Event } from "./types"
import { Controller } from "../types"

const mountEventsRoutes =
  (controller: Controller<Event>) =>
  (app: Application): void => {
    app.get(
      "/events",
      async (
        req: Request,
        res: Response,
        next: NextFunction
      ) => {
        try {
          const response = await controller.getAll()
          res.status(200).json(response)
        } catch (e) {
          e.status = 400
          next(e)
        }
      }
    )

    app.get(
      "/events/:id",
      async (
        req: Request,
        res: Response,
        next: NextFunction
      ) => {
        try {
          // TODO: id validation
          const response = await controller.getById(
            req.params.id
          )
          res.status(200).json(response)
        } catch (e) {
          e.status = 400
          next(e)
        }
      }
    )

    app.post(
      "/events",
      async (
        req: Request,
        res: Response,
        next: NextFunction
      ) => {
        // TODO: Add body validation
        try {
          const response = await controller.create(req.body)
          res.status(201).json(response)
        } catch (e) {
          e.status = 400
          next(e)
        }
      }
    )
  }

export { mountEventsRoutes }
