import express, { Application } from "express"
import { errorHandler } from "./middleware/error"
import { mountMiddleware } from "./middleware"
import { buildCtx } from "./events/context"
import { mountMainRoutes } from "./main/routes"
import { mountEventsRoutes } from "./events/routes"
import { DbType } from "./db/db"

export default (db: DbType): Application => {
  const app = express()
  mountMiddleware(app)

  const controller = buildCtx(db)

  mountMainRoutes(app)
  mountEventsRoutes(app)(controller.forEvents())

  // Global error handler
  app.use(errorHandler)

  return app
}
