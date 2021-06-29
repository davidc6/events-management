import express from "express"
import { errorHandler } from "./middleware/error"
import { mountMiddleware } from "./middleware"
import { setupDb } from "./db/db"
import { buildCtx } from "./events/context"
import { mountMainRoutes } from "./main/routes"
import { mountEventsRoutes } from "./events/routes"

// App
const app = express()
mountMiddleware(app)

// DB | TODO: Swap for proper db setup
const controller = buildCtx(setupDb())

// Mount routes
mountMainRoutes(app)
mountEventsRoutes(app)(controller.forEvents())

// Global error handling
app.use(errorHandler)

export default app
