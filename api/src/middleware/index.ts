import express, { Application } from "express"
import helmet from "helmet"
import cors from "cors"
import openApiValidator from "./openapi"

const mountMiddleware = (app: Application): void => {
  app.use(helmet())
  app.use(cors())
  app.use(express.urlencoded({ extended: false }))
  app.use(express.json())
  app.use(openApiValidator)
}

export { mountMiddleware }
