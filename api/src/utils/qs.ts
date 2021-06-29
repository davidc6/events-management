import { Query } from "express-serve-static-core"
import validate from "validate.js"

export const getLimit = (qs: Query): string => {
  const defaultLimit = "5"
  if (qs.limit && typeof qs.limit === "string") {
    const n = parseInt(qs.limit, 10)

    return validate.isNumber(n) && n >= 0
      ? n.toString()
      : defaultLimit
  }

  return defaultLimit
}

export const getId = (id: string): string => {
  if (typeof id === "string") {
    const n = parseInt(id, 10)

    if (validate.isNumber(n) && n > 0) {
      return n.toString()
    }
  }

  throw new Error("You must provide a valid event id")
}
