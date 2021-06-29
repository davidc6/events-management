import { Event, RawData } from "./types"
import format from "date-fns/format"

const toJSON = (data: RawData): Event => {
  return {
    id: String(data.id),
    name: data.name,
    description: data.description,
    date: format(new Date(data.date), "dd-MM-yyyy"),
  }
}

const toDb = (data: any) => {
  return {
    name: data.name,
    description: data.description,
    date: data.date,
  }
}

const listAllEvents = (data: RawData[]): Event[] => {
  return data.map((rawEvent) => {
    return toJSON(rawEvent)
  })
}

export default { toJSON, listAllEvents, toDb }
