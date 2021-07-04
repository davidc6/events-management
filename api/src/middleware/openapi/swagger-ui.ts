import swaggerUi from "swagger-ui-express"
import yaml from "js-yaml"
import fs from "fs"
import path from "path"
import { Application } from "express-serve-static-core"

export default (app: Application): void => {
  try {
    const doc = yaml.load(
      /* eslint-disable-next-line security/detect-non-literal-fs-filename -- Safe as no value holds user input */
      fs.readFileSync(
        path.resolve(__dirname, "./openapi.yml"),
        "utf8"
      )
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
