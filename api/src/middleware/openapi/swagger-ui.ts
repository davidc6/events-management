import swaggerUi from "swagger-ui-express"
import yaml from "js-yaml"
import fs from "fs"
import { Application } from "express-serve-static-core"

export default (app: Application): void => {
  try {
    const doc = yaml.load(
      fs.readFileSync(__dirname + "/openapi.yml", "utf8")
    ) as Record<string, unknown>

    app.use(
      "/api-docs",
      swaggerUi.serve,
      swaggerUi.setup(doc)
    )
  } catch (e) {
    throw e
  }
}
