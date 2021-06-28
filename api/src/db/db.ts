// TODO: This is just dummy data for testing that needs to be swapped for a data storage
import fixture from "./dataset.json"

const fix = [...fixture.data]

// TODO: Update anys
export type DbType = {
  getAll: () => any
  getById: (id: string) => any
  create: (data: any) => void
}

export const setupDb = (config: any) => {
  return {
    query: (q: string) => console.log(q),
    getAll: () => fix,
    getById: (id: string) =>
      fix.find((obj: any) => obj.id == id),
    create: (data: any) => fix.push(data),
  }
}
