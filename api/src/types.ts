import { Query } from "express-serve-static-core"

export type Controller<T> = {
  getAll: (queryString: Query) => Promise<{ data: T[] }>
  getById: (id: string) => Promise<{ data: T }>
  create: (data: T) => void
}
