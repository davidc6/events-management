import express, { Application } from "express"
import { errorHandler } from "./middleware/error"
import { mountMiddleware } from "./middleware"
import { buildCtx } from "./events/context"
import { mountMainRoutes } from "./main/routes"
import { mountEventsRoutes } from "./events/routes"
import { DbType } from "./db/db"

export default (db: DbType): Application => {
  // App
  const app = express()
  mountMiddleware(app)

  // DB | TODO: Swap for proper db setup
  const controller = buildCtx(db)

  // Mount routes
  mountMainRoutes(app)
  mountEventsRoutes(app)(controller.forEvents())

  // Global error handling
  app.use(errorHandler)

  return app
}
