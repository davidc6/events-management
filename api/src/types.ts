export type Controller<T> = {
  getAll: () => Promise<{ data: T[] }>
  getById: (id: string) => Promise<{ data: T }>
  create: (data: T) => void
}
