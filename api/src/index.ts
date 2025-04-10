import express, { Application } from "express"
import { errorHandler } from "./middleware/error"
import { mountMiddleware } from "./middleware"
import { buildCtx } from "./domain/events/context"
import { mountMainRoutes } from "./domain/main/routes"
import { mountEventsRoutes } from "./domain/events/routes"
import { setupDb } from "./db/db"

export default (db: any): Application => {
  const app = express()

  mountMiddleware(app)

  const controller = buildCtx(db)

  mountMainRoutes(app)
  mountEventsRoutes(app)(controller.forEvents())

  // Global error handler
  app.use(errorHandler)

  return app
}
