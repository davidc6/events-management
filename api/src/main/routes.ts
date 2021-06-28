import { Application, Request, Response } from "express"

const mountMainRoutes =
  (controller: any) =>
  (app: Application): void => {
    app.get("/", (req: Request, res: Response) => {
      const all = controller.getAll()
      res.status(200).json(all)
    })
  }

export { mountMainRoutes }
