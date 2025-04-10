import validate from "validate.js"

export const validateBody = (body: any) => {
  if (!body || !Object.keys(body).length)
    throw new Error("no data received")

  if (typeof body !== "object")
    throw new Error("expecting an object")

  if (Array.isArray(body))
    throw new Error("expecting an object")

  validate.isString(body.name)

  if (!body.name.length)
    throw new Error('"name" field is empty')

  if (!body.name) throw new Error('"name" field is missing')

  if (!body.description)
    throw new Error('"description" field is missing')

  if (!body.date) throw new Error('"date" field is missing')
}
