import { Application, Request, Response } from "express"

const mountMainRoutes = (app: Application): void => {
  app.get("/", (req: Request, res: Response): void => {
    const availableRoutes = {
      all_events: "/events",
      event: "/events/{id}",
    }
    res.status(200).json(availableRoutes)
  })
}

export { mountMainRoutes }
