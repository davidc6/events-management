import * as OpenApiValidator from "express-openapi-validator"
import path from "path"

export default OpenApiValidator.middleware({
  apiSpec: `${path.join(__dirname, "openapi.yml")}`,
  validateRequests: false,
  validateResponses: true,
})
